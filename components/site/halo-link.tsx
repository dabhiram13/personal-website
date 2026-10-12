'use client'

import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from 'lucide-react'
import { HaloButton } from '@/components/ui/halo-button'

export function HaloLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const router = useRouter()
  return (
    <HaloButton onClick={() => router.push(href)} className={className} staggerLabel>
      <span className="inline-flex items-center gap-1.5">
        {children}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
    </HaloButton>
  )
}
