'use client'

import {
  Expandable,
  ExpandableContent,
  ExpandableTrigger,
} from '@/components/ui/expandable'

/**
 * Inline expandable word used for short details in the bio.
 * Click the underlined word to open a small detail card.
 */
export function ExpandableWord({
  word,
  children,
}: {
  word: string
  children: React.ReactNode
}) {
  return (
    <Expandable expandDirection="vertical" className="inline">
      {() => (
        <span className="inline">
          <ExpandableTrigger className="inline font-medium text-[var(--text)] underline decoration-dotted underline-offset-4 transition-colors hover:text-blue-500">
            {word}
          </ExpandableTrigger>
          <ExpandableContent
            animateIn={{
              initial: { opacity: 0, y: -4 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.25 },
            }}
            animateOut={{
              animate: { opacity: 0, y: -4 },
              transition: { duration: 0.2 },
            }}
            keepMounted={false}
          >
            <span className="mt-2 block rounded-lg border border-[var(--line)] bg-[var(--card)] px-3 py-2 text-[13px] leading-relaxed text-[var(--text-soft)]">
              {children}
            </span>
          </ExpandableContent>
        </span>
      )}
    </Expandable>
  )
}
