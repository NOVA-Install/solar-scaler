import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bd)] bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
        <Image src="/nova-logo-black.png" alt="NOVA" width={96} height={32} className="h-7 w-auto object-contain opacity-70" />
        <p className="text-[var(--tx3)] text-xs">
          © {new Date().getFullYear()} NOVA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
