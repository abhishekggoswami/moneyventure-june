"use client"

import { useEffect, useState } from "react"

const HEADING_LINE1 = "Transparency &"
const HEADING_LIME = "Compliance"

export function ComplianceHero() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const line1Chars = HEADING_LINE1.split("")
  const limeChars = HEADING_LIME.split("")

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "480px",
        padding: "90px 24px 110px",
        background: "radial-gradient(ellipse 120% 100% at 60% 0%, #2d6a4f 0%, #1B4332 45%, #142e22 100%)",
      }}
    >
      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(30px,-40px) scale(1.08);} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-20px,30px) scale(0.94);} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(15px,20px) scale(1.05);} }
        @keyframes floatD { 0%,100%{transform:translate(0,0);}33%{transform:translate(-18px,-22px);}66%{transform:translate(22px,10px);} }
        @keyframes waveRoll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
      `}</style>

      {/* Floating lime orbs */}
      <div style={{ position:"absolute", top:"8%",  left:"6%",  width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.13) 0%, transparent 70%)", animation:"floatA 9s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"20%", right:"4%", width:"180px", height:"180px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.09) 0%, transparent 70%)", animation:"floatB 12s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"18%", left:"15%", width:"140px", height:"140px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.10) 0%, transparent 70%)", animation:"floatC 7s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"12%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.07) 0%, transparent 70%)", animation:"floatD 14s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Grain texture */}
      <svg width="0" height="0" style={{ position:"absolute" }}>
        <defs>
          <filter id="compliance-grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
            <feComponentTransfer in="blended"><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", filter:"url(#compliance-grain)", background:"#1B4332", opacity:0.55 }} />

      {/* Content */}
      <div style={{ position:"relative", textAlign:"center", maxWidth:"680px", zIndex:1 }}>

        {/* Badge */}
        <div
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s",
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(197,216,45,0.12)", border: "1px solid rgba(197,216,45,0.3)",
            borderRadius: "999px", padding: "6px 18px", marginBottom: "28px",
          }}
        >
          <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#C5D82D", display:"inline-block" }} />
          <span style={{ color:"#C5D82D", fontSize:"12px", fontWeight:600, letterSpacing:"0.08em" }}>
            SEBI Compliance
          </span>
        </div>

        {/* Animated heading */}
        <h1 style={{ color:"#ffffff", fontSize:"clamp(32px,5vw,58px)", fontWeight:800, fontFamily:"serif", lineHeight:1.15, margin:"0 0 8px" }}>
          <span style={{ display:"block" }}>
            {line1Chars.map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  whiteSpace: ch === " " ? "pre" : undefined,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(22px)",
                  transition: `opacity 0.5s ease ${0.18 + i * 0.03}s, transform 0.5s ease ${0.18 + i * 0.03}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </span>
          <span style={{ display:"block", position:"relative", width:"fit-content", margin:"0 auto" }}>
            {limeChars.map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  color: "#C5D82D",
                  whiteSpace: ch === " " ? "pre" : undefined,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(22px)",
                  transition: `opacity 0.5s ease ${0.45 + i * 0.04}s, transform 0.5s ease ${0.45 + i * 0.04}s`,
                }}
              >
                {ch}
              </span>
            ))}
            <span
              style={{
                display: "block",
                height: "4px",
                borderRadius: "2px",
                background: "#C5D82D",
                width: heroVisible ? "100%" : "0%",
                transition: "width 0.7s cubic-bezier(0.22,1,0.36,1) 1.1s",
                marginTop: "4px",
              }}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "clamp(14px,1.8vw,17px)",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "24px auto 0",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        >
          As a SEBI Registered Research Analyst, we publish our investor complaint disclosures monthly — in full transparency and accordance with regulatory guidelines.
        </p>

        {/* Stats row */}
        <div
          style={{
            display:"flex", gap:"0", justifyContent:"center", flexWrap:"wrap",
            background:"rgba(255,255,255,0.05)", borderRadius:"20px",
            border:"1px solid rgba(255,255,255,0.08)", overflow:"hidden",
            maxWidth:"520px", margin:"36px auto 0",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease 1s, transform 0.6s ease 1s",
          }}
        >
          {[
            { label: "SEBI Reg. No.", value: "INH000026114" },
            { label: "Open Complaints", value: "0" },
            { label: "Compliance Officer", value: "Rohit Kumar" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                flex:"1 1 120px", padding:"18px 14px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                textAlign:"center",
              }}
            >
              <p style={{ color:"#C5D82D", fontSize:"18px", fontWeight:800, margin:"0 0 4px" }}>{s.value}</p>
              <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"10px", margin:0, textTransform:"uppercase", letterSpacing:"0.07em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rolling wave */}
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, overflow:"hidden", lineHeight:0, pointerEvents:"none", height:"80px" }}>
        <div style={{ display:"flex", width:"200%", height:"80px", animation:"waveRoll 7s linear infinite" }}>
          {[0, 1].map((i) => (
            <svg key={i} viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ width:"50%", height:"80px", flexShrink:0, display:"block" }}>
              <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}
