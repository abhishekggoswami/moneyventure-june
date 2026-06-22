"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus, ArrowUpRight } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Is my investment safe with your recommendations?",
    answer: "As a SEBI registered research analyst, we follow strict regulatory guidelines. Our recommendations are based on thorough research and analysis. However, all investments carry risk and past performance doesn't guarantee future results."
  },
  {
    question: "How do I receive your trading signals?",
    answer: "Trading signals are delivered instantly via our mobile app notifications, WhatsApp, and email. You'll receive complete details including entry price, target, and stop-loss levels."
  },
  {
    question: "What is your track record accuracy?",
    answer: "We maintain transparent track records published monthly. Our research-based recommendations have shown consistent performance, though results vary based on market conditions and individual execution."
  },
  {
    question: "Is customer support available on weekends?",
    answer: "Our support team is available Monday to Saturday, 9 AM to 6 PM IST. For urgent queries during market hours, premium members have access to priority support via WhatsApp."
  }
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#1B4332]/60 shadow-lg"
          : "border-[#1B4332]/15 bg-white hover:border-[#1B4332]/40 hover:shadow-sm"
      }`}
      style={isOpen ? {
        background: "linear-gradient(135deg, #1B4332 0%, #2d6a4f 45%, #1a3a2a 100%)"
      } : undefined}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left"
      >
        <span className={`text-[15px] font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-white" : "text-[#1B4332]"}`}>
          {item.question}
        </span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          isOpen ? "bg-[#C5D82D]" : "bg-[#F3F8F0] border border-[#1B4332]/20"
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#1B4332]" />
          ) : (
            <Plus className="w-4 h-4 text-[#1B4332]" />
          )}
        </span>
      </button>

      {/* Answer — sits inside the same card, no overflow issue */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-5 pt-0 border-t border-white/15">
          <p className="text-white/80 text-[14px] leading-relaxed pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F5F7F2' }}>
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical lines */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #9CA3AF 0px, #9CA3AF 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(0deg, #9CA3AF 0px, #9CA3AF 1px, transparent 1px, transparent 60px)
            `
          }}
        />
        
        {/* Decorative rectangles */}
        <div className="absolute top-16 left-8 w-12 h-12 border border-gray-300/40 bg-white/30" />
        <div className="absolute top-32 left-24 w-8 h-8 border border-gray-300/30 bg-white/20" />
        <div className="absolute top-20 right-1/4 w-10 h-10 border border-gray-300/30 bg-white/25" />
        <div className="absolute bottom-32 left-16 w-14 h-14 border border-gray-300/30 bg-white/20" />
        <div className="absolute top-1/3 left-4 w-6 h-6 border border-gray-300/40 bg-white/30" />
        <div className="absolute bottom-20 right-16 w-8 h-8 border border-gray-300/30 bg-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-full text-sm font-medium mb-5">
            <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-[#1B4332] leading-tight">
            Your Most Important Questions<br className="hidden md:block" /> Answered Here
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Image with overlay */}
          <div className="relative">
            {/* Question mark bubble */}
            <div className="absolute -top-4 right-8 lg:right-16 z-20">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-[#1B4332] flex items-center justify-center bg-white/80">
                  <span className="text-4xl font-bold text-[#C5D82D]">?</span>
                </div>
                {/* Small circle connector */}
                <div className="absolute -bottom-2 -left-1 w-3 h-3 rounded-full border-2 border-[#1B4332] bg-white" />
              </div>
            </div>

            {/* Main image */}
            <div className="relative rounded-[28px] overflow-hidden h-[350px] lg:h-[420px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xcsjm6xcsjm6xcsj%20%281%29-mxi9qq5VcO2ETvySdHqpGhIQN9oocK.png"
                alt="Rohit Kumar - Money Ventures Research"
                fill
                className="object-cover object-top"
              />
              
              {/* Green overlay card */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
                style={{ background: "linear-gradient(135deg, #1B4332 0%, #2d6a4f 45%, #1a3a2a 100%)" }}
              >
                <h3 className="text-white text-xl font-bold mb-1">
                  Have Any Question<br />on Your Minds?
                </h3>
                <button className="mt-3 flex items-center gap-2 bg-[#C5D82D] text-[#1B4332] font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#b8cb28] transition-colors">
                  Discover More
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
