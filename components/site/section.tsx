'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 text-xl font-semibold tracking-tight">
      {children}
      <span className="text-blue-500">.</span>
    </h2>
  )
}

export function Divider() {
  return <div className="hatch h-6 border-y border-[var(--line)]" />
}
