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

  // Next.js preserves scroll across client-side nav, but Lenis holds the
  // virtual offset — sync it to top so new pages start at scrollY 0 and
  // whileInView reveals fire.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    lenisRef.current?.resize()
  }, [pathname])
}
