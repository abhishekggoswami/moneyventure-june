"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 50,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "#1B4332",
        border: "2px solid #C5D82D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 18px rgba(27,67,50,0.28)",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.background = "#C5D82D"
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = "#1B4332"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.background = "#1B4332"
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = "#C5D82D"
      }}
    >
      <ArrowUp
        style={{
          width: "20px",
          height: "20px",
          color: "#C5D82D",
          transition: "color 0.2s ease",
        }}
        className="scroll-top-icon"
      />
      <style>{`
        button:hover .scroll-top-icon { color: #1B4332 !important; }
      `}</style>
    </button>
  )
}
