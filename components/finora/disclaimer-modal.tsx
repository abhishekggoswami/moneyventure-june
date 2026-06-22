"use client"

import { useState, useEffect } from "react"
import Image from "next/image"


const DISCLAIMER_POINTS = [
  "Investment in securities market are subject to market risks. Read all related documents carefully before investing.",
  "Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.",
  "Money Ventures Research makes no commitment, representation, warranty or guarantee as to the accuracy, completeness or performance of any services or information provided through website/email. We do not provide profit-sharing or portfolio management services.",
  "Do not share your DEMAT/Trading account login details (User ID, password, OTP, etc.) with anyone. Sharing such details may lead to financial fraud and is strictly prohibited.",
  "Past performance of any calls or recommendations made by us is not necessarily indicative of future results. All investment decisions must be taken independently by the investor.",
]

export function DisclaimerModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show once per session
    const seen = sessionStorage.getItem("mv_disclaimer_seen")
    if (!seen) {
      setOpen(true)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem("mv_disclaimer_seen", "1")
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(10, 26, 18, 0.75)", backdropFilter: "blur(4px)" }}
    >
      {/* Card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
        style={{ border: "2px solid #C5D82D" }}
      >
        {/* Dark green header — gradient lightens toward centre so logo is clearly visible */}
        <div
          className="px-8 pt-8 pb-6 flex flex-col items-center gap-4 flex-shrink-0"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, #2d6e4e 0%, #1B4332 70%)",
          }}
        >
          <Image
            src="/images/money-ventures-logo-new.png"
            alt="Money Ventures Research logo"
            width={180}
            height={60}
            className="object-contain"
          />
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(197,216,45,0.15)", border: "1px solid rgba(197,216,45,0.4)", color: "#C5D82D" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5D82D]" />
            Important Disclaimer
          </div>
        </div>

        {/* Scrollable body */}
        <div className="bg-white overflow-y-auto flex-1 px-8 py-6">

          {/* Disclaimer heading */}
          <div
            className="inline-block px-3 py-1.5 rounded-md text-sm font-bold text-white mb-4"
            style={{ background: "#1B4332" }}
          >
            Disclaimer:
          </div>

          {/* Points */}
          <ol className="space-y-3 mb-6">
            {DISCLAIMER_POINTS.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ background: "#1B4332" }}
                >
                  {i + 1}
                </span>
                {point}
              </li>
            ))}
          </ol>

          {/* Contact + SEBI block */}
          <div
            className="rounded-2xl p-5 space-y-2"
            style={{ background: "#F0F7F3", border: "1px solid rgba(27,67,50,0.12)" }}
          >
            <p className="text-xs font-bold text-[#1B4332] uppercase tracking-widest">
              For Service &amp; Payment Related Assistance:
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#1B4332] font-medium">
              <a href="tel:+919098668268" className="hover:underline">+91 90986 68268</a>
              <span className="text-gray-300 hidden sm:block">|</span>
              <a
                href="mailto:info@moneyventureresearch.com"
                className="hover:underline"
              >
                info@moneyventureresearch.com
              </a>
            </div>
            <p className="text-xs font-bold text-[#1B4332]">
              SEBI Research Analyst Registration No.: INH000026114
            </p>
          </div>
        </div>

        {/* Footer — only "Yes, I Agree" to prevent bypassing */}
        <div className="bg-white border-t border-gray-100 px-8 py-5 flex items-center justify-center flex-shrink-0">
          <button
            onClick={dismiss}
            className="px-10 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "#1B4332" }}
          >
            Yes, I Agree
          </button>
        </div>
      </div>
    </div>
  )
}
