"use client"

import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"

// Wave-animated highlight for "SEBI registered"
function WaveText({ text }: { text: string }) {
  return (
    <>
      <style jsx>{`
        @keyframes wave-color {
          0%, 100% { color: #1B4332; text-shadow: none; }
          50% { color: #C5D82D; text-shadow: 0 0 18px #C5D82D99; }
        }
        .wave-char {
          display: inline-block;
          animation: wave-color 2s ease-in-out infinite;
        }
      `}</style>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="wave-char"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  )
}

export function AboutSection() {
  const features = [
    "SEBI Registered Analyst",
    "Research-Based Recommendations",
    "Real-Time Market Signals",
    "Transparent Track Record"
  ]

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Row - Badge and Heading side by side */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 mb-14">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit flex-shrink-0">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            Who We Are
          </span>

          {/* Main Heading — "SEBI registered" animates with wave */}
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-serif font-bold text-[#1B4332] max-w-3xl leading-tight">
            We are a{" "}
            <WaveText text="SEBI registered" />
            {" "}research analyst firm committed to helping investors make informed decisions.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left - Large Image (office high-five scene) */}
          <div className="relative rounded-[28px] overflow-hidden h-[450px] lg:h-[520px]" style={{ touchAction: "pan-y" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7ho71p7ho71p7ho7-CbS1cHyXSkE7bjnkTY0u1n2UbQpYuH.png"
              alt="Team collaboration at Money Ventures Research"
              fill
              className="object-cover pointer-events-none select-none"
              draggable={false}
            />
            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl flex items-center gap-3">
              <span className="text-4xl lg:text-5xl font-bold text-[#1B4332]">10+</span>
              <span className="text-sm text-gray-600 leading-tight">Years of Market<br />Experience</span>
            </div>
          </div>

          {/* Right - Stacked Cards */}
          <div className="flex flex-col gap-5">
            {/* Our Vision Card - Dark Green */}
            <div className="bg-[#1B4332] rounded-[24px] p-7 relative overflow-hidden">
              <div className="absolute top-6 right-6 flex gap-1.5">
                <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
                <span className="w-2 h-2 bg-[#C5D82D]/50 rounded-full" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-[#C5D82D] rounded-sm" />
                <span className="text-[#C5D82D] font-semibold text-lg">Our Vision</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Our vision is to democratize quality investment research and make it accessible to every retail investor. We believe in transparent, research-backed recommendations that help you build long-term wealth.
              </p>
            </div>

            {/* Features and Person Image Card */}
            <div className="bg-[#F8F9F5] rounded-[24px] p-6 flex flex-col sm:flex-row gap-5">
              {/* Features List */}
              <div className="flex-1">
                <ul className="space-y-3.5 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#C5D82D] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#1B4332]" strokeWidth={3} />
                      </span>
                      <span className="text-[#1B4332] text-[15px] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 bg-[#C5D82D] text-[#1B4332] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#b8cb28] transition-colors">
                  Discover More
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>

              {/* Person image (man in navy suit) */}
              <div className="relative rounded-[20px] overflow-hidden w-full sm:w-[180px] h-[220px] sm:h-auto flex-shrink-0" style={{ touchAction: "pan-y" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4zu6mq4zu6mq4zu6-bq7IOt7rdA2s35M0Nn8WfAyg1xDQAn.png"
                  alt="Money Ventures Research analyst"
                  fill
                  className="object-cover object-top pointer-events-none select-none"
                  draggable={false}
                />
                {/* SEBI badge overlay */}
                <div className="absolute bottom-3 right-3 bg-[#1B4332] text-white px-4 py-2.5 rounded-xl">
                  <div className="text-[10px] font-bold text-[#C5D82D] tracking-widest">SEBI RA</div>
                  <div className="text-[11px] text-gray-300">INH000026114</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
