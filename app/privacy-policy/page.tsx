import type { Metadata } from "next"
import { LegalPage } from "@/components/finora/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Money Venture Research privacy policy and learn how we handle personal information.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return <LegalPage policy="privacy" />
}
