'use client'

import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'
import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card'
import { TextureOverlay } from '@/components/ui/texture-overlay'
import type { Project } from '@/app/data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} target="_blank" className="group block">
      <MinimalCard className="!rounded-xl !p-2.5 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative">
          <MinimalCardImage
            src={project.image ?? ''}
            alt={project.name}
            className="!mb-0 !h-44 !rounded-lg object-cover object-top"
          />
          <TextureOverlay
            texture="diagonal"
            className="pointer-events-none absolute inset-0 !rounded-lg opacity-[0.06]"
          />
        </div>
        <MinimalCardContent className="px-2 pb-1 pt-3">
          <div className="flex items-center gap-2">
            <MinimalCardTitle className="!text-sm">
              {project.name}
            </MinimalCardTitle>
            {project.tag && (
              <span className="rounded-full border border-[var(--line)] px-1.5 py-0.5 text-[10px] text-[var(--text-faint)]">
                {project.tag}
              </span>
            )}
          </div>
          <MinimalCardDescription className="mt-1 flex items-center gap-1 truncate !text-xs">
            {project.description}
            <ArrowUpRightIcon className="h-3 w-3 shrink-0 text-[var(--text-faint)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MinimalCardDescription>
        </MinimalCardContent>
      </MinimalCard>
    </Link>
  )
}
