'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { PERSONAL } from '@/app/data'
import { VerifiedBadge } from './icons'
import { useInterfaceSound } from './sound'

function ClickMeHint() {
  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 select-none">
      <span className="absolute -top-3 left-1 rotate-[-8deg] text-[10px] text-[var(--muted-foreground)] italic">
        click me
      </span>
      <svg
        width="72"
        height="24"
        viewBox="0 0 72 24"
        fill="none"
        className="text-[var(--muted-foreground)]"
      >
        <path
          d="M8 3C20 13 48 15 62 22"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <path
          d="m56 18 7 5-5 2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function Avatar() {
  const [turn, setTurn] = useState(0)
  const { play } = useInterfaceSound()

  return (
    <div className="relative">
      <ClickMeHint />
      <motion.button
        type="button"
        aria-label={`Photo of ${PERSONAL.name}. Show another photo`}
        data-sfx="pop"
        onClick={() => {
          setTurn((value) => value + 360)
          play('pop')
        }}
        animate={{ rotate: turn }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
        className="relative block size-16 cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] ring-4 shadow-lg ring-[var(--muted)] transition-transform duration-200 hover:scale-[1.03] sm:size-20 md:size-24"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={turn}
            initial={{ opacity: 0.8, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={PERSONAL.avatar}
              alt={`Photo of ${PERSONAL.name}`}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export function HeroHeading() {
  return (
    <div className="ml-4 min-w-0">
      <div className="flex items-center gap-1.5">
        <h1 className="font-space text-xl font-medium tracking-tight sm:text-xl">
          {PERSONAL.name}
        </h1>
        <VerifiedBadge className="size-4" />
      </div>
      <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
        {PERSONAL.tagline}
      </p>
    </div>
  )
}
