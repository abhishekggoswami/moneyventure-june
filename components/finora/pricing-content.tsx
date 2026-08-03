"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

// ─── Scroll-triggered reveal hook ────────────────────────────────────────────
function useInView(threshold = 0.15) {
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
import {
  Check,
  Zap,
  TrendingUp,
  BarChart3,
  Gem,
  Sparkles,
  ArrowUpRight,
  Shield,
  Star,
} from "lucide-react"


// ─── Shared Types & Data ──────────────────────────────────────────────────────

type Period = "monthly" | "quarterly" | "yearly"
type BundlePeriod = "quarterly" | "halfyearly"

interface PricingTier {
  name: string
  tagline: string
  monthly: number
  quarterly: number
  yearly: number
  features: string[]
  periodFeatures?: Partial<Record<Period, string[]>>
  highlighted: boolean
  badge?: string
}

function getTierFeatures(tier: PricingTier, period: Period) {
  return tier.periodFeatures?.[period] ?? tier.features
}

interface ServiceData {
  id: string
  label: string
  shortLabel: string
  icon: React.ReactNode
  tagline: string
  tiers: PricingTier[]
}

const services: ServiceData[] = [
  {
    id: "equity",
    label: "Equity",
    shortLabel: "Equity",
    icon: <Zap className="w-5 h-5" />,
    tagline: "Intraday & Swing Trading Strategies.",
    tiers: [
      {
        name: "Intraday Cash Plus",
        tagline: "Structured intraday trade guidance for traders who want clear setups and regular market updates.",
        monthly: 12000,
        quarterly: 30000,
        yearly: 50000,
        features: [
          "Up to 3 researched trade setups per week",
          "Clear entry zone, stop-loss and target levels",
          "Risk note with every trade setup",
          "Telegram trade alerts and exit updates",
          "Weekly market outlook and key levels",
          "Email support",
        ],
        periodFeatures: {
          monthly: [
            "Up to 3 researched trade setups per week",
            "Clear entry zone, stop-loss and target levels",
            "Risk note with every trade setup",
            "Telegram trade alerts and exit updates",
            "Weekly market outlook and key levels",
            "Email support",
          ],
          quarterly: [
            "Everything included in the Monthly plan",
            "Personal onboarding call",
            "Trading journal template",
            "Monthly performance review",
            "One additional strategy review session",
          ],
          yearly: [
            "Everything included in the Quarterly plan",
            "Personal risk-management framework",
            "Two additional one-to-one review calls",
            "Priority email support",
            "Subscription price locked for six months",
          ],
        },
        highlighted: false,
      },
      {
        name: "Intraday Cash Pro",
        tagline: "Advanced intraday guidance for active traders who need faster updates, risk support and personalised reviews.",
        monthly: 20000,
        quarterly: 45000,
        yearly: 65000,
        features: [
          "Up to 6 researched trade setups per week",
          "Entry, stop-loss, targets and position-sizing guidance",
          "Priority Telegram and WhatsApp alerts",
          "Active-trade modification and exit updates",
          "Pre-market trading plan and important levels",
          "Weekly trade performance review",
          "Priority support during market hours",
        ],
        periodFeatures: {
          monthly: [
            "Up to 6 researched trade setups per week",
            "Entry, stop-loss, targets and position-sizing guidance",
            "Priority Telegram and WhatsApp alerts",
            "Active-trade modification and exit updates",
            "Pre-market trading plan and important levels",
            "Weekly trade performance review",
            "Priority support during market hours",
          ],
          quarterly: [
            "Everything included in the Monthly plan",
            "Personal onboarding and strategy call",
            "Personalised trading journal template",
            "Monthly one-to-one strategy review",
            "Risk-management and trading-discipline guidance",
          ],
          yearly: [
            "Everything included in the Quarterly plan",
            "Personal trading and risk-management framework",
            "Two additional portfolio or strategy review calls",
            "Priority support throughout the subscription",
            "Subscription price locked for six months",
          ],
        },
        highlighted: true,
        badge: "Popular",
      },
    ],
  },
  {
    id: "futures",
    label: "Futures",
    shortLabel: "Futures",
    icon: <TrendingUp className="w-5 h-5" />,
    tagline: "Index & Stock Futures Trading.",
    tiers: [
      {
        name: "Futures",
        tagline: "Structured index and stock futures guidance for active traders who want researched setups, risk controls and timely trade updates.",
        monthly: 0,
        quarterly: 50000,
        yearly: 75000,
        features: [
          "Researched index and stock futures trade setups",
          "Clear entry zone, stop-loss and target levels",
          "Contract and expiry selection guidance",
          "Position-sizing and risk-management guidance",
          "Priority Telegram and WhatsApp alerts",
          "Active-trade modification and exit updates",
          "Weekly futures market outlook",
          "One personal strategy review every month",
          "Priority support during market hours",
        ],
        periodFeatures: {
          quarterly: [
            "Researched index and stock futures trade setups",
            "Clear entry zone, stop-loss and target levels",
            "Contract and expiry selection guidance",
            "Position-sizing and risk-management guidance",
            "Priority Telegram and WhatsApp alerts",
            "Active-trade modification and exit updates",
            "Weekly futures market outlook",
            "One personal strategy review every month",
            "Priority support during market hours",
          ],
          yearly: [
            "Everything included in the Quarterly plan",
            "Personal onboarding and futures strategy call",
            "Custom risk-management framework",
            "Monthly trade-performance review",
            "Futures trading journal template",
            "Two additional one-to-one strategy sessions",
            "Priority support throughout the subscription",
            "Subscription price locked for six months",
          ],
        },
        highlighted: true,
        badge: "Best Value",
      },
    ],
  },
  {
    id: "options",
    label: "Options",
    shortLabel: "Options",
    icon: <BarChart3 className="w-5 h-5" />,
    tagline: "Index & Stock Options Strategies.",
    tiers: [
      {
        name: "Stock Option Plus",
        tagline: "Focused stock-options guidance for traders who want researched setups, clear risk levels and regular trade updates.",
        monthly: 17000,
        quarterly: 35000,
        yearly: 65000,
        features: [
          "5–8 researched stock-options setups per month",
          "Clear entry zone, stop-loss and target levels",
          "Strike price and expiry selection guidance",
          "Focused coverage of selected stock options",
          "Risk note with every trade setup",
          "Telegram entry, modification and exit alerts",
          "Weekly stock-options watchlist",
          "Email support",
        ],
        periodFeatures: {
          monthly: [
            "5–8 researched stock-options setups per month", "Clear entry zone, stop-loss and target levels", "Strike price and expiry selection guidance", "Focused coverage of selected stock options", "Risk note with every trade setup", "Telegram entry, modification and exit alerts", "Weekly stock-options watchlist", "Email support",
          ],
          quarterly: [
            "Everything included in the Monthly plan", "Personal onboarding call", "Options trading journal template", "Monthly trade-performance review", "One additional strategy-review session", "Guidance on avoiding overtrading and managing risk",
          ],
          yearly: [
            "Everything included in the Quarterly plan", "Personal stock-options risk framework", "Two additional one-to-one review calls", "Quarterly strategy and performance assessment", "Priority email support", "Subscription price locked for six months",
          ],
        },
        highlighted: false,
      },
      {
        name: "Index Option Pro",
        tagline: "Advanced index and stock-options guidance for active traders who require more setups, faster alerts and deeper trade rationale.",
        monthly: 20000,
        quarterly: 45000,
        yearly: 75000,
        features: [
          "12–18 researched options setups per month",
          "Coverage of index and selected stock options",
          "Entry, stop-loss, targets and position-sizing guidance",
          "Strike price and expiry selection guidance",
          "Trade rationale based on volatility and option Greeks",
          "Priority Telegram and WhatsApp alerts",
          "Active-trade modification and exit updates",
          "Weekly options market outlook",
          "Priority support during market hours",
        ],
        periodFeatures: {
          monthly: [
            "12–18 researched options setups per month", "Coverage of index and selected stock options", "Entry, stop-loss, targets and position-sizing guidance", "Strike price and expiry selection guidance", "Trade rationale based on volatility and option Greeks", "Priority Telegram and WhatsApp alerts", "Active-trade modification and exit updates", "Weekly options market outlook", "Priority support during market hours",
          ],
          quarterly: [
            "Everything included in the Monthly plan", "Personal onboarding and options strategy call", "Monthly one-to-one trade review", "Options trading journal and performance tracker", "Risk-management and trading-discipline guidance", "Strategy guidance based on volatility and market conditions",
          ],
          yearly: [
            "Everything included in the Quarterly plan", "Personal options trading and risk-management framework", "Two additional one-to-one strategy sessions", "Quarterly performance and strategy assessment", "Priority support throughout the subscription", "Subscription price locked for six months",
          ],
        },
        highlighted: true,
        badge: "Popular",
      },
    ],
  },
]

const BUNDLE_PERIODS: { key: BundlePeriod; label: string; price: number; months: number }[] = [
  { key: "quarterly",  label: "Quarterly",   price: 90000,  months: 3 },
  { key: "halfyearly", label: "Half-Yearly", price: 150000, months: 6 },
]

const BUNDLE_INCLUDED = [
  { name: "Equity",  desc: "Intraday Cash Plus & Intraday Cash Pro strategies",         icon: <Zap className="w-4 h-4" /> },
  { name: "Futures",        desc: "Index & stock futures with strategic entry & exit levels",       icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Options", desc: "Stock Option Plus & Index Option Pro strategies",         icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Priority Support",            desc: "Dedicated analyst support across all programs",           icon: <Star className="w-4 h-4" /> },
]

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN")
}

// ─── Period Toggle ───────────────────����─��────────────────��───────────���─────────

function PeriodToggle({
  period,
  setPeriod,
}: {
  period: Period
  setPeriod: (p: Period) => void
}) {
  const opts: { key: Period; label: string; note?: string }[] = [
    { key: "monthly",   label: "Monthly" },
    { key: "quarterly", label: "Quarterly", note: "Save ~10%" },
    { key: "yearly",    label: "Half-Yearly",    note: "Save ~25%" },
  ]
  return (
    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-1">
      {opts.map((o) => (
        <button
          key={o.key}
          onClick={() => setPeriod(o.key)}
          style={{
            background: period === o.key ? "#1B4332" : "transparent",
            color: period === o.key ? "#ffffff" : "#6b7280",
            borderRadius: "999px",
            padding: "7px 18px",
            fontSize: "13px",
            fontWeight: period === o.key ? 700 : 500,
            border: "none",
            cursor: "pointer",
            transition: "all 200ms ease",
            whiteSpace: "nowrap",
          }}
        >
          {o.label}
          {o.note && period === o.key && (
            <span
              style={{
                marginLeft: "6px",
                background: "#C5D82D",
                color: "#1B4332",
                fontSize: "9px",
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: "99px",
                verticalAlign: "middle",
              }}
            >
              {o.note}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// ─── Circle animation names per card index ────────────────────────────────────
const CIRCLE_ANIMS = [
  "circFloat0 6s ease-in-out infinite",
  "circFloat1 4.5s ease-in-out infinite",
  "circFloat2 7s ease-in-out infinite",
]

// ─── Single Tier Card ─────────────────────────────────────────────────────────

function TierCard({
  tier,
  period,
  cardIndex,
  animDelay,
}: {
  tier: PricingTier
  period: Period
  cardIndex: number
  animDelay: string
}) {
  const price =
    period === "monthly"
      ? tier.monthly
      : period === "quarterly"
      ? tier.quarterly
      : tier.yearly

  const periodLabel =
    period === "monthly" ? "Monthly" : period === "quarterly" ? "Quarterly" : "Half-Yearly"
  const features = getTierFeatures(tier, period)

  const isPopular = tier.highlighted

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0",
        minWidth: "240px",
        maxWidth: "360px",
        borderRadius: "20px",
        border: isPopular ? "2px solid #1B4332" : "1.5px solid #e5e7eb",
        background: "#ffffff",
        overflow: "hidden",
        boxShadow: isPopular
          ? "0 12px 40px rgba(27,67,50,0.16)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        marginTop: isPopular ? "0px" : "12px",
        marginBottom: isPopular ? "0px" : "12px",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = isPopular
          ? "0 20px 50px rgba(27,67,50,0.22)"
          : "0 10px 30px rgba(0,0,0,0.11)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = isPopular
          ? "0 12px 40px rgba(27,67,50,0.16)"
          : "0 2px 12px rgba(0,0,0,0.06)"
      }}
    >
      {/* Popular banner */}
      {isPopular && (
        <div style={{ background: "#1B4332", padding: "11px 24px", textAlign: "center" }}>
          <span style={{ color: "#ffffff", fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Popular Package
          </span>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", gap: "0", flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Floating lime circle */}
        <div
          style={{
            position: "absolute", top: "-36px", right: "-36px",
            width: "148px", height: "148px", borderRadius: "50%",
            background: "#d6e87a", opacity: 0.48, pointerEvents: "none",
            animation: CIRCLE_ANIMS[cardIndex % CIRCLE_ANIMS.length],
          }}
        />

        {/* Plan name */}
        <div style={{ position: "relative", marginBottom: "10px" }}>
          <span style={{ display: "inline-block", background: "#1B4332", color: "#ffffff", fontSize: "14px", fontWeight: 700, padding: "9px 18px", borderRadius: "8px" }}>
            {tier.name}
          </span>
        </div>

        {/* Tagline */}
        <p style={{ color: "#9ca3af", fontSize: "13px", margin: "0 0 22px", lineHeight: 1.5, position: "relative" }}>
          {tier.tagline}
        </p>

        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "12px", flex: 1, position: "relative" }}>
          {features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#1B4332", flexShrink: 0, marginTop: "6px" }} />
              <span style={{ color: "#374151", fontSize: "14px", lineHeight: 1.55 }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div style={{ height: "1px", background: "#f0f0f0", marginBottom: "20px" }} />

        {/* Price */}
        <div style={{ marginBottom: "6px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", marginBottom: "4px" }}>
            <span style={{ color: "#1B4332", fontSize: "42px", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }}>
              {fmt(price)}
            </span>
            <span style={{ color: "#9ca3af", fontSize: "14px", fontWeight: 400, paddingBottom: "5px" }}>
              /{periodLabel}
            </span>
          </div>
          <p style={{ color: "#6b7280", fontSize: "13px", fontWeight: 600, margin: "0 0 20px" }}>
            {tier.tagline}
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/payment"
          style={{
            display: "block", width: "100%", padding: "14px", borderRadius: "999px",
            border: isPopular ? "none" : "1.5px solid #d1d5db",
            background: isPopular ? "#C5D82D" : "transparent",
            color: "#1B4332", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            cursor: "pointer", transition: "all 190ms ease",
            textAlign: "center", textDecoration: "none",
          }}
        >
          Pay Now →
        </Link>
      </div>
    </div>
  )
}

// ─── Flat Period Card — one card per billing period ───────────────────────────

function PeriodCard({
  tier,
  period,
  periodLabel,
  saving,
  cardIndex,
  groupIndex,
}: {
  tier: PricingTier
  period: Period
  periodLabel: string
  saving?: string
  cardIndex: number
  groupIndex: number
}) {
  const { ref, visible } = useInView(0.1)
  const price =
    period === "monthly" ? tier.monthly
    : period === "quarterly" ? tier.quarterly
    : tier.yearly
  const isHighlighted = period === "quarterly"
  const delay = groupIndex * 0.05 + cardIndex * 0.1
  const features = getTierFeatures(tier, period)

  return (
      <div
        ref={ref}
        style={{
          flex: "1 1 220px",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          border: isHighlighted ? "2px solid #1B4332" : "1px solid #d1d5db",
          background: isHighlighted
            ? "linear-gradient(135deg, #1B4332 0%, #2d5a48 100%)"
            : "#ffffff",
          overflow: "hidden",
          boxShadow: isHighlighted 
            ? "0 16px 48px rgba(27,67,50,0.16), inset 0 1px 0 rgba(255,255,255,0.1)" 
            : "0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
          animation: isHighlighted ? "cardFloat 3s ease-in-out infinite" : "none",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, box-shadow 300ms cubic-bezier(0.22,1,0.36,1), transform 300ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease`,
          alignSelf: "stretch",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = isHighlighted ? "translateY(-8px) scale(1.02)" : "translateY(-6px) scale(1.01)"
          el.style.boxShadow = isHighlighted 
            ? "0 24px 64px rgba(27,67,50,0.24), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 40px rgba(197,216,45,0.15)" 
            : "0 12px 32px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.8)"
          el.style.borderColor = isHighlighted ? "#C5D82D" : "#c7cdd8"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = "translateY(0) scale(1)"
          el.style.boxShadow = isHighlighted 
            ? "0 16px 48px rgba(27,67,50,0.16), inset 0 1px 0 rgba(255,255,255,0.1)" 
            : "0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
          el.style.borderColor = isHighlighted ? "#1B4332" : "#d1d5db"
        }}
      >
      {/* Best Value banner */}
      {isHighlighted && (
        <div style={{ background: "linear-gradient(90deg, rgba(197,216,45,0.15) 0%, rgba(197,216,45,0.25) 50%, rgba(197,216,45,0.15) 100%)", padding: "10px 24px", textAlign: "center", borderBottom: "1px solid rgba(197,216,45,0.3)" }}>
          <span style={{ color: "#C5D82D", fontSize: "10px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", textShadow: "0 0 12px rgba(197,216,45,0.3)" }}>⭐ Best Value</span>
        </div>
      )}

      <div style={{ padding: "24px 24px 20px", display: "flex", flexDirection: "column", flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Background accent for both highlighted and white cards */}
        <div style={{ 
          position: "absolute", 
          top: "-40px", 
          right: "-40px", 
          width: "140px", 
          height: "140px", 
          borderRadius: "50%", 
          background: isHighlighted 
            ? "radial-gradient(circle, rgba(197,216,45,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(197,216,45,0.08) 0%, transparent 70%)", 
          pointerEvents: "none" 
        }} />

        {/* Period label + saving badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", position: "relative" }}>
          <span style={{ 
            display: "inline-block", 
            background: isHighlighted ? "#C5D82D" : "#1B4332", 
            color: isHighlighted ? "#1B4332" : "#ffffff", 
            fontSize: "12px", 
            fontWeight: 700, 
            padding: "6px 14px", 
            borderRadius: "7px",
            boxShadow: isHighlighted ? "0 4px 12px rgba(197,216,45,0.25)" : "none"
          }}>
            {periodLabel}
          </span>
          {saving && (
            <span style={{ 
              fontSize: "11px", 
              fontWeight: 700, 
              color: isHighlighted ? "#C5D82D" : "#1B4332", 
              background: isHighlighted ? "rgba(197,216,45,0.15)" : "#f0f7e6", 
              border: isHighlighted ? "1px solid rgba(197,216,45,0.3)" : "1px solid #C5D82D", 
              padding: "3px 10px", 
              borderRadius: "99px" 
            }}>
              {saving}
            </span>
          )}
        </div>

        {/* Price */}
        <div style={{ marginBottom: "18px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "3px" }}>
            <span style={{ 
              color: isHighlighted ? "#C5D82D" : "#1B4332", 
              fontSize: "40px", 
              fontWeight: 800, 
              lineHeight: 1, 
              letterSpacing: "-0.02em",
              textShadow: isHighlighted ? "0 0 20px rgba(197,216,45,0.3)" : "none"
            }}>{fmt(price)}</span>
            <span style={{ 
              color: isHighlighted ? "rgba(255,255,255,0.7)" : "#9ca3af", 
              fontSize: "13px", 
              paddingBottom: "4px" 
            }}>/{periodLabel}</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          height: "1px", 
          background: isHighlighted ? "rgba(197,216,45,0.2)" : "#f0f0f0", 
          marginBottom: "16px" 
        }} />

        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
              <span style={{ 
                display: "inline-block", 
                width: "5px", 
                height: "5px", 
                borderRadius: "50%", 
                background: isHighlighted ? "#C5D82D" : "#1B4332", 
                flexShrink: 0, 
                marginTop: "6px",
                boxShadow: isHighlighted ? "0 0 8px rgba(197,216,45,0.4)" : "none"
              }} />
              <span style={{ 
                color: isHighlighted ? "rgba(255,255,255,0.85)" : "#374151", 
                fontSize: "13px", 
                lineHeight: 1.5 
              }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/payment"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", 
            padding: "12px", 
            borderRadius: "999px",
            border: isHighlighted ? "none" : "1.5px solid #d1d5db",
            background: isHighlighted ? "#C5D82D" : "transparent",
            color: "#1B4332", 
            fontSize: "11px", 
            fontWeight: 700,
            letterSpacing: "0.14em", 
            textTransform: "uppercase",
            cursor: "pointer", 
            transition: "all 200ms cubic-bezier(0.22,1,0.36,1)",
            textAlign: "center", 
            textDecoration: "none",
            boxShadow: isHighlighted ? "0 8px 20px rgba(197,216,45,0.3)" : "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = isHighlighted ? "#d9eb5e" : "#1B4332"
            el.style.color = isHighlighted ? "#1B4332" : "#ffffff"
            el.style.boxShadow = isHighlighted ? "0 12px 28px rgba(197,216,45,0.4)" : "0 8px 24px rgba(27,67,50,0.2)"
            el.style.transform = "scale(1.02)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = isHighlighted ? "#C5D82D" : "transparent"
            el.style.color = "#1B4332"
            el.style.boxShadow = isHighlighted ? "0 8px 20px rgba(197,216,45,0.3)" : "none"
            el.style.transform = "scale(1)"
          }}
        >
          Pay Now →
        </Link>
      </div>
    </div>
  )
}

// ─── Service Group Block — heading + 3 period cards ───────────────────────────

const PERIOD_CONFIG: { key: Period; label: string; saving?: string }[] = [
  { key: "monthly",   label: "Monthly" },
  { key: "quarterly", label: "Quarterly", saving: "Save ~10%" },
  { key: "yearly",    label: "Half-Yearly",    saving: "Save ~25%" },
]

function PricingPageServiceBlock({
  service,
  index,
}: {
  service: ServiceData
  index: number
}) {
  const { ref, visible } = useInView(0.1)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        marginBottom: "64px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Service heading - redesigned for better appearance */}
      <div style={{ marginBottom: "40px", textAlign: "center", position: "relative" }}>
        {/* Icon badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <div 
            style={{ 
              width: "60px", 
              height: "60px", 
              borderRadius: "16px", 
              background: "linear-gradient(135deg, #1B4332 0%, #2d5a48 100%)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "#C5D82D", 
              flexShrink: 0,
              boxShadow: "0 8px 24px rgba(27,67,50,0.2)",
              cursor: "pointer",
              perspective: "600px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={{ animation: "iconFlip 4s ease-in-out infinite", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s ease", transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d' as any }}>
              {service.icon}
            </div>
          </div>
        </div>
        
        {/* Category title */}
        <h2 style={{ 
          color: "#1B4332", 
          fontSize: "clamp(28px, 4vw, 36px)", 
          fontWeight: 800, 
          margin: "0 0 8px", 
          fontFamily: "serif",
          letterSpacing: "-0.01em",
          animation: "headingPulse 2.5s ease-in-out infinite",
          transformOrigin: "center",
          display: "inline-block"
        }}>
          {service.label}
        </h2>
        
        {/* Tagline with accent */}
        <p style={{ 
          color: "#6b7280", 
          fontSize: "15px", 
          margin: 0,
          fontWeight: 500,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          {service.tagline}
        </p>
        
        {/* Decorative line */}
        <div style={{ 
          width: "80px", 
          height: "2px", 
          background: "linear-gradient(90deg, transparent, #C5D82D, transparent)", 
          margin: "16px auto 0" 
        }} />
      </div>

      {/* Show all tiers for this service */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {service.tiers.map((tier, tierIndex) => {
          // Filter periods: skip monthly if tier.monthly === 0
          const availablePeriods = PERIOD_CONFIG.filter((pc) => {
            if (pc.key === "monthly" && tier.monthly === 0) return false
            return true
          })

          return (
            <div key={tier.name}>
              {/* Tier header - only show if multiple tiers */}
              {service.tiers.length > 1 && (
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px", 
                  marginBottom: "20px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #e5e7eb",
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}>
                  <span style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 700,
                    background: tier.highlighted ? "#1B4332" : "#F0F4EE",
                    color: tier.highlighted ? "#ffffff" : "#1B4332",
                    border: tier.highlighted ? "none" : "1px solid #e5e7eb"
                  }}>
                    {tier.name}
                  </span>
                  {tier.badge && (
                    <span style={{
                      background: "#C5D82D",
                      color: "#1B4332",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "99px"
                    }}>
                      {tier.badge}
                    </span>
                  )}
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>{tier.tagline}</span>
                </div>
              )}

              {/* Cards for available periods */}
              <div style={{ 
                display: "flex", 
                gap: "18px", 
                flexWrap: "wrap", 
                alignItems: "stretch",
                justifyContent: "center",
                perspective: "1200px"
              }}>
                {availablePeriods.map((pc, ci) => (
                  <PeriodCard
                    key={pc.key}
                    tier={tier}
                    period={pc.key}
                    periodLabel={pc.label}
                    saving={pc.saving}
                    cardIndex={ci}
                    groupIndex={index * 10 + tierIndex}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}



// ─── Bundle Pricing Block ─────────────────────────────────────────────────────

function BundlePricingBlock() {
  const { ref, visible } = useInView(0.1)
  const [bp, setBp] = useState<BundlePeriod>("quarterly")
  const opt      = BUNDLE_PERIODS.find((o) => o.key === bp)!
  const total    = opt.price
  const perMonth = Math.round(total / opt.months)

  return (
    <div
      ref={ref}
      className="wp-shell"
      style={{
        marginTop: "24px",
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid rgba(212,175,55,0.28)",
        boxShadow: "0 30px 80px rgba(27,67,50,0.14), 0 10px 30px rgba(212,175,55,0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <style>{`
        @keyframes wpShimmer { 0% { transform: translateX(-120%) skewX(-18deg); } 60%, 100% { transform: translateX(260%) skewX(-18deg); } }
        .wp-tile { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
        .wp-tile:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.5) !important; box-shadow: 0 18px 44px rgba(212,175,55,0.18), 0 6px 16px rgba(27,67,50,0.1) !important; }
        .wp-cta { transition: transform .2s ease, box-shadow .2s ease; }
        .wp-cta:hover { transform: translateY(-3px); box-shadow: 0 18px 44px rgba(212,175,55,0.4), 0 6px 14px rgba(212,175,55,0.22) !important; }
        @media (prefers-reduced-motion: reduce) { .wp-shimmer { animation: none !important; } }
      `}</style>

      {/* Gold top accent line */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #D4AF37, #C5D82D, #D4AF37)", zIndex: 2 }} />

      {/* Header — premium dark green band */}
      <div style={{ position: "relative", zIndex: 1, padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", background: "linear-gradient(135deg, #1B4332 0%, #234d3a 100%)", overflow: "hidden" }}>
        <span aria-hidden="true" className="wp-shimmer" style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "40%", background: "linear-gradient(100deg, transparent, rgba(212,175,55,0.14), transparent)", animation: "wpShimmer 6s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
          <div style={{ width: "46px", height: "46px", borderRadius: "14px", background: "linear-gradient(135deg, #E8C547 0%, #D4AF37 45%, #C5D82D 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 20px rgba(212,175,55,0.35)" }}>
            <Gem style={{ width: "22px", height: "22px", color: "#1B4332" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
              <Sparkles style={{ width: "12px", height: "12px", color: "#D4AF37" }} />
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em" }}>★ Best Value · Flagship</span>
            </div>
            <h3 style={{ color: "#ffffff", fontSize: "clamp(19px,4vw,24px)", fontWeight: 800, fontFamily: "serif", margin: 0 }}>All in One Wealth Package</h3>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px", margin: 0, maxWidth: "340px", position: "relative" }}>
          Every program under one subscription — no juggling multiple plans.
        </p>
      </div>

      {/* Body — light surface */}
      <div style={{ position: "relative", zIndex: 1, padding: "clamp(24px,5vw,40px) clamp(18px,4vw,44px)", display: "flex", gap: "clamp(24px,5vw,44px)", flexWrap: "wrap", background: "linear-gradient(180deg, #ffffff 0%, #f9faf7 100%)" }}>

        {/* Left — toggle + price + CTA */}
        <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", gap: "22px" }}>

          {/* Period toggle */}
          <div style={{ display: "inline-flex", background: "#f1f3ee", border: "1px solid #e6e9e1", borderRadius: "13px", padding: "4px", gap: "4px", alignSelf: "flex-start" }}>
            {BUNDLE_PERIODS.map((o) => (
              <button
                key={o.key}
                onClick={() => setBp(o.key)}
                style={{
                  padding: "9px 20px", borderRadius: "10px", border: "none", cursor: "pointer",
                  fontSize: "12px", fontWeight: 700,
                  background: bp === o.key ? "#1B4332" : "transparent",
                  color: bp === o.key ? "#C5D82D" : "#6b7280",
                  boxShadow: bp === o.key ? "0 6px 16px rgba(27,67,50,0.25)" : "none",
                  transition: "all 200ms ease",
                }}
              >
                {o.label}
              </button>
            ))}
          </div>

          {/* Price */}
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "clamp(40px,9vw,58px)", fontWeight: 800, lineHeight: 1, fontFamily: "serif",
                  color: "#1B4332",
                }}
              >
                &#8377;{total.toLocaleString("en-IN")}
              </span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "8px" }}>
              billed {opt.label.toLowerCase()}
            </p>
          </div>

          <Link
            href="/payment"
            className="wp-cta"
            style={{
              position: "relative", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              background: "linear-gradient(135deg, #E8C547 0%, #D4AF37 25%, #C5D82D 75%, #D4AF37 100%)",
              color: "#1B4332",
              fontWeight: 800, fontSize: "15px",
              padding: "16px 32px", borderRadius: "15px",
              border: "none", cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 12px 28px rgba(212,175,55,0.3), 0 4px 8px rgba(212,175,55,0.15)",
              letterSpacing: "0.3px",
            }}
          >
            <span aria-hidden="true" className="wp-shimmer" style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "45%", background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)", animation: "wpShimmer 5s ease-in-out infinite", pointerEvents: "none" }} />
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Pay Now
              <ArrowUpRight style={{ width: "16px", height: "16px" }} />
            </span>
          </Link>

          <p style={{ color: "#9ca3af", fontSize: "11px", lineHeight: 1.5, margin: 0 }}>
            SEBI compliant. No hidden charges. Reach us before subscribing.
          </p>
        </div>

        {/* Right — included programs */}
        <div style={{ flex: "2 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "#9ca3af", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, margin: 0 }}>
            {"What's included"}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {BUNDLE_INCLUDED.map((item) => (
              <div
                key={item.name}
                className="wp-tile"
                style={{
                  display: "flex", alignItems: "flex-start", gap: "14px",
                  background: "#ffffff",
                  borderRadius: "18px", padding: "16px",
                  border: "1px solid #ececec",
                  boxShadow: "0 8px 24px rgba(27,67,50,0.06)",
                }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, #1B4332 0%, #234d3a 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#C5D82D", boxShadow: "0 6px 16px rgba(27,67,50,0.2)" }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#1B4332", fontSize: "14px", fontWeight: 800, margin: "0 0 4px" }}>{item.name}</p>
                  <p style={{ color: "#6b7280", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "4px", padding: "13px 16px", borderRadius: "14px", background: "#f7f9f5", border: "1px solid #e6e9e1" }}>
            {["SEBI Registered RA", "NISM Certified Analyst", "No Profit Sharing", "Transparent Pricing"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Shield style={{ width: "12px", height: "12px", color: "#1B4332", flexShrink: 0 }} />
                <span style={{ color: "#4b5563", fontSize: "11px", fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const PRICING_LINE1  = "Simple, Transparent"
const PRICING_LIME   = "Pricing"

function PricingHero() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const line1Chars = PRICING_LINE1.split("")
  const limeChars  = PRICING_LIME.split("")

  return (
    <section
      style={{
        minHeight: "65vh",
        background: "linear-gradient(160deg, #122b20 0%, #1B4332 50%, #1a3d2d 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 100px",
        zIndex: 2,
      }}
    >
      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(30px,-40px) scale(1.08);} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-20px,30px) scale(0.94);} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(15px,20px) scale(1.05);} }
        @keyframes floatD { 0%,100%{transform:translate(0,0);}33%{transform:translate(-18px,-22px);}66%{transform:translate(22px,10px);} }
        @keyframes cardCircleFloat { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-6px,8px) scale(1.06);} }
        @keyframes circFloat0 { 0%,100%{transform:translate(0,0) scale(1);}40%{transform:translate(-8px,10px) scale(1.07);}70%{transform:translate(5px,-6px) scale(0.96);} }
        @keyframes circFloat1 { 0%,100%{transform:translate(0,0) scale(1) rotate(0deg);}50%{transform:translate(6px,-10px) scale(1.12) rotate(15deg);} }
        @keyframes circFloat2 { 0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(10px,8px) scale(0.93);}66%{transform:translate(-8px,-5px) scale(1.05);} }
        @keyframes revealUp { from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);} }
        @keyframes waveMove {
          0%   { d: path("M0,32 C180,80 360,-16 540,32 C720,80 900,-16 1080,32 L1080,64 L0,64 Z"); }
          50%  { d: path("M0,48 C180,0  360,80 540,48 C720,0  900,80 1080,48 L1080,64 L0,64 Z"); }
          100% { d: path("M0,32 C180,80 360,-16 540,32 C720,80 900,-16 1080,32 L1080,64 L0,64 Z"); }
        }
      `}</style>

      {/* Floating lime orbs */}
      <div style={{ position:"absolute", top:"8%",  left:"6%",  width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.13) 0%, transparent 70%)", animation:"floatA 9s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"20%", right:"4%", width:"180px", height:"180px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.09) 0%, transparent 70%)", animation:"floatB 12s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"18%", left:"15%", width:"140px", height:"140px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.10) 0%, transparent 70%)", animation:"floatC 7s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"12%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.07) 0%, transparent 70%)", animation:"floatD 14s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Film-grain / noise texture via SVG feTurbulence rendered into a canvas data-URI */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
            <feComponentTransfer in="blended">
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          filter: "url(#grain-filter)",
          background: "#1B4332",
          opacity: 0.55,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", textAlign: "center", maxWidth: "720px", zIndex: 1 }}>

        {/* Badge — fade+slide up */}
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
            SEBI Registered Research Analyst
          </span>
        </div>

        {/* Heading — char-by-char stagger identical to contact page */}
        <h1 style={{ color:"#ffffff", fontSize:"clamp(32px,5vw,58px)", fontWeight:800, fontFamily:"serif", lineHeight:1.15, margin:"0 0 8px" }}>
          {/* Line 1 — white chars */}
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
          {/* Line 2 — lime chars + growing underline */}
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
            {/* Growing underline */}
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

        {/* Subtitle — fade+slide up */}
        <p
          style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "24px auto 36px",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        >
          No hidden charges. No profit-sharing. Choose the program that aligns
          with your trading style and subscribe with confidence.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex", gap: "0", justifyContent: "center", flexWrap: "wrap",
            background: "rgba(255,255,255,0.05)", borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden",
            maxWidth: "560px", margin: "0 auto",
          }}
        >
          {[
            { label: "Research Programs",  value: "3" },
            { label: "Billing Cycles",     value: "Monthly / Quarterly / Yearly" },
            { label: "SEBI Reg. No.",      value: "INH000026114" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: "1 1 140px",
                padding: "20px 16px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#C5D82D", fontSize: "20px", fontWeight: 800, margin: "0 0 4px" }}>{s.value}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", margin: 0, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated wave bottom border */}
      <style>{`
        @keyframes waveRoll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
      `}</style>
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, overflow:"hidden", lineHeight:0, pointerEvents:"none", height:"80px" }}>
        <div style={{ display:"flex", width:"200%", height:"80px", animation:"waveRoll 7s linear infinite" }}>
          {[0, 1].map((i) => (
            <svg key={i} viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ width:"50%", height:"80px", flexShrink:0, display:"block" }}>
              <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,10 1440,40 L1440,80 L0,80 Z" fill="#F7F9F5" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Export ─────────────────────────────────���────────────────────────────

function ToggleReveal({ period, setPeriod }: { period: Period; setPeriod: (p: Period) => void }) {
  const { ref, visible } = useInView(0.2)
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "64px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <PeriodToggle period={period} setPeriod={setPeriod} />
    </div>
  )
}

function BundleHeading() {
  const { ref, visible } = useInView(0.2)
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        paddingTop: "60px",
        marginBottom: "32px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <h2 style={{ color: "#1B4332", fontSize: "28px", fontWeight: 800, fontFamily: "serif", margin: "0 0 8px" }}>
        All in One Wealth Package
      </h2>
      <p style={{ color: "#9ca3af", fontSize: "15px", margin: 0 }}>
        Get all three programs at a bundled price — Monthly, Quarterly, or Half-Yearly.
      </p>
    </div>
  )
}

export function PricingContent() {
  return (
    <>
      <PricingHero />

      <section
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #F7F9F5 0%, #F7F9F5 8%, #f3f7ef 22%, #eef4e8 55%, #e9f0e4 100%)",
          padding: "220px 0 100px",
          marginTop: "-80px",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes pricingGridDrift { from{background-position:0 0;} to{background-position:44px 44px;} }
          @keyframes floatA { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(30px,-40px) scale(1.08);} }
          @keyframes floatB { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-20px,30px) scale(0.94);} }
          @keyframes floatC { 0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(15px,20px) scale(1.05);} }
        `}</style>
        {/* Soft brand-colored ambient glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(27,67,50,0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "floatC 16s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197,216,45,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "floatB 11s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Faint moving grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(27,67,50,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,67,50,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            animation: "pricingGridDrift 20s linear infinite",
            maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          {/* Section intro */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2 style={{ color: "#1B4332", fontSize: "28px", fontWeight: 800, fontFamily: "serif", margin: "0 0 8px" }}>
              Choose Your Program
            </h2>
            <p style={{ color: "#6b7280", fontSize: "15px", margin: 0 }}>
              Three research programs — each available on Monthly, Quarterly, and Yearly plans. No hidden charges.
            </p>
          </div>

          {/* 3 service groups — each with Monthly, Quarterly, Yearly cards */}
          {services.map((service, i) => (
            <PricingPageServiceBlock key={service.id} service={service} index={i} />
          ))}

          {/* Bundle heading */}
          <BundleHeading />
          <BundlePricingBlock />

          {/* Legal note */}
          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "12px",
              lineHeight: 1.6,
              marginTop: "40px",
              maxWidth: "680px",
              margin: "40px auto 0",
            }}
          >
            Investment in securities market are subject to market risks. Read all related documents carefully before investing.
            Registration granted by SEBI and certification from NISM in no way guarantee performance of the Research Analyst
            or provide any assurance of returns to investors. SEBI Research Analyst Registration No.: INH000026114
          </p>
        </div>
      </section>
    </>
  )
}
