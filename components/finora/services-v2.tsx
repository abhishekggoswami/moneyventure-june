"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowUpRight, Zap, TrendingUp, BarChart3, Crown, Sparkles } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

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
  accentColor: string
  tagline: string
  description: string
  coreOfferings: string[]
  philosophy: string
  tiers: PricingTier[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: ServiceData[] = [
  {
    id: "equity",
    label: "Equity",
    shortLabel: "Equity",
    icon: <Zap className="w-5 h-5" />,
    accentColor: "#C5D82D",
    tagline: "Intraday & Swing Trading Strategies.",
    description:
      "Built for traders who prefer action over waiting, this program capitalises on short-term market movements with precision entry, clarity on exit — and zero unnecessary noise. Every opportunity is derived from a structured process blending market behaviour, volume dynamics, and high-probability setups.",
    coreOfferings: [
      "Defined Capital Framework with optimal position sizing",
      "Consistent trade flow across the month",
      "Instant trade communication via fast channels",
      "Pure intraday focus — no overnight exposure",
      "Dynamic market tracking with live updates",
    ],
    philosophy:
      "Success in intraday trading is less about prediction and more about discipline. Every trade carries clearly defined risk parameters, strict stop-loss adherence, and calculated targets — capital preservation first, consistent compounding second.",
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
    accentColor: "#C5D82D",
    tagline: "Index & Stock Futures Trading.",
    description:
      "A high-intensity research program for traders who want to operate confidently in the futures segment. The strategy builds a consistent trading framework with opportunities identified, managed, and optimised with discipline across both index and stock futures.",
    coreOfferings: [
      "Index & stock futures coverage",
      "High-activity trade flow with multiple monthly setups",
      "Structured capital deployment with balanced allocation",
      "Real-time execution alerts via fast channels",
      "Continuous session monitoring with dynamic adjustments",
    ],
    philosophy:
      "In futures trading, survival comes before success. Every recommendation follows a disciplined structure with predefined risk levels, controlled exposure, and a clear exit plan. Consistency — not speculation — is the goal.",
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
    accentColor: "#C5D82D",
    tagline: "Index & Stock Options Strategies.",
    description:
      "Designed for traders who want to tap into high-probability opportunities in the options segment. The focus is on capturing price movements across index and stock options with precision and discipline — identifying momentum early, aligning with strong trends, and executing with a structured plan.",
    coreOfferings: [
      "Dual-segment coverage: stock & index options",
      "High-activity trade flow with multiple monthly setups",
      "Structured capital deployment with balanced allocation",
      "Real-time execution alerts via fast channels",
      "Active trade monitoring with guidance during market hours",
    ],
    philosophy:
      "Options markets move fast and unforgiving. Every trade is defined with pre-determined entry levels, strict stop-loss discipline, and logical target zones. The focus remains on minimising downside while allowing profitable trades to unfold systematically.",
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

// ─── Bundle Data ──────────────────────────────────────────────────────────────

const BUNDLE_PERIODS: { key: BundlePeriod; label: string; price: number }[] = [
  { key: "quarterly",  label: "Quarterly",   price: 90000  },
  { key: "halfyearly", label: "Half-Yearly", price: 150000 },
]

const BUNDLE_INCLUDED = [
  { name: "Equity", desc: "Intraday Cash Plus & Intraday Cash Pro strategies", icon: <Zap className="w-4 h-4" /> },
  { name: "Futures",       desc: "Index & stock futures with strategic entry & exit levels", icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Options", desc: "Stock Option Plus & Index Option Pro strategies", icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Priority Support",           desc: "Dedicated analyst support across all programs", icon: <Crown className="w-4 h-4" /> },
]

// ─── Bundle Card ──────────────────────────────────────────────────────────────

function BundleCard() {
  const [bp, setBp] = useState<BundlePeriod>("quarterly")
  const opt   = BUNDLE_PERIODS.find(o => o.key === bp)!
  const total = opt.price
  const months = bp === "quarterly" ? 3 : 6
  const perMonth = Math.round(total / months)

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
      {/* Dark green header */}
      <div className="bg-[#1B4332] px-5 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left — identity */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C5D82D] flex items-center justify-center flex-shrink-0 shadow-lg">
              <Crown className="w-7 h-7 text-[#1B4332]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5D82D]" />
                <span className="text-[#C5D82D] text-xs font-bold uppercase tracking-widest">Best Value</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                All in One Wealth Package
              </h3>
              <p className="text-white/60 text-sm mt-1">Every program. One subscription. Zero compromise.</p>
            </div>
          </div>

          {/* Right — period toggle + price */}
          <div className="flex flex-col items-start md:items-end gap-3">
            {/* Period toggle */}
            <div className="inline-flex items-center gap-1 bg-white/10 rounded-full p-1">
              {BUNDLE_PERIODS.map(o => (
                <button
                  key={o.key}
                  onClick={() => setBp(o.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    bp === o.key
                      ? "bg-[#C5D82D] text-[#1B4332]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {o.label}
                  {o.key === "halfyearly" && bp === o.key && (
                    <span className="ml-1.5 bg-[#1B4332] text-[#C5D82D] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      Best Deal
                    </span>
                  )}
                </button>
              ))}
            </div>
            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="text-[#C5D82D] text-3xl sm:text-4xl font-black leading-none break-all">
                &#8377;{total.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-white/40 text-xs">
              billed {opt.label.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Included programs grid */}
      <div className="px-5 sm:px-8 py-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-5">
          {"What's Included"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {BUNDLE_INCLUDED.map(item => (
            <div
              key={item.name}
              className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#F7F9F5] px-5 py-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1B4332] flex items-center justify-center flex-shrink-0 text-[#C5D82D]">
                {item.icon}
              </div>
              <div>
                <p className="text-[#1B4332] text-sm font-bold leading-tight">{item.name}</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
          <Link href="/contact" className="flex items-center gap-3 bg-[#1B4332] hover:bg-[#163828] text-white font-bold px-8 py-3.5 rounded-2xl transition-all duration-200 text-sm">
            Contact to Enroll
            <span className="w-6 h-6 rounded-full bg-[#C5D82D] flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1B4332]" />
            </span>
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Cancel anytime. SEBI compliant. No hidden charges.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Period Toggle ────────────────────────────────────────────────────────────

function PeriodToggle({
  period,
  onChange,
}: {
  period: Period
  onChange: (p: Period) => void
}) {
  const options: { value: Period; label: string; save?: string }[] = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly", save: "Save 10%" },
    { value: "yearly", label: "Half-Yearly", save: "Save 25%" },
  ]

  return (
    <div className="inline-flex items-center gap-1 bg-[#F0F4EE] rounded-full p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            period === opt.value
              ? "bg-[#1B4332] text-white shadow-sm"
              : "text-[#1B4332] hover:bg-white/60"
          }`}
        >
          {opt.label}
          {opt.save && period === opt.value && (
            <span className="absolute -top-2 -right-1 bg-[#C5D82D] text-[#1B4332] text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {opt.save}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({
  tier,
  period,
  accentColor,
}: {
  tier: PricingTier
  period: Period
  accentColor: string
}) {
  const price =
    period === "monthly"
      ? tier.monthly
      : period === "quarterly"
      ? tier.quarterly
      : tier.yearly

  const periodLabel =
    period === "monthly" ? "/mo" : period === "quarterly" ? "/qtr" : "/half-yr"
  const features = getTierFeatures(tier, period)

  return (
    <div
      className={`relative rounded-3xl flex flex-col transition-all duration-300 overflow-hidden group ${
        tier.highlighted
          ? "bg-gradient-to-br from-[#1B4332] to-[#2d5a48] text-white shadow-2xl hover:shadow-[0_32px_72px_rgba(27,67,50,0.35),0_0_40px_rgba(197,216,45,0.15)]"
          : "bg-white text-[#1B4332] border border-gray-100 shadow-md hover:shadow-[0_16px_40px_rgba(0,0,0,0.12),0_0_30px_rgba(197,216,45,0.1)]"
      }`}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = tier.highlighted ? "translateY(-10px) scale(1.03)" : "translateY(-8px)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = "translateY(0) scale(1)"
      }}
      style={{ transition: "all 300ms cubic-bezier(0.22,1,0.36,1)" }}
    >
      {/* Popular badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#C5D82D] text-[#1B4332] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Decorative arc */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
        style={{ background: accentColor }}
      />

      <div className="p-5 sm:p-7 flex flex-col flex-1">
        {/* Plan name */}
        <div className="mb-5">
          <div
            className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
              tier.highlighted
                ? "bg-white/15 text-white"
                : "bg-[#1B4332]/10 text-[#1B4332]"
            }`}
          >
            {tier.name}
          </div>
          <p
            className={`text-xs ${
              tier.highlighted ? "text-white/60" : "text-gray-400"
            }`}
          >
            {tier.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-dashed" style={{ borderColor: tier.highlighted ? "rgba(255,255,255,0.2)" : "#e5e7eb" }}>
          <div className="flex items-end gap-1 flex-wrap">
            <span className="text-2xl sm:text-3xl font-black break-all">
              ₹{price.toLocaleString("en-IN")}
            </span>
            <span
              className={`text-sm mb-1 ${
                tier.highlighted ? "text-white/60" : "text-gray-400"
              }`}
            >
              {periodLabel}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <div
                className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                  tier.highlighted ? "bg-[#C5D82D]" : "bg-[#1B4332]"
                }`}
              >
                <Check
                  className={`w-2.5 h-2.5 ${
                    tier.highlighted ? "text-[#1B4332]" : "text-white"
                  }`}
                />
              </div>
              <span className={tier.highlighted ? "text-white/85" : "text-gray-600"}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`group relative w-full py-3.5 rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-300 ${
            tier.highlighted
              ? "bg-[#C5D82D] text-[#1B4332] hover:bg-white"
              : "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
          }`}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.transform = "scale(1.04)"
            el.style.boxShadow = tier.highlighted 
              ? "0 12px 32px rgba(197,216,45,0.35)" 
              : "0 8px 24px rgba(27,67,50,0.25)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.transform = "scale(1)"
            el.style.boxShadow = "none"
          }}
          style={{ transition: "all 200ms cubic-bezier(0.22,1,0.36,1)" }}
        >
          <span className="flex items-center justify-center gap-2">
            Choose Plan
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>
    </div>
  )
}

// ─── Service Tab Button ───────────────────────────────────────────────────────

function ServiceTab({
  service,
  active,
  onClick,
}: {
  service: ServiceData
  active: boolean
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  function handleClick() {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        transform: isPressed
          ? "translateY(4px) scale(0.97)"
          : active
          ? "scale(1.04)"
          : "scale(1)",
        boxShadow: isPressed
          ? "0 1px 2px rgba(0,0,0,0.15)"
          : active
          ? "0 12px 28px rgba(27,67,50,0.22)"
          : isHovered
          ? "0 6px 16px rgba(0,0,0,0.10)"
          : "0 2px 6px rgba(0,0,0,0.06)",
        transition: "transform 150ms ease, box-shadow 150ms ease",
      }}
      className={`group w-full sm:w-auto flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 ${
        active
          ? "bg-[#1B4332] border-[#1B4332] text-white"
          : "bg-white border-gray-100 text-[#1B4332] hover:border-[#1B4332]/40"
      }`}
    >
      {/* Icon orb — circle stays still, only icon rotates on hover */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
          active ? "bg-[#C5D82D]" : "bg-[#1B4332]/10 group-hover:bg-[#C5D82D]/30"
        }`}
        style={{ perspective: "600px" }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 300ms ease",
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
            color: "#1B4332",
          }}
        >
          {service.icon}
        </div>
      </div>

      <span className="text-sm font-bold whitespace-nowrap">{service.shortLabel}</span>

      {active && (
        <div className="w-6 h-0.5 rounded-full bg-[#C5D82D]" />
      )}
    </button>
  )
}

// ─── Bundle Tab ───────────────────────────────────────────────────────────────

function CrownOutlineIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 19h20M4 19l2-8 6 4 4-7 4 7 2-4 2 8H4z" />
    </svg>
  )
}

function BundleTab({ active, onClick }: { active: boolean; onClick: () => void }) {
  const [isHovered, setIsHovered]   = useState(false)
  const [isPressed, setIsPressed]   = useState(false)

  function handleClick() {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        transform: isPressed
          ? "translateY(4px) scale(0.97)"
          : active
          ? "scale(1.04)"
          : "scale(1)",
        boxShadow: isPressed
          ? "0 1px 2px rgba(0,0,0,0.15)"
          : active
          ? "0 12px 28px rgba(197,216,45,0.35)"
          : isHovered
          ? "0 6px 16px rgba(0,0,0,0.10)"
          : "0 2px 6px rgba(0,0,0,0.06)",
        transition: "transform 150ms ease, box-shadow 150ms ease",
      }}
      className={`group w-full sm:w-auto flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 ${
        active
          ? "bg-[#C5D82D] border-[#C5D82D] text-[#1B4332]"
          : "bg-white border-gray-100 text-[#1B4332] hover:border-[#C5D82D]/60"
      }`}
    >
      {/* Icon orb — same structure as ServiceTab, rotateY(180deg) on hover */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
          active
            ? "bg-[#1B4332]"
            : "bg-[#1B4332]/10 group-hover:bg-[#C5D82D]/30"
        }`}
        style={{ perspective: "600px" }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 300ms ease",
            transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
            color: active ? "#C5D82D" : "#1B4332",
          }}
        >
          <CrownOutlineIcon />
        </div>
      </div>

      <span className="text-sm font-bold whitespace-nowrap">Bundle</span>

      {active && (
        <div className="w-6 h-0.5 rounded-full bg-[#1B4332]" />
      )}
    </button>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ServicesV2() {
  const [activeId, setActiveId] = useState<string>("equity")

  const isBundle  = activeId === "bundle"
  const active    = !isBundle ? services.find((s) => s.id === activeId)! : services[0]

  return (
    <section className="py-24 bg-[#F7F9F5] relative overflow-hidden">
      {/* Animated diagonal square grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(27,67,50,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27,67,50,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "gridMoveDiagonal 6s linear infinite",
        }}
      />
      <style>{`
        @keyframes gridMoveDiagonal {
          0%   { background-position: 0px 0px; }
          100% { background-position: -40px 40px; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium mb-5">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-[#1B4332] leading-tight mb-4">
            Research Programs Built for<br className="hidden md:block" /> Serious Traders
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Select a program below to explore what&apos;s included and choose the
            plan that fits your trading horizon.
          </p>
        </div>

        {/* Service selector tabs — 2x2 grid on mobile, row on desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-14">
          {services.map((s) => (
            <ServiceTab
              key={s.id}
              service={s}
              active={s.id === activeId}
              onClick={() => setActiveId(s.id)}
            />
          ))}

          {/* Bundle tab — matches ServiceTab pattern exactly */}
          <BundleTab active={activeId === "bundle"} onClick={() => setActiveId("bundle")} />
        </div>

        {/* Mobile-only scroll hint */}
        <div className="flex sm:hidden items-center justify-center gap-2 mb-10">
          <div className="h-px w-8 bg-gray-300" />
          <p className="text-[11px] text-gray-400 font-medium tracking-wide text-center">
            Select a service to explore plans &amp; pricing
          </p>
          <div className="h-px w-8 bg-gray-300" />
        </div>

        {/* Bundle view */}
        {isBundle && <BundleCard />}

        {/* Regular service details */}
        {!isBundle && (
        <div
          key={activeId}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10 border border-gray-100"
        >
          {/* Service hero strip */}
          <div className="bg-[#1B4332] px-5 sm:px-8 py-8 md:flex md:items-start md:justify-between gap-8">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                {active.label}
              </h3>
              <p className="text-[#C5D82D] font-semibold text-sm tracking-wide mb-4">
                {active.tagline}
              </p>
              <p className="text-white/75 text-sm leading-relaxed max-w-xl">
                {active.description}
              </p>
            </div>

            {/* Core offerings pill list */}
            <div className="flex-shrink-0 md:w-72">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
                Core Offerings
              </p>
              <ul className="flex flex-col gap-2">
                {active.coreOfferings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[#C5D82D] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#1B4332]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Philosophy strip */}
          <div className="px-5 sm:px-8 py-5 bg-[#F0F4EE] border-t border-b border-[#1B4332]/10">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
              Philosophy
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{active.philosophy}</p>
          </div>

          {/* Pricing area */}
          <div className="px-5 sm:px-8 py-10">
            <div className="mb-8">
              <h4 className="text-lg font-bold text-[#1B4332]">Choose Your Access Plan</h4>
              <p className="text-sm text-gray-400">
                {active.tiers.length > 1 
                  ? "Select a plan tier and billing period below" 
                  : "All plans include full access to this program"}
              </p>
            </div>

            {/* Show all tiers for multi-tier services (Equity, Options) */}
            {active.tiers.length > 1 ? (
              <div className="space-y-10">
                {active.tiers.map((tier, tierIndex) => {
                  const periods = (["monthly", "quarterly", "yearly"] as Period[]).filter(
                    (p) => !(p === "monthly" && tier.monthly === 0)
                  )
                  return (
                    <div key={tier.name} className="relative">
                      {/* Tier header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <span className={`inline-block px-4 py-2 rounded-xl text-sm font-bold ${
                            tier.highlighted 
                              ? "bg-[#1B4332] text-white" 
                              : "bg-[#F0F4EE] text-[#1B4332] border border-gray-200"
                          }`}>
                            {tier.name}
                          </span>
                          {tier.badge && (
                            <span className="bg-[#C5D82D] text-[#1B4332] text-xs font-bold px-3 py-1 rounded-full">
                              {tier.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{tier.tagline}</p>
                      </div>
                      
                      {/* Pricing cards for this tier */}
                      <div className={`grid grid-cols-1 gap-5 ${periods.length === 2 ? "md:grid-cols-2 max-w-2xl" : "md:grid-cols-3"}`}>
                        {periods.map((p) => {
                          const price = p === "monthly" ? tier.monthly : p === "quarterly" ? tier.quarterly : tier.yearly
                          const periodLabel = p === "monthly" ? "Monthly" : p === "quarterly" ? "Quarterly" : "Half-Yearly"
                          const saving = p === "quarterly" ? "Save 10%" : p === "yearly" ? "Save 25%" : undefined
                          const isHighlighted = p === "quarterly"
                          const features = getTierFeatures(tier, p)
                          
                          return (
                            <div
                              key={p}
                              className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                                isHighlighted
                                  ? "bg-[#1B4332] text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                                  : "bg-white text-[#1B4332] border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                              }`}
                            >
                              {/* Period badge */}
                              <div className="flex items-center justify-between mb-4">
                                <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                                  isHighlighted ? "bg-white/15 text-white" : "bg-[#F0F4EE] text-[#1B4332]"
                                }`}>
                                  {periodLabel}
                                </span>
                                {saving && (
                                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                    isHighlighted ? "bg-[#C5D82D] text-[#1B4332]" : "bg-[#C5D82D]/20 text-[#1B4332]"
                                  }`}>
                                    {saving}
                                  </span>
                                )}
                              </div>
                              
                              {/* Price */}
                              <div className="mb-4">
                                <span className="text-2xl sm:text-3xl font-black break-all">
                                  ₹{price.toLocaleString("en-IN")}
                                </span>
                                <span className={`text-sm ml-1 ${isHighlighted ? "text-white/60" : "text-gray-400"}`}>
                                  /{periodLabel.toLowerCase().replace("-", " ")}
                                </span>
                              </div>
                              
                              {/* Features summary */}
                              <ul className={`space-y-2 mb-5 text-sm ${isHighlighted ? "text-white/80" : "text-gray-600"}`}>
                                {features.slice(0, 3).map((f, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                      isHighlighted ? "bg-[#C5D82D]" : "bg-[#1B4332]"
                                    }`} />
                                    <span className="line-clamp-1">{f}</span>
                                  </li>
                                ))}
                                {features.length > 3 && (
                                  <li className={`text-xs ${isHighlighted ? "text-white/50" : "text-gray-400"}`}>
                                    +{features.length - 3} more features
                                  </li>
                                )}
                              </ul>
                              
                              {/* CTA — go to pricing page */}
                              <Link
                                href="/pricing"
                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                isHighlighted
                                  ? "bg-[#C5D82D] text-[#1B4332] hover:bg-white"
                                  : "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                              }`}>
                                Choose Plan
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              /* Single tier services (Futures) — use the SAME card design as multi-tier */
              (() => {
                const tier = active.tiers[0]
                const periods = (["monthly", "quarterly", "yearly"] as Period[]).filter(
                  (p) => !(p === "monthly" && tier.monthly === 0)
                )
                return (
                  <div className="relative">
                    {/* Tier header (matches multi-tier layout) */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="inline-block px-4 py-2 rounded-xl text-sm font-bold bg-[#1B4332] text-white">
                          {tier.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{tier.tagline}</p>
                    </div>

                    <div className={`grid grid-cols-1 gap-5 ${periods.length === 2 ? "md:grid-cols-2 max-w-2xl" : "md:grid-cols-3"}`}>
                      {periods.map((p) => {
                        const price = p === "monthly" ? tier.monthly : p === "quarterly" ? tier.quarterly : tier.yearly
                          const periodLabel = p === "monthly" ? "Monthly" : p === "quarterly" ? "Quarterly" : "Half-Yearly"
                          const saving = p === "quarterly" ? "Save 10%" : p === "yearly" ? "Save 25%" : undefined
                          const isHighlighted = p === "quarterly"
                          const features = getTierFeatures(tier, p)

                        return (
                          <div
                            key={p}
                            className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                              isHighlighted
                                ? "bg-[#1B4332] text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                                : "bg-white text-[#1B4332] border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            }`}
                          >
                            {/* Period badge */}
                            <div className="flex items-center justify-between mb-4">
                              <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                                isHighlighted ? "bg-white/15 text-white" : "bg-[#F0F4EE] text-[#1B4332]"
                              }`}>
                                {periodLabel}
                              </span>
                              {saving && (
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                  isHighlighted ? "bg-[#C5D82D] text-[#1B4332]" : "bg-[#C5D82D]/20 text-[#1B4332]"
                                }`}>
                                  {saving}
                                </span>
                              )}
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                              <span className="text-2xl sm:text-3xl font-black break-all">
                                ₹{price.toLocaleString("en-IN")}
                              </span>
                              <span className={`text-sm ml-1 ${isHighlighted ? "text-white/60" : "text-gray-400"}`}>
                                /{periodLabel.toLowerCase().replace("-", " ")}
                              </span>
                            </div>

                            {/* Features summary */}
                            <ul className={`space-y-2 mb-5 text-sm ${isHighlighted ? "text-white/80" : "text-gray-600"}`}>
                              {features.slice(0, 3).map((f, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    isHighlighted ? "bg-[#C5D82D]" : "bg-[#1B4332]"
                                  }`} />
                                  <span className="line-clamp-1">{f}</span>
                                </li>
                              ))}
                              {features.length > 3 && (
                                <li className={`text-xs ${isHighlighted ? "text-white/50" : "text-gray-400"}`}>
                                  +{features.length - 3} more features
                                </li>
                              )}
                            </ul>

                            {/* CTA — go to pricing page */}
                            <Link
                              href="/pricing"
                              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                isHighlighted
                                  ? "bg-[#C5D82D] text-[#1B4332] hover:bg-white"
                                  : "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                              }`}
                            >
                              Choose Plan
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })()
            )}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
