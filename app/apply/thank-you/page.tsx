'use client'

import { useEffect } from 'react'

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Meta Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }, [])

  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="w-full flex items-center justify-center pt-8 pb-0 px-6">
        <span
          className="font-black uppercase tracking-[0.12em] select-none text-[var(--tx)]"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)' }}
        >
          SOLAR SCALER
        </span>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#3ab870] flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none">
            <path d="M4 8l3 3L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight text-[var(--tx)] mb-3">
          You&apos;re booked.
        </h1>
        <p className="text-[var(--tx2)] text-lg max-w-md mb-8">
          Check your email for the confirmation. We&apos;ll speak soon.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[var(--sky-d)] font-semibold text-sm hover:opacity-80 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Solar Scaler
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--bd)] px-6 py-8 flex justify-center">
        <p className="text-[var(--tx3)] text-xs">&copy; {new Date().getFullYear()} Solar Scaler. All rights reserved.</p>
      </footer>

    </main>
  )
}
