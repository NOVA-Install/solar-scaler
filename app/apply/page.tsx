import ApplyCallbackForm from '@/components/apply-callback-form'

export const metadata = {
  title: 'Book a Call — Solar Scaler',
  description: 'Book a free 15-minute call with the Solar Scaler team.',
}

export default function ApplyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">

      {/* Header */}
      <header className="w-full flex items-center justify-between py-3 md:py-5 px-5 md:px-6 max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[var(--tx3)] hover:text-[var(--tx)] transition-colors">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </a>
        <span
          className="font-black uppercase tracking-[0.12em] select-none text-[var(--tx)]"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(13px, 2vw, 20px)' }}
        >
          SOLAR SCALER
        </span>
        <div className="w-10" />
      </header>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto px-5 md:px-6 pt-1 md:pt-8 pb-0 md:pb-0 flex-1 flex flex-col">

        {/* Form component (includes its own headline, swaps to confirmation on success) */}
        <ApplyCallbackForm />

      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--bd)] px-6 py-6 flex justify-center">
        <p className="text-[var(--tx3)] text-xs">&copy; {new Date().getFullYear()} Solar Scaler. All rights reserved.</p>
      </footer>

    </main>
  )
}
