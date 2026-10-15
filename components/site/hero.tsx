'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PERSONAL } from '@/app/data'
import { CompanyLogo } from './company-logo'
import { VerifiedBadge } from './icons'
import { PORTRAITS } from './photo-gallery'

function ClickMeHint() {
  return (
    <div
      className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 flex -translate-x-1/2 items-end gap-1 font-mono text-[10px] leading-none whitespace-nowrap text-[var(--muted-foreground)]/60 transition-opacity duration-500 motion-reduce:transition-none"
      style={{ fontFamily: 'var(--font-geist-mono), ui-monospace, monospace' }}
    >
      click me
      <svg
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3 translate-y-0.5"
      >
        <path d="M2 2c5 0 8 3 8 10" />
        <path d="M6.5 8.5 10 12.5 13 8" />
      </svg>
    </div>
  )
}

export function Avatar() {
  const [index, setIndex] = useState(0)
  const photo = PORTRAITS[index]

  return (
    <div className="relative shrink-0">
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
        <h1 className="font-space text-xl font-medium tracking-tight sm:text-xl">
          {PERSONAL.name}
        </h1>
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
