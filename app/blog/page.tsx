import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/site/section'

export const metadata: Metadata = { title: 'Blog' }

export default function Blog() {
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
        <span>Blog</span>
      </nav>
      <h1 className="font-space text-2xl font-medium tracking-tight">
        Blog<span className="text-[var(--brand)]">.</span>
      </h1>
      <p className="mt-2 text-xs text-[var(--muted-foreground)]">
        Notes and write-ups will appear here.
      </p>
    </Section>
  )
}
