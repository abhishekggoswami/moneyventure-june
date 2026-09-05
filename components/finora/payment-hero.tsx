'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

export function PaymentHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 16px",
        zIndex: 2,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        <source src="/videos/payment-hero-background.mp4" type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(5, 20, 13, 0.78) 0%, rgba(10, 32, 21, 0.58) 48%, rgba(5, 20, 13, 0.72) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-block", paddingBottom: "12px", marginBottom: "16px" }}>
          <span style={{ color: "#C5D82D", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Quick & Secure</span>
        </div>

        <h1 style={{ color: "#ffffff", fontSize: "clamp(32px,6vw,48px)", fontWeight: 800, fontFamily: "serif", margin: "0 0 16px", lineHeight: 1.2 }}>
          Complete Your
          <br />
          <span style={{ background: "linear-gradient(135deg, #D4AF37 0%, #C5D82D 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Payment</span>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px,2vw,16px)", margin: "0 auto 32px", maxWidth: "620px", lineHeight: 1.6 }}>
          Scan the QR code or use any payment method below. Your enrollment will be confirmed once payment is received.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", padding: "0 8px" }}>
          <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", transition: "all 200ms ease", whiteSpace: "nowrap" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}>
            ← Back to Pricing
          </Link>
        </div>
      </div>

    </section>
  )
}
