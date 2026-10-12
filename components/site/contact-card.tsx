import Image from 'next/image'
import { ArrowUpRightIcon, CalendarDaysIcon, MailIcon } from 'lucide-react'
import { CONTACT } from '@/app/data'

export function ContactCard() {
  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-xl border border-[var(--border)]">
      <Image
        src="/contact-backdrop.webp"
        alt=""
        fill
        sizes="720px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
      <div className="relative flex min-h-[250px] flex-col items-start justify-end px-6 py-7 text-white sm:px-7">
        <h2 className="font-space text-2xl leading-tight font-medium tracking-tight sm:text-3xl">
          {CONTACT.heading}
        </h2>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-white/80 sm:text-sm">
          {CONTACT.subtext}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={CONTACT.primary.link}
            data-sfx="tap"
            className="inline-flex h-9 items-center gap-2 rounded-xl bg-white px-4 text-xs font-medium text-neutral-950 transition-transform hover:scale-[1.02]"
          >
            <MailIcon className="size-3.5" />
            {CONTACT.primary.label}
          </a>
          <a
            href={CONTACT.secondary.link}
            target="_blank"
            rel="noreferrer"
            data-sfx="tap"
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <CalendarDaysIcon className="size-3.5" />
            {CONTACT.secondary.label}
            <ArrowUpRightIcon className="size-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
