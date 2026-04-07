import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bd)] bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
        <span className="font-black uppercase tracking-[0.12em] text-[var(--tx3)]" style={{ fontFamily: 'var(--font-mono)', fontSize: 16 }}>SOLAR SCALER</span>
        <p className="text-[var(--tx3)] text-xs">
          © {new Date().getFullYear()} Solar Scaler. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
