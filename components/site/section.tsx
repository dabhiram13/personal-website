'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-space mb-5 flex items-center text-xl font-medium tracking-tight">
      {children}
      <span className="ml-1 inline text-2xl text-[var(--brand)]">.</span>
    </h2>
  )
}

export function Divider() {
  return (
    <div
      aria-hidden="true"
      className="reference-hatch -mx-6 h-5 border-y border-[var(--border)] bg-[var(--canvas)]"
    />
  )
}
