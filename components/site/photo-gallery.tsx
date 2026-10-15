'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent,
} from 'react'

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

export const PORTRAITS = [
  {
    src: '/photos/sri-sunlit.webp',
    alt: 'Sri in a peach shirt, with sunlight across his face',
    position: '50% 24%',
    avatarPosition: '50% 45%',
  },
  {
    src: '/photos/sri-cap.webp',
    alt: 'Sri wearing a grey hoodie and holding the brim of a dark cap',
    position: '50% 40%',
    avatarPosition: '50% 50%',
  },
  {
    src: '/photos/sri-tie.webp',
    alt: 'Sri taking a mirror portrait in a black shirt and tie',
    position: '50% 20%',
    avatarPosition: '50% 25%',
  },
]

export function PhotoGallery() {
  const [page, setPage] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  )
  const pointer = useRef<{
    id: number
    x: number
    y: number
    moved: boolean
  } | null>(null)
  const suppressClick = useRef(false)
  const index =
    ((page % PORTRAITS.length) + PORTRAITS.length) % PORTRAITS.length

  useEffect(() => {
    if (reducedMotion) return
    const interval = window.setInterval(() => {
      setPage((value) => value + 1)
    }, 3600)
    return () => window.clearInterval(interval)
  }, [reducedMotion])

  function resetDrag() {
    pointer.current = null
    setDragOffset(0)
    setDragging(false)
  }

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return
    suppressClick.current = false
    pointer.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      moved: false,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const start = pointer.current
    if (!start || start.id !== event.pointerId) return
    const x = event.clientX - start.x
    const y = event.clientY - start.y
    if (Math.abs(x) > 8 && Math.abs(x) > Math.abs(y)) {
      start.moved = true
      setDragging(true)
      if (!reducedMotion) setDragOffset(Math.max(-100, Math.min(100, x)))
    }
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    const start = pointer.current
    if (!start || start.id !== event.pointerId) return
    const x = event.clientX - start.x
    const y = event.clientY - start.y
    suppressClick.current = start.moved
    if (start.moved && Math.abs(x) > 48 && Math.abs(x) > Math.abs(y)) {
      setPage((value) => value + (x < 0 ? 1 : -1))
    }
    resetDrag()
  }

  function selectPortrait(nextIndex: number) {
    setPage((value) => {
      const current =
        ((value % PORTRAITS.length) + PORTRAITS.length) % PORTRAITS.length
      const distance =
        (nextIndex - current + PORTRAITS.length) % PORTRAITS.length
      return value + (distance > 1 ? distance - PORTRAITS.length : distance)
    })
  }

  return (
    <figure aria-label="Portraits of Sri" className="portrait-gallery min-w-0">
      <button
        type="button"
        aria-label="Show next portrait of Sri"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={resetDrag}
        onLostPointerCapture={resetDrag}
        onClick={(event) => {
          if (event.detail > 0 && suppressClick.current) {
            suppressClick.current = false
            return
          }
          setPage((value) => value + 1)
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            setPage((value) => value + (event.key === 'ArrowRight' ? 1 : -1))
          } else if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault()
            selectPortrait(event.key === 'Home' ? 0 : PORTRAITS.length - 1)
          }
        }}
        className={`portrait-stage relative block w-full touch-pan-y overflow-hidden rounded-xl select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const itemIndex =
            (index + offset + PORTRAITS.length) % PORTRAITS.length
          const item = PORTRAITS[itemIndex]
          return (
            <motion.span
              key={page + offset}
              aria-hidden={offset !== 0}
              data-portrait-offset={offset}
              className="portrait-card pointer-events-none absolute top-6 left-1/2 block"
              initial={false}
              animate={{
                x: `calc(${offset * 112}% + ${dragOffset}px)`,
                y: reducedMotion ? 0 : Math.abs(offset) * 22,
                rotate: reducedMotion ? 0 : offset * 8,
                scale: reducedMotion || offset === 0 ? 1 : 0.92,
              }}
              transition={
                reducedMotion || dragging
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 240, damping: 30 }
              }
            >
              <span className="relative block aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)] shadow-md">
                <Image
                  src={item.src}
                  alt={offset === 0 ? item.alt : ''}
                  fill
                  priority={offset === 0}
                  draggable={false}
                  sizes="240px"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
              </span>
            </motion.span>
          )
        })}
      </button>
    </figure>
  )
}
