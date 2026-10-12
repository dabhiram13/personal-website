import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/site/section'
import { GuestbookForm } from '@/components/site/guestbook-form'

export const metadata: Metadata = { title: 'Guestbook' }

export default function Guestbook() {
  return (
    <Section>
      <nav
        aria-label="Breadcrumb"
        className="mb-5 flex items-center gap-2 text-[10px] text-[var(--muted-foreground)]"
      >
        <Link
          href="/"
          data-sfx="soft"
          className="hover:text-[var(--foreground)]"
        >
          Home
        </Link>
        <span>/</span>
        <span>Guestbook</span>
      </nav>
      <h1 className="font-space text-2xl font-medium tracking-tight">
        Guestbook<span className="text-[var(--brand)]">.</span>
      </h1>
      <p className="mt-1 text-xs text-[var(--muted-foreground)]">
        Say hi, leave a trace, or drop a tiny note from your corner of the
        internet.
      </p>
      <p className="mt-2 text-[10px] text-[var(--muted-foreground)]">
        Notes are saved in this browser only.
      </p>
      <GuestbookForm />
    </Section>
  )
}
