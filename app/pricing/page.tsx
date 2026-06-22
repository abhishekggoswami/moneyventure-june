import { TopBar } from "@/components/finora/top-bar"
import { Navbar } from "@/components/finora/navbar"
import { PricingContent } from "@/components/finora/pricing-content"
import { Footer } from "@/components/finora/footer"
import { RegistrationModal } from "@/components/finora/registration-modal"

export const metadata = {
  title: "Pricing — Money Ventures Research",
  description:
    "Transparent, SEBI-compliant research subscription plans for Intraday, Options, Commodity, and our All-in-One Bundle.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen relative" style={{ overflowX: "clip", background: "linear-gradient(135deg, #0f2818 0%, #1B4332 25%, #162d23 50%, #1B4332 75%, #0f2818 100%)" }}>
      {/* Animated gradient orbs for premium feel */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,216,45,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatOrb1 15s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-15%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,67,50,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatOrb2 18s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Subtle animated grid overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(197,216,45,0.03) 48%, rgba(197,216,45,0.03) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(197,216,45,0.03) 48%, rgba(197,216,45,0.03) 52%, transparent 52%)
          `,
          backgroundSize: "60px 60px",
          animation: "gridMoveDiagonal 12s linear infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient glow line */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(197,216,45,0.2) 25%, rgba(197,216,45,0.2) 75%, transparent 100%)",
          filter: "blur(1px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      
      <style>{`
        @keyframes gridMoveDiagonal {
          0%   { background-position: 0px 0px; }
          100% { background-position: -60px 60px; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(0, -60px); }
          75% { transform: translate(-30px, -30px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-40px, 40px); }
          50% { transform: translate(0, 80px); }
          75% { transform: translate(40px, 40px); }
        }
      `}</style>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <TopBar />
        <Navbar />
        <PricingContent />
        <Footer />
      </div>

      {/* Registration Modal */}
      <RegistrationModal />
    </main>
  )
}
