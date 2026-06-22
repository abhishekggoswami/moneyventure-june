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
        background: "linear-gradient(135deg, #1B4332 0%, #1f4a38 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 16px 100px",
        zIndex: 2,
      }}
    >
      <style>{`
        @keyframes shimmerH { 0% { transform: translateX(-120%) skewX(-18deg); } 60%, 100% { transform: translateX(260%) skewX(-18deg); } }
      `}</style>

      {/* Shimmer sweep */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", width: "40%", background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.08), transparent)", animation: "shimmerH 6s ease-in-out infinite", pointerEvents: "none" }} />

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

      {/* Wave bottom border */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: -1, left: 0, right: 0, overflow: "hidden", lineHeight: 0, pointerEvents: "none", height: "80px" }}>
        <div style={{ display: "flex", width: "200%", height: "80px", animation: "waveRoll 7s linear infinite" }}>
          {[0, 1].map((i) => (
            <svg key={i} viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "50%", height: "80px", flexShrink: 0, display: "block" }}>
              <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,10 1440,40 L1440,80 L0,80 Z" fill="#eef4e8" />
            </svg>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes waveRoll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
      `}</style>
    </section>
  )
}
