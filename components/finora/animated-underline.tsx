"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedUnderline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.65 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <span ref={ref} className={`relative inline-block ${visible ? "lime-heading-underline" : ""}`}>{children}</span>
}
