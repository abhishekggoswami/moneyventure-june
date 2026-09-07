import Link from "next/link"
import { ArrowUpRight, ChevronRight, FileText, Scale, ShieldCheck } from "lucide-react"
import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { ScrollToTop } from "./scroll-to-top"
import { TopBar } from "./top-bar"
import { LegalPageSidebar } from "./legal-page-sidebar"

type PolicyKind = "terms" | "privacy"

const POLICIES = {
  terms: {
    eyebrow: "Website Terms",
    title: "Terms & Conditions",
    description: "The terms that govern your use of the Money Venture Research website and services.",
    updated: "Last updated: September 2026",
    Icon: Scale,
    sections: [
      { heading: "Acceptance", body: "By accessing this website or using our services, you agree to these Terms & Conditions and all applicable laws and regulations." },
      { heading: "Research services", body: "Money Venture Research provides research and educational information. Nothing on this website is a guarantee of returns, a promise of performance, or a substitute for your own independent judgement and risk assessment." },
      { heading: "Investor responsibility", body: "Investments in securities are subject to market risks. You are responsible for evaluating the suitability of any information or service for your circumstances before making an investment decision." },
      { heading: "Subscriptions and payments", body: "Prices, service scope and access periods are displayed before purchase. Payments, cancellation and refund requests are handled in accordance with the offer shared at purchase and applicable law." },
      { heading: "Permitted use", body: "Website content, reports and communications are for your personal use only. You may not reproduce, distribute, resell or misuse them without our written permission." },
      { heading: "Contact", body: "For questions about these terms or our services, email info@moneyventureresearch.com or call 09098668268." },
    ],
  },
  privacy: {
    eyebrow: "Data & Privacy",
    title: "Privacy Policy",
    description: "How Money Venture Research collects, uses, protects and manages personal information.",
    updated: "Last updated: September 2026",
    Icon: ShieldCheck,
    sections: [
      { heading: "Information we collect", body: "We may collect the details you provide through forms, enquiries, subscriptions and payments, such as your name, phone number, email address and transaction-related information." },
      { heading: "How we use information", body: "We use this information to respond to enquiries, provide services, process payments, send requested communications, improve the website and meet legal or regulatory obligations." },
      { heading: "Sharing and security", body: "We do not sell personal information. Information may be shared with service providers or authorities only where required to operate our services, comply with law or protect our rights. We use reasonable safeguards to protect data, but no online system is completely secure." },
      { heading: "Cookies and analytics", body: "The website may use essential cookies and aggregated usage data to help it function and improve. You can manage cookies through your browser settings." },
      { heading: "Your choices", body: "You may request access, correction or deletion of the personal information we hold, subject to legal and regulatory requirements. You can also opt out of non-essential marketing messages at any time." },
      { heading: "Contact", body: "For privacy-related requests, email info@moneyventureresearch.com with the subject line “Privacy Request”." },
    ],
  },
} satisfies Record<PolicyKind, {
  eyebrow: string
  title: string
  description: string
  updated: string
  Icon: typeof Scale
  sections: { heading: string; body: string }[]
}>

function anchorFor(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function LegalPage({ policy }: { policy: PolicyKind }) {
  const content = POLICIES[policy]
  const Icon = content.Icon

  return (
    <div className="min-h-screen overflow-x-clip bg-[#edf4ef]">
      <TopBar />
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Same drifting square grid used across the home-page sections. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[300px]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(27,67,50,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(27,67,50,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMoveDiagonal 6s linear infinite",
          }}
        />

        <section className="relative z-10 min-h-[300px] overflow-hidden bg-[#123c2c] px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/legal-hero-background.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-[#0a2d1f]/50" />
          <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#C5D82D]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-white/65" style={{ opacity: 0, animation: "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s forwards" }}>
              <Link href="/" className="transition-colors hover:text-[#C5D82D]">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.title}</span>
            </div>
            <div className="flex max-w-3xl items-start gap-4 sm:gap-5">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#C5D82D]/35 bg-[#C5D82D]/15 text-[#C5D82D] sm:h-14 sm:w-14" style={{ opacity: 0, animation: "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.14s forwards" }}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C5D82D]" style={{ opacity: 0, animation: "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.18s forwards" }}>{content.eyebrow}</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ opacity: 0, animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s forwards" }}>{content.title}</h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base" style={{ opacity: 0, animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s forwards" }}>{content.description}</p>
                <p className="mt-4 text-xs font-medium text-white/55" style={{ opacity: 0, animation: "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.5s forwards" }}>{content.updated}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-9 max-w-5xl px-4 pb-16 sm:px-8 sm:pb-24">
          <div className="overflow-hidden rounded-3xl border border-[#1B4332]/10 bg-white shadow-[0_20px_55px_rgba(15,51,35,0.13)]">
            <div className="border-b border-[#1B4332]/10 bg-[#f7faf6] px-5 py-5 sm:px-9 sm:py-6">
              <p className="max-w-3xl text-base leading-relaxed text-[#365a4b] sm:text-lg">
                Please read this policy carefully. It applies to your use of the Money Venture Research website and related services.
              </p>
            </div>

            <div className="grid gap-10 px-5 py-7 sm:px-9 sm:py-10 lg:grid-cols-[260px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6b8176]">On this page</p>
                <div className="overflow-x-auto">
                  <LegalPageSidebar items={content.sections.map((section) => section.heading)} />
                </div>
              </aside>

              <article className="space-y-9">
                {content.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={anchorFor(section.heading)}
                    data-legal-section
                    data-active={index === 0 ? "true" : "false"}
                    className="group scroll-mt-28"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf5df] text-[11px] font-extrabold text-[#557008] transition-colors duration-300 group-data-[active=true]:bg-[#8da719] group-data-[active=true]:text-white">{index + 1}</span>
                      <h2 className="text-xl font-bold tracking-tight text-[#1B4332] transition-colors duration-300 group-data-[active=true]:text-[#76950d] sm:text-2xl">{section.heading}</h2>
                    </div>
                    <p className="max-w-3xl text-[15px] leading-7 text-[#526b60] sm:text-base">{section.body}</p>
                  </section>
                ))}

                <div className="rounded-2xl border border-[#C5D82D]/35 bg-[#f3f8e9] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                  <div className="flex gap-3">
                    <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#657e0e]" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-[#315545]">For service, payment or policy-related assistance, our team is here to help.</p>
                  </div>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#1B4332] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#28583f] sm:mt-0 sm:flex-shrink-0">
                    Contact us <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
