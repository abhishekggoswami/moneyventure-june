"use client"

import Image from "next/image"
import Link from "next/link"
import { Send, User, Phone, Mail, MapPin, ChevronDown, X } from "lucide-react"
import { useEffect, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const importantLinks = [
  { label: "Disclaimer",              href: "https://docs.google.com/document/d/19sKrTWmFzpcBQJj-92LWlsD-zisMyw76/edit?usp=sharing&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Escalation Matrix",       href: "https://docs.google.com/document/d/1tyfc6cUXMy5Pq2z8OLFrt1Fs7plY811H/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Code of Conduct",         href: "https://docs.google.com/document/d/1VFhEDLWHSG861yEEJrb-bygKYRbwDOpT/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Audit Status",            href: "https://docs.google.com/document/d/1tfSGhLIU6HHbxol-xMe0x-SsKnnIjCkq/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Disclosures",             href: "https://docs.google.com/document/d/1wGfrzDYvslGfcbUDrv46HH9QcYJUtgOt/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Grievance Redressal",     href: "https://docs.google.com/document/d/1STDLAxGogOwOuJw84VZrOp5NQK4wwYZB/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Annexure B – Complaints", href: "https://docs.google.com/spreadsheets/d/14Y2yEH0b2TKxCj0JiGmHJajGv-p-TmfP/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "Investor Charter",        href: "https://docs.google.com/document/d/1oUlvGD9IzJgN0jgXxF2kW6zs35z6dH57/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
  { label: "PMLA Policy",             href: "https://docs.google.com/document/d/11W8T9xM-7MK98CgHyF8-3GjSZ7Sd5iaa/edit?usp=drive_link&ouid=107049434454860825227&rtpof=true&sd=true" },
]

type PolicyType = "terms" | "privacy"

const policies: Record<PolicyType, { title: string; updated: string; sections: { heading: string; body: string }[] }> = {
  terms: {
    title: "Terms & Conditions",
    updated: "Last updated: September 2026",
    sections: [
      { heading: "Acceptance", body: "By accessing this website or using our services, you agree to these Terms & Conditions and all applicable laws and regulations." },
      { heading: "Research services", body: "Money Venture Research provides research and educational information. Nothing on this website is a guarantee of returns, a promise of performance, or a substitute for your own independent judgement and risk assessment." },
      { heading: "Investor responsibility", body: "Investments in securities are subject to market risks. You are responsible for evaluating the suitability of any information or service for your circumstances before making an investment decision." },
      { heading: "Subscriptions and payments", body: "Prices, service scope and access periods are displayed before purchase. Payments, cancellation and refund requests are handled in accordance with the offer shared at purchase and applicable law." },
      { heading: "Permitted use", body: "Website content, reports and communications are for your personal use only. You may not reproduce, distribute, resell or misuse them without our written permission." },
      { heading: "Contact", body: "For questions about these terms or our services, email info@moneyventureresearch.com or call 09098668268." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    sections: [
      { heading: "Information we collect", body: "We may collect the details you provide through forms, enquiries, subscriptions and payments, such as your name, phone number, email address and transaction-related information." },
      { heading: "How we use information", body: "We use this information to respond to enquiries, provide services, process payments, send requested communications, improve the website and meet legal or regulatory obligations." },
      { heading: "Sharing and security", body: "We do not sell personal information. Information may be shared with service providers or authorities only where required to operate our services, comply with law or protect our rights. We use reasonable safeguards to protect data, but no online system is completely secure." },
      { heading: "Cookies and analytics", body: "The website may use essential cookies and aggregated usage data to help it function and improve. You can manage cookies through your browser settings." },
      { heading: "Your choices", body: "You may request access, correction or deletion of the personal information we hold, subject to legal and regulatory requirements. You can also opt out of non-essential marketing messages at any time." },
      { heading: "Contact", body: "For privacy-related requests, email info@moneyventureresearch.com with the subject line “Privacy Request”." },
    ],
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FH({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">{children}</h4>
      <div className="w-8 h-0.5 bg-[#C5D82D] opacity-70 rounded-full" />
    </div>
  )
}

function FR({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-white/60 mt-0.5 shrink-0">{icon}</span>
      <span className="text-white/80 text-sm leading-relaxed">{children}</span>
    </div>
  )
}

// ─── Accordion group for mobile ───────────────────────────────────────────────

function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-3.5 text-left"
      >
        <span className="text-white font-semibold text-xs uppercase tracking-widest">{title}</span>
        <ChevronDown
          className="w-4 h-4 text-[#C5D82D] transition-transform duration-300 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? "600px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="pb-4 space-y-2.5">{children}</div>
      </div>
    </div>
  )
}

function PolicyModal({ policy, onClose }: { policy: PolicyType; onClose: () => void }) {
  const content = policies[policy]

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = originalOverflow
    }
  }, [onClose])

  return (
    <div className="fixed inset-x-0 bottom-0 top-[94px] z-30 flex items-end justify-center p-3 sm:items-center sm:p-5">
      <button
        type="button"
        aria-label="Close policy"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#0a1a12]/75 backdrop-blur-sm"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={policy + "-policy-title"}
        className="relative flex h-[min(420px,calc(100dvh-116px))] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <header className="flex flex-shrink-0 items-start justify-between gap-4 bg-[#1B4332] px-4 py-4 sm:px-6 sm:py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C5D82D]">Money Venture Research</p>
            <h2 id={policy + "-policy-title"} className="mt-1 text-lg font-bold text-white sm:text-xl">{content.title}</h2>
            <p className="mt-1 text-xs text-white/65">{content.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Please read this policy carefully. It applies to your use of the Money Venture Research website and related services.
          </p>
          <div className="space-y-4">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-sm font-bold text-[#1B4332] sm:text-base">{section.heading}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex flex-shrink-0 justify-end border-t border-gray-100 bg-white px-4 py-3 sm:px-6 sm:py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#1B4332] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#28553f]"
          >
            Close
          </button>
        </footer>
      </section>
    </div>
  )
}

// ─── Desktop Newsletter ───────────────────────────────────────────────────────

function DesktopNewsletter() {
  const [nl, setNl] = useState("")
  return (
    <div>
      <FH>Newsletter</FH>
      <p className="text-white/70 text-sm mb-2 leading-relaxed">Weekly market insights to your inbox.</p>
      <div className="flex gap-1.5">
        <input
          type="email"
          value={nl}
          onChange={e => setNl(e.target.value)}
          placeholder="Your email"
          className="flex-1 bg-[#1a3d28] text-white placeholder-[#4d7a5e] text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-[#C5D82D] min-w-0"
        />
        <button
          onClick={() => { if (nl) { window.location.href = `mailto:info@moneyventureresearch.com?subject=${encodeURIComponent("Newsletter Subscription")}&body=${encodeURIComponent(`Subscribe: ${nl}`)}`; setNl("") } }}
          className="w-8 h-8 bg-[#C5D82D] rounded-lg flex items-center justify-center hover:bg-[#d4e157] transition-colors shrink-0">
          <Send className="w-3 h-3 text-[#1B4332]" />
        </button>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-gradient-to-b from-[#112820] to-[#1e4535]">

      {/* ══ MOBILE FOOTER (hidden on md+) ══ */}
      <div className="block md:hidden px-5 pt-8 pb-4">
        {/* Logo + tagline */}
        <div className="flex flex-col items-start gap-3 mb-6">
          <Image
            src="/images/money-ventures-logo-new.png"
            alt="Money Ventures Research"
            width={110} height={44}
            className="object-contain brightness-0 invert"
          />
          <p className="text-white/55 text-xs leading-relaxed">
            SEBI Registered Research Analyst. Transparent, research-backed investment guidance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[#C5D82D] text-[#1B4332] font-bold px-4 py-2 rounded-full text-xs tracking-wide mt-1"
          >
            Get In Touch &rarr;
          </Link>
        </div>

        {/* Quick contact strip */}
        <div className="flex flex-col gap-1.5 mb-5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
          <a href="tel:+919098668268" className="flex items-center gap-2 text-white/70 text-xs">
            <Phone size={11} className="text-[#C5D82D] flex-shrink-0" /> +91 90986 68268
          </a>
          <a href="mailto:info@moneyventureresearch.com" className="flex items-center gap-2 text-white/70 text-xs break-all">
            <Mail size={11} className="text-[#C5D82D] flex-shrink-0" /> info@moneyventureresearch.com
          </a>
        </div>

        {/* Newsletter */}
        <div className="mb-5">
          <p className="text-white/40 text-[9px] font-bold tracking-widest uppercase mb-2">Weekly Insights Newsletter</p>
          <div className="flex gap-1.5">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-white/8 text-white placeholder-white/25 text-xs px-3 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#C5D82D] min-w-0 border border-white/10"
            />
            <button
              onClick={() => { if (email) { window.location.href = `mailto:info@moneyventureresearch.com?subject=${encodeURIComponent("Newsletter Subscription")}&body=${encodeURIComponent(`Subscribe: ${email}`)}`; setEmail("") } }}
              className="w-9 h-9 bg-[#C5D82D] rounded-xl flex items-center justify-center flex-shrink-0">
              <Send className="w-3.5 h-3.5 text-[#1B4332]" />
            </button>
          </div>
        </div>

        {/* Accordion groups */}
        <MobileAccordion title="Important Links">
          {importantLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="block text-white/60 text-xs leading-relaxed hover:text-[#C5D82D] transition-colors">
              {label}
            </a>
          ))}
        </MobileAccordion>

        <MobileAccordion title="SEBI Registered (RA)">
          {[
            { label: "Registered Name", value: "Money Venture Research" },
            { label: "Reg. No.",        value: "INH000026114" },
            { label: "Enlistment No.",  value: "7067" },
            { label: "Type",            value: "Individual" },
            { label: "Principle Officer", value: "Rohit Kumar" },
            { label: "Compliance Officer", value: "Rohit Kumar" },
            { label: "Contact Person", value: "Rohit Kumar" },
            { label: "Validity", value: "Apr 13, 2026 – Perpetual" },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest">{label}</span>
              <p className="text-white/60 text-xs mt-0.5">{value}</p>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="Compliance & Grievance Officers">
          {["Compliance Officer", "Grievance Officer"].map((role) => (
            <div key={role} className="space-y-1.5">
              <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest">{role}</p>
              <p className="text-white text-xs font-semibold">Rohit Kumar</p>
              <p className="text-white/60 text-xs leading-relaxed">S-23 Sai City Mangliya, Dhabli Mangliya, Indore, Madhya Pradesh 453771</p>
              <a href="tel:+919098668268" className="block text-white/60 text-xs hover:text-[#C5D82D] transition-colors">09098668268</a>
              <a href="mailto:info@moneyventureresearch.com" className="block text-white/60 text-xs break-all hover:text-[#C5D82D] transition-colors">info@moneyventureresearch.com</a>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="Addresses">
          <div>
            <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest mb-0.5">Registered Address</p>
            <p className="text-white/60 text-xs leading-relaxed">23 Sai City Mangliya, Dhabli Mangliya, Indore, Madhya Pradesh 453771</p>
          </div>
          <div>
            <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest mb-0.5">Correspondence Address</p>
            <p className="text-white/60 text-xs leading-relaxed">House No. 03, Laxman Nagar, AB Road, Dewas, Madhya Pradesh 455001</p>
          </div>
          <div>
            <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest mb-0.5">SEBI Local Office</p>
            <p className="text-white/60 text-xs leading-relaxed">1st Floor, Satguru Parinay, 104-105, AB Rd, Opposite C-21 Mall, Scheme No 54, Indore, MP 452010</p>
          </div>
          <div>
            <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest mb-0.5">SEBI Head Office</p>
            <p className="text-white/60 text-xs leading-relaxed">Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400051</p>
          </div>
        </MobileAccordion>
      </div>

      {/* Mobile bottom bar */}
      <div className="block md:hidden border-t border-white/10 px-5 py-4">
        <div className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link href="/terms-and-conditions" className="text-[10px] font-semibold text-white/60 underline underline-offset-4 hover:text-[#C5D82D]">
            Terms &amp; Conditions
          </Link>
          <Link href="/privacy-policy" className="text-[10px] font-semibold text-white/60 underline underline-offset-4 hover:text-[#C5D82D]">
            Privacy Policy
          </Link>
        </div>
        <p className="text-white/35 text-[10px] text-center leading-relaxed">
          &copy; 2026 Money Venture Research &middot; SEBI RA INH000026114
        </p>
        <p className="text-white/25 text-[10px] text-center mt-1 leading-relaxed">
          Investments are subject to market risks. Read all documents carefully.
        </p>
      </div>

      {/* ══ DESKTOP FOOTER (hidden on mobile) ══ */}
      <div className="hidden md:block">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Col 1 — Logo + tagline + socials */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Image
              src="/images/money-ventures-logo-new.png"
              alt="Money Ventures Research"
              width={130}
              height={52}
              className="object-contain brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              SEBI Registered Research Analyst. Transparent, research-backed investment guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C5D82D] text-[#1B4332] font-bold px-5 py-2.5 rounded-full hover:bg-[#d4e157] transition-colors text-xs tracking-wide self-start mt-1"
            >
              Get In Touch &rarr;
            </Link>
          </div>

          {/* Col 2 — Contact: Compliance + Let's Talk */}
          <div className="space-y-7">
            <div>
              <FH>Compliance Officer</FH>
              <div className="space-y-3">
                <FR icon={<User size={12} />}><span className="text-white font-medium">Rohit Kumar</span></FR>
                <FR icon={<MapPin size={12} />}>S-23 Sai City Mangliya, Dhabli Mangliya, Indore, Madhya Pradesh 453771</FR>
                <FR icon={<Phone size={12} />}><a href="tel:+919098668268" className="hover:text-[#C5D82D] transition-colors">09098668268</a></FR>
                <FR icon={<Mail size={12} />}><a href="mailto:info@moneyventureresearch.com" className="hover:text-[#C5D82D] transition-colors break-all">info@moneyventureresearch.com</a></FR>
              </div>
            </div>
            <div>
              <FH>Grievance Officer</FH>
              <div className="space-y-3">
                <FR icon={<User size={12} />}><span className="text-white font-medium">Rohit Kumar</span></FR>
                <FR icon={<MapPin size={12} />}>S-23 Sai City Mangliya, Dhabli Mangliya, Indore, Madhya Pradesh 453771</FR>
                <FR icon={<Phone size={12} />}><a href="tel:+919098668268" className="hover:text-[#C5D82D] transition-colors">09098668268</a></FR>
                <FR icon={<Mail size={12} />}><a href="mailto:info@moneyventureresearch.com" className="hover:text-[#C5D82D] transition-colors break-all">info@moneyventureresearch.com</a></FR>
              </div>
            </div>
          </div>

          {/* Col 3 — Addresses */}
          <div>
            <FH>Office &amp; Address</FH>
            <div className="space-y-4">
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">Registered Address</p>
                <p className="text-white/75 text-sm leading-relaxed">23 Sai City Mangliya, Dhabli Mangliya, Indore, Madhya Pradesh 453771</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">Correspondence Address</p>
                <p className="text-white/75 text-sm leading-relaxed">House No. 03, Laxman Nagar, AB Road, Dewas, Madhya Pradesh 455001</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">SEBI Local Office</p>
                <p className="text-white/75 text-sm leading-relaxed">1st Floor, Satguru Parinay, 104-105, AB Rd, Opposite C-21 Mall, Scheme No 54, Indore, MP 452010</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">SEBI Head Office</p>
                <p className="text-white/75 text-sm leading-relaxed">Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400051</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">Contact Person</p>
                <p className="text-white text-sm font-medium">Rohit Kumar</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">Validity</p>
                <p className="text-white/75 text-sm leading-relaxed">Apr 13, 2026 – Perpetual</p>
              </div>
            </div>
          </div>

          {/* Col 4 — SEBI RA Details */}
          <div>
            <FH>SEBI Registered (RA)</FH>
            <div className="space-y-4">
              {[
                { label: "Registered Name",   value: "Money Venture Research" },
                { label: "Type",              value: "Individual" },
                { label: "SEBI Reg. No.",     value: "INH000026114" },
                { label: "Enlistment No.",    value: "7067" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[#C5D82D] text-xs font-semibold">{label}</p>
                  <p className="text-white/75 text-sm mt-0.5 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 5 — Important Links + Newsletter */}
          <div className="space-y-7">
            <div>
              <FH>Important Links</FH>
              <ul className="grid grid-cols-1 gap-2.5">
                {importantLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-white/75 text-sm hover:text-[#C5D82D] transition-colors leading-relaxed">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <DesktopNewsletter />
          </div>

        </div>
      </div>

      {/* ── Desktop Bottom bar ── */}
      <div className="border-t border-[#1e3d2e]/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-white/50 text-sm">
              &copy; 2026 Money Venture Research &middot; SEBI RA INH000026114
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms-and-conditions" className="text-xs text-white/55 underline underline-offset-4 transition-colors hover:text-[#C5D82D]">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy-policy" className="text-xs text-white/55 underline underline-offset-4 transition-colors hover:text-[#C5D82D]">
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="text-white/40 text-sm text-center md:text-right max-w-md leading-relaxed">
            Investments are subject to market risks. Read all documents carefully before investing.
          </p>
        </div>
      </div>
      </div>{/* end desktop block */}
    </footer>
  )
}
