import { TopBar } from "@/components/finora/top-bar"
import { Navbar } from "@/components/finora/navbar"
import { ComplianceHero } from "@/components/finora/compliance-hero"
import { ComplaintBoard } from "@/components/finora/complaint-board"
import { Footer } from "@/components/finora/footer"
import { ScrollToTop } from "@/components/finora/scroll-to-top"

export const metadata = {
  title: "Compliance — Money Ventures Research",
  description:
    "SEBI compliance disclosures for Money Ventures Research (INH000026114). View our monthly investor complaint board and complaint disposal trend.",
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white" style={{ overflowX: "clip" }}>
      <TopBar />
      <Navbar />
      <ComplianceHero />
      <ComplaintBoard />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
