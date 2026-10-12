import type { Metadata } from 'next'
import { Divider, Section, SectionHeading } from '@/components/site/section'
import { PERSONAL, SOCIAL_LINKS } from '../data'
import { ArrowUpRightIcon } from 'lucide-react'

export const metadata: Metadata = { title: 'About' }

export default function About() {
  return (
    <>
      <Section className="col-frame bg-[var(--col-bg)] px-6 py-10 sm:px-8">
        <SectionHeading>About</SectionHeading>
        <div className="max-w-lg space-y-4 text-[15px] leading-relaxed text-[var(--text-soft)]">
          <p>
            Hey, I&apos;m {PERSONAL.name}. {PERSONAL.bio}
          </p>
          {/* Swap the paragraphs below with your own story. */}
          <p>
            Write a bit more about yourself here: what you like building, what
            you are learning, and what you are looking for.
          </p>
          <p>
            Outside of code: your hobbies, interests or anything else you want
            people to know.
          </p>
        </div>
      </Section>
      <Divider />
      <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
        <SectionHeading>Elsewhere</SectionHeading>
        <ul className="space-y-2.5">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep inline-flex items-center gap-1 text-[14px] text-[var(--text-soft)] hover:text-[var(--text)]"
              >
                {link.label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--text-faint)]" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
