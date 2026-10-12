import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/site/section'
import { ProjectCard } from '@/components/site/project-card'
import { PROJECTS } from '../data'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <Section className="col-frame bg-[var(--col-bg)] px-6 py-10 sm:px-8">
      <SectionHeading>Projects</SectionHeading>
      <p className="-mt-3 mb-6 text-[13px] text-[var(--text-faint)]">
        Things I&apos;ve built and shipped.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
