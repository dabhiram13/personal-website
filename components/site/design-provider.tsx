'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export const ACCENTS = [
  { name: 'Blue', value: '#3b82f6', className: 'bg-blue-500' },
  { name: 'Emerald', value: '#10b981', className: 'bg-emerald-500' },
  { name: 'Violet', value: '#8b5cf6', className: 'bg-violet-500' },
  { name: 'Orange', value: '#f97316', className: 'bg-orange-500' },
] as const

type AccentName = (typeof ACCENTS)[number]['name']
type FontName = 'sans' | 'mono'

type DesignSettings = {
  accent: AccentName
  font: FontName
  setAccent: (accent: AccentName) => void
  setFont: (font: FontName) => void
}

const DesignContext = createContext<DesignSettings>({
  accent: 'Blue',
  font: 'sans',
  setAccent: () => {},
  setFont: () => {},
})

export function DesignProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<AccentName>('Blue')
  const [font, setFontState] = useState<FontName>('sans')

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('site-design') || '{}')
      if (ACCENTS.some((option) => option.name === saved.accent)) {
        setAccentState(saved.accent)
      }
      if (saved.font === 'sans' || saved.font === 'mono') {
        setFontState(saved.font)
      }
    } catch {
      // Keep the reference defaults when storage is unavailable.
    }
  }, [])

  useEffect(() => {
    const selected = ACCENTS.find((option) => option.name === accent)
    document.documentElement.style.setProperty(
      '--brand',
      selected?.value ?? '#3b82f6',
    )
    document.documentElement.dataset.font = font
    try {
      localStorage.setItem('site-design', JSON.stringify({ accent, font }))
    } catch {
      // The controls still work for this page view.
    }
  }, [accent, font])

  const setAccent = useCallback(
    (value: AccentName) => setAccentState(value),
    [],
  )
  const setFont = useCallback((value: FontName) => setFontState(value), [])
  const value = useMemo(
    () => ({ accent, font, setAccent, setFont }),
    [accent, font, setAccent, setFont],
  )

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  )
}

export function useDesignSettings() {
  return useContext(DesignContext)
}
