'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const VP = { once: true, margin: '0px 0px -120px 0px' } as const

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const backSpring = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

const oldTools = [
  { label: 'Ad Agency',       dot: '#e05a4a', cost: '£1,500/mo', pain: true },
  { label: 'Lead Gen Sites',  dot: '#e05a4a', cost: '£400/mo',   pain: true },
  { label: 'Job Management',  dot: '#4ABDE8', cost: '£120/mo',   pain: false },
  { label: 'Spreadsheets',    dot: '#f4ab3a', cost: null,        pain: false },
  { label: 'WhatsApp',        dot: '#3ab870', cost: null,        pain: false },
  { label: 'Email',           dot: '#4ABDE8', cost: null,        pain: false },
  { label: 'Calls',           dot: '#e8944a', cost: null,        pain: false },
  { label: 'Data Tracking',   dot: '#f4ab3a', cost: '£80/mo',    pain: false },
  { label: 'Proposals',       dot: '#3ab870', cost: null,        pain: false },
]

export default function Section01() {
  return (
    <section className="px-6 py-6 md:py-12 max-w-5xl mx-auto">
      <div className="bg-white border border-[var(--bd)] rounded-2xl p-5 md:p-12 shadow-sm">

        {/* Copy — full width top */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} className="mb-4">
          <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[var(--sky-d)] mb-3">03</p>
          <h2 className="text-[clamp(26px,3.5vw,44px)] leading-tight tracking-tight text-[var(--tx)]">
            <span className="font-bold">We&apos;ve <span style={{ color: 'var(--sky)' }}>done installs</span>. This is what we wished we had.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-3 text-[var(--tx2)] text-base leading-relaxed max-w-2xl mb-10"
        >
          <p className="text-[var(--tx2)]">Same spreadsheets. Same agencies. Same chaos you&apos;re dealing with now.</p>
          <p className="text-[var(--tx2)]">So we built one system to replace all of it.</p>
        </motion.div>

        {/* Old Way → New Way visual */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row items-stretch gap-4"
        >
          {/* OLD WAY */}
          <div className="flex-1 rounded-2xl p-6" style={{ background: '#fdf6f0', border: '1px solid rgba(228,100,60,0.12)' }}>
            <p className="text-[11px] font-mono font-bold tracking-[0.1em] uppercase text-[#e8944a] mb-5">The old way</p>
            <div className="flex flex-wrap gap-2">
              {oldTools.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium" style={{
                  background: t.pain ? 'rgba(224,90,74,0.06)' : '#fff',
                  border: t.pain ? '1px solid rgba(224,90,74,0.25)' : '1px solid rgba(15,29,42,0.08)',
                  color: t.pain ? '#c0392b' : 'var(--tx2)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.dot }} />
                  {t.label}
                  {t.cost && (
                    <span style={{ fontSize: 10, fontWeight: 700, color: t.pain ? '#e05a4a' : '#7a8d9e', marginLeft: 2, opacity: 0.9 }}>{t.cost}</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center md:px-4 py-3 md:py-0">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="rotate-90 md:rotate-0">
              <path d="M8 24h32M30 13l11 11-11 11" stroke="#4ABDE8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* NEW WAY */}
          <div className="flex-1 rounded-2xl p-6 flex flex-col items-center justify-center gap-5" style={{ background: 'rgba(74,189,232,0.07)', border: '1px solid rgba(74,189,232,0.18)' }}>
            <p className="text-[11px] font-mono font-bold tracking-[0.1em] uppercase text-[var(--sky-d)] self-start">The new way</p>
            {/* Outer glow ring */}
            <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'rgba(74,189,232,0.12)', transform: 'scale(1.18)' }} />
              {/* Mid ring */}
              <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(74,189,232,0.2)', transform: 'scale(1.1)' }} />
              {/* Main circle — dark navy like hero tile */}
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #0c1d2e 0%, #0f2640 100%)',
                border: '1.5px solid rgba(74,189,232,0.4)',
                boxShadow: '0 8px 32px rgba(74,189,232,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'white', fontSize: 10, letterSpacing: '0.06em' }}>SOLAR SCALER</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 self-start w-full">
              {['One login', 'Everything connected', 'Built only for solar'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#3ab870"/>
                    <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-medium text-[var(--tx2)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
