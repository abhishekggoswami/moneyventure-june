"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ChevronDown } from "lucide-react"

export function AppointmentSection() {
  // Mobile-only toggle state — on desktop the form is always visible
  const [mobileFormOpen, setMobileFormOpen] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Appointment Request — Money Ventures Research")
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nCity / Address: ${formData.address}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@moneyventureresearch.com?subject=${subject}&body=${body}`
  }

  const form = (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">First Name</label>
          <input
            type="text" name="firstName" placeholder="John"
            value={formData.firstName} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Last Name</label>
          <input
            type="text" name="lastName" placeholder="Doe"
            value={formData.lastName} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Email</label>
          <input
            type="email" name="email" placeholder="john@example.com"
            value={formData.email} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Phone Number</label>
          <input
            type="tel" name="phone" placeholder="+91 98765 43210"
            value={formData.phone} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Company</label>
          <input
            type="text" name="company" placeholder="Your company"
            value={formData.company} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Address</label>
          <input
            type="text" name="address" placeholder="Your city"
            value={formData.address} onChange={handleChange}
            className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Message</label>
        <textarea
          name="message" placeholder="Tell us how we can help you..." rows={4}
          value={formData.message} onChange={handleChange}
          className="w-full bg-white/8 border border-white/20 hover:border-white/40 focus:border-[#C5D82D] rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="bg-[#C5D82D] hover:bg-white text-[#1B4332] font-bold px-8 py-3.5 rounded-full transition-colors uppercase tracking-wider text-sm"
        >
          Submit Request
        </button>
      </div>
    </form>
  )

  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row">

        {/* Left Side — photo with overlay */}
        <div className="relative lg:w-[55%] min-h-[500px] lg:min-h-[650px] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lypl0eyEGnoSX1Fgpa7KwEsnW4X3JQ.png"
            alt="Professional support specialist"
            fill
            className="object-cover object-center"
          />
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{ background: "linear-gradient(to top, rgba(27,67,50,0.95) 0%, rgba(27,67,50,0.7) 60%, transparent 100%)" }}
          >
            <div className="px-8 lg:px-14 pt-20 pb-10">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium w-fit mb-5">
                <span className="w-2 h-2 bg-[#C5D82D] rounded-full" />
                Contact
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-[34px] font-serif font-bold text-white leading-tight mb-6">
                Contact Our Team for Personalized Financial Assistance
              </h2>
              <div className="w-full h-px bg-white/20 mb-6" />
              <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C5D82D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#1B4332]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">Contact Us</h4>
                    <p className="text-gray-300 text-sm">+91 90986 68268<br />info@moneyventureresearch.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side — form panel */}
        <div
          className="lg:w-[45%] px-8 lg:px-12 py-12 lg:py-16 flex flex-col"
          style={{ background: "linear-gradient(135deg, #1B4332 0%, #2d6a4f 45%, #1a3a2a 100%)" }}
        >
          {/* Heading — always visible */}
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
            Book an Appointment
          </h3>
          <p className="text-white/50 text-sm max-w-md text-center leading-relaxed mt-2 mx-auto">
            Connect with our specialists to get expert guidance on secure investments and financial management solutions designed around your needs.
          </p>

          {/* ── MOBILE: toggle button + collapsible form ── */}
          <div className="block lg:hidden mt-6">
            <button
              type="button"
              onClick={() => setMobileFormOpen((v) => !v)}
              className="w-full flex items-center justify-center gap-2 border border-[#C5D82D]/50 rounded-full px-5 py-2.5 hover:bg-[#C5D82D]/10 transition-colors duration-200 focus:outline-none"
            >
              <span className="text-[#C5D82D] text-sm font-semibold">
                {mobileFormOpen ? "Close Form" : "Fill in Details"}
              </span>
              <ChevronDown
                className="w-4 h-4 text-[#C5D82D] transition-transform duration-300"
                style={{ transform: mobileFormOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: mobileFormOpen ? "1200px" : "0px",
                opacity: mobileFormOpen ? 1 : 0,
                transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
              }}
            >
              <div className="pt-8">{form}</div>
            </div>
          </div>

          {/* ── DESKTOP: form always shown ── */}
          <div className="hidden lg:block mt-8">
            {form}
          </div>
        </div>

      </div>
    </section>
  )
}
