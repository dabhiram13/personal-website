import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/site/section'
import { GuestbookForm } from '@/components/site/guestbook-form'

export const metadata: Metadata = { title: 'Guestbook' }

export default function Guestbook() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-10 sm:px-8">
      <SectionHeading>Guestbook</SectionHeading>
      <p className="max-w-md text-[14px] leading-relaxed text-[var(--text-soft)]">
        Leave a note below. Entries are stored locally for now - wire it to a
        backend when you are ready.
      </p>
      <GuestbookForm />
    </Section>
  )
}
