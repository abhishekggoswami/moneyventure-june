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
        <source src="/videos/compliance-hero-background.mp4" type="video/mp4" />
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

    </section>
  )
}
