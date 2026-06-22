"use client"

import { useEffect, useState } from "react"
import { FeatureCard } from "./feature-card"

// Custom outlined icons matching the design exactly
function WalletIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main wallet body */}
      <rect x="2" y="7" width="24" height="17" rx="2" stroke="#B7D84B" strokeWidth="1.8" fill="none"/>
      {/* Wallet flap */}
      <path d="M2 11C2 9.34315 3.34315 8 5 8H20C21.6569 8 23 6.65685 23 5V5C23 3.89543 22.1046 3 21 3H7C4.23858 3 2 5.23858 2 8V11Z" stroke="#B7D84B" strokeWidth="1.8" fill="none"/>
      {/* Card slot */}
      <rect x="17" y="14" width="6" height="4" rx="1" stroke="#B7D84B" strokeWidth="1.5" fill="none"/>
      {/* Dollar sign */}
      <circle cx="20" cy="16" r="1" fill="#B7D84B"/>
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor frame */}
      <rect x="2" y="3" width="24" height="18" rx="2" stroke="#B7D84B" strokeWidth="1.8" fill="none"/>
      {/* Screen top bar */}
      <path d="M2 7H26" stroke="#B7D84B" strokeWidth="1.5"/>
      {/* Chart bars */}
      <rect x="5" y="11" width="3" height="7" rx="0.5" stroke="#B7D84B" strokeWidth="1.3" fill="none"/>
      <rect x="10" y="9" width="3" height="9" rx="0.5" stroke="#B7D84B" strokeWidth="1.3" fill="none"/>
      <rect x="15" y="12" width="3" height="6" rx="0.5" stroke="#B7D84B" strokeWidth="1.3" fill="none"/>
      <rect x="20" y="10" width="3" height="8" rx="0.5" stroke="#B7D84B" strokeWidth="1.3" fill="none"/>
      {/* Monitor stand */}
      <path d="M11 21V24H17V21" stroke="#B7D84B" strokeWidth="1.5" fill="none"/>
      <path d="M9 24H19" stroke="#B7D84B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path d="M14 2L3 6.5V13C3 19.63 7.65 25.79 14 27C20.35 25.79 25 19.63 25 13V6.5L14 2Z" stroke="#B7D84B" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      {/* Inner shield */}
      <path d="M14 5L6 8.5V13C6 18.1 9.45 22.73 14 23.8C18.55 22.73 22 18.1 22 13V8.5L14 5Z" stroke="#B7D84B" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
      {/* Checkmark */}
      <path d="M10 14L13 17L18 11" stroke="#B7D84B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 1 second delay before cards animate in
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: <WalletIcon />,
      title: "Expert Research",
      description: "Get access to in-depth research reports and analysis from SEBI registered analysts with proven track records."
    },
    {
      icon: <DashboardIcon />,
      title: "Live Market Signals",
      description: "Receive real-time trading signals with precise entry, exit, and stop-loss levels delivered directly to you."
    },
    {
      icon: <SecurityIcon />,
      title: "Verified Track Record",
      description: "Transparent performance reports and verified historical accuracy to help you make confident investment decisions."
    }
  ]

  return (
    <>
      {/* ── Mobile: compact horizontal scroll strip ── */}
      <div className="block md:hidden w-full">
        <div
          className="flex gap-3 px-4 pb-2 overflow-x-auto"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[72vw] max-w-[260px] transition-all duration-700 ease-out"
              style={{
                scrollSnapAlign: "start",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${index * 130}ms`,
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        {/* Scroll dots indicator */}
        <div className="flex justify-center gap-1.5 mt-3 pb-3">
          {features.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1B4332]/25" />
          ))}
        </div>
      </div>

      {/* ── Tablet + Desktop: original grid ── */}
      <div className="hidden md:block px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(60px)",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
