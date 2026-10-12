import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/site/section'

export const metadata: Metadata = { title: 'Blog' }

// Add posts here when you start writing. Each shows as a list row.
const POSTS: { title: string; date: string; href: string }[] = []

export default function Blog() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-10 sm:px-8">
      <SectionHeading>Blog</SectionHeading>
      {POSTS.length === 0 ? (
        <p className="text-[14px] text-[var(--text-faint)]">
          Nothing here yet. Posts are coming soon.
        </p>
      ) : (
        <ul className="space-y-3">
          {POSTS.map((post) => (
            <li key={post.href} className="flex items-baseline justify-between">
              <a href={post.href} className="link-sweep text-[14px]">
                {post.title}
              </a>
              <span className="text-xs text-[var(--text-faint)]">{post.date}</span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
