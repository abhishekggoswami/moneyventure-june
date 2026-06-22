'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { X, TrendingUp, Phone, Target, Clock } from 'lucide-react'

export function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasClosedBefore, setHasClosedBefore] = useState(false)
  const router = useRouter()

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('registrationModalClosed', 'true')
  }

  useEffect(() => {
    // Check if user has already closed this modal in this session
    const modalClosed = sessionStorage.getItem('registrationModalClosed')
    if (!modalClosed) {
      // Show modal after a small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setHasClosedBefore(true)
    }
  }, [])

  useEffect(() => {
    // Handle Escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease-out',
        }}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          animation: 'slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            maxWidth: '420px',
            width: 'calc(100vw - 32px)',
            border: '1px solid #e5e7eb',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1B4332 0%, #2d5a48 100%)',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(197, 216, 45, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image
                src="/images/money-ventures-logo-new.png"
                alt="Money Ventures"
                width={24}
                height={24}
                style={{ objectFit: 'contain' }}
              />
              <span
                style={{
                  color: '#C5D82D',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Limited Offer
              </span>
            </div>
            <button
              onClick={handleClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(197, 216, 45, 0.15)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              }}
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            {/* Title */}
            <h2
              style={{
                color: '#1B4332',
                fontSize: '18px',
                fontWeight: 800,
                margin: '0 0 6px',
                fontFamily: 'serif',
                letterSpacing: '-0.01em',
              }}
            >
              Get Started Today
            </h2>
            <p
              style={{
                color: '#6b7280',
                fontSize: '12px',
                margin: '0 0 18px',
                lineHeight: 1.5,
              }}
            >
              Unlock demo trading access and personalized expert guidance
            </p>

            {/* Price Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f9fbf7 0%, #f0f7e6 100%)',
                border: '2px solid #C5D82D',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '18px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', marginBottom: '4px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                One-time Investment
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#1B4332' }}>₹5,000</span>
                <span style={{ fontSize: '11px', color: '#6b7280' }}>only</span>
              </div>
            </div>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #C5D82D, #d9eb5e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <TrendingUp size={16} color="#1B4332" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#1B4332', fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>Demo Trading Access</div>
                  <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '1px' }}>Live simulation</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #1B4332, #2d5a48)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={16} color="#C5D82D" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#1B4332', fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>Expert 1-on-1 Call</div>
                  <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '1px' }}>Personalized guidance</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #C5D82D, #d9eb5e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Target size={16} color="#1B4332" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#1B4332', fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>Package Recommendation</div>
                  <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '1px' }}>Find the right plan</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #1B4332, #2d5a48)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={16} color="#C5D82D" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#1B4332', fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>30-Day Access</div>
                  <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '1px' }}>Valid from registration</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => { handleClose(); router.push('/payment') }}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '8px',
                  background: '#C5D82D',
                  color: '#1B4332',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(197, 216, 45, 0.25)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#d9eb5e'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(197, 216, 45, 0.35)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#C5D82D'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(197, 216, 45, 0.25)'
                }}
              >
                Pay ₹5,000 & Get Started
              </button>
              <button
                onClick={handleClose}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: '#1B4332',
                  border: '1.5px solid #d1d5db',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#C5D82D'
                  ;(e.currentTarget as HTMLButtonElement).style.background = '#f9fbf7'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'
                  ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                }}
              >
                Maybe Later
              </button>
            </div>
          </div>

          {/* Bottom decoration */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C5D82D, transparent)',
            }}
          />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  )
}
