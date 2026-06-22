"use client"

import Image from "next/image"
import Link from "next/link"
import { Send, User, Phone, Mail, Clock, ChevronDown } from "lucide-react"
import { useState } from "react"

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
          {/* Socials */}
          <div className="flex gap-2 mt-1">
            {[
              { label: "X",         path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "Facebook",  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label}
                className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
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
            { label: "Type",            value: "Individual" },
            { label: "Principle Officer", value: "Rohit Kumar" },
            { label: "Compliance Officer", value: "Rohit Kumar" },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest">{label}</span>
              <p className="text-white/60 text-xs mt-0.5">{value}</p>
            </div>
          ))}
        </MobileAccordion>

        <MobileAccordion title="Address">
          <div>
            <p className="text-[#C5D82D] text-[9px] font-bold uppercase tracking-widest mb-0.5">SEBI Local Office</p>
            <p className="text-white/60 text-xs leading-relaxed">1st Floor, Satguru Parinay, 104-105, AB Rd, Opposite C-21 Mall, Scheme No 54, Indore, MP 452010</p>
          </div>
        </MobileAccordion>
      </div>

      {/* Mobile bottom bar */}
      <div className="block md:hidden border-t border-white/10 px-5 py-4">
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
            <div className="flex gap-2">
              {[
                { label: "X",         path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "Facebook",  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C5D82D] transition-colors group">
                  <svg className="w-3 h-3 text-white group-hover:text-[#1B4332]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
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
                <FR icon={<Phone size={12} />}><a href="tel:+919098668268" className="hover:text-[#C5D82D] transition-colors">+91 90986 68268</a></FR>
                <FR icon={<Mail size={12} />}><a href="mailto:info@moneyventureresearch.com" className="hover:text-[#C5D82D] transition-colors break-all">info@moneyventureresearch.com</a></FR>
              </div>
            </div>
            <div>
              <FH>{"Let's Talk"}</FH>
              <div className="space-y-3">
                <FR icon={<Phone size={12} />}><a href="tel:+919098668268" className="hover:text-[#C5D82D] transition-colors">+91 90986 68268</a></FR>
                <FR icon={<Mail size={12} />}><a href="mailto:info@moneyventureresearch.com" className="hover:text-[#C5D82D] transition-colors break-all">info@moneyventureresearch.com</a></FR>
                <FR icon={<Clock size={12} />}>9:00 AM – 6:30 PM (Mon–Fri)</FR>
              </div>
            </div>
          </div>

          {/* Col 3 — Addresses */}
          <div>
            <FH>Office &amp; Address</FH>
            <div className="space-y-4">
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">SEBI Local Office</p>
                <p className="text-white/75 text-sm leading-relaxed">1st Floor, Satguru Parinay, 104-105, AB Rd, Opposite C-21 Mall, Scheme No 54, Indore, MP 452010</p>
              </div>
              <div>
                <p className="text-[#C5D82D] text-xs font-semibold mb-1">Principle Officer</p>
                <p className="text-white text-sm font-medium">Rohit Kumar</p>
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
          <p className="text-white/50 text-sm">
            &copy; 2026 Money Venture Research &middot; SEBI RA INH000026114
          </p>
          <p className="text-white/40 text-sm text-center md:text-right max-w-md leading-relaxed">
            Investments are subject to market risks. Read all documents carefully before investing.
          </p>
        </div>
      </div>
      </div>{/* end desktop block */}

    </footer>
  )
}
