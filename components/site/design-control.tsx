'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ACCENTS, useDesignSettings } from './design-provider'

export function DesignControl() {
  const [open, setOpen] = useState(false)
  const [left, setLeft] = useState(-60)
  const root = useRef<HTMLSpanElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const { accent, font, setAccent, setFont } = useDesignSettings()

  useLayoutEffect(() => {
    if (!open || !button.current) return
    const rect = button.current.getBoundingClientRect()
    setLeft(
      Math.max(
        12,
        Math.min(rect.left + rect.width / 2 - 82, window.innerWidth - 176),
      ) - rect.left,
    )
  }, [open])

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeEscape)
    }
  }, [])

  return (
    <span ref={root} className="relative inline-block" data-sfx-hover="whisper">
      <button
        ref={button}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="scribble sound-focus cursor-pointer rounded-sm text-[var(--brand)]"
      >
        design
      </button>
      {open && (
        <span
          role="dialog"
          aria-label="Design options"
          className="absolute bottom-full z-50 block pb-2"
          style={{ left, width: 164 }}
        >
          <span className="flex h-8 items-center justify-between rounded-full border border-[var(--border)] bg-[var(--popover)] px-1.5 font-sans shadow-md">
            <span className="flex items-center">
              <button
                type="button"
                aria-label="Sans font"
                aria-pressed={font === 'sans'}
                data-sfx="toggle"
                onClick={() => setFont('sans')}
                className={`h-6 w-7 rounded-full text-[11px] leading-none transition-colors ${
                  font === 'sans'
                    ? 'bg-[var(--muted)] text-[var(--foreground)]'
                    : 'font-sans text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                Aa
              </button>
              <button
                type="button"
                aria-label="Mono font"
                aria-pressed={font === 'mono'}
                data-sfx="toggle"
                onClick={() => setFont('mono')}
                className={`h-6 w-7 rounded-full text-[11px] leading-none transition-colors ${
                  font === 'mono'
                    ? 'bg-[var(--muted)] text-[var(--foreground)]'
                    : 'font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                Aa
              </button>
            </span>
            <span
              aria-hidden="true"
              className="h-3.5 w-px bg-[var(--border)]"
            />
            <span className="flex items-center gap-1.5 pr-1">
              {ACCENTS.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  aria-label={`${option.name} accent`}
                  aria-pressed={accent === option.name}
                  data-sfx="toggle"
                  onClick={() => setAccent(option.name)}
                  className={`size-3.5 rounded-full ring-offset-1 ring-offset-[var(--popover)] transition-shadow ${option.className} ${
                    accent === option.name
                      ? 'ring-1 ring-[var(--foreground)]/60'
                      : 'hover:ring-1 hover:ring-[var(--border)]'
                  }`}
                />
              ))}
            </span>
          </span>
        </span>
      )}
    </span>
  )
}
