'use client'

import { createContext, useCallback, useContext, useRef, useState } from 'react'

type SoundContextValue = {
  enabled: boolean
  toggle: () => void
  playClick: () => void
}

const SoundContext = createContext<SoundContextValue>({
  enabled: true,
  toggle: () => {},
  playClick: () => {},
})

export function useInterfaceSound() {
  return useContext(SoundContext)
}

export function InterfaceSoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true)
  const ctxRef = useRef<AudioContext | null>(null)

  const playClick = useCallback(() => {
    if (!enabled) return
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)()
      }
      const ctx = ctxRef.current
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(2200, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.05)
      gain.gain.setValueAtTime(0.04, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.07)
    } catch {
      // audio unsupported, ignore
    }
  }, [enabled])

  const toggle = useCallback(() => setEnabled((v) => !v), [])

  return (
    <SoundContext.Provider value={{ enabled, toggle, playClick }}>
      {children}
    </SoundContext.Provider>
  )
}
