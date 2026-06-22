"use client"

import { ArrowUpRight, Zap, LineChart, Wheat, BellRing, ShieldCheck, BadgeCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeaturesSection } from "./features-section"

export function HeroSection() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          MOBILE HERO  — portrait-first, premium research focus
          Hidden on lg+ screens
      ═══════════════════════════════════════════════════════ */}
      <section className="block lg:hidden relative bg-[#0a140f]">

        {/* Hero image block — fixed aspect, not full-viewport (prevents scroll jank) */}
        <div className="relative w-full" style={{ aspectRatio: "3 / 4", maxHeight: "78vh" }}>

          {/* Background image */}
          <Image
            src="/images/hero-mobile.jpg"
            alt="Professional finance advisor at Money Ventures Research"
            fill
            sizes="100vw"
            className="object-cover object-[60%_top] pointer-events-none select-none"
            priority
            draggable={false}
          />

          {/* Readability scrim — darker at bottom where text sits */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(8,20,14,0.55) 0%,
                rgba(8,20,14,0.25) 28%,
                rgba(8,20,14,0.45) 52%,
                rgba(8,20,14,0.85) 78%,
                rgba(8,20,14,0.97) 100%
              )`,
            }}
          />
          {/* Left-side vignette to lift text off the photo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(100deg, rgba(8,20,14,0.7) 0%, rgba(8,20,14,0.15) 45%, transparent 70%)" }}
          />

          {/* Top badge */}
          <div className="absolute top-4 left-5 z-10">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-sm"
              style={{ background: "rgba(8,20,14,0.5)", border: "1px solid rgba(197,216,45,0.45)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5D82D]" />
              <span className="text-[#C5D82D] text-[10px] font-bold tracking-wide uppercase">SEBI Registered RA</span>
            </div>
          </div>

          {/* Bottom-anchored headline + copy */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6">
            <p className="text-[#C5D82D]/80 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">
              Money Ventures Research
            </p>
            <h1
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(38px, 11vw, 52px)", lineHeight: 1.05, textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
            >
              <span className="block">Trade Smarter,</span>
              <span className="block text-[#C5D82D]">Earn More.</span>
            </h1>
          </div>
        </div>

        {/* Content panel below the image — dark green, premium */}
        <div className="px-5 pt-6 pb-10" style={{ background: "linear-gradient(180deg, #0a140f 0%, #0d1f14 100%)" }}>

          {/* Proprietor byline */}
          <p className="text-white/45 text-[12px] font-medium mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-white/25 flex-shrink-0" />
            Rohit Kumar, Proprietor — Money Venture Research
          </p>

          {/* Description */}
          <p className="text-white/70 text-[14px] leading-relaxed mb-6">
            Expert research calls for Intraday, Options &amp; Commodities — delivered directly to your inbox daily.
          </p>

          {/* Primary CTA — animated glass shimmer + cycling text */}
          <Link
            href="/contact"
            className="cta-research group relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#D4AF37] to-[#C5D82D] text-[#1B4332] font-bold text-[15px] px-6 py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform overflow-hidden"
          >
            {/* Glassmorphism sweep */}
            <span aria-hidden="true" className="cta-shimmer" />
            {/* Cycling text */}
            <span className="relative inline-flex h-[20px] overflow-hidden">
              <span className="cta-text-track flex flex-col items-center">
                <span className="h-[20px] flex items-center whitespace-nowrap">Get Research Access</span>
                <span className="h-[20px] flex items-center whitespace-nowrap">Start Trading Smarter</span>
                <span className="h-[20px] flex items-center whitespace-nowrap">Join 1000+ Traders</span>
                <span className="h-[20px] flex items-center whitespace-nowrap">Get Research Access</span>
              </span>
            </span>
            <ArrowUpRight className="cta-arrow relative w-4 h-4 flex-shrink-0" />
          </Link>
          <style>{`
            @keyframes ctaShimmer {
              0%   { transform: translateX(-150%) skewX(-20deg); }
              60%, 100% { transform: translateX(260%) skewX(-20deg); }
            }
            .cta-shimmer {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 40%;
              background: linear-gradient(100deg, transparent, rgba(255,255,255,0.5), transparent);
              animation: ctaShimmer 3.2s ease-in-out infinite;
              pointer-events: none;
            }
            @keyframes ctaTextCycle {
              0%, 26%    { transform: translateY(0); }
              33%, 59%   { transform: translateY(-20px); }
              66%, 92%   { transform: translateY(-40px); }
              100%       { transform: translateY(-60px); }
            }
            .cta-text-track {
              animation: ctaTextCycle 7.5s cubic-bezier(0.65,0,0.35,1) infinite;
            }
            @keyframes ctaArrow {
              0%, 100% { transform: translate(0,0); }
              50%      { transform: translate(3px,-3px); }
            }
            .cta-arrow { animation: ctaArrow 1.6s ease-in-out infinite; }
            .cta-research:hover .cta-arrow { animation-duration: 0.8s; }
            @media (prefers-reduced-motion: reduce) {
              .cta-shimmer, .cta-text-track, .cta-arrow { animation: none; }
              .cta-text-track { transform: translateY(0); }
            }
          `}</style>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            {[
              { label: "SEBI", sub: "Regulated" },
              { label: "10+", sub: "Yrs Exp." },
              { label: "3", sub: "Programs" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 py-3.5 rounded-xl"
                style={{ background: "rgba(197,216,45,0.06)", border: "1px solid rgba(197,216,45,0.14)" }}
              >
                <span className="text-[#C5D82D] font-extrabold text-base leading-none">{stat.label}</span>
                <span className="text-white/45 text-[10px] font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What we offer — compact premium list */}
        <div
          className="px-5 pt-8 pb-12"
          style={{ background: "linear-gradient(180deg, #0d1f14 0%, #102818 100%)", borderTop: "1px solid rgba(197,216,45,0.1)" }}
        >
          <p className="text-[#C5D82D]/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">What We Offer</p>
          <h2 className="text-white font-bold text-xl leading-tight mb-5">
            Everything you need to trade with confidence
          </h2>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(27,67,50,0.45) 0%, rgba(13,31,20,0.65) 100%)",
              border: "1px solid rgba(197,216,45,0.14)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
            }}
          >
            {[
              { title: "Intraday Research", desc: "Daily actionable calls", Icon: Zap },
              { title: "Options Strategy", desc: "Index & stock setups", Icon: LineChart },
              { title: "Commodity Calls", desc: "MCX precision levels", Icon: Wheat },
              { title: "Live Alerts", desc: "Real-time entry & exit", Icon: BellRing },
              { title: "SEBI Compliant", desc: "Fully regulated RA", Icon: ShieldCheck },
              { title: "Verified Track Record", desc: "Transparent results", Icon: BadgeCheck },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className="offer-row group flex items-center gap-3.5 px-4 py-3.5"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <span
                  className="inline-flex w-9 h-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#C5D82D]"
                  style={{ perspective: "600px" }}
                >
                  <span
                    className="offer-icon"
                    style={{ transformStyle: "preserve-3d", transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)", display: "inline-flex" }}
                  >
                    <item.Icon className="w-4 h-4 text-[#1B4332]" strokeWidth={2.5} />
                  </span>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-[14px] leading-tight">{item.title}</p>
                  <p className="text-white/45 text-[12px] leading-snug">{item.desc}</p>
                </div>
                <ArrowUpRight className="offer-arrow w-4 h-4 text-[#C5D82D]/50 flex-shrink-0" />
              </div>
            ))}
          </div>
          <style>{`
            .offer-row:hover .offer-icon { transform: rotateY(180deg); }
            .offer-row:hover .offer-arrow { color: rgba(197,216,45,1); transform: translate(2px,-2px); }
            .offer-arrow { transition: transform 250ms ease, color 250ms ease; }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP / TABLET HERO  �� unchanged, hidden below lg
      ═══════════════════════════════════════════════════════ */}
      <section className="hidden lg:block relative min-h-[850px] overflow-visible">


        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/images/hero-finance2.jpg"
            alt="Finance professionals reviewing investment documents"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
            draggable={false}
          />
        </div>
        <div
          className="absolute left-0 top-0 w-[60%] h-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 120% 100% at -10% 50%,
              rgba(20,60,38,0.97) 0%, rgba(27,67,50,0.92) 22%,
              rgba(30,72,54,0.78) 42%, rgba(35,80,58,0.48) 62%,
              rgba(40,85,62,0.18) 78%, transparent 92%)`,
          }}
        />
        <div
          className="absolute left-[32%] top-0 w-[28%] h-full pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(27,67,50,0.28) 0%, transparent 100%)", filter: "blur(36px)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-48">
          <div className="max-w-xl">
            <div className="hero-word mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-[#C5D82D] animate-pulse" />
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">SEBI Registered Research Analyst</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-4">
              <span className="hero-word block" style={{ animationDelay: "0.25s" }}>Trade Smarter,</span>
              <span className="hero-word block" style={{ animationDelay: "0.45s" }}><span className="cycle-word">Earn More.</span></span>
            </h1>
            {/* Proprietor byline */}
            <p className="hero-sub text-white/45 text-sm font-medium mb-4 flex items-center gap-2.5" style={{ animationDelay: "0.6s" }}>
              <span className="w-5 h-px bg-white/25 flex-shrink-0" />
              Rohit Kumar, Proprietor — Money Venture Research
            </p>

            <p className="hero-sub text-white/75 text-lg leading-relaxed mb-10 max-w-sm">
              SEBI-registered research calls across Intraday, Options &amp; Commodities — delivered daily to serious traders.
            </p>
            <div className="hero-btn flex items-center gap-4">
              <Link
                href="/contact"
                className="cta-research group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C5D82D] text-[#1B4332] font-bold text-[15px] px-7 py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform overflow-hidden"
              >
                <span aria-hidden="true" className="cta-shimmer" />
                <span className="relative inline-flex h-[20px] overflow-hidden">
                  <span className="cta-text-track flex flex-col items-center">
                    <span className="h-[20px] flex items-center whitespace-nowrap">Get Research Access</span>
                    <span className="h-[20px] flex items-center whitespace-nowrap">Start Trading Smarter</span>
                    <span className="h-[20px] flex items-center whitespace-nowrap">Join 1000+ Traders</span>
                    <span className="h-[20px] flex items-center whitespace-nowrap">Get Research Access</span>
                  </span>
                </span>
                <ArrowUpRight className="cta-arrow relative w-4 h-4 flex-shrink-0" />
              </Link>
              <Link href="/contact" className="hero-word text-white/70 hover:text-white text-sm font-semibold underline underline-offset-4 transition-colors" style={{ animationDelay: "1.5s" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
          <FeaturesSection />
        </div>
      </section>
    </>
  )
}
