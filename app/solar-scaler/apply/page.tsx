import Image from 'next/image'
import ApplyForm from '@/components/apply-form'

export const metadata = {
  title: 'Apply — Solar Scaler',
  description: 'Apply for one of 5 early access spots on the Solar Scaler program.',
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="w-full flex items-center justify-between pt-8 pb-0 px-6 max-w-lg mx-auto">
        <a href="/solar-scaler" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tx3)] hover:text-[var(--tx)] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </a>
        <div className="flex items-center gap-2.5">
          <span
            className="font-black uppercase tracking-[0.12em] select-none text-[var(--tx)]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)' }}
          >
            SOLAR SCALER
          </span>
          <span className="font-black uppercase tracking-[0.12em] text-[var(--tx)]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)' }}>SOLAR SCALER</span>
        </div>
        <div className="w-10" /> {/* spacer to keep wordmark centred */}
      </header>

      {/* Form */}
      <div className="flex-1 flex flex-col justify-center">
        <ApplyForm />
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--bd)] px-6 py-8 flex justify-center">
        <p className="text-[var(--tx3)] text-xs">© {new Date().getFullYear()} Solar Scaler. All rights reserved.</p>
      </footer>

    </main>
  )
}
