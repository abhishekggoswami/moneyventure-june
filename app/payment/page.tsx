import { Metadata } from 'next'
import { TopBar } from '@/components/finora/top-bar'
import { Navbar } from '@/components/finora/navbar'
import { PaymentHero } from '@/components/finora/payment-hero'
import { PaymentContent } from '@/components/finora/payment-content'
import { Footer } from '@/components/finora/footer'
import { ScrollToTop } from '@/components/finora/scroll-to-top'

export const metadata: Metadata = {
  title: 'Payment | Money Venture Research',
  description: 'Complete your enrollment payment securely to Money Venture Research — SEBI Registered Research Analyst INH000026114.',
  alternates: { canonical: '/payment' },
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen" style={{ overflowX: 'clip', background: '#f7f9f5' }}>
      <TopBar />
      <Navbar />
      <PaymentHero />

      {/* Moving grid background wrapping the content section */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#eef4e8',
      }}>
        {/* Keyframe injected once for this section */}
        <style>{`
          @keyframes paymentGridDrift {
            from { background-position: 0 0; }
            to   { background-position: 44px 44px; }
          }
          @keyframes payGridFloatA {
            0%,100% { transform: translate(0,0) scale(1); }
            50%     { transform: translate(40px,-50px) scale(1.1); }
          }
          @keyframes payGridFloatB {
            0%,100% { transform: translate(0,0) scale(1); }
            50%     { transform: translate(-30px,40px) scale(0.93); }
          }
          @keyframes payGridFloatC {
            0%,100% { transform: translate(0,0) scale(1); }
            50%     { transform: translate(20px,25px) scale(1.06); }
          }
        `}</style>

        {/* Moving square grid — fades in via mask so top is invisible */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(27,67,50,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,67,50,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
            animation: 'paymentGridDrift 20s linear infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient glow — top right */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-120px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197,216,45,0.1) 0%, transparent 68%)',
            filter: 'blur(70px)',
            animation: 'payGridFloatA 18s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient glow — bottom left */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,67,50,0.1) 0%, transparent 68%)',
            filter: 'blur(60px)',
            animation: 'payGridFloatB 14s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient glow — center */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
            filter: 'blur(55px)',
            animation: 'payGridFloatC 22s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* PaymentContent sits above grid */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <PaymentContent />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
