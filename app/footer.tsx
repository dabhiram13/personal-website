'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FOOTER, PERSONAL, SOCIAL_LINKS } from './data'

function TimeOnPage() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      setSeconds((Date.now() - start) / 1000)
    }, 50)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="tabular-nums">
      You&apos;ve been on this page for {seconds.toFixed(2)} seconds
    </span>
  )
}

export function Footer() {
  return (
    <footer className="col-frame border-t border-[var(--line)] bg-[var(--col-bg)]">
      <div className="flex flex-col gap-8 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <Image
              src={PERSONAL.avatars[0]}
              alt={PERSONAL.name}
              width={36}
              height={36}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{PERSONAL.name}</p>
              <p className="text-xs text-[var(--text-faint)]">{PERSONAL.role}</p>
            </div>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-soft)]">
            {FOOTER.tagline}
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {FOOTER.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-sweep text-[13px] text-[var(--text-soft)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">
              Connect
            </p>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep text-[13px] text-[var(--text-soft)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--line)] px-6 py-4">
        <p className="text-xs text-[var(--text-faint)]">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-faint)]">
          {FOOTER.handle}
        </p>
      </div>

      <div className="border-t border-[var(--line)] px-6 py-3 text-[11px] text-[var(--text-faint)]">
        <TimeOnPage />
      </div>
    </footer>
  )
}
