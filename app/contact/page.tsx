import { TopBar } from "@/components/finora/top-bar"
import { Navbar } from "@/components/finora/navbar"
import { ContactContent } from "@/components/finora/contact-content"
import { Footer } from "@/components/finora/footer"
import { ScrollToTop } from "@/components/finora/scroll-to-top"

export const metadata = {
  title: "Contact — Money Ventures Research",
  description:
    "Get in touch with the Money Ventures Research team. SEBI Registered Research Analyst — INH000026114. Reach us for queries about subscriptions, research, or compliance.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" style={{ overflowX: "clip" }}>
      <TopBar />
      <Navbar />
      <ContactContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
