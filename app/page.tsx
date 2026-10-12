import Image from 'next/image'
import Link from 'next/link'
import {
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react'
import { Avatar, HeroHeading } from '@/components/site/hero'
import { DesignControl } from '@/components/site/design-control'
import { Divider, Section, SectionHeading } from '@/components/site/section'
import { ExperienceItem } from '@/components/site/experience'
import { ProjectCard } from '@/components/site/project-card'
import { ContributionsGraph } from '@/components/site/contributions'
import { ContactCard } from '@/components/site/contact-card'
import { SkillBadge } from '@/components/site/skill-badge'
import { CompanyLogo } from '@/components/site/company-logo'
import { EDUCATION, EXPERIENCE, PERSONAL, PROJECTS, STACK } from './data'

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li className="flex min-h-4 items-center gap-2 font-mono text-xs leading-[19.5px] text-[var(--muted-foreground)]">
      <span className="flex size-3.5 shrink-0 items-center justify-center">
        {icon}
      </span>
      {children}
    </li>
  )
}

function Hero() {
  return (
    <Section className="flex items-center">
      <Avatar />
      <HeroHeading />
    </Section>
  )
}

function Introduction() {
  return (
    <Section className="text-xs leading-snug text-[var(--muted-foreground)] sm:text-sm">
      <p>
        Applied AI engineer focused on forward-deployed engineering, computer
        vision, and production AI systems. I&apos;m building an Audit Agent at{' '}
        <a
          href={PERSONAL.currentCompanyUrl}
          target="_blank"
          rel="noreferrer"
          data-sfx-hover="whisper"
          className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap text-[var(--foreground)]"
        >
          <CompanyLogo
            src={PERSONAL.currentCompanyLogo}
            alt=""
            width={18}
            height={16}
          />
          EverestLabs AI
        </a>
        , turning recycling footage into timestamped pick-attempt audits. I care
        about thoughtful product <DesignControl /> as well as the systems behind
        it.
      </p>

      <ul className="mt-3 space-y-0.5">
        <InfoRow icon={<BriefcaseBusinessIcon className="size-3" />}>
          {PERSONAL.currentRole} @{' '}
          <a
            href={PERSONAL.currentCompanyUrl}
            target="_blank"
            rel="noreferrer"
            data-sfx-hover="whisper"
            className="inline-flex items-center gap-1 font-medium text-[var(--foreground)]"
          >
            <CompanyLogo
              src={PERSONAL.currentCompanyLogo}
              alt=""
              width={15}
              height={13}
            />
            {PERSONAL.currentCompany}
          </a>
        </InfoRow>
        <InfoRow icon={<MapPinIcon className="size-3" />}>
          {PERSONAL.location}
        </InfoRow>
        <InfoRow icon={<MailIcon className="size-3" />}>
          <a href={`mailto:${PERSONAL.email}`} data-sfx-hover="whisper">
            {PERSONAL.email}
          </a>
        </InfoRow>
        <InfoRow icon={<PhoneIcon className="size-3" />}>
          <a
            href={`tel:${PERSONAL.phone.replace(/[^\d+]/g, '')}`}
            data-sfx-hover="whisper"
          >
            {PERSONAL.phone}
          </a>
        </InfoRow>
        <InfoRow icon={<GraduationCapIcon className="size-3" />}>
          {PERSONAL.education} @ Southeast Missouri State
        </InfoRow>
      </ul>

      <Link
        href="/about"
        data-sfx="tap"
        className="mt-2 inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] pr-2.5 pl-3 text-xs font-medium transition-colors hover:bg-[var(--muted)]/50"
      >
        More about me
        <span aria-hidden="true" className="text-sm">
          →
        </span>
      </Link>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="-mx-3 space-y-2">
        {EXPERIENCE.map((job, index) => (
          <ExperienceItem key={job.id} job={job} defaultOpen={index === 0} />
        ))}
      </div>
    </Section>
  )
}

function EducationSection() {
  return (
    <Section>
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-2">
        {EDUCATION.map((item) => (
          <article
            key={item.school}
            className="flex items-center gap-3 rounded-xl border border-[var(--border)]/70 bg-[var(--card)]/50 px-3 py-3"
          >
            <span className="flex h-10 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-white p-1">
              <Image
                src={item.logo}
                alt={`${item.school} logo`}
                width={96}
                height={40}
                unoptimized
                className="max-h-full max-w-full object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">
                {item.degree}
              </span>
              <span className="block truncate font-mono text-[10px] text-[var(--muted-foreground)] sm:hidden">
                {item.location}
              </span>
            </span>
            <span className="hidden shrink-0 text-right sm:block">
              <span className="block font-mono text-[11px] text-[var(--muted-foreground)]">
                {item.date}
              </span>
              <span className="block text-[10px] text-[var(--muted-foreground)]">
                {item.location}
              </span>
            </span>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.filter((project) => project.featured).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          data-sfx="tap"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]/60"
        >
          View all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  )
}

function Stack() {
  return (
    <Section>
      <SectionHeading>Stack</SectionHeading>
      <div className="flex flex-wrap gap-1.5">
        {STACK.map((item) => (
          <SkillBadge key={item} name={item} />
        ))}
      </div>
    </Section>
  )
}

function Commits() {
  return (
    <Section>
      <SectionHeading>A year in commits</SectionHeading>
      <p className="-mt-3 mb-4 text-[11px] text-[var(--muted-foreground)]">
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
      <Introduction />
      <Divider />
      <Experience />
      <Divider />
      <EducationSection />
      <Divider />
      <Projects />
      <Divider />
      <Stack />
      <Divider />
      <Commits />
      <Divider />
      <Section>
        <ContactCard />
      </Section>
    </>
  )
}
