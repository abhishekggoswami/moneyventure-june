"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Check, Sparkles } from "lucide-react"
import Image from "next/image"

// Service card icons - outlined style matching reference
function IPOIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="18" height="22" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M8 18L11 14L14 16L18 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10H18V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6H18" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M8 9H14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function TradeIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="3" height="14" rx="0.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M5.5 4V6M5.5 20V22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="11" y="8" width="3" height="10" rx="0.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12.5 5V8M12.5 18V21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="18" y="10" width="3" height="8" rx="0.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M19.5 7V10M19.5 18V20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function BellIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3C9.13401 3 6 6.13401 6 10V15L4 18H22L20 15V10C20 6.13401 16.866 3 13 3Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <path d="M10 18V19C10 20.6569 11.3431 22 13 22C14.6569 22 16 20.6569 16 19V18" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="18" cy="6" r="3" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  )
}

function SignalIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L6 14H12L10 24L20 10H14L14 2Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}

function OptionLensIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M16 16L22 22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 11H14M11 8V14" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function FutureEdgeIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20L9 14L13 18L23 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 6H23V12" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GoldOilIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 8V18L13 24L23 18V8L13 2Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <path d="M13 10V16M10 13H16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8L13 14L23 8" stroke={color} strokeWidth="1.4"/>
      <path d="M13 14V24" stroke={color} strokeWidth="1.4"/>
    </svg>
  )
}

function AlphaMatrixIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5" fill="none"/>
      <rect x="15" y="3" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5" fill="none"/>
      <rect x="3" y="15" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5" fill="none"/>
      <rect x="15" y="15" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="7" cy="7" r="2" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="19" cy="19" r="2" stroke={color} strokeWidth="1.2" fill="none"/>
    </svg>
  )
}

function TradeBoxIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="20" height="16" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M3 10H23" stroke={color} strokeWidth="1.5"/>
      <path d="M7 6V3M19 6V3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 15L11 18L18 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// Additional service icons for dropdown
function GenericServiceIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="9" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M13 8V13L16 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function VaultIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="20" height="16" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="13" cy="13" r="5" stroke={color} strokeWidth="1.4" fill="none"/>
      <path d="M13 10V13L15 14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M3 9H6M3 17H6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function ChartIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="20" height="20" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M7 17L10 13L14 15L19 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="19" cy="9" r="2" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  )
}

function ShieldCheckIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4 6V12C4 17.5 7.8 22.7 13 24C18.2 22.7 22 17.5 22 12V6L13 2Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <path d="M9 13L12 16L17 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CrownIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 18L5 8L10 12L13 5L16 12L21 8L23 18H3Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <path d="M3 18H23V21H3V18Z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function WalletIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="22" height="16" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M2 10H24" stroke={color} strokeWidth="1.4"/>
      <rect x="16" y="13" width="5" height="4" rx="1" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  )
}

function ReportIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="18" height="22" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M8 7H18M8 11H18M8 15H14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="17" cy="18" r="3" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  )
}

function DividendIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="10" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M13 7V19M9 10H15C16.1 10 17 10.9 17 12C17 13.1 16.1 14 15 14H9M9 14H16C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18H9" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function MoatIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 22V12L13 5L21 12V22H5Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <rect x="10" y="15" width="6" height="7" stroke={color} strokeWidth="1.4" fill="none"/>
      <path d="M2 12H5M21 12H24M13 2V5" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function RetireIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="8" r="5" stroke={color} strokeWidth="1.6" fill="none"/>
      <path d="M5 23C5 18.6 8.6 15 13 15C17.4 15 21 18.6 21 23" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M13 15V19M10 17L13 19L16 17" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EliteIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L16 8L23 9L18 14L19 21L13 18L7 21L8 14L3 9L10 8L13 2Z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
    </svg>
  )
}

function GlobeIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="10" stroke={color} strokeWidth="1.6" fill="none"/>
      <ellipse cx="13" cy="13" rx="4" ry="10" stroke={color} strokeWidth="1.3" fill="none"/>
      <path d="M3 13H23M4 8H22M4 18H22" stroke={color} strokeWidth="1.2"/>
    </svg>
  )
}

function SwingIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20C3 20 7 8 13 8C19 8 23 20 23 20" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6 16L10 12L14 15L20 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="9" r="2" stroke={color} strokeWidth="1.3" fill="none"/>
    </svg>
  )
}

function SnapshotIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="20" height="16" rx="2" stroke={color} strokeWidth="1.6" fill="none"/>
      <circle cx="13" cy="13" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="13" cy="13" r="1.5" fill={color}/>
      <path d="M9 5V3H17V5" stroke={color} strokeWidth="1.4"/>
    </svg>
  )
}

function PulseIcon({ color = "#1B4332" }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 13H6L9 7L13 19L17 10L20 13H24" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// Wave-animated highlight — uses global .wave-svc-char CSS class in globals.css
function WaveServiceText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="wave-svc-char"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  )
}

interface ServiceCardProps {
  icon: (color: string) => React.ReactNode
  title: string
  description: string
  image: string
}

interface DropdownServiceItemProps {
  icon: (color: string) => React.ReactNode
  title: string
}

function DropdownServiceItem({ icon, title }: DropdownServiceItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const iconColor = isHovered ? "#C5D82D" : "#1B4332"

  return (
    <button
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F7F0] transition-all duration-300 text-left w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon with loading bar effect */}
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative flex-shrink-0"
        style={{ perspective: '600px' }}
      >
        <div className="absolute inset-0 bg-[#C5D82D] rounded-full" />
        <div 
          className="absolute inset-0 bg-[#1B4332] rounded-full transition-transform duration-400 ease-out origin-left"
          style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        <div 
          className="relative z-10 transition-transform duration-300 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {icon(iconColor)}
        </div>
      </div>
      <span className="text-[14px] font-medium text-[#1B4332] group-hover:text-[#1B4332]">{title}</span>
    </button>
  )
}

function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const iconColor = isHovered ? "#C5D82D" : "#1B4332"

  return (
    <div 
      className="relative h-[380px] overflow-hidden"
      style={{ borderRadius: '20px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full card image background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Icon - positioned at TOP-LEFT, overlapping */}
      <div 
        className="absolute left-4 top-4 w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg z-20 overflow-hidden"
        style={{ perspective: '800px' }}
      >
        {/* Base lime color */}
        <div className="absolute inset-0 bg-[#C5D82D] rounded-full" />
        
        {/* Green loading bar fill - animates from left to right on hover */}
        <div 
          className="absolute inset-0 bg-[#1B4332] rounded-full transition-transform duration-500 ease-out origin-left"
          style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        
        {/* Icon with rotation */}
        <div 
          className="relative z-10 transition-transform duration-300 ease-out flex items-center justify-center"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {icon(iconColor)}
        </div>
      </div>

      {/* White Content Container - positioned at bottom, expands on hover */}
      <div 
        className="absolute left-3 right-3 bottom-3 bg-white shadow-lg transition-all duration-400 ease-out"
        style={{ 
          borderRadius: '16px',
          padding: '16px 18px',
          height: isHovered ? '170px' : '95px'
        }}
      >
        <h3 className="text-[17px] font-bold text-[#1B4332] mb-1 leading-tight">{title}</h3>
        
        {/* Description - only shows on hover */}
        <div 
          className="overflow-hidden transition-all duration-300"
          style={{ 
            maxHeight: isHovered ? '60px' : '0px',
            opacity: isHovered ? 1 : 0,
            marginBottom: isHovered ? '10px' : '0px'
          }}
        >
          <p className="text-[12px] text-gray-500 leading-relaxed">{description}</p>
        </div>
        
        {/* Read More / Learn More Button with loading bar effect */}
        <div className="relative overflow-hidden rounded-full border border-gray-200 mt-2">
          {/* Lime loading bar fill for button - travels left to right */}
          <div 
            className="absolute inset-0 bg-[#C5D82D] rounded-full transition-transform duration-500 ease-out origin-left z-0"
            style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
          />
          
          {/* Button content */}
          <Link href="/pricing" className="relative flex items-center justify-between w-full py-2 px-4 bg-transparent rounded-full text-[12px] font-medium z-10 no-underline">
            <span className="transition-colors duration-300 text-[#1B4332]">
              {isHovered ? 'Learn More' : 'Read More'}
            </span>
            {/* Arrow circle - white background with dark green arrow */}
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
              <ArrowRight 
                className="w-3 h-3 text-[#1B4332] transition-transform duration-300" 
                style={{ transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)' }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

type BillingPeriod = "monthly" | "quarterly" | "halfyearly"

const BILLING_OPTIONS: { key: BillingPeriod; label: string; months: number; discount: number }[] = [
  { key: "monthly",    label: "Monthly",     months: 1, discount: 0  },
  { key: "quarterly",  label: "Quarterly",   months: 3, discount: 10 },
  { key: "halfyearly", label: "Half-Yearly", months: 6, discount: 20 },
]

const COMBO_MONTHLY = 4999 + 3999 + 3499 // 12497 — sum of all three services

const INCLUDED_SERVICES = [
  { name: "IPO Navigator\u2122",   desc: "Expert IPO analysis & subscription guidance" },
  { name: "Trade Trail Mini\u2122", desc: "Swing trading signals with entry & exit points" },
  { name: "Open Bell View\u2122",   desc: "Daily pre-market analysis & predictions" },
  { name: "Priority Support",       desc: "Dedicated analyst support on every call" },
]

function AllInOneCard() {
  const [billing, setBilling] = useState<BillingPeriod>("quarterly")

  const opt      = BILLING_OPTIONS.find(o => o.key === billing)!
  const total    = Math.round(COMBO_MONTHLY * opt.months * (1 - opt.discount / 100))
  const perMonth = Math.round(total / opt.months)

  return (
    <div
      style={{
        marginTop: "24px",
        borderRadius: "24px",
        padding: "2px",
        background: "linear-gradient(90deg, #C5D82D 0%, #1B4332 30%, #C5D82D 60%, #1B4332 100%)",
        backgroundSize: "200% 100%",
      }}
    >
      {/* Inner card */}
      <div
        style={{
          borderRadius: "22px",
          background: "#162e22",
          overflow: "hidden",
        }}
      >
        {/* Lime accent bar */}
        <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #C5D82D, transparent)" }} />

        <div style={{ display: "flex", flexWrap: "wrap" }}>

          {/* LEFT — identity + billing + price */}
          <div
            style={{
              flex: "1 1 300px",
              padding: "32px",
              borderRight: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Crown + title */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "#C5D82D",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CrownIcon color="#1B4332" />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                  <Sparkles style={{ width: "12px", height: "12px", color: "#C5D82D" }} />
                  <span style={{ color: "#C5D82D", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Best Value
                  </span>
                </div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "20px", fontFamily: "serif", margin: 0 }}>
                  All-in-One Bundle
                </h3>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
              Every research product under one subscription — IPO, trade signals, and pre-market analysis.
            </p>

            {/* Billing toggle */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                Billing Period
              </p>
              <div style={{ display: "flex", gap: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "999px", padding: "4px" }}>
                {BILLING_OPTIONS.map(o => (
                  <button
                    key={o.key}
                    onClick={() => setBilling(o.key)}
                    style={{
                      flex: 1,
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "7px 4px",
                      borderRadius: "999px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      background: billing === o.key ? "#C5D82D" : "transparent",
                      color: billing === o.key ? "#1B4332" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}>
                <span style={{ color: "#C5D82D", fontSize: "44px", fontWeight: 700, lineHeight: 1 }}>
                  &#8377;{total.toLocaleString("en-IN")}
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "6px" }}>
                billed {opt.label.toLowerCase()}
              </p>
              {opt.discount > 0 && (
                <span style={{
                  display: "inline-block", marginTop: "10px",
                  background: "rgba(197,216,45,0.15)", border: "1px solid rgba(197,216,45,0.4)",
                  color: "#C5D82D", fontSize: "10px", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  Save {opt.discount}% vs monthly
                </span>
              )}
            </div>
          </div>

          {/* RIGHT — included + CTA */}
          <div
            style={{
              flex: "2 1 400px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                {"What's included"}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {INCLUDED_SERVICES.map(s => (
                  <div
                    key={s.name}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "12px",
                      background: "rgba(255,255,255,0.05)", borderRadius: "16px",
                      padding: "12px 16px", border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: "#C5D82D", display: "flex", alignItems: "center",
                        justifyContent: "center", flexShrink: 0, marginTop: "2px",
                      }}
                    >
                      <Check style={{ width: "12px", height: "12px", color: "#1B4332", strokeWidth: 3 }} />
                    </span>
                    <div>
                      <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{s.name}</p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: "3px 0 0 0" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#C5D82D", color: "#1B4332",
                  fontWeight: 700, fontSize: "14px",
                  padding: "12px 28px", borderRadius: "999px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                Contact to Enroll
                <span
                  style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    background: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <ArrowRight style={{ width: "14px", height: "14px", color: "#C5D82D" }} />
                </span>
              </Link>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", maxWidth: "200px", lineHeight: 1.5, margin: 0 }}>
                Cancel anytime. SEBI compliant. No hidden charges.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [showMoreServices, setShowMoreServices] = useState(false)

  // Additional services for dropdown (not shown as cards)
  const moreServices = [
    { icon: (color: string) => <TradeBoxIcon color={color} />, title: "TradeBox Max\u2122" },
    { icon: (color: string) => <VaultIcon color={color} />, title: "NRI ModelVault\u2122" },
    { icon: (color: string) => <ChartIcon color={color} />, title: "India Prime 20\u2122" },
    { icon: (color: string) => <ShieldCheckIcon color={color} />, title: "SmartHedge Pro\u2122" },
    { icon: (color: string) => <CrownIcon color={color} />, title: "Pinnacle Circle\u2122" },
    { icon: (color: string) => <WalletIcon color={color} />, title: "WealthNest Portfolio\u2122" },
    { icon: (color: string) => <ReportIcon color={color} />, title: "SteadyGrow Report\u2122" },
    { icon: (color: string) => <DividendIcon color={color} />, title: "Dividend Dynamo Picks" },
    { icon: (color: string) => <MoatIcon color={color} />, title: "Moat Finder Weekly\u2122" },
    { icon: (color: string) => <RetireIcon color={color} />, title: "RetireRight Blueprint\u2122" },
    { icon: (color: string) => <EliteIcon color={color} />, title: "Research Elite Club\u2122" },
    { icon: (color: string) => <GlobeIcon color={color} />, title: "Global ViewPoint\u2122" },
    { icon: (color: string) => <SwingIcon color={color} />, title: "Swing Craft\u2122" },
    { icon: (color: string) => <SnapshotIcon color={color} />, title: "Stock Snapshots\u2122" },
    { icon: (color: string) => <PulseIcon color={color} />, title: "Pulse Trial Plan\u2122" },
  ]

  const services = [
    {
      icon: (color: string) => <IPOIcon color={color} />,
      title: "IPO Navigator\u2122",
      description: "Expert guidance on upcoming IPOs with detailed analysis and subscription recommendations.",
      image: "/images/service-ipo.jpg"
    },
    {
      icon: (color: string) => <TradeIcon color={color} />,
      title: "Trade Trail Mini\u2122",
      description: "Short-term trading signals with precise entry and exit points for swing trading.",
      image: "/images/service-trade.jpg"
    },
    {
      icon: (color: string) => <BellIcon color={color} />,
      title: "Open Bell View\u2122",
      description: "Daily pre-market analysis and opening bell predictions for confident trading.",
      image: "/images/service-bell.jpg"
    },
    {
      icon: (color: string) => <SignalIcon color={color} />,
      title: "Signal Shorts\u2122",
      description: "Quick actionable trade signals delivered instantly for time-sensitive opportunities.",
      image: "/images/service-signal.jpg"
    },
    {
      icon: (color: string) => <OptionLensIcon color={color} />,
      title: "Option Lens\u2122",
      description: "Comprehensive options analysis with strike selection and hedging strategies.",
      image: "/images/service-option.jpg"
    },
    {
      icon: (color: string) => <FutureEdgeIcon color={color} />,
      title: "Future Edge\u2122",
      description: "Futures trading insights with technical analysis and trend predictions.",
      image: "/images/service-future.jpg"
    },
    {
      icon: (color: string) => <GoldOilIcon color={color} />,
      title: "Gold Oil Guide\u2122",
      description: "Commodity trading signals for gold, oil, and other precious commodities.",
      image: "/images/service-commodity.jpg"
    },
    {
      icon: (color: string) => <AlphaMatrixIcon color={color} />,
      title: "AlphaMatrix\u2122",
      description: "Algorithmic trading strategies with backtested performance metrics.",
      image: "/images/service-algo.jpg"
    }
  ]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Overlay - NO hover effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero-background.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B4332]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header — badge left, heading right, matches About section pattern */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 mb-14">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit flex-shrink-0 border border-white/20">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-white leading-tight max-w-3xl">
            <WaveServiceText text="Serious" />
            {" "}research. Actionable signals. Trusted by thousands of investors.
          </h2>
        </div>

        {/* Service Cards Grid — 2 rows of 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* All-in-One Bundle — full-width showcase row */}
        <AllInOneCard />

        {/* View More Services Dropdown */}
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setShowMoreServices(!showMoreServices)}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <span>View More Services</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${showMoreServices ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-400 ease-out z-50 ${
                showMoreServices ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
              }`}
            >
              <div className="p-6">
                <h4 className="text-[#1B4332] font-bold text-lg mb-4 px-2">More Services</h4>
                <div className="grid grid-cols-3 gap-2">
                  {moreServices.map((service, index) => (
                    <DropdownServiceItem key={index} icon={service.icon} title={service.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - NO hover effects on background */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <div className="w-11 h-11 bg-[#C5D82D] rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L4 9H8L7 16L14 7H10L11 2H9Z" fill="#1B4332"/>
            </svg>
          </div>
          <p className="text-white/80 text-sm">
            SEBI Registered Research Analyst - Your trusted partner in wealth creation.
            <Link href="/pricing" className="text-[#C5D82D] hover:underline ml-2 inline-flex items-center gap-1 font-medium">
              Know All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
