import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/site/section'
import { ProjectCard } from '@/components/site/project-card'
import { PROJECTS } from '../data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Personal projects by Sri: practical AI tools, prompt experiments, and computer vision studies.',
  alternates: { canonical: '/projects' },
}

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
      <h1 className="font-space mb-5 text-2xl font-medium tracking-tight">
        Projects<span className="text-[var(--brand)]">.</span>
      </h1>
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
