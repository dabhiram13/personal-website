import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/site/section'
import { SOCIAL_LINKS } from '../data'

export const metadata: Metadata = { title: 'Guestbook' }

export default function Guestbook() {
  const twitter = SOCIAL_LINKS.find((l) => l.icon === 'x')
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-10 sm:px-8">
      <SectionHeading>Guestbook</SectionHeading>
      <p className="max-w-md text-[14px] leading-relaxed text-[var(--text-soft)]">
        Sign my guestbook. {/* Swap this for a real guestbook (e.g. GitHub-
        backed comments or a form) when you are ready. */}
        {twitter && (
          <>
            {' '}
            For now,{' '}
            <a
              href={twitter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-medium text-[var(--text)]"
            >
              say hi on X
            </a>
            .
          </>
        )}
      </p>
    </Section>
  )
}
