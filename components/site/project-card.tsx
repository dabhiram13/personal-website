'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRightIcon,
  ActivityIcon,
  FileTextIcon,
  SparklesIcon,
} from 'lucide-react'
import type { Project } from '@/app/data'

const TONES = {
  blue: 'from-blue-950 via-slate-950 to-slate-900 text-blue-300',
  violet: 'from-violet-950 via-slate-950 to-slate-900 text-violet-300',
  green: 'from-emerald-950 via-slate-950 to-slate-900 text-emerald-300',
  orange: 'from-orange-950 via-slate-950 to-slate-900 text-orange-300',
  slate: 'from-slate-800 via-slate-950 to-slate-900 text-slate-300',
}

function Illustration({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 360px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    )
  }
  const Icon =
    project.id === 'ecg'
      ? ActivityIcon
      : project.id === 'docchat'
        ? FileTextIcon
        : SparklesIcon
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${TONES[project.tone]} p-5`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4 shadow-lg backdrop-blur-[2px]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[10px] font-medium text-white/75">
            <span className="flex size-6 items-center justify-center rounded-md bg-white/10">
              <Icon className="size-3.5" />
            </span>
            {project.name}
          </span>
          <span className="size-1.5 rounded-full bg-emerald-400" />
        </div>
        {project.id === 'ecg' ? (
          <div className="mt-auto">
            <p className="font-mono text-2xl font-medium text-white">98.82%</p>
            <p className="text-[9px] text-white/55">classification accuracy</p>
            <svg viewBox="0 0 300 52" className="mt-3 h-10 w-full text-current">
              <path
                d="M0 28h43l11-1 10-20 12 39 14-23h30l9-1 10-19 13 39 11-23h30l10-1 9-15 12 32 12-21h64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        ) : (
          <div className="mt-5 space-y-2">
            <div className="max-w-[85%] rounded-lg bg-white/10 px-3 py-2 text-[9px] leading-relaxed text-white/70">
              Ask a question about your documents...
            </div>
            <div className="ml-auto max-w-[82%] rounded-lg bg-white/15 px-3 py-2 text-[9px] leading-relaxed text-white/85">
              Answers are grounded in cited source passages.
            </div>
            <div className="h-6 rounded-lg border border-white/10 bg-white/5" />
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-sfx="tap"
      data-sfx-hover="hover"
      className="group flex min-w-0 flex-col gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--canvas)]">
        <Illustration project={project} />
      </div>
      <div className="flex min-w-0 flex-col gap-1 px-0.5">
        <span className="flex items-center gap-2 text-sm font-medium">
          <span className="flex size-5 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--muted)] text-[8px] font-semibold text-[var(--muted-foreground)]">
            {project.mark}
          </span>
          {project.name}
        </span>
        <span className="flex items-start gap-1 text-[11px] leading-relaxed text-[var(--muted-foreground)]">
          <span className="line-clamp-2">{project.description}</span>
          <ArrowUpRightIcon className="mt-0.5 size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
