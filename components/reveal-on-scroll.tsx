"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * RevealOnScroll
 * - Fades and slides content in when it enters the viewport.
 * - Usage: wrap any block/section content with <RevealOnScroll> ... </RevealOnScroll>
 *
 * Props:
 * - threshold: number (0..1) → how much of the element must be visible to trigger (default 0.15)
 * - once: boolean → if true, reveal only once (default true)
 * - delay: number → ms delay to stagger multiple children (default 0)
 * - className: string → extra classes (optional)
 */
export function RevealOnScroll({
  children,
  threshold = 0.5,
  once = true,
  delay = 120,
  className,
}: {
  children: React.ReactNode
  threshold?: number
  once?: boolean
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      data-in-view={inView}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  )
}
