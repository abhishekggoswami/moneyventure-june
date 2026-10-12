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
  const [disclaimerDetailsOpen, setDisclaimerDetailsOpen] = useState(false)
  const [paymentDetailsOpen, setPaymentDetailsOpen] = useState(false)
  const [paymentAlertTop, setPaymentAlertTop] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Show the original full disclaimer once per session.
    if (!sessionStorage.getItem("mv_disclaimer_seen")) {
      setDisclaimerOpen(true)
    }
  }, [])

  useEffect(() => {
    function updatePaymentAlertPosition() {
      const navbar = document.querySelector<HTMLElement>("[data-site-navbar]")
      const navbarBottom = navbar?.getBoundingClientRect().bottom ?? 72
      setPaymentAlertTop(Math.round(Math.max(0, navbarBottom) + 40))
    }

    updatePaymentAlertPosition()
    window.addEventListener("resize", updatePaymentAlertPosition)
    window.addEventListener("scroll", updatePaymentAlertPosition, { passive: true })

    return () => {
      window.removeEventListener("resize", updatePaymentAlertPosition)
      window.removeEventListener("scroll", updatePaymentAlertPosition)
    }
  }, [])

  function acceptDisclaimer() {
    sessionStorage.setItem("mv_disclaimer_seen", "1")
    setDisclaimerOpen(false)
  }

  return (
    <>
      {pathname === "/" && (
        <>
          {/* Phone: keep the alert available without covering the hero. */}
          <aside className="fixed right-4 top-32 z-30 sm:hidden" aria-label="Payment safety alert">
            <button
              type="button"
              onClick={() => setPaymentDetailsOpen((open) => !open)}
              aria-expanded={paymentDetailsOpen}
              aria-controls="payment-alert-details-mobile"
              aria-label="Open payment safety notice"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B4332] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5D82D] focus-visible:ring-offset-2"
              style={{ border: "1px solid rgba(197,216,45,0.9)" }}
            >
              <AlertTriangle className="h-5 w-5 text-[#C5D82D]" aria-hidden="true" />
            </button>

            {paymentDetailsOpen && (
              <div id="payment-alert-details-mobile" className="absolute right-0 top-14 w-72 rounded-2xl bg-white p-4 text-sm leading-relaxed text-[#1B4332] shadow-xl" style={{ border: "1px solid rgba(197,216,45,0.8)" }}>
                <div className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B4332]" aria-hidden="true" />
                  <p>All payments for Money Ventures services must be made only on the official Money Ventures Payments page. Do not use personal links, third-party accounts, or any other payment page.</p>
                </div>
                <Link href="/payment" className="mt-4 inline-flex rounded-lg bg-[#C5D82D] px-3.5 py-2 text-xs font-bold text-[#1B4332] transition-colors hover:bg-[#D6E94A]">
                  Go to Payments Page
                </Link>
              </div>
            )}
          </aside>

          {/* Tablet and desktop: compact frosted-glass alert. */}
          <aside
            className="fixed right-5 z-30 hidden w-[290px] sm:block"
            style={{ top: paymentAlertTop ?? 156 }}
            aria-label="Payment safety alert"
          >
            <div
              className="overflow-hidden rounded-xl"
              style={{
                background: "rgba(20, 60, 43, 0.76)",
                border: "1px solid rgba(197,216,45,0.72)",
                boxShadow: "0 12px 30px rgba(3, 20, 12, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                backdropFilter: "blur(18px) saturate(135%)",
              }}
            >
              <button
                type="button"
                onClick={() => setPaymentDetailsOpen((open) => !open)}
                aria-expanded={paymentDetailsOpen}
                aria-controls="payment-alert-details-desktop"
                className="flex w-full items-center justify-between gap-2.5 bg-white/[0.03] px-3 py-2.5 text-left transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#C5D82D] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                    <AlertTriangle className="h-3.5 w-3.5 text-[#1B4332]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-[#C5D82D]">Important</span>
                    <span className="block text-[12px] font-bold leading-tight text-white">Payment safety notice</span>
                  </span>
                </span>
                <ChevronDown
                  className="h-4 w-4 flex-shrink-0 text-[#C5D82D] transition-transform duration-200"
                  style={{ transform: paymentDetailsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                />
              </button>

              {paymentDetailsOpen && (
                <div id="payment-alert-details-desktop" className="border-t border-white/10 px-3 py-3 text-xs leading-relaxed text-white/90">
                  <div className="flex gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5D82D]" aria-hidden="true" />
                    <p>All payments for Money Ventures services must be made only on the official Money Ventures Payments page. Do not use personal links, third-party accounts, or any other payment page.</p>
                  </div>
                  <Link href="/payment" className="mt-3 inline-flex rounded-lg bg-[#C5D82D] px-3 py-1.5 text-[11px] font-bold text-[#1B4332] transition-colors hover:bg-[#D6E94A]">
                    Go to Payments Page
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </>
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
        className="relative flex max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-3xl shadow-2xl sm:max-w-2xl"
        style={{ border: "2px solid #C5D82D" }}
      >
        {/* Dark green header — gradient lightens toward centre so logo is clearly visible */}
        <div
          className="flex flex-shrink-0 flex-col items-center gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:pb-6 sm:pt-8"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, #2d6e4e 0%, #1B4332 70%)",
          }}
        >
          <Image
            src="/images/money-ventures-logo-new.png"
            alt="Money Ventures Research logo"
            width={180}
            height={60}
            className="h-auto w-[130px] object-contain sm:w-[180px]"
          />
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest"
            style={{ background: "rgba(197,216,45,0.15)", border: "1px solid rgba(197,216,45,0.4)", color: "#C5D82D" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5D82D]" />
            Important Disclaimer
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto bg-white px-5 py-4 sm:px-8 sm:py-6">

          {/* Phone: show the key risks first; the complete policy remains available on demand. */}
          <div className="sm:hidden">
            <p className="text-sm leading-relaxed text-[#436257]">
              Please read these important investment and account-safety notes before continuing.
            </p>
            <div className="mt-3 rounded-xl border border-[#1B4332]/10 bg-[#f1f7f2] p-3">
              <p className="text-xs font-bold text-[#1B4332]">Market risk &amp; account safety</p>
              <p className="mt-1 text-xs leading-relaxed text-[#527066]">
                Investments are subject to market risks. We never guarantee returns, and you must never share your trading login, password or OTP.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDisclaimerDetailsOpen((open) => !open)}
              aria-expanded={disclaimerDetailsOpen}
              className="mt-3 flex w-full items-center justify-between rounded-lg px-1 py-1.5 text-left text-xs font-bold text-[#1B4332]"
            >
              {disclaimerDetailsOpen ? "Hide full disclaimer" : "Read full disclaimer"}
              <ChevronDown
                className="h-4 w-4 text-[#68850b] transition-transform duration-200"
                style={{ transform: disclaimerDetailsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              />
            </button>
            {disclaimerDetailsOpen && (
              <ol className="mt-2 space-y-2 border-t border-[#1B4332]/10 pt-3">
                {DISCLAIMER_POINTS.map((point, i) => (
                  <li key={i} className="flex gap-2 text-[11px] leading-relaxed text-[#4a655a]">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-[9px] font-bold text-white">{i + 1}</span>
                    {point}
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Disclaimer heading */}
          <div
            className="mb-4 hidden rounded-md px-3 py-1.5 text-sm font-bold text-white sm:inline-block"
            style={{ background: "#1B4332" }}
          >
            Disclaimer:
          </div>

          {/* Points */}
          <ol className="hidden sm:mb-6 sm:block sm:space-y-3">
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
            className="hidden space-y-2 rounded-2xl p-5 sm:block"
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
        <div className="flex flex-shrink-0 items-center justify-center border-t border-gray-100 bg-white px-5 py-3.5 sm:px-8 sm:py-5">
          <button
            onClick={acceptDisclaimer}
            className="rounded-xl px-8 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 sm:px-10 sm:py-3"
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
