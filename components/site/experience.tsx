'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronDownIcon, ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Experience } from '@/app/data'

function Logo({ logo, name }: { logo?: string; name: string }) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg border border-[var(--line)] object-cover"
      />
    )
  }
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--card)] text-xs font-semibold text-[var(--text-soft)]">
      {name.charAt(0)}
    </span>
  )
}

export function ExperienceItem({
  job,
  defaultOpen = false,
}: {
  job: Experience
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const hasDetails = (job.bullets?.length ?? 0) > 0 || (job.tech?.length ?? 0) > 0

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)]/60">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => hasDetails && setOpen((v) => !v)}
        className={cn(
          'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors',
          hasDetails && 'hover:bg-[var(--card-hover)]/60'
        )}
      >
        <Logo logo={job.logo} name={job.company} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{job.company}</p>
          <p className="truncate text-xs text-[var(--text-faint)]">{job.title}</p>
        </div>
        <span className="flex items-center gap-2 text-xs text-[var(--text-faint)]">
          {job.end === 'Present' && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          )}
          {job.start} – {job.end}
        </span>
        {hasDetails && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDownIcon className="h-4 w-4 text-[var(--text-faint)]" />
          </motion.span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="border-t border-[var(--line)] px-4 py-3">
              {job.bullets && job.bullets.length > 0 && (
                <ul className="space-y-1.5 text-[13px] leading-relaxed text-[var(--text-soft)]">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--text-faint)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {job.tech && job.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--line)] bg-[var(--col-bg)] px-2 py-0.5 text-[11px] text-[var(--text-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep mt-3 inline-flex items-center gap-1 text-xs text-[var(--text-soft)] hover:text-[var(--text)]"
                >
                  {job.linkLabel || job.link.replace(/^https?:\/\//, '')}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
