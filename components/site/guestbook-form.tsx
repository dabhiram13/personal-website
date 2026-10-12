'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { HaloButton } from '@/components/ui/halo-button'
import {
  Expandable,
  ExpandableContent,
  ExpandableTrigger,
} from '@/components/ui/expandable'

export function GuestbookForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [entries, setEntries] = useState<{ name: string; message: string }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('guestbook-entries')
      if (stored) setEntries(JSON.parse(stored))
    } catch {
      // storage unavailable
    }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setLoading(true)
    setTimeout(() => {
      setEntries((prev) => {
        const next = [{ name: name.trim(), message: message.trim() }, ...prev]
        try {
          window.localStorage.setItem('guestbook-entries', JSON.stringify(next))
        } catch {
          // storage unavailable
        }
        return next
      })
      setName('')
      setMessage('')
      setLoading(false)
    }, 600)
  }

  return (
    <div className="mt-6 max-w-md">
      <Expandable expandDirection="vertical">
        <ExpandableTrigger className="w-full rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-left text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--card-hover)]">
          Leave a note
        </ExpandableTrigger>
        <ExpandableContent keepMounted={false}>
          <form
            onSubmit={submit}
            className="mt-3 space-y-3 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-[var(--line)] bg-[var(--col-bg)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-blue-500 focus:outline-none"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say something nice..."
              rows={3}
              className="w-full resize-none rounded-lg border border-[var(--line)] bg-[var(--col-bg)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-blue-500 focus:outline-none"
            />
            <HaloButton type="submit" isLoading={loading} loadingText="Signing...">
              Sign guestbook
            </HaloButton>
          </form>
        </ExpandableContent>
      </Expandable>

      <AnimatePresence initial={false}>
        {entries.map((entry, i) => (
          <motion.div
            key={`${entry.name}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3"
          >
            <p className="text-sm font-medium">{entry.name}</p>
            <p className="mt-1 text-[13px] text-[var(--text-soft)]">
              {entry.message}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
