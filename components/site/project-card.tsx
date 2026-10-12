'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import type { Project } from '@/app/data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} target="_blank" className="group block">
      <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="hatch absolute inset-0" />
        <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-lg border border-[var(--line)] bg-white dark:bg-zinc-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-3xl font-semibold text-[var(--text-faint)]">
              {project.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="relative px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{project.name}</span>
            {project.tag && (
              <span className="rounded-full border border-[var(--line)] px-1.5 py-0.5 text-[10px] text-[var(--text-faint)]">
                {project.tag}
              </span>
            )}
          </div>
          <p className="mt-1 flex items-center gap-1 truncate text-xs text-[var(--text-soft)]">
            {project.description}
            <ArrowUpRightIcon className="h-3 w-3 shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </div>
    </Link>
  )
}
