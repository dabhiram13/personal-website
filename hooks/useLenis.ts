'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
    })
    lenisRef.current = lenis

    let frame: number
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenisRef.current = null
      lenis.destroy()
    }
  }, [])

  // Keep Lenis in sync with navigation without overriding section links.
  useEffect(() => {
    const syncScroll = () => {
      const target = window.location.hash
        ? document.getElementById(window.location.hash.slice(1))
        : null
      lenisRef.current?.resize()
      lenisRef.current?.scrollTo(target ?? 0, {
        immediate: true,
        offset: target ? -88 : 0,
      })
    }
    const frame = requestAnimationFrame(syncScroll)
    window.addEventListener('hashchange', syncScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', syncScroll)
    }
  }, [pathname])
}
