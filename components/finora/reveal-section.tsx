"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CSSProperties, ReactNode } from "react"

type Direction = "up" | "left" | "right" | "fade"

interface RevealSectionProps {
  children: ReactNode
  direction?: Direction
  delay?: number          // ms
  duration?: number       // ms
  distance?: number       // px
  className?: string
  style?: CSSProperties
  threshold?: number
}

const directionMap: Record<Direction, string> = {
  up:    "translateY(VALpx)",
  left:  "translateX(-VALpx)",
  right: "translateX(VALpx)",
  fade:  "scale(0.97)",
}

export function RevealSection({
  children,
  direction = "up",
  delay = 0,
  duration = 650,
  distance = 36,
  className,
  style,
  threshold = 0.1,
}: RevealSectionProps) {
  const { ref, visible } = useScrollReveal({ threshold })

  const hiddenTransform = directionMap[direction].replace("VAL", String(distance))

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0) scale(1)" : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
