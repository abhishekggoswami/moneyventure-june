"use client"

import LineSidebar from "@/components/LineSidebar"
import { useEffect, useState } from "react"

type LegalPageSidebarProps = {
  items: string[]
}

function anchorFor(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function LegalPageSidebar({ items }: LegalPageSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    function updateActiveSection() {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-legal-section]"))
      const threshold = window.innerHeight * 0.35
      let nextIndex = 0

      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= threshold) nextIndex = index
      })

      setActiveIndex(nextIndex)
      sections.forEach((section, index) => {
        section.dataset.active = index === nextIndex ? "true" : "false"
      })
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <LineSidebar
      items={items}
      accentColor="#91aa15"
      textColor="#315545"
      markerColor="#a8beb2"
      showIndex
      showMarker
      proximityRadius={100}
      maxShift={14}
      falloff="smooth"
      markerLength={44}
      markerGap={0}
      tickScale={0.5}
      scaleTick
      itemGap={20}
      fontSize={0.9}
      smoothing={100}
      defaultActive={0}
      activeIndex={activeIndex}
      className="max-w-full"
      onItemClick={(index, label) => {
        setActiveIndex(index)
        document.querySelectorAll<HTMLElement>("[data-legal-section]").forEach((section, sectionIndex) => {
          section.dataset.active = sectionIndex === index ? "true" : "false"
        })
        document.getElementById(anchorFor(label))?.scrollIntoView({ behavior: "smooth", block: "start" })
      }}
    />
  )
}
