"use client"

import { useRef, useEffect, useState } from "react"
// useState kept for useInView hook
import { Zap, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// ─── Types ────────────────────────────────────────────────────────────────────

type Period = "Monthly" | "Quarterly" | "Yearly"

// ─── Intersection observer hook ───────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN")
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Tier {
  name: string
  tagline: string
  monthly: number
  quarterly: number
  yearly: number
  features: string[]
}

interface ServiceData {
  id: string
  label: string
  shortLabel: string
  icon: React.ReactNode
  tiers: [Tier, Tier, Tier] // basic, popular, premium
}

const services: ServiceData[] = [
  {
    id: "equity",
    label: "Equity",
    shortLabel: "Equity",
    icon: <Zap className="w-5 h-5" />,
    tiers: [
      {
        name: "Intraday Cash Plus",
        tagline: "Entry level access",
        monthly: 12000, quarterly: 30000, yearly: 50000,
        features: [
          "Up to 3 trade ideas / week",
          "Entry, SL & Target levels",
          "Telegram delivery",
          "Basic market commentary",
          "Email support",
        ],
      },
      {
        name: "Intraday Cash Pro",
        tagline: "Most popular",
        monthly: 20000, quarterly: 45000, yearly: 65000,
        features: [
          "Up to 6 trade ideas / week",
          "Entry, SL & Target levels",
          "Priority Telegram + WhatsApp",
          "Daily market brief",
          "Live session monitoring",
          "Dedicated support",
        ],
      },
    ],
  },
  {
    id: "futures",
    label: "Futures",
    shortLabel: "Futures",
    icon: <TrendingUp className="w-5 h-5" />,
    tiers: [
      {
        name: "Futures",
        tagline: "Quarterly & Half-Yearly plans",
        monthly: 0, quarterly: 50000, yearly: 75000,
        features: [
          "Index & stock futures setups",
          "Entry, SL & Target levels",
          "Strike selection guidance",
          "Priority Telegram + WhatsApp",
          "Live adjustment alerts",
          "Dedicated support",
        ],
      },
      {
        name: "Futures",
        tagline: "Quarterly & Half-Yearly plans",
        monthly: 0, quarterly: 50000, yearly: 75000,
        features: [
          "Index & stock futures setups",
          "Entry, SL & Target levels",
          "Strike selection guidance",
          "Priority Telegram + WhatsApp",
          "Live adjustment alerts",
          "Dedicated support",
        ],
      },
    ],
  },
  {
    id: "options",
    label: "Options",
    shortLabel: "Options",
    icon: <BarChart3 className="w-5 h-5" />,
    tiers: [
      {
        name: "Stock Option Plus",
        tagline: "Stock options focus",
        monthly: 17000, quarterly: 35000, yearly: 65000,
        features: [
          "5–8 options setups / month",
          "Strike selection guidance",
          "Stock options focus",
          "Telegram delivery",
          "Email support",
        ],
      },
      {
        name: "Index Option Pro",
        tagline: "Most popular",
        monthly: 20000, quarterly: 45000, yearly: 75000,
        features: [
          "12–18 options setups / month",
          "Index + stock options",
          "Greeks-aware trade rationale",
          "Priority Telegram + WhatsApp",
          "Live adjustment alerts",
          "Dedicated support",
        ],
      },
    ],
  },
]

const PERIOD_LABELS: { key: Period; label: string; saving?: string }[] = [
  { key: "Monthly",   label: "Monthly" },
  { key: "Quarterly", label: "Quarterly", saving: "Save 10%" },
  { key: "Yearly",    label: "Half-Yearly",    saving: "Save 25%" },
]

// ─── Tier Card ────────────────────────────────────────────────────────────────

function TierCard({
  tier,
  period,
  isPopular,
  index,
}: {
  tier: Tier
  period: Period
  isPopular: boolean
  index: number
}) {
  const price =
    period === "Monthly" ? tier.monthly
    : period === "Quarterly" ? tier.quarterly
    : tier.yearly

  const periodSuffix =
    period === "Monthly" ? "/yr" === "/yr" ? "/mo" : "/mo"
    : period === "Quarterly" ? "/qtr"
    : "/yr"

  // simpler suffix logic
  const suffix = period === "Monthly" ? "/mo" : period === "Quarterly" ? "/qtr" : "/half-yr"

  return (
    <div
      style={{
        flex: "1 1 260px",
        maxWidth: "340px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        border: isPopular ? "none" : "1.5px solid #e5e7eb",
        background: isPopular ? "#1B4332" : "#ffffff",
        overflow: "hidden",
        boxShadow: isPopular ? "0 20px 60px rgba(27,67,50,0.25)" : "0 2px 16px rgba(0,0,0,0.06)",
        marginTop: isPopular ? "0" : "16px",
        marginBottom: isPopular ? "0" : "16px",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = "translateY(-5px)"
        el.style.boxShadow = isPopular
          ? "0 28px 70px rgba(27,67,50,0.30)"
          : "0 12px 36px rgba(0,0,0,0.11)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = "translateY(0)"
        el.style.boxShadow = isPopular
          ? "0 20px 60px rgba(27,67,50,0.25)"
          : "0 2px 16px rgba(0,0,0,0.06)"
      }}
    >
      {/* POPULAR badge */}
      {isPopular && (
        <div style={{ textAlign: "center", paddingTop: "18px", paddingBottom: "4px" }}>
          <span style={{
            display: "inline-block",
            background: "#C5D82D",
            color: "#1B4332",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: "999px",
          }}>
            Popular
          </span>
        </div>
      )}

      <div style={{ padding: isPopular ? "20px 28px 28px" : "28px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Plan name badge */}
        <div style={{ marginBottom: "6px" }}>
          <span style={{
            display: "inline-block",
            background: isPopular ? "rgba(255,255,255,0.15)" : "#f3f4f6",
            color: isPopular ? "#ffffff" : "#1B4332",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "8px",
          }}>
            {tier.name}
          </span>
        </div>

        {/* Tagline */}
        <p style={{
          color: isPopular ? "rgba(255,255,255,0.55)" : "#9ca3af",
          fontSize: "13px",
          margin: "0 0 22px",
          lineHeight: 1.5,
        }}>
          {tier.tagline}
        </p>

        {/* Price */}
        <div style={{ marginBottom: "22px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
            <span style={{
              color: isPopular ? "#ffffff" : "#1B4332",
              fontSize: "44px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}>
              {fmt(price)}
            </span>
            <span style={{
              color: isPopular ? "rgba(255,255,255,0.45)" : "#9ca3af",
              fontSize: "14px",
              paddingBottom: "6px",
            }}>
              {suffix}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: isPopular ? "rgba(255,255,255,0.12)" : "#f0f0f0",
          marginBottom: "20px",
          borderStyle: isPopular ? "dashed" : "solid",
          borderWidth: isPopular ? "1px 0 0 0" : "0",
          borderColor: isPopular ? "rgba(255,255,255,0.2)" : "transparent",
        }} />

        {/* Features */}
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 28px",
          display: "flex",
          flexDirection: "column",
          gap: "13px",
          flex: 1,
        }}>
          {tier.features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              {/* Checkmark circle */}
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: isPopular ? "#C5D82D" : "#1B4332",
                flexShrink: 0,
                marginTop: "1px",
              }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke={isPopular ? "#1B4332" : "#ffffff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{
                color: isPopular ? "rgba(255,255,255,0.85)" : "#374151",
                fontSize: "14px",
                lineHeight: 1.5,
              }}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "999px",
            border: isPopular ? "none" : "1.5px solid #d1d5db",
            background: isPopular ? "#C5D82D" : "transparent",
            color: isPopular ? "#1B4332" : "#1B4332",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 190ms ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            if (isPopular) {
              el.style.background = "#d4ef30"
            } else {
              el.style.background = "#1B4332"
              el.style.color = "#ffffff"
              el.style.borderColor = "#1B4332"
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            if (isPopular) {
              el.style.background = "#C5D82D"
              el.style.color = "#1B4332"
            } else {
              el.style.background = "transparent"
              el.style.color = "#1B4332"
              el.style.borderColor = "#d1d5db"
            }
          }}
        >
          Choose Plan
          <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function PricingSection() {
  const { ref, visible } = useInView(0.08)

  // Show 3 highlight cards: Equity (Intraday Cash Pro), Futures (Quarterly), Options (Index Option Pro)
  const cards = [
    { 
      tier: services[0].tiers[1], // Intraday Cash Pro
      period: "Monthly" as Period, 
      isPopular: false,
      displayName: "Intraday Cash Pro",
    },
    { 
      tier: services[1].tiers[0], // Futures (only one tier)
      period: "Quarterly" as Period, 
      isPopular: true,
      displayName: "Futures",
    },
    { 
      tier: services[2].tiers[1], // Index Option Pro
      period: "Yearly" as Period, 
      isPopular: false,
      displayName: "Index Option Pro",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F5]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Section badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            Our Pricing
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 style={{ color: "#1B4332", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, fontFamily: "serif", margin: "0 0 10px", lineHeight: 1.2 }}>
            Choose Your Access Plan
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px", margin: 0 }}>
            Three research programs — Equity, Futures &amp; Options. Monthly, Quarterly and Half-Yearly plans available.
          </p>
        </div>

        {/* 3 cards */}
        <div
          ref={ref}
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {cards.map(({ tier, period, isPopular, displayName }, idx) => {
            const displayTier: Tier = {
              ...tier,
              name: displayName,
            }
            return (
              <TierCard
                key={idx}
                tier={displayTier}
                period={period}
                isPopular={isPopular}
                index={idx}
              />
            )
          })}
        </div>

        {/* View full pricing CTA */}
        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#1B4332] font-semibold text-sm border-b-2 border-[#C5D82D] pb-0.5 hover:opacity-70 transition-opacity"
          >
            View full pricing &amp; bundle deals
          </Link>
        </div>
      </div>
    </section>
  )
}
