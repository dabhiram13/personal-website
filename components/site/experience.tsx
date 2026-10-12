'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronDownIcon, ArrowUpRightIcon } from 'lucide-react'
import { useState } from 'react'
import type { Experience } from '@/app/data'
import { CompanyLogo } from '@/components/site/company-logo'
import { SkillBadge } from '@/components/site/skill-badge'

function highlightedBullet(text: string, highlights: Experience['highlights']) {
  const terms = (highlights ?? [])
    .filter((term) => text.includes(term))
    .sort((a, b) => b.length - a.length)
  if (!terms.length) return text

  const escapeRegex = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const matches = new RegExp(`(${terms.map(escapeRegex).join('|')})`, 'g')

  return text.split(matches).map((part, index) => {
    if (!terms.includes(part)) return part
    return (
      <strong
        key={`${part}-${index}`}
        data-sfx-hover="whisper"
        className="font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--brand)]"
      >
        {part}
      </strong>
    )
  })
}

export function ExperienceItem({
  job,
  defaultOpen = false,
}: {
  job: Experience
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <article className="group overflow-hidden rounded-xl border border-[var(--border)]/70 bg-[var(--card)]/50">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          data-sfx="expand"
          onClick={() => {
            setOpen((value) => !value)
          }}
          className="flex min-h-[68px] w-full items-center justify-between gap-3 px-3.5 py-3.5 text-left text-sm font-medium transition-colors hover:bg-[var(--muted)]/50"
        >
          <span className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] p-1">
              <CompanyLogo
                src={job.logo}
                alt={`${job.company} logo`}
                width={24}
                height={24}
                className="size-full transition-transform duration-200 group-hover:scale-105"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm leading-tight font-semibold">
                {job.company}
              </span>
              <span className="mt-0.5 block truncate text-xs font-normal text-[var(--muted-foreground)]">
                {job.title}
              </span>
              <span className="mt-1 flex items-center gap-1.5 font-mono text-[10px] leading-none text-[var(--muted-foreground)] tabular-nums sm:hidden">
                {job.end === 'Present' && (
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                )}
                {job.start} – {job.end}
              </span>
            </span>
          </span>
          <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)] tabular-nums sm:flex">
            {job.end === 'Present' && (
              <span className="size-1.5 rounded-full bg-emerald-500" />
            )}
            {job.start} – {job.end}
          </span>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted-foreground)] transition-colors group-hover:bg-[var(--muted)]">
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDownIcon className="size-4" />
            </motion.span>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
          >
            <div className="border-t border-[var(--border)] px-4 pt-2.5 pb-3">
              <ul className="space-y-1.5 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-[var(--muted-foreground)]/60" />
                    <span>{highlightedBullet(bullet, job.highlights)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tech.map((tech) => (
                  <SkillBadge key={tech} name={tech} />
                ))}
              </div>
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  data-sfx="tap"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  {job.linkLabel}
                  <ArrowUpRightIcon className="size-3" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
