'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PERSONAL } from '@/app/data'
import { CompanyLogo } from './company-logo'
import { VerifiedBadge } from './icons'
import { PORTRAITS } from './photo-gallery'

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
  const [index, setIndex] = useState(0)
  const photo = PORTRAITS[index]

  return (
    <div className="relative">
      <ClickMeHint />
      <button
        type="button"
        aria-label={`Show next portrait of Sri. Photo ${index + 1} of ${PORTRAITS.length}`}
        data-sfx="pop"
        onClick={() => {
          setIndex((value) => (value + 1) % PORTRAITS.length)
        }}
        className="relative block size-16 cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] ring-4 shadow-lg ring-[var(--muted)] transition-transform duration-200 hover:scale-[1.03] sm:size-20 md:size-24"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="96px"
          className="object-cover"
          style={{ objectPosition: photo.avatarPosition }}
        />
      </button>
    </div>
  )
}

export function HeroHeading() {
  return (
    <div className="ml-4 min-w-0">
      <div className="flex items-center gap-1.5">
        <p className="font-space text-xl font-medium tracking-tight sm:text-xl">
          {PERSONAL.name}
        </p>
        <VerifiedBadge className="size-4" />
      </div>
      <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
        <span>{PERSONAL.tagline}</span>
        <span aria-hidden="true" className="font-mono text-xs">
          @
        </span>
        <a
          href={PERSONAL.currentCompanyUrl}
          target="_blank"
          rel="noreferrer"
          data-sfx-hover="whisper"
          className="inline-flex items-center gap-1.5 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
        >
          <CompanyLogo
            src={PERSONAL.currentCompanyLogo}
            alt=""
            width={20}
            height={16}
          />
          EverestLabs
        </a>
      </p>
    </div>
  )
}
