'use client'

import { motion } from 'motion/react'
import { SOCIAL_LINKS, PERSONAL } from '@/app/data'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from './icons'
import { CalendarIcon } from 'lucide-react'

const ICONS: Record<string, React.ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  calendar: CalendarIcon,
  discord: CalendarIcon,
}

export function SideRails() {
  return (
    <>
      {/* Left vertical social rail */}
      <motion.nav
        aria-label="Social links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      >
        {SOCIAL_LINKS.map((link) => {
          const Icon = ICONS[link.icon]
          return (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-lg p-2 text-[var(--text-faint)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--text)]"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          )
        })}
      </motion.nav>

      {/* Right vertical email */}
      <motion.a
        href={`mailto:${PERSONAL.email}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 text-[11px] tracking-[0.2em] text-[var(--text-faint)] transition-colors hover:text-[var(--text)] lg:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        {PERSONAL.email}
      </motion.a>
    </>
  )
}
