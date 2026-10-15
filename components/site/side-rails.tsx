'use client'

import { motion } from 'motion/react'
import { InstagramIcon, PhoneIcon } from 'lucide-react'
import { PERSONAL, SOCIAL_LINKS } from '@/app/data'
import { GitHubIcon, LinkedInIcon, XIcon } from './icons'

const ICONS: Record<string, React.ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
}

export function SideRails() {
  return (
    <>
      <motion.nav
        aria-label="Social links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="fixed top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-1 xl:flex"
        style={{ left: 'calc(50% - 636px)' }}
      >
        {SOCIAL_LINKS.map(({ label, href, icon }) => {
          const Icon = ICONS[icon]
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-sfx-hover="tick"
              className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)]/70 transition-[color,translate] duration-200 hover:-translate-y-0.5 hover:text-[var(--foreground)]"
            >
              <Icon className="size-4" />
            </a>
          )
        })}
        <a
          href={`tel:${PERSONAL.phone.replace(/[^\d+]/g, '')}`}
          aria-label="Call Sri Durga Abhiram"
          data-sfx="tap"
          className="mt-1 flex size-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)]/70 transition-colors hover:text-[var(--foreground)]"
        >
          <PhoneIcon className="size-4" />
        </a>
        <span aria-hidden="true" className="h-14 w-px bg-[var(--border)]" />
      </motion.nav>
      <motion.a
        href={`mailto:${PERSONAL.email}`}
        aria-label={`Email ${PERSONAL.email}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        data-sfx-hover="tick"
        className="fixed top-1/2 z-20 hidden -translate-y-1/2 rounded-sm font-mono text-[11px] tracking-[0.18em] text-[var(--muted-foreground)]/70 lowercase transition-[color,translate] duration-200 hover:-translate-y-[calc(50%+2px)] hover:text-[var(--foreground)] xl:block"
        style={{ right: 'calc(50% - 629px)', writingMode: 'vertical-rl' }}
      >
        {PERSONAL.email}
      </motion.a>
    </>
  )
}
