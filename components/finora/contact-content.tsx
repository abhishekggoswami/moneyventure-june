"use client"

import { useRef, useEffect, useState } from "react"
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react"

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

const HEADING_LINE1 = "Let's Start a"
const HEADING_LIME  = "Conversation"

const CONTACT_DETAILS = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 90986 68268",
    href: "tel:+919098668268",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "info@moneyventureresearch.com",
    href: "mailto:info@moneyventureresearch.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Working Hours",
    value: "Mon – Fri: 9 AM – 6 PM\nSat: 10 AM – 2 PM",
    href: null,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Office",
    value: "104-105, Satguru Parinay, Opp C-21 Mall, A.B. Road, Indore – 452010, MP",
    href: null,
  },
]

export function ContactContent() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const formBlock = useInView(0.1)
  const infoBlock = useInView(0.1)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.subject || "Enquiry"}] — Money Ventures Research`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@moneyventureresearch.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  /* split heading chars for stagger */
  const line1Chars  = HEADING_LINE1.split("")
  const limeChars   = HEADING_LIME.split("")

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
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
          @keyframes charReveal { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }
          @keyframes underlineGrow { from{width:0;} to{width:100%;} }
        `}</style>

        {/* Floating lime orbs */}
        <div style={{ position:"absolute", top:"8%",  left:"6%",  width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.13) 0%, transparent 70%)", animation:"floatA 9s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"20%", right:"4%", width:"180px", height:"180px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.09) 0%, transparent 70%)", animation:"floatB 12s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"18%", left:"15%", width:"140px", height:"140px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.10) 0%, transparent 70%)", animation:"floatC 7s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"10%", right:"12%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(197,216,45,0.07) 0%, transparent 70%)", animation:"floatD 14s ease-in-out infinite", pointerEvents:"none" }} />

        {/* Grain texture */}
        <svg width="0" height="0" style={{ position:"absolute" }}>
          <defs>
            <filter id="contact-grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
              <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
              <feComponentTransfer in="blended"><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
            </filter>
          </defs>
        </svg>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", filter:"url(#contact-grain)", background:"#1B4332", opacity:0.55 }} />

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
              Get in Touch
            </span>
          </div>

          {/* Animated heading — char-by-char stagger */}
          <h1 style={{ color:"#ffffff", fontSize:"clamp(32px,5vw,58px)", fontWeight:800, fontFamily:"serif", lineHeight:1.15, margin:"0 0 8px" }}>
            {/* Line 1 */}
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
            {/* Line 2 — lime word with animated underline */}
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
            Whether you have a question about our research, services, or subscription plans — our team is ready to help you invest smarter.
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
              { label: "Response Time",   value: "< 24 hrs" },
              { label: "Support Days",    value: "6 Days" },
              { label: "SEBI Reg. No.",   value: "INH000026114" },
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
                <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,10 1440,40 L1440,80 L0,80 Z" fill="#F7F9F5" />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section style={{ background:"#F7F9F5" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Contact Form — 3 cols ── */}
            <div
              ref={formBlock.ref}
              className="lg:col-span-3"
              style={{
                opacity: formBlock.visible ? 1 : 0,
                transform: formBlock.visible ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s",
              }}
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-[#1B4332] mb-1">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Fill in the form and we will get back to you within one business day.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#1B4332]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B4332]">Message Sent!</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Thank you for reaching out. Our team will respond within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }) }}
                      className="mt-2 text-sm text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#C5D82D] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1.5">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Rohit Kumar"
                          className="w-full border border-gray-200 bg-[#F9FCF7] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1.5">Email Address *</label>
                        <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="you@example.com"
                          className="w-full border border-gray-200 bg-[#F9FCF7] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1.5">Phone Number</label>
                        <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                          className="w-full border border-gray-200 bg-[#F9FCF7] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1.5">Subject *</label>
                        <select required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                          className="w-full border border-gray-200 bg-[#F9FCF7] rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all">
                          <option value="">Select a topic</option>
                          <option>Subscription Enquiry</option>
                          <option>Intraday Research</option>
                          <option>Options Strategy</option>
                          <option>Commodity Research</option>
                          <option>SEBI / Compliance</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us how we can help you..."
                        className="w-full border border-gray-200 bg-[#F9FCF7] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all resize-none" />
                    </div>

                    <button type="submit"
                      className="group flex items-center gap-3 bg-[#1B4332] hover:bg-[#C5D82D] text-white hover:text-[#1B4332] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#1B4332]/15">
                      <Send className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Info Panel — 2 cols ── */}
            <div
              ref={infoBlock.ref}
              className="lg:col-span-2 flex flex-col gap-5"
              style={{
                opacity: infoBlock.visible ? 1 : 0,
                transform: infoBlock.visible ? "translateX(0)" : "translateX(40px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              {CONTACT_DETAILS.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    opacity: infoBlock.visible ? 1 : 0,
                    transform: infoBlock.visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.55s ease ${0.25 + i * 0.1}s, transform 0.55s ease ${0.25 + i * 0.1}s`,
                  }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#1B4332]/20 hover:shadow-sm transition-all"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-[#C5D82D]"
                    style={{ background:"linear-gradient(135deg,#1B4332 0%,#2d6a4f 100%)" }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1B4332] uppercase tracking-wide mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-gray-700 hover:text-[#1B4332] transition-colors break-all font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* SEBI block */}
              <div
                className="rounded-2xl p-6 text-white mt-1"
                style={{
                  opacity: infoBlock.visible ? 1 : 0,
                  transform: infoBlock.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.55s ease ${0.25 + CONTACT_DETAILS.length * 0.1}s, transform 0.55s ease ${0.25 + CONTACT_DETAILS.length * 0.1}s`,
                  background: "linear-gradient(135deg,#1B4332 0%,#2d6a4f 45%,#1a3a2a 100%)",
                }}
              >
                <p className="text-xs font-bold text-[#C5D82D] uppercase tracking-widest mb-1">SEBI Registered</p>
                <p className="font-bold text-xl mb-2">INH000026114</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Money Ventures Research is a SEBI Registered Research Analyst. All investment advice is subject to applicable regulations and investor risk profiling.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
