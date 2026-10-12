'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import {
  ArrowUpRightIcon,
  MoonIcon,
  SunIcon,
  Volume2Icon,
  VolumeXIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover'
import { GitHubIcon, LinkedInIcon } from './icons'
import { useInterfaceSound } from './sound'
import { SOCIAL_LINKS } from '@/app/data'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guestbook', href: '/guestbook' },
]

function GitHubPopover({ link }: { link: string }) {
  return (
    <PopoverRoot>
      <PopoverTrigger className="!h-auto !border-0 !bg-transparent !p-1.5 !text-[var(--text-faint)] transition-colors hover:!text-[var(--text)]">
        <GitHubIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="!w-56">
        <div className="p-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="flex-1">@dabhiram13</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-zinc-400" />
          </a>
          <a
            href={`${link}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <span className="w-4" />
            <span className="flex-1">Repositories</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </div>
      </PopoverContent>
    </PopoverRoot>
  )
}

export function Nav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { enabled, toggle } = useInterfaceSound()
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

        {github && <GitHubPopover link={github.link} />}
        {linkedin && (
          <a
            href={linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
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
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
