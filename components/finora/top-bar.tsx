"use client"

import { memo } from "react"
import { ShieldAlert } from "lucide-react"

const SEGMENTS = [
  "जरूरी सूचना",
  "Money Venture Research की आधिकारिक वेबसाइट www.moneyventureresearch.com है। हमारी कोई अन्य वेबसाइट या शाखा नहीं है।",
  "सभी वित्तीय लेनदेन के लिए केवल नीचे दिए गए Kotak Mahindra Bank खाते में ही पेमेंट करें।",
  "खाता संख्या: 2053381648 — IFSC: KKBK0005986 — UPI: ro.moneyventure.ra@validkpay",
  "पेमेंट करने से पहले हमारी वेबसाइट के पेमेंट सेक्शन www.moneyventureresearch.com/payment से बैंक डिटेल वेरीफाई करना अनिवार्य है।",
  "कृपया किसी अन्य व्यक्ति या संस्था द्वारा किए गए कॉन्टैक्ट, लिंक, या बैंक डिटेल पर विश्वास न करें।",
  "यदि आप किसी अन्य खाते में पेमेंट करते हैं तो उसकी जिम्मेदारी न तो SEBI Registered Research Analyst (INH000026114) की होगी और न ही Money Venture Research की।",
  "किसी भी सहायता के लिए संपर्क करें: info@moneyventureresearch.com",
]

function DisclaimerSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="inline-flex items-center" aria-hidden={ariaHidden}>
      {SEGMENTS.map((text, i) => (
        <span key={i} className="inline-flex items-center">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C5D82D] flex-shrink-0 mx-3" />
          <span className={`text-[12px] font-medium tracking-wide ${i === 0 ? "text-[#C5D82D] uppercase font-bold" : "text-white/85"}`}>
            {text}
          </span>
          <span className="text-[#C5D82D]/40 mx-3 select-none">|</span>
        </span>
      ))}
    </div>
  )
}

function TopBarComponent() {
  return (
    <div
      className="disclaimer-strip overflow-hidden relative w-full"
      style={{
        background: "linear-gradient(90deg, #000000 0%, #0a1f14 25%, #0f2a1d 50%, #0a1f14 75%, #000000 100%)",
        borderBottom: "1px solid rgba(197,216,45,0.18)",
      }}
      role="marquee"
      aria-label="Important payment safety disclaimer"
    >
      {/* Edge fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
        style={{ background: "linear-gradient(90deg, #000000 0%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
        style={{ background: "linear-gradient(270deg, #000000 0%, transparent 100%)" }}
      />

      <div className="py-2.5">
        {/* Track contains two identical sets so the -50% loop is seamless */}
        <div className="disclaimer-track">
          <DisclaimerSet />
          <DisclaimerSet ariaHidden />
        </div>
      </div>
    </div>
  )
}

export const TopBar = memo(TopBarComponent)
