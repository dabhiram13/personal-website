'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Contrib = { date: string; count: number; level: number }

type ApiResponse = {
  total: { lastYear: number }
  contributions: Contrib[]
}

const LEVELS = [
  'bg-[var(--card)]',
  'bg-emerald-200 dark:bg-emerald-900/60',
  'bg-emerald-400 dark:bg-emerald-700',
  'bg-emerald-500 dark:bg-emerald-500',
  'bg-emerald-600 dark:bg-emerald-400',
]

export function ContributionsGraph({ username }: { username: string }) {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [username])

  const year = new Date().getFullYear()

  if (loading) {
    return (
      <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
        {Array.from({ length: 371 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square w-full animate-pulse rounded-[2px] bg-[var(--card)]"
          />
        ))}
      </div>
    )
  }

  if (!data) return null

  const contribs = data.contributions
  const byDate = new Map(contribs.map((c) => [c.date, c]))
  const first = new Date(contribs[0].date)
  first.setDate(first.getDate() - first.getDay())

  const weeks: (Contrib | null)[][] = []
  const lastDate = new Date(contribs[contribs.length - 1].date)
  const totalWeeks = Math.ceil(
    (lastDate.getTime() - first.getTime()) / (7 * 86400000)
  )
  for (let w = 0; w <= totalWeeks; w++) {
    const week: (Contrib | null)[] = []
    for (let d = 0; d < 7; d++) {
      const day = new Date(first)
      day.setDate(day.getDate() + w * 7 + d)
      const key = day.toISOString().slice(0, 10)
      week.push(byDate.get(key) ?? (day <= lastDate ? { date: key, count: 0, level: 0 } : null))
    }
    weeks.push(week)
  }

  const months: { label: string; week: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, wi) => {
    const day = week.find(Boolean)
    if (day) {
      const m = new Date(day.date).getMonth()
      if (m !== lastMonth) {
        months.push({
          label: new Date(day.date).toLocaleDateString('en-US', { month: 'short' }),
          week: wi,
        })
        lastMonth = m
      }
    }
  })

  return (
    <div>
      <div className="relative">
        <div className="mb-2 flex text-[10px] text-[var(--text-faint)]">
          {weeks.map((_, wi) => {
            const m = months.find((mo) => mo.week === wi)
            return (
              <span key={wi} className="w-0 flex-1 overflow-visible whitespace-nowrap">
                {m ? m.label : ''}
              </span>
            )
          })}
        </div>
        <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
          {weeks.flat().map((day, i) =>
            day ? (
              <div
                key={i}
                title={`${day.count} contributions on ${day.date}`}
                className={cn(
                  'aspect-square w-full rounded-[2px] transition-transform hover:scale-125',
                  LEVELS[Math.min(day.level, 4)]
                )}
              />
            ) : (
              <div key={i} className="aspect-square w-full" />
            )
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-[var(--text-faint)]">
        <p>
          <span className="font-semibold text-[var(--text)]">
            {data.total.lastYear.toLocaleString()}
          </span>{' '}
          contributions in {year}
        </p>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {LEVELS.map((c, i) => (
            <span key={i} className={cn('h-[10px] w-[10px] rounded-[2px]', c)} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
