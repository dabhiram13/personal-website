import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, PERSONAL, SOCIAL_LINKS } from './data'

export function Footer() {
  return (
    <footer className="mt-10 mb-4">
      <div className="flex flex-col justify-between gap-8 px-1 pb-8 sm:flex-row sm:gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <Image
              src={PERSONAL.avatar}
              alt={PERSONAL.name}
              width={40}
              height={40}
              className="size-10 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{PERSONAL.name}</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                {PERSONAL.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[var(--muted-foreground)]">
            if you came this far, say hi or something.
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
              Explore
            </p>
            <ul className="mt-3 space-y-1.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-sfx="soft"
                    className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
              Connect
            </p>
            <ul className="mt-3 space-y-1.5">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-sfx-hover="tick"
                    className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border)] px-1 py-3">
        <p className="text-[10px] text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
        <p className="font-mono text-[9px] tracking-[0.22em] text-[var(--muted-foreground)] uppercase">
          dabhiram13
        </p>
      </div>
    </footer>
  )
}
