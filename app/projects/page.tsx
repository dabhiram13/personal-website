import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeading } from '@/components/site/section'
import { ProjectCard } from '@/components/site/project-card'
import { PROJECTS } from '../data'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
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
        <span>Projects</span>
      </nav>
      <SectionHeading>Projects</SectionHeading>
      <p className="-mt-3 mb-5 text-xs text-[var(--muted-foreground)]">
        Applied AI, computer vision, and tools I&apos;ve built.
      </p>
      <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
