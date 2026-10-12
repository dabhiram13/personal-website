'use client'

import { motion } from 'motion/react'
import { ArrowUpRightIcon, CalendarIcon, MailIcon } from 'lucide-react'
import { CONTACT } from '@/app/data'

export function ContactCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600" />
      <div className="hatch absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
      />

      <div className="relative px-6 py-14 text-white sm:px-10 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {CONTACT.heading}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
          {CONTACT.subtext}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={CONTACT.primary.link}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-transform duration-200 hover:scale-[1.03]"
          >
            {CONTACT.primary.link.startsWith('mailto:') ? (
              <MailIcon className="h-4 w-4" />
            ) : (
              <CalendarIcon className="h-4 w-4" />
            )}
            {CONTACT.primary.label}
          </a>
          <a
            href={CONTACT.secondary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors duration-200 hover:bg-white/25"
          >
            {CONTACT.secondary.label}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
