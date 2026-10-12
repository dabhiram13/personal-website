'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type SoundContextValue = {
  enabled: boolean
  toggle: () => void
  playClick: () => void
  playHover: () => void
}

const SoundContext = createContext<SoundContextValue>({
  enabled: true,
  toggle: () => {},
  playClick: () => {},
  playHover: () => {},
})

export function useInterfaceSound() {
  return useContext(SoundContext)
}

const INTERACTIVE_SELECTOR =
  'a[href], button, [role="button"], input[type="checkbox"], input[type="radio"], [data-sound]'

export function InterfaceSoundProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [enabled, setEnabled] = useState(true)
  const ctxRef = useRef<AudioContext | null>(null)
  const lastHoverRef = useRef<{ el: EventTarget | null; t: number }>({
    el: null,
    t: 0,
  })

  const getCtx = useCallback(() => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)()
      }
      if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
      return ctxRef.current
    } catch {
      return null
    }
  }, [])

  const blip = useCallback(
    (freq: number, endFreq: number, duration: number, gain: number) => {
      const ctx = getCtx()
      if (!ctx) return
      try {
        const osc = ctx.createOscillator()
        const g = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(
          endFreq,
          ctx.currentTime + duration
        )
        g.gain.setValueAtTime(gain, ctx.currentTime)
        g.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + duration
        )
        osc.connect(g)
        g.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + duration + 0.01)
      } catch {
        // audio unsupported, ignore
      }
    },
    [getCtx]
  )

  const playClick = useCallback(() => {
    if (enabled) blip(2200, 900, 0.06, 0.04)
  }, [enabled, blip])

  const playHover = useCallback(() => {
    if (enabled) blip(3400, 2800, 0.035, 0.012)
  }, [enabled, blip])

  const toggle = useCallback(() => setEnabled((v) => !v), [])

  // Global delegation: soft tick on hover over interactive elements,
  // click sound on activation. Per-element cooldown keeps it subtle.
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR)
      if (!target || (target as HTMLElement).dataset.sound === 'off') return
      const now = performance.now()
      const last = lastHoverRef.current
      if (last.el === target && now - last.t < 400) return
      if (now - last.t < 90) return
      lastHoverRef.current = { el: target, t: now }
      playHover()
    }
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR)
      if (!target || (target as HTMLElement).dataset.sound === 'off') return
      playClick()
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('click', onClick)
    }
  }, [playHover, playClick])

  return (
    <SoundContext.Provider value={{ enabled, toggle, playClick, playHover }}>
      {children}
    </SoundContext.Provider>
  )
}
