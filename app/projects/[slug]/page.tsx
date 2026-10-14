import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-react'
import { Section, SectionHeading, Divider } from '@/components/site/section'
import { SkillBadge } from '@/components/site/skill-badge'
import { ProjectPreview } from '@/components/site/project-preview'
import { PROJECTS } from '../../data'

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)
  if (!project) return { title: 'Project not found', robots: { index: false } }
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (slug === 'prompt-playground') permanentRedirect('/projects/prompt-studio')
  const project = PROJECTS.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <>
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
          <Link
            href="/projects"
            data-sfx="soft"
            className="hover:text-[var(--foreground)]"
          >
            Projects
          </Link>
          <span>/</span>
          <span>{project.name}</span>
        </nav>
        <Link
          href="/projects"
          data-sfx="soft"
          className="mb-5 inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        >
          <ArrowLeftIcon className="size-3" /> All projects
        </Link>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-xs font-semibold text-[var(--muted-foreground)]">
            {project.mark}
          </span>
          <div>
            <h1 className="font-space text-2xl font-medium tracking-tight">
              {project.name}
              <span className="text-[var(--brand)]">.</span>
            </h1>
            {project.impact && (
              <p className="font-mono text-xs text-[var(--brand)]">
                {project.impact}
              </p>
            )}
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)]">
          {project.description} {project.details}
        </p>
        {['foundry', 'prompt-studio', 'ecg'].includes(project.id) && (
          <div className="@container mt-6 aspect-[4/3] max-w-md overflow-hidden rounded-xl border border-[var(--border)]">
            <ProjectPreview id={project.id} />
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-sfx="tap"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 text-xs hover:bg-[var(--muted)]"
            >
              GitHub <ArrowUpRightIcon className="size-3" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-sfx="tap"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 text-xs hover:bg-[var(--muted)]"
            >
              Live demo <ArrowUpRightIcon className="size-3" />
            </a>
          )}
        </div>
      </Section>
      <Divider />
      <Section>
        <SectionHeading>Tech stack</SectionHeading>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
        </div>
      </Section>
    </>
  )
}
