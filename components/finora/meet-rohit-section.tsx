"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

// Fires once when the element enters the viewport
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

// Custom SEBI Registered badge — no official SEBI logo used
function SebiBadge({ size = 60 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SEBI Registered Research Analyst"
      role="img"
    >
      {/* Outer shield */}
      <path
        d="M32 4L8 14v18c0 13.3 10.4 25.7 24 28 13.6-2.3 24-14.7 24-28V14L32 4z"
        fill="#1B4332"
      />
      {/* Inner shield highlight */}
      <path
        d="M32 10L12 19v13c0 10.4 8.1 20.1 20 22.3C43.9 52.1 52 42.4 52 32V19L32 10z"
        fill="#163828"
      />
      {/* Gold star ring */}
      <circle cx="32" cy="31" r="13" fill="none" stroke="#C5D82D" strokeWidth="1.5" />
      {/* SEBI letters */}
      <text
        x="32" y="29"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize="8"
        fontWeight="900"
        fill="#C5D82D"
        letterSpacing="0.5"
      >SEBI</text>
      {/* Registered sub-label */}
      <text
        x="32" y="37"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="4.5"
        fontWeight="600"
        fill="#ffffff"
        letterSpacing="0.3"
      >REGISTERED</text>
      {/* Bottom tick */}
      <path d="M26 46l4 4 8-9" stroke="#C5D82D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MeetRohitSection() {
  const { ref: sectionRef, visible } = useInView(0.1)

  // transition helper
  const t = (delay: string, extra = "") =>
    `opacity ${visible ? 1 : 0} transition-all duration-700 ${extra} ${delay}`

  return (
    <section className="bg-white pt-0 pb-20" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes underlineGrow {
          from { background-size: 0% 45%; }
          to   { background-size: 100% 45%; }
        }
        .heading-underline-anim {
          background-image: linear-gradient(120deg, #C5D82D 0%, #d4e157 100%);
          background-repeat: no-repeat;
          background-size: 0% 45%;
          background-position: 0 88%;
          animation: underlineGrow 0.7s cubic-bezier(0.4,0,0.2,1) 0.65s forwards;
        }
      `}</style>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 lg:px-8" style={{ overflow: "visible" }}>

        {/* ── Heading ── */}
        <div
          className="flex flex-col items-center text-center gap-5 pt-16 mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
        >
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            Meet the Founder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-[#1B4332] leading-tight text-balance">
            The Mind and Mission Behind{" "}
            <span className={visible ? "relative inline-block text-[#1B4332] heading-underline-anim" : "relative inline-block text-[#1B4332]"}>
              Money Ventures Research
            </span>
          </h2>
        </div>

        {/* ════════════════════════════════════════
            MOBILE LAYOUT  (hidden on lg+)
        ════════════════════════════════════════ */}
        <div
          className="block lg:hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Hero card — green gradient + glassmorphism sheen, photo on right */}
          <div
            className="founder-hero relative rounded-3xl overflow-hidden mb-4"
            style={{
              minHeight: 340,
              background: "linear-gradient(135deg, #2f6b4f 0%, #1B4332 55%, #0f2a1c 100%)",
              boxShadow: "0 24px 60px rgba(15,42,28,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
              border: "1px solid rgba(197,216,45,0.18)",
            }}
          >
            {/* Animated glassmorphism sheen */}
            <span aria-hidden="true" className="founder-sheen" />
            {/* Soft lime glow accent */}
            <span
              aria-hidden="true"
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(197,216,45,0.22), transparent 70%)" }}
            />

            {/* Photo — large, anchored bottom-right, transparent background shows cleanly */}
            <div className="absolute right-[-4%] bottom-0 w-[62%] h-[108%] pointer-events-none select-none">
              <Image
                src="/images/rohit-founder.png"
                alt="Rohit Kumar"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Text content — left side, max 52% width so it never bleeds over photo */}
            <div className="relative z-10 p-6 flex flex-col justify-between" style={{ minHeight: 340, maxWidth: "52%" }}>
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5D82D] text-[#C5D82D] drop-shadow" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C5D82D]/15 border border-[#C5D82D]/30 px-2.5 py-1 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5D82D]" />
                  <span className="text-[#C5D82D] text-[10px] font-bold tracking-[0.15em] uppercase">SEBI Registered</span>
                </span>
                <p className="text-white/45 text-[9px] font-medium tracking-wider mb-5">INH000026114</p>
                <p className="text-6xl font-black text-white leading-none tracking-tight">
                  10<span className="text-[#C5D82D]">+</span>
                </p>
                <p className="text-white/70 text-xs font-semibold mt-2 leading-snug uppercase tracking-wide">Years of<br />Market Expertise</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="font-bold text-white text-base leading-tight">Rohit Kumar</p>
                <p className="text-[#C5D82D]/80 text-[10px] font-medium mt-1 leading-snug tracking-wide">Founder &amp; Lead Research Analyst</p>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-[#F7F9F5] rounded-3xl p-5 mb-4">
            <svg width="32" height="26" viewBox="0 0 52 40" fill="none" className="mb-3" aria-hidden="true">
              <path
                d="M0 40V24C0 10.667 8 2.667 24 0L25.6 3.2C18.133 5.333 13.6 9.6 12 17.6H20V40H0ZM28 40V24C28 10.667 36 2.667 52 0L53.6 3.2C46.133 5.333 41.6 9.6 40 17.6H48V40H28Z"
                fill="#C5D82D"
              />
            </svg>
            <p className="text-[#1B4332] text-sm font-medium leading-relaxed">
              Rohit personally reviews every call, responds to client queries with genuine care, and never
              hides behind numbers. His SEBI registration is a commitment to transparency, ethical advice,
              and putting your financial growth above all else.
            </p>
          </div>

          {/* Certifications card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-5">
            <p className="text-xs font-bold text-[#1B4332] tracking-widest uppercase mb-4 text-center">Certified By</p>
            <div className="flex items-center justify-around flex-wrap gap-3">
              <SebiBadge size={52} />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-04-25_204305-removebg-preview-iF1S5wwm0iuOehJcJRGzot1JNeiFNq.png"
                alt="SSL Security" width={48} height={48} className="object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kisspng-ministry-of-micro-small-and-medium-enterprises-go-5ae8c47c5a7fd3.5237165715252040923707-removebg-preview-r89p0Jgg3gWenFygpEuaxH1G4GLM5A.png"
                alt="MSME" width={64} height={48} className="object-contain"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0uCrb8cu93kt1BAvAbWE8kCR0xqg4z.png"
                alt="ISO 9001:2015" width={56} height={56} className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            DESKTOP / TABLET LAYOUT  (hidden below lg)
        ════════════════════════════════════════ */}
        <div className="hidden lg:flex flex-row items-stretch" style={{ overflow: "visible" }}>

          {/* ── LEFT COLUMN — Photo ── slides in from left */}
          <div
            className="relative flex-shrink-0 w-full lg:w-[42%]"
            style={{
              minHeight: "640px",
              overflow: "visible",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.75s ease 0.2s, transform 0.75s ease 0.2s",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Faded logo behind */}
              <div className="absolute top-32 right-4 w-44 h-44 opacity-[0.04] pointer-events-none select-none">
                <Image src="/images/money-ventures-logo.png" alt="" fill className="object-contain" />
              </div>

              {/* Photo */}
              <div className="relative">
                <Image
                  src="/images/rohit-founder.png"
                  alt="Rohit Kumar — Founder, Money Ventures Research"
                  width={480}
                  height={520}
                  className="relative z-10 object-contain"
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #FFFFFF 0%, transparent 100%)" }}
                />
              </div>

              {/* Certifications */}
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.6s ease 1.1s, transform 0.6s ease 1.1s",
                }}
              >
                <p className="text-base font-semibold text-[#1B4332] tracking-wide mt-4 mb-5 text-center">
                  We are certified by
                </p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <SebiBadge size={68} />
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-04-25_204305-removebg-preview-iF1S5wwm0iuOehJcJRGzot1JNeiFNq.png" alt="SSL Security" width={60} height={60} className="object-contain" />
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kisspng-ministry-of-micro-small-and-medium-enterprises-go-5ae8c47c5a7fd3.5237165715252040923707-removebg-preview-r89p0Jgg3gWenFygpEuaxH1G4GLM5A.png" alt="MSME" width={80} height={60} className="object-contain" />
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0uCrb8cu93kt1BAvAbWE8kCR0xqg4z.png" alt="ISO 9001:2015" width={70} height={70} className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="w-px self-stretch bg-gray-200 mx-8" />

          {/* ── RIGHT COLUMN ── */}
          <div className="flex-1 py-12 lg:py-20 flex flex-col justify-center">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(60px)",
                transition: "opacity 0.75s ease 0.4s, transform 0.75s ease 0.4s",
              }}
            >
              <div className="mb-8">
                <p className="text-7xl font-black text-[#1B4332] leading-none tracking-tight">10+</p>
                <p className="text-xl font-semibold text-[#6B7B75] mt-2">Years of Market Expertise</p>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-[#C5D82D] text-[#C5D82D]" />)}
              </div>
              <p className="text-sm text-[#8A9A92] font-medium mb-8">SEBI Reg. No. INH000026114</p>
            </div>

            <div className="h-px bg-gray-200 my-10" />

            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
              }}
            >
              <div className="flex gap-5 items-start">
                <svg width="48" height="38" viewBox="0 0 52 40" fill="none" className="flex-shrink-0 mt-1" aria-hidden="true">
                  <path d="M0 40V24C0 10.667 8 2.667 24 0L25.6 3.2C18.133 5.333 13.6 9.6 12 17.6H20V40H0ZM28 40V24C28 10.667 36 2.667 52 0L53.6 3.2C46.133 5.333 41.6 9.6 40 17.6H48V40H28Z" fill="#C5D82D" />
                </svg>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-[#C5D82D] text-[#C5D82D]" />)}
                    <Star className="w-4 h-4 fill-none text-[#C5D82D]" strokeWidth={2} />
                  </div>
                  <p className="text-[#1B4332] text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-md">
                    Rohit personally reviews every call, responds to client queries with genuine care, and never
                    hides behind numbers. His SEBI registration is not just a licence — it is a commitment to
                    transparency, ethical advice, and putting your financial growth above all else.
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-bold text-[#1B4332] text-lg">Rohit Kumar</p>
                    <p className="text-sm text-[#8A9A92] mt-0.5">Founder &amp; Lead Research Analyst at Money Venture Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .founder-sheen {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 45%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent);
          transform: translateX(-160%) skewX(-18deg);
          animation: founderSheen 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 5;
        }
        @keyframes founderSheen {
          0%   { transform: translateX(-160%) skewX(-18deg); }
          55%, 100% { transform: translateX(320%) skewX(-18deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .founder-sheen { animation: none; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
