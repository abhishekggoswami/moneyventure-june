"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ChevronDown, ShieldCheck } from "lucide-react"
import { usePathname } from "next/navigation"


const DISCLAIMER_POINTS = [
  "Investment in securities market are subject to market risks. Read all related documents carefully before investing.",
  "Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.",
  "Money Ventures Research makes no commitment, representation, warranty or guarantee as to the accuracy, completeness or performance of any services or information provided through website/email. We do not provide profit-sharing or portfolio management services.",
  "Do not share your DEMAT/Trading account login details (User ID, password, OTP, etc.) with anyone. Sharing such details may lead to financial fraud and is strictly prohibited.",
  "Past performance of any calls or recommendations made by us is not necessarily indicative of future results. All investment decisions must be taken independently by the investor.",
]

export function DisclaimerModal() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)
  const [paymentDetailsOpen, setPaymentDetailsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show the original full disclaimer once per session.
    if (!sessionStorage.getItem("mv_disclaimer_seen")) {
      setDisclaimerOpen(true)
    }
  }, [])

  function acceptDisclaimer() {
    sessionStorage.setItem("mv_disclaimer_seen", "1")
    setDisclaimerOpen(false)
  }

  return (
    <>
      {pathname === "/" && (
        <aside className="fixed right-3 top-32 z-30 w-[280px] max-w-[calc(100%-1.5rem)] sm:right-6 sm:w-[calc(100%-3rem)] sm:max-w-sm" aria-label="Payment safety alert">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl" style={{ border: "1px solid rgba(197,216,45,0.8)" }}>
            <button
              type="button"
              onClick={() => setPaymentDetailsOpen((open) => !open)}
              aria-expanded={paymentDetailsOpen}
              aria-controls="payment-alert-details"
              className="flex w-full items-center justify-between gap-2.5 bg-[#1B4332] px-3 py-2.5 text-left sm:gap-3 sm:px-4 sm:py-3.5"
            >
              <span className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#C5D82D] sm:h-8 sm:w-8">
                  <AlertTriangle className="h-3.5 w-3.5 text-[#1B4332] sm:h-4 sm:w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-[#C5D82D] sm:text-[10px] sm:tracking-[0.16em]">Important</span>
                  <span className="block text-[13px] font-bold leading-tight text-white sm:text-sm">Payment safety notice</span>
                </span>
              </span>
              <ChevronDown
                className="h-4 w-4 flex-shrink-0 text-[#C5D82D] transition-transform duration-200 sm:h-5 sm:w-5"
                style={{ transform: paymentDetailsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              />
            </button>

            {paymentDetailsOpen && (
              <div id="payment-alert-details" className="px-3 py-3 text-xs leading-relaxed text-[#1B4332] sm:px-4 sm:py-4 sm:text-sm">
                <div className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1B4332] sm:h-5 sm:w-5" aria-hidden="true" />
                  <p>
                    All payments for Money Ventures services must be made only on the official Money Ventures Payments page. Do not use personal links, third-party accounts, or any other payment page.
                  </p>
                </div>
                <Link href="/payment" className="mt-3 inline-flex rounded-lg bg-[#C5D82D] px-3 py-1.5 text-[11px] font-bold text-[#1B4332] transition-colors hover:bg-[#D6E94A] sm:mt-4 sm:px-3.5 sm:py-2 sm:text-xs">
                  Go to Payments Page
                </Link>
              </div>
            )}
          </div>
        </aside>
      )}

      {disclaimerOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(10, 26, 18, 0.75)", backdropFilter: "blur(4px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Important disclaimer"
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
            onClick={acceptDisclaimer}
            className="px-10 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "#1B4332" }}
          >
            Yes, I Agree
          </button>
        </div>
      </div>
        </div>
      )}
    </>
  )
}
