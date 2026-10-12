'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { PERSONAL } from '@/app/data'
import { VerifiedBadge } from './icons'
import { useInterfaceSound } from './sound'
import { HaloBadge } from '@/components/ui/halo-badge'

function ClickMeHint() {
  return (
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 select-none">
      <svg
        width="72"
        height="28"
        viewBox="0 0 72 28"
        fill="none"
        className="text-[var(--text-faint)]"
      >
        <path
          d="M8 4 C 20 14, 48 16, 62 24"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <path
          d="M56 20 L63 25 L58 27"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute -top-4 left-1 rotate-[-8deg] text-[11px] italic text-[var(--text-faint)]">
        click me
      </span>
    </div>
  )
}

export function Avatar() {
  const [index, setIndex] = useState(0)
  const [spin, setSpin] = useState(0)
  const { playClick } = useInterfaceSound()
  const avatars = PERSONAL.avatars

  const next = () => {
    playClick()
    setSpin((s) => s + 360)
    if (avatars.length > 1) setIndex((i) => (i + 1) % avatars.length)
  }

  return (
    <div className="relative">
      <ClickMeHint />
      <button
        type="button"
        onClick={next}
        aria-label={`Photo of ${PERSONAL.name}. Show another photo`}
        className="relative block cursor-pointer"
      >
        <motion.div
          animate={{ rotate: spin }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="relative h-[68px] w-[68px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm sm:h-[76px] sm:w-[76px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full"
            >
              <Image
                src={avatars[index]}
                alt={`Photo of ${PERSONAL.name}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  )
}

export function HeroHeading() {
  return (
    <div className="ml-5">
      <div className="flex items-center gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-[26px]">
          {PERSONAL.name}
        </h1>
        {PERSONAL.verified && <VerifiedBadge className="h-5 w-5" />}
      </div>
      <p className="mt-0.5 text-sm text-[var(--text-soft)]">
        {PERSONAL.age ? `${PERSONAL.age}y/o ` : ''}
        {PERSONAL.tagline}
      </p>
      {PERSONAL.openToWork && (
        <HaloBadge live className="mt-2" variant="secondary">
          Open to work
        </HaloBadge>
      )}
    </div>
  )
}
