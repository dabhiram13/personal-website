'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import {
  BookOpenIcon,
  Code2Icon,
  HouseIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserRoundIcon,
  Volume2Icon,
  VolumeXIcon,
  XIcon as CloseIcon,
} from 'lucide-react'
import { EMAIL, PERSONAL, SOCIAL_LINKS } from '@/app/data'
import { GitHubIcon, LinkedInIcon, XIcon } from './icons'
import { useInterfaceSound } from './sound'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guestbook', href: '/guestbook' },
]

const NAV_ICONS: Record<string, React.ElementType> = {
  Home: HouseIcon,
  About: UserRoundIcon,
  Projects: Code2Icon,
  Blog: BookOpenIcon,
  Guestbook: MessageCircleIcon,
}

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
}

function GitHubMenu() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [])

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="GitHub accounts"
        aria-expanded={open}
        title="GitHub"
        data-sfx="soft"
        onClick={() => setOpen((value) => !value)}
        className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)]/80 transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
      >
        <GitHubIcon className="size-4" />
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="GitHub account"
          className="absolute top-full right-0 z-50 mt-2 w-60 rounded-xl border border-[var(--border)] bg-[var(--popover)] p-2 shadow-xl"
        >
          <p className="px-2 py-1 text-[10px] font-medium tracking-wider text-[var(--muted-foreground)] uppercase">
            GitHub
          </p>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            data-sfx="tap"
            className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] transition-colors hover:bg-[var(--muted)]"
          >
            <GitHubIcon className="size-4 shrink-0" />
            <span className="min-w-0 flex-1">
              <span className="block font-medium">@dabhiram13</span>
              <span className="block text-xs text-[var(--muted-foreground)]">
                GitHub profile
              </span>
            </span>
            <span className="rounded-full border border-[var(--border)] px-1.5 py-0.5 text-[9px] text-[var(--muted-foreground)]">
              Profile
            </span>
          </a>
        </div>
      )}
    </div>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [])

  return (
    <div ref={root}>
      <button
        type="button"
        title="Menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        data-sfx="toggle"
        onClick={() => setOpen((value) => !value)}
        className={`flex size-8 items-center justify-center transition-colors ${
          open
            ? 'rounded-full bg-[var(--foreground)] text-[var(--background)]'
            : 'rounded-md text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]'
        }`}
      >
        {open ? (
          <CloseIcon className="size-4" />
        ) : (
          <MenuIcon className="size-4" />
        )}
      </button>
      {open && (
        <div
          id="mobile-navigation"
          className="absolute top-16 right-6 z-50 w-[246px] rounded-2xl border border-[var(--border)] bg-[var(--popover)]/95 p-2 shadow-xl backdrop-blur-md sm:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {LINKS.map(({ label, href }) => {
              const active =
                href === '/' ? pathname === '/' : pathname.startsWith(href)
              const Icon = NAV_ICONS[label]
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  data-sfx="soft"
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? 'font-medium text-[var(--foreground)]'
                      : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="my-1.5 border-t border-[var(--border)]" />
          <nav
            aria-label="Social links"
            className="flex items-center justify-between px-1 py-1"
          >
            {SOCIAL_LINKS.map(({ label, href, icon }) => {
              const Icon = SOCIAL_ICONS[icon]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  data-sfx="tap"
                  className="flex size-8 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              title="Email"
              data-sfx="tap"
              className="flex size-8 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              <MailIcon className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}

export function Nav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { isMuted, setMuted } = useInterfaceSound()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 justify-center">
      <div className="relative flex h-14 w-full max-w-3xl items-center justify-end border-b border-[var(--border)] px-3">
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 sm:flex"
        >
          {LINKS.map(({ label, href }) => {
            const active =
              href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                title={label}
                data-sfx="soft"
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-center rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'font-medium text-[var(--foreground)]'
                    : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)]/70 hover:text-[var(--foreground)]'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <span
            aria-hidden="true"
            className="mx-1 h-4 w-px bg-[var(--border)]"
          />
          <GitHubMenu />
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            data-sfx-hover="tick"
            className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <span
            aria-hidden="true"
            className="mx-1 h-4 w-px bg-[var(--border)]"
          />
          <button
            type="button"
            aria-label="Interface sounds"
            title={isMuted ? 'Turn sounds on' : 'Turn sounds off'}
            data-sfx="toggle"
            onClick={() => setMuted(!isMuted)}
            className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {isMuted ? (
              <VolumeXIcon className="size-4" />
            ) : (
              <Volume2Icon className="size-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
            data-sfx="toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {mounted &&
              (theme === 'dark' ? (
                <SunIcon className="size-4" />
              ) : (
                <MoonIcon className="size-4" />
              ))}
          </button>
        </nav>
        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            aria-label="Interface sounds"
            title={isMuted ? 'Turn sounds on' : 'Turn sounds off'}
            aria-pressed={!isMuted}
            data-sfx="toggle"
            onClick={() => setMuted(!isMuted)}
            className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {isMuted ? (
              <VolumeXIcon className="size-4" />
            ) : (
              <Volume2Icon className="size-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
            data-sfx="toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex size-8 items-center justify-center rounded-md text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {mounted &&
              (theme === 'dark' ? (
                <SunIcon className="size-4" />
              ) : (
                <MoonIcon className="size-4" />
              ))}
          </button>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  )
}
