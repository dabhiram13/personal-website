'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

type SoundName =
  | 'hover'
  | 'expand'
  | 'tick'
  | 'whisper'
  | 'soft'
  | 'tap'
  | 'toggle'
  | 'snap'
  | 'open'
  | 'pop'

type SoundContextValue = {
  isMuted: boolean
  setMuted: (muted: boolean) => void
  play: (name: SoundName) => void
}

const SoundContext = createContext<SoundContextValue>({
  isMuted: false,
  setMuted: () => {},
  play: () => {},
})

const SOUND_SHAPES: Record<
  SoundName,
  {
    start: number
    end: number
    duration: number
    gain: number
    glide?: boolean
  }
> = {
  hover: { start: 1900, end: 1100, duration: 0.035, gain: 0.085 },
  expand: { start: 1180, end: 720, duration: 0.05, gain: 0.09 },
  tick: { start: 2500, end: 1500, duration: 0.022, gain: 0.075 },
  whisper: { start: 1650, end: 980, duration: 0.04, gain: 0.05 },
  soft: { start: 1450, end: 830, duration: 0.045, gain: 0.09 },
  tap: { start: 1700, end: 780, duration: 0.055, gain: 0.12 },
  toggle: { start: 1050, end: 640, duration: 0.065, gain: 0.1 },
  snap: { start: 2300, end: 1350, duration: 0.04, gain: 0.12 },
  open: { start: 900, end: 620, duration: 0.065, gain: 0.09 },
  pop: { start: 392, end: 587.33, duration: 0.2, gain: 0.11, glide: true },
}

const INTERACTIVE =
  '[data-sfx], [data-sfx-hover], a[href], button, [role="button"], input, textarea, select'

export function useInterfaceSound() {
  return useContext(SoundContext)
}

export function InterfaceSoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMutedState] = useState(false)
  const audioRef = useRef<AudioContext | null>(null)
  const recentRef = useRef(new Map<string, number>())

  useEffect(() => {
    try {
      setIsMutedState(localStorage.getItem('sfx-muted') === '1')
    } catch {
      // Use sound by default when browser storage is unavailable.
    }
  }, [])

  const setMuted = useCallback((muted: boolean) => {
    setIsMutedState(muted)
    try {
      if (muted) {
        localStorage.setItem('sfx-muted', '1')
      } else {
        localStorage.removeItem('sfx-muted')
      }
    } catch {
      // Muting still applies for this page view.
    }
  }, [])

  const getAudio = useCallback(() => {
    if (typeof window === 'undefined') return null
    try {
      audioRef.current ??= new window.AudioContext()
      if (audioRef.current.state === 'suspended') void audioRef.current.resume()
      return audioRef.current
    } catch {
      return null
    }
  }, [])

  const play = useCallback(
    (name: SoundName) => {
      if (isMuted) return
      const now = performance.now()
      if (now - (recentRef.current.get(name) ?? -Infinity) < 70) return
      recentRef.current.set(name, now)

      const context = getAudio()
      if (!context) return
      const shape = SOUND_SHAPES[name]
      const at = context.currentTime
      const oscillator = context.createOscillator()
      const envelope = context.createGain()
      const master = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(shape.start, at)
      oscillator.frequency.exponentialRampToValueAtTime(
        shape.end,
        at + shape.duration,
      )
      envelope.gain.setValueAtTime(0.0001, at)
      envelope.gain.exponentialRampToValueAtTime(shape.gain, at + 0.004)
      envelope.gain.exponentialRampToValueAtTime(0.0001, at + shape.duration)
      master.gain.value = 0.3
      oscillator.connect(envelope)
      envelope.connect(master)
      master.connect(context.destination)
      oscillator.start(at)
      oscillator.stop(at + shape.duration + 0.01)
    },
    [getAudio, isMuted],
  )

  useEffect(() => {
    const handleHover = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        INTERACTIVE,
      )
      if (!target || target.dataset.sound === 'off') return
      if (target.contains(event.relatedTarget as Node | null)) return
      const name = (target.dataset.sfxHover ||
        (target.tagName === 'A' ? 'tick' : 'whisper')) as SoundName
      play(name in SOUND_SHAPES ? name : 'hover')
    }
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        INTERACTIVE,
      )
      if (!target || target.dataset.sound === 'off') return
      const name = (target.dataset.sfx || 'tap') as SoundName
      play(name in SOUND_SHAPES ? name : 'tap')
    }
    const unlock = () => void getAudio()
    document.addEventListener('pointerover', handleHover)
    document.addEventListener('click', handleClick)
    document.addEventListener('pointerdown', unlock, { once: true })
    document.addEventListener('keydown', unlock, { once: true })
    return () => {
      document.removeEventListener('pointerover', handleHover)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('pointerdown', unlock)
      document.removeEventListener('keydown', unlock)
    }
  }, [getAudio, play])

  return (
    <SoundContext.Provider value={{ isMuted, setMuted, play }}>
      {children}
    </SoundContext.Provider>
  )
}
