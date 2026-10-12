"use client"

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
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
