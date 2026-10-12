import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  BriefcaseIcon,
  Code2Icon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react'
import { Avatar, HeroHeading } from '@/components/site/hero'
import { Divider, Section, SectionHeading } from '@/components/site/section'
import { ExpandableWord } from '@/components/site/expandable-word'
import { HaloLink } from '@/components/site/halo-link'
import { CopyButton } from '@/components/ui/copy-button'
import { ExperienceItem } from '@/components/site/experience'
import { ProjectCard } from '@/components/site/project-card'
import { ContributionsGraph } from '@/components/site/contributions'
import { ContactCard } from '@/components/site/contact-card'
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PERSONAL,
  PROJECTS,
  STACK,
} from './data'

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li className="flex items-center gap-2.5 text-[13px] text-[var(--text-soft)]">
      <span className="text-[var(--text-faint)]">{icon}</span>
      {children}
    </li>
  )
}

function Hero() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 pb-8 pt-12 sm:px-8">
      <div className="flex items-center">
        <Avatar />
        <HeroHeading />
      </div>

      <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[var(--text-soft)]">
        Full-stack developer with strong{' '}
        <ExpandableWord word="product and design">
          Add a line about your product/design approach here - e.g. you care
          about how things feel to use as much as how they are built.
        </ExpandableWord>{' '}
        skills. {PERSONAL.bio}{' '}
        Shipping @{' '}
        <a
          href={PERSONAL.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep inline-flex items-center gap-1 font-medium text-[var(--text)]"
        >
          {PERSONAL.company}
        </a>
        {PERSONAL.previousCompanies.length > 0 && (
          <>
            , previously @{' '}
            {PERSONAL.previousCompanies.map((c, i) => (
              <span key={c.name}>
                {i > 0 && ' and '}
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep font-medium text-[var(--text)]"
                >
                  {c.name}
                </a>
              </span>
            ))}
          </>
        )}
        .
      </p>

      <ul className="mt-5 space-y-2">
        <InfoRow icon={<BriefcaseIcon className="h-3.5 w-3.5" />}>
          {PERSONAL.role} @{' '}
          <a
            href={PERSONAL.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep font-medium text-[var(--text)]"
          >
            {PERSONAL.company}
          </a>
        </InfoRow>
        <InfoRow icon={<MapPinIcon className="h-3.5 w-3.5" />}>
          {PERSONAL.location}
        </InfoRow>
        <InfoRow icon={<MailIcon className="h-3.5 w-3.5" />}>
          <a href={`mailto:${PERSONAL.email}`} className="link-sweep">
            {PERSONAL.email}
          </a>
          <CopyButton
            value={PERSONAL.email}
            variant="ghost"
            size="icon"
            className="!h-5 !w-5 text-[var(--text-faint)] hover:text-[var(--text)]"
          />
        </InfoRow>
        {PERSONAL.leetcode && (
          <InfoRow icon={<Code2Icon className="h-3.5 w-3.5" />}>
            <a
              href={PERSONAL.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-medium text-[var(--text)]"
            >
              {PERSONAL.leetcode.label}
            </a>
          </InfoRow>
        )}
        <InfoRow icon={<GraduationCapIcon className="h-3.5 w-3.5" />}>
          {PERSONAL.educationUrl ? (
            <a
              href={PERSONAL.educationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-medium text-[var(--text)]"
            >
              {PERSONAL.education}
            </a>
          ) : (
            PERSONAL.education
          )}
        </InfoRow>
      </ul>

      <HaloLink href="/about" className="mt-6">
        More about me
      </HaloLink>
    </Section>
  )
}

function Experience() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-2.5">
        {EXPERIENCE.map((job, i) => (
          <ExperienceItem key={job.id} job={job} defaultOpen={i === 0} />
        ))}
      </div>
    </Section>
  )
}

function EducationSection() {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--card)]/60 px-4 py-3 transition-colors hover:bg-[var(--card-hover)]/60">
      {EDUCATION.logo ? (
        <Image
          src={EDUCATION.logo}
          alt={EDUCATION.school}
          width={32}
          height={32}
          className="h-8 w-8 rounded-lg border border-[var(--line)] object-cover"
        />
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--card)]">
          <GraduationCapIcon className="h-4 w-4 text-[var(--text-soft)]" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{EDUCATION.school}</p>
        <p className="truncate text-xs text-[var(--text-faint)]">
          {EDUCATION.degree}
        </p>
      </div>
      <span className="text-xs text-[var(--text-faint)]">
        {EDUCATION.start} – {EDUCATION.end}
      </span>
    </div>
  )

  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
      <SectionHeading>Education</SectionHeading>
      {EDUCATION.link ? (
        <a href={EDUCATION.link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </Section>
  )
}

function Projects({ limit }: { limit?: number }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1.5 text-[13px] font-medium transition-colors hover:bg-[var(--card-hover)]"
        >
          View all projects
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  )
}

function Stack() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
      <SectionHeading>Stack</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {STACK.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--card)]/60 px-2.5 py-1 text-xs text-[var(--text-soft)] transition-colors hover:bg-[var(--card-hover)]"
          >
            {item.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://cdn.simpleicons.org/${item.icon}`}
                alt=""
                className="h-3.5 w-3.5 dark:brightness-90"
                loading="lazy"
              />
            )}
            {item.name}
          </span>
        ))}
      </div>
    </Section>
  )
}

function Commits() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
      <SectionHeading>A year in commits</SectionHeading>
      <p className="-mt-3 mb-4 text-[13px] text-[var(--text-faint)]">
        Proof I ship. The grey squares are me touching grass.
      </p>
      <ContributionsGraph username="dabhiram13" />
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <EducationSection />
      <Divider />
      <Projects limit={2} />
      <Divider />
      <Stack />
      <Divider />
      <Commits />
      <Divider />
      <Section className="col-frame bg-[var(--col-bg)] px-6 py-8 sm:px-8">
        <ContactCard />
      </Section>
    </>
  )
}
