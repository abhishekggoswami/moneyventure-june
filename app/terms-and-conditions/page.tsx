import type { Metadata } from "next"
import { LegalPage } from "@/components/finora/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using Money Venture Research services and website.",
  alternates: { canonical: "/terms-and-conditions" },
}

export default function TermsAndConditionsPage() {
  return <LegalPage policy="terms" />
}
