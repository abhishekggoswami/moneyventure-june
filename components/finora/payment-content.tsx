'use client'

import { Copy, Check, Shield, ChevronRight, Mail, User, Phone, CreditCard, CheckCircle2, ArrowRight, Lock, Banknote, Smartphone } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BANK = [
  { label: "Bank Name",       value: "Kotak Mahindra Bank Ltd" },
  { label: "Account Holder",  value: "Money Venture Research" },
  { label: "Account Number",  value: "2053381648" },
  { label: "IFSC Code",       value: "KKBK0005986" },
]

const UPI_ID = "ro.moneyventure.ra@validkpay"
const RECIPIENT = "info@moneyventureresearch.com"

const PLANS = [
  "Equity — Monthly",
  "Equity — Quarterly",
  "Equity — Half-Yearly",
  "Futures — Monthly",
  "Futures — Quarterly",
  "Futures — Half-Yearly",
  "Options — Monthly",
  "Options — Quarterly",
  "Options — Half-Yearly",
  "All in One Wealth Package — Quarterly",
  "All in One Wealth Package — Half-Yearly",
  "Registration Fee — ₹5,000",
]

export function PaymentContent() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [copied, setCopied] = useState<string | null>(null)
  const [form, setForm] = useState({ name: "", email: "", phone: "", plan: "", txnId: "" })
  const [sending, setSending] = useState(false)

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const subject = encodeURIComponent("Payment Confirmation — Money Venture Research")
    const body = encodeURIComponent(
      `Hi Money Venture Research Team,\n\nI have completed the payment. Below are my details:\n\n` +
      `Full Name     : ${form.name}\n` +
      `Email         : ${form.email}\n` +
      `Phone         : ${form.phone}\n` +
      `Plan Selected : ${form.plan}\n` +
      `Transaction ID: ${form.txnId}\n\n` +
      `NOTE: Please find the payment screenshot attached to this email.\n\n` +
      `Regards,\n${form.name}`
    )
    setTimeout(() => {
      window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
      setSending(false)
      setStep(3)
    }, 600)
  }

  return (
    <section
      className="relative"
      style={{
        /* transparent so the grid in page.tsx shows through */
        background: "transparent",
        padding: "200px 16px 100px",
        marginTop: "-80px",
        zIndex: 1,
      }}
    >
      <style>{`
        @keyframes popIn {
          0%  { opacity: 0; transform: scale(0.94) translateY(20px); }
          100%{ opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes checkPop {
          0%  { transform: scale(0);   }
          70% { transform: scale(1.2); }
          100%{ transform: scale(1);   }
        }
        @keyframes shimmer {
          0%  { background-position: -400px 0; }
          100%{ background-position:  400px 0; }
        }

        /* ── inputs ── */
        .pay-input {
          width: 100%; padding: 12px 14px; border-radius: 10px;
          border: 1.5px solid #dde8e3; background: #f8faf7;
          color: #1B4332; font-size: 14px; font-weight: 500; outline: none;
          transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;
          box-sizing: border-box;
        }
        .pay-input:focus {
          border-color: #1B4332; background: #ffffff;
          box-shadow: 0 0 0 3px rgba(27,67,50,0.09);
        }
        .pay-input::placeholder { color: #a8b8b0; }

        /* ── hover lift ── */
        .pay-lift { transition: transform 220ms ease, box-shadow 220ms ease; }
        .pay-lift:hover { transform: translateY(-2px); }

        /* ── copy row ── */
        .bank-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 11px 14px; border-radius: 12px;
          background: #ffffff; border: 1px solid #e8eee9;
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }
        .bank-row:hover { border-color: #c5d82d; box-shadow: 0 2px 10px rgba(197,216,45,0.15); }

        .copy-btn {
          background: none; border: none; cursor: pointer; padding: 6px;
          border-radius: 7px; color: #6b7280; flex-shrink: 0;
          transition: background 160ms ease, color 160ms ease;
          display: flex; align-items: center;
        }
        .copy-btn:hover { background: #f0f5ee; color: #1B4332; }

        /* ── responsive ── */
        @media (max-width: 700px) {
          .pay-body       { flex-direction: column !important; }
          .pay-qr-col     { border-right: none !important; border-bottom: 1px solid #edf2eb !important; }
          .pay-cols       { flex-direction: column !important; }
          .pay-form-pad   { padding: 22px 16px !important; }
          .pay-header-pad { padding: 18px 16px !important; }
          .pay-success-pad{ padding: 32px 18px 28px !important; }
          .pay-trust-bar  { gap: 10px !important; padding: 12px 10px !important; }
          .pay-btn-row    { flex-direction: column !important; }
          .pay-back-btn   { width: 100% !important; text-align: center; }
          .pay-send-btn   { width: 100% !important; }
        }
      `}</style>

      <div style={{ maxWidth: "920px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>

        {/* ── Step indicator ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[
            { n: 1, label: "Pay" },
            { n: 2, label: "Confirm" },
            { n: 3, label: "Done" },
          ].map(({ n, label }, i) => (
            <div key={n} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: step > n ? "#C5D82D" : step === n ? "#1B4332" : "rgba(255,255,255,0.7)",
                  color:      step > n ? "#1B4332" : step === n ? "#ffffff"  : "#9ca3af",
                  border:     step <= n && step !== n ? "2px solid #e0e7e0" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", fontWeight: 800,
                  transition: "all 380ms cubic-bezier(0.34,1.56,0.64,1)",
                  boxShadow: step === n ? "0 8px 24px rgba(27,67,50,0.28)" : step > n ? "0 4px 12px rgba(197,216,45,0.3)" : "none",
                }}>
                  {step > n ? <Check style={{ width: "17px", height: "17px" }} /> : n}
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: step >= n ? "#1B4332" : "#9ca3af", letterSpacing: "0.07em" }}>{label}</span>
              </div>
              {i < 2 && (
                <div style={{
                  width: "clamp(48px,10vw,96px)", height: "2px", margin: "0 6px", marginBottom: "24px",
                  background: step > n ? "#C5D82D" : "#e0e7e0",
                  transition: "background 380ms ease",
                  borderRadius: "2px",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* ════ STEP 1 ════ */}
        {step === 1 && (
          <div style={{ animation: "popIn 420ms cubic-bezier(0.22,1,0.36,1) forwards" }}>
            {/* Outer glow border effect */}
            <div style={{
              borderRadius: "22px",
              background: "linear-gradient(135deg, rgba(197,216,45,0.5), rgba(212,175,55,0.3), rgba(27,67,50,0.2))",
              padding: "1.5px",
              boxShadow: "0 32px 80px rgba(27,67,50,0.18), 0 8px 24px rgba(212,175,55,0.12)",
            }}>
              <div style={{ borderRadius: "21px", overflow: "hidden", background: "#ffffff" }}>

                {/* Accent bar */}
                <div style={{ height: "3px", background: "linear-gradient(90deg, #1B4332, #D4AF37, #C5D82D, #D4AF37, #1B4332)" }} />

                {/* Header */}
                <div className="pay-header-pad" style={{
                  background: "linear-gradient(135deg, #1B4332 0%, #1f4f3b 50%, #234d3a 100%)",
                  padding: "20px 30px",
                  display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                    background: "linear-gradient(135deg, #D4AF37, #C5D82D)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 6px 18px rgba(212,175,55,0.4)",
                  }}>
                    <Lock style={{ width: "20px", height: "20px", color: "#1B4332" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "rgba(197,216,45,0.8)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", margin: 0 }}>Money Venture Research</p>
                    <p style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Secure Payment Portal</p>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px", flexShrink: 0,
                    background: "rgba(197,216,45,0.12)", border: "1px solid rgba(197,216,45,0.25)",
                    borderRadius: "999px", padding: "5px 13px",
                  }}>
                    <Shield style={{ width: "11px", height: "11px", color: "#C5D82D" }} />
                    <span style={{ color: "#C5D82D", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>SEBI RA · INH000026114</span>
                  </div>
                </div>

                {/* Two-column body */}
                <div className="pay-body" style={{ display: "flex" }}>

                  {/* LEFT — QR */}
                  <div className="pay-qr-col" style={{
                    flex: "0 0 300px", display: "flex", flexDirection: "column",
                    alignItems: "center", gap: "20px", padding: "36px 28px",
                    borderRight: "1px solid #edf2eb",
                    background: "linear-gradient(180deg, #fafcf8 0%, #f4f8f1 100%)",
                  }}>
                    {/* Method label */}
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <Smartphone style={{ width: "14px", height: "14px", color: "#1B4332" }} />
                      <span style={{ color: "#1B4332", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>Scan &amp; Pay via UPI</span>
                    </div>

                    {/* QR with premium border */}
                    <div style={{ position: "relative" }}>
                      {/* Animated ring */}
                      <div style={{
                        position: "absolute", inset: "-6px", borderRadius: "22px",
                        background: "linear-gradient(135deg, #D4AF37, #C5D82D, #1B4332, #D4AF37)",
                        backgroundSize: "400% 400%",
                        animation: "shimmer 3s linear infinite",
                        zIndex: 0,
                      }} />
                      <div style={{
                        position: "relative", zIndex: 1,
                        background: "#ffffff", borderRadius: "17px",
                        padding: "10px",
                        boxShadow: "0 12px 36px rgba(27,67,50,0.16)",
                      }}>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5ghuLgI1k1vkib22UgATYeRemrYrJW.png"
                          alt="UPI QR Code — Money Venture Research Kotak Bank"
                          width={200}
                          height={200}
                          style={{ width: "200px", height: "200px", display: "block", borderRadius: "9px" }}
                          priority
                        />
                      </div>
                    </div>

                    {/* UPI ID copy pill */}
                    <button
                      onClick={() => copy(UPI_ID, "upi")}
                      className="pay-lift"
                      style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        padding: "10px 16px", borderRadius: "12px",
                        background: copied === "upi" ? "#f0fdf4" : "#ffffff",
                        border: `1.5px solid ${copied === "upi" ? "#86efac" : "#d4e9c6"}`,
                        color: "#1B4332", fontSize: "12px", fontWeight: 700,
                        cursor: "pointer", maxWidth: "100%", boxSizing: "border-box",
                        boxShadow: "0 2px 8px rgba(27,67,50,0.08)",
                      }}
                    >
                      {copied === "upi"
                        ? <><Check style={{ width: "13px", height: "13px", color: "#16a34a", flexShrink: 0 }} /><span style={{ color: "#16a34a" }}>Copied!</span></>
                        : <><Copy style={{ width: "13px", height: "13px", flexShrink: 0 }} /><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{UPI_ID}</span></>
                      }
                    </button>

                    {/* UPI note — clean, no icons */}
                    <div style={{
                      padding: "11px 14px", borderRadius: "10px",
                      background: "rgba(27,67,50,0.04)", border: "1px solid rgba(27,67,50,0.08)",
                      width: "100%", boxSizing: "border-box",
                    }}>
                      <p style={{ color: "#4b6b5a", fontSize: "11.5px", lineHeight: 1.65, margin: 0, fontWeight: 500, textAlign: "center" }}>
                        Use any UPI-enabled payment app on your phone to scan and pay securely.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT — Bank details + CTA */}
                  <div style={{ flex: 1, minWidth: 0, padding: "36px 30px", display: "flex", flexDirection: "column", gap: "24px" }}>

                    {/* Bank transfer section */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                        <Banknote style={{ width: "15px", height: "15px", color: "#1B4332" }} />
                        <span style={{ color: "#1B4332", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>Bank Transfer Details</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {BANK.map((d) => (
                          <div key={d.label} className="bank-row">
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <p style={{ color: "#94a3a8", fontSize: "9.5px", fontWeight: 700, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.11em" }}>{d.label}</p>
                              <p style={{ color: "#1B4332", fontSize: "13.5px", fontWeight: 700, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.value}</p>
                            </div>
                            <button
                              onClick={() => copy(d.value, d.label)}
                              aria-label={`Copy ${d.label}`}
                              className="copy-btn"
                            >
                              {copied === d.label
                                ? <Check style={{ width: "14px", height: "14px", color: "#16a34a" }} />
                                : <Copy style={{ width: "14px", height: "14px" }} />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e0e9df, transparent)" }} />

                    {/* 3-hour note */}
                    <div style={{
                      display: "flex", gap: "12px", alignItems: "flex-start",
                      padding: "14px 16px", borderRadius: "13px",
                      background: "linear-gradient(135deg, rgba(197,216,45,0.07), rgba(212,175,55,0.07))",
                      border: "1px solid rgba(197,216,45,0.25)",
                    }}>
                      <div style={{
                        width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0,
                        background: "rgba(27,67,50,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Shield style={{ width: "14px", height: "14px", color: "#1B4332" }} />
                      </div>
                      <p style={{ color: "#1B4332", fontSize: "12.5px", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        Once payment is done, click below to submit your details. We&apos;ll confirm your enrollment within <strong>3 hours</strong>.
                      </p>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setStep(2)}
                      className="pay-lift"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                        padding: "16px 28px", borderRadius: "14px",
                        background: "linear-gradient(135deg, #D4AF37 0%, #C5D82D 100%)",
                        color: "#1B4332", fontSize: "14px", fontWeight: 800,
                        border: "none", cursor: "pointer", width: "100%",
                        boxShadow: "0 10px 32px rgba(197,216,45,0.4)",
                        letterSpacing: "0.2px",
                      }}
                    >
                      I&apos;ve Paid — Submit Details
                      <ArrowRight style={{ width: "17px", height: "17px", flexShrink: 0 }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════ STEP 2 ════ */}
        {step === 2 && (
          <div style={{ animation: "popIn 420ms cubic-bezier(0.22,1,0.36,1) forwards" }}>
            <div style={{
              borderRadius: "22px",
              background: "linear-gradient(135deg, rgba(197,216,45,0.4), rgba(212,175,55,0.25))",
              padding: "1.5px",
              boxShadow: "0 32px 80px rgba(27,67,50,0.16)",
            }}>
              <div style={{ borderRadius: "21px", overflow: "hidden", background: "#ffffff" }}>
                <div style={{ height: "3px", background: "linear-gradient(90deg, #1B4332, #D4AF37, #C5D82D, #D4AF37, #1B4332)" }} />
                <div className="pay-header-pad" style={{ background: "linear-gradient(135deg, #1B4332 0%, #234d3a 100%)", padding: "20px 30px" }}>
                  <p style={{ color: "rgba(197,216,45,0.75)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 3px" }}>Step 2 of 3</p>
                  <p style={{ color: "#ffffff", fontSize: "18px", fontWeight: 800, margin: 0 }}>Submit Your Payment Details</p>
                </div>

                <form onSubmit={handleSubmit} className="pay-form-pad" style={{ padding: "32px 30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="pay-cols" style={{ display: "flex", gap: "14px" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1B4332", fontSize: "11px", fontWeight: 700, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                        <User style={{ width: "12px", height: "12px", flexShrink: 0 }} /> Full Name
                      </label>
                      <input required className="pay-input" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1B4332", fontSize: "11px", fontWeight: 700, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                        <Mail style={{ width: "12px", height: "12px", flexShrink: 0 }} /> Email Address
                      </label>
                      <input required type="email" className="pay-input" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="pay-cols" style={{ display: "flex", gap: "14px" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1B4332", fontSize: "11px", fontWeight: 700, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                        <Phone style={{ width: "12px", height: "12px", flexShrink: 0 }} /> Phone Number
                      </label>
                      <input required className="pay-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1B4332", fontSize: "11px", fontWeight: 700, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                        Plan Selected
                      </label>
                      <select required className="pay-input" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} style={{ cursor: "pointer" }}>
                        <option value="">Select a plan</option>
                        {PLANS.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#1B4332", fontSize: "11px", fontWeight: 700, marginBottom: "7px", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                      <CreditCard style={{ width: "12px", height: "12px", flexShrink: 0 }} /> UTR / Transaction ID
                    </label>
                    <input required className="pay-input" placeholder="12-digit UTR or transaction reference" value={form.txnId} onChange={(e) => setForm({ ...form, txnId: e.target.value })} />
                  </div>

                  {/* Screenshot instruction */}
                  <div style={{
                    display: "flex", gap: "14px", alignItems: "flex-start",
                    padding: "15px 17px", borderRadius: "13px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.07), rgba(197,216,45,0.07))",
                    border: "1px solid rgba(212,175,55,0.28)",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "9px", flexShrink: 0,
                      background: "rgba(212,175,55,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Mail style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
                    </div>
                    <p style={{ color: "#1B4332", fontSize: "12.5px", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                      <strong>Important:</strong> After clicking &quot;Send to Team&quot;, your email client will open with all details pre-filled. Please <strong>attach your payment screenshot</strong> to the email before sending it to <strong>{RECIPIENT}</strong>.
                    </p>
                  </div>

                  <div className="pay-btn-row" style={{ display: "flex", gap: "10px", alignItems: "stretch" }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="pay-back-btn"
                      style={{
                        padding: "14px 22px", borderRadius: "12px",
                        background: "transparent", border: "1.5px solid #dde8e3",
                        color: "#6b7280", fontSize: "13px", fontWeight: 700,
                        cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                        transition: "border-color 180ms ease, color 180ms ease",
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={sending}
                      className="pay-lift pay-send-btn"
                      style={{
                        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "9px",
                        padding: "14px 22px", borderRadius: "12px",
                        background: sending ? "#e5e7e0" : "linear-gradient(135deg, #D4AF37 0%, #C5D82D 100%)",
                        color: "#1B4332", fontSize: "14px", fontWeight: 800,
                        border: "none", cursor: sending ? "not-allowed" : "pointer",
                        boxShadow: sending ? "none" : "0 10px 28px rgba(197,216,45,0.38)",
                        transition: "all 200ms ease", minWidth: 0,
                      }}
                    >
                      <span style={{ whiteSpace: "nowrap" }}>{sending ? "Opening email…" : "Send to Team"}</span>
                      {!sending && <Mail style={{ width: "15px", height: "15px", flexShrink: 0 }} />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ════ STEP 3 ════ */}
        {step === 3 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 0" }}>
            <div style={{
              animation: "popIn 500ms cubic-bezier(0.34,1.56,0.64,1) forwards",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(197,216,45,0.4), rgba(212,175,55,0.25))",
              padding: "1.5px",
              boxShadow: "0 30px 80px rgba(27,67,50,0.2)",
              maxWidth: "480px", width: "100%",
            }}>
              <div style={{ borderRadius: "23px", overflow: "hidden", background: "#ffffff", textAlign: "center" }}>
                <div style={{ height: "3px", background: "linear-gradient(90deg, #D4AF37, #C5D82D, #D4AF37)" }} />
                <div className="pay-success-pad" style={{ padding: "48px 36px 40px" }}>
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #1B4332, #234d3a)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 14px 40px rgba(27,67,50,0.3)",
                    animation: "checkPop 600ms 200ms cubic-bezier(0.34,1.56,0.64,1) both",
                  }}>
                    <CheckCircle2 style={{ width: "40px", height: "40px", color: "#C5D82D" }} />
                  </div>
                  <h2 style={{ color: "#1B4332", fontSize: "clamp(20px,5vw,26px)", fontWeight: 800, fontFamily: "serif", margin: "0 0 10px", lineHeight: 1.2 }}>
                    Details Sent Successfully!
                  </h2>
                  <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: 1.7, margin: "0 0 26px" }}>
                    Our team will review your payment and confirm your enrollment within <strong style={{ color: "#1B4332" }}>3 hours max</strong>. Check your inbox for updates.
                  </p>
                  <div style={{
                    display: "flex", gap: "12px", padding: "13px 16px",
                    background: "#f3f8f0", borderRadius: "12px",
                    border: "1px solid #d4e9c6", marginBottom: "28px", textAlign: "left",
                  }}>
                    <Shield style={{ width: "16px", height: "16px", color: "#1B4332", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ color: "#1B4332", fontSize: "12px", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                      For any queries, reach us at <strong>{RECIPIENT}</strong> or call <strong>+91 90986 68268</strong>.
                    </p>
                  </div>
                  <div className="pay-btn-row" style={{ display: "flex", gap: "10px" }}>
                    <Link href="/" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "13px 16px", borderRadius: "12px", background: "transparent", border: "1.5px solid #dde8e3", color: "#1B4332", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
                      Back to Home
                    </Link>
                    <Link href="/contact" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "13px 16px", borderRadius: "12px", background: "linear-gradient(135deg, #1B4332, #234d3a)", color: "#C5D82D", fontSize: "13px", fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 22px rgba(27,67,50,0.25)" }}>
                      Contact Team <ChevronRight style={{ width: "13px", height: "13px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Trust bar ── */}
        {step !== 3 && (
          <div className="pay-trust-bar" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", padding: "14px 20px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: "14px", border: "1px solid rgba(229,231,224,0.8)", flexWrap: "wrap" }}>
            {["SEBI Registered RA", "NISM Certified", "No Hidden Charges", "3-Hr Enrollment"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C5D82D", flexShrink: 0 }} />
                <span style={{ color: "#374151", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>{t}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
