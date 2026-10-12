'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Expandable,
  ExpandableContent,
  ExpandableTrigger,
} from '@/components/ui/expandable'

export function GuestbookForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [entries, setEntries] = useState<{ name: string; message: string }[]>(
    [],
  )

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
  }

  return (
    <div className="mt-5 max-w-lg">
      <Expandable expandDirection="vertical">
        <ExpandableTrigger
          data-sfx="expand"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-left text-xs font-medium transition-colors hover:bg-[var(--muted)]"
        >
          Leave a note
        </ExpandableTrigger>
        <ExpandableContent keepMounted={false}>
          <form
            onSubmit={submit}
            className="mt-2 space-y-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              maxLength={50}
              data-sfx="soft"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm placeholder:text-[var(--muted-foreground)] focus:border-[var(--brand)] focus:outline-none"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say something nice..."
              rows={3}
              required
              maxLength={500}
              data-sfx="soft"
              className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm placeholder:text-[var(--muted-foreground)] focus:border-[var(--brand)] focus:outline-none"
            />
            <button
              type="submit"
              data-sfx="tap"
              className="inline-flex h-8 items-center rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 text-xs font-medium transition-colors hover:bg-[var(--muted)]"
            >
              Add note
            </button>
          </form>
        </ExpandableContent>
      </Expandable>

      <AnimatePresence initial={false}>
        {entries.map((entry, i) => (
          <motion.div
            key={`${entry.name}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3"
          >
            <p className="text-sm font-medium">{entry.name}</p>
            <p className="mt-1 text-[13px] text-[var(--muted-foreground)]">
              {entry.message}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
