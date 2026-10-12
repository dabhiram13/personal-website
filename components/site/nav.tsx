'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { MoonIcon, SunIcon, Volume2Icon, VolumeXIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { GitHubIcon, LinkedInIcon } from './icons'
import { useInterfaceSound } from './sound'
import { SOCIAL_LINKS, PERSONAL } from '@/app/data'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guestbook', href: '/guestbook' },
]

export function Nav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { enabled, toggle, playClick } = useInterfaceSound()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const github = SOCIAL_LINKS.find((l) => l.icon === 'github')
  const linkedin = SOCIAL_LINKS.find((l) => l.icon === 'linkedin')

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="col-frame sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--col-bg)]/90 backdrop-blur-md"
    >
      <nav className="flex h-11 items-center justify-center gap-0.5 px-2 text-[13px] sm:gap-1">
        {NAV_LINKS.map((link) => {
          const active =
            link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              onClick={playClick}
              className={cn(
                'relative rounded-md px-2 py-1 font-medium transition-colors duration-150 sm:px-2.5',
                active
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-faint)] hover:text-[var(--text)]'
              )}
            >
              {link.label}
              {active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-blue-500"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </Link>
          )
        })}

        <span className="mx-1.5 h-4 w-px bg-[var(--line)]" />

        {github && (
          <a
            href={github.link}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            onClick={playClick}
            className="rounded-md p-1.5 text-[var(--text-faint)] transition-colors hover:text-[var(--text)]"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            onClick={playClick}
            className="rounded-md p-1.5 text-[var(--text-faint)] transition-colors hover:text-[var(--text)]"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        )}

        <button
          type="button"
          onClick={toggle}
          title={enabled ? 'Turn sounds off' : 'Turn sounds on'}
          className="rounded-md p-1.5 text-[var(--text-faint)] transition-colors hover:text-[var(--text)]"
        >
          {enabled ? (
            <Volume2Icon className="h-4 w-4" />
          ) : (
            <VolumeXIcon className="h-4 w-4" />
          )}
        </button>

        {mounted && (
          <button
            type="button"
            onClick={() => {
              playClick()
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
            title="Toggle theme"
            className="rounded-md p-1.5 text-[var(--text-faint)] transition-colors hover:text-[var(--text)]"
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )}
            </motion.span>
          </button>
        )}
      </nav>
    </motion.header>
  )
}
