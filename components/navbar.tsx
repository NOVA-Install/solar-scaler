'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        animate={scrolled ? {
          left: '50%',
          right: 'auto',
          x: '-50%',
          width: 'auto',
          minWidth: '560px',
          borderRadius: '0 0 100px 100px',
          background: 'rgba(255,255,255,0.72)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.7)',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          paddingLeft: '18px',
          paddingRight: '10px',
          paddingTop: '8px',
          paddingBottom: '8px',
        } : {
          left: 0,
          right: 0,
          x: '0%',
          width: '100%',
          minWidth: 'unset',
          borderRadius: 0,
          background: 'rgba(255,255,255,0.45)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '14px',
          paddingBottom: '14px',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backdropFilter: 'blur(24px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mr-2 shrink-0">
          <div className="w-7 h-7 rounded-md bg-[var(--sky)] flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">N</span>
          </div>
          <span className="font-bold text-[var(--tx)] text-base tracking-tight">NOVA</span>
        </div>

        {/* CTA — right side */}
        <a
          href="#apply"
          onClick={(e) => { e.preventDefault(); document.getElementById('apply-btn')?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }}
          className="ml-auto bg-[var(--sky)] text-white font-bold text-xs px-5 py-2 rounded-full hover:bg-[var(--sky-d)] transition-colors tracking-wide whitespace-nowrap"
        >
          Apply Now
        </a>
      </motion.header>

    </>
  )
}
