'use client'

import { useEffect, useState } from 'react'

export default function OSNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="os-nav"
      style={{
        position: 'fixed',
        top: scrolled ? 12 : 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        backdropFilter: 'blur(24px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        transition: 'all .5s cubic-bezier(.22,1,.36,1)',
        ...(scrolled
          ? {
              width: 'auto',
              maxWidth: '92vw',
              padding: '6px 6px 6px 20px',
              background: 'rgba(255,255,255,0.82)',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: 100,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            }
          : {
              width: '100%',
              maxWidth: '100%',
              padding: '14px 32px',
              background: 'rgba(255,255,255,0.45)',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 0,
              boxShadow: 'none',
            }),
      }}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ display: 'flex', alignItems: 'center', marginRight: 4, textDecoration: 'none', color: 'inherit', flexShrink: 0 }}
      >
        <span className="nova-wordmark" style={{ fontSize: scrolled ? 22 : 28, color: 'var(--tx)', transition: 'font-size .5s cubic-bezier(.22,1,.36,1)' }}>NOVA</span>
      </a>

      <div className="nav-sep" style={{ width: 1, height: 18, background: 'rgba(15,29,42,0.1)', margin: '0 4px', flexShrink: 0 }} />

      <ul className="nk" style={{ display: 'flex', gap: 2, listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#features" style={{ color: 'var(--tx2)', textDecoration: 'none', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 100, display: 'block', whiteSpace: 'nowrap' }}>Features</a></li>
        <li><a href="#call" style={{ color: 'var(--tx2)', textDecoration: 'none', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 100, display: 'block', whiteSpace: 'nowrap' }}>AI Agent</a></li>
        <li><a href="#marketplace" style={{ color: 'var(--tx2)', textDecoration: 'none', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 100, display: 'block', whiteSpace: 'nowrap' }}>Marketplace</a></li>
      </ul>

      <a
        href="https://calendly.com/chris-novainstall/30min"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'var(--sky)',
          color: '#fff',
          border: 'none',
          padding: '10px 22px',
          borderRadius: 100,
          fontSize: 13,
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          cursor: 'pointer',
          transition: 'all .3s',
          marginLeft: 'auto',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
        }}
      >
        Book a Demo
      </a>

      <style jsx>{`
        @media (max-width: 900px) {
          .nk { display: none !important; }
          .nav-sep { display: none !important; }
          nav { padding: 10px 16px !important; }
        }
      `}</style>
    </nav>
  )
}
