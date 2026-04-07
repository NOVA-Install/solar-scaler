'use client'

import { motion } from 'framer-motion'

const VP = { once: true, margin: '0px 0px -80px 0px' } as const

export default function OSCtaSection() {
  return (
    <section style={{ padding: '56px 24px 48px', textAlign: 'center', background: 'var(--bg)' }}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.6 }}
        style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16 }}
      >
        Stop managing admin.<br />Start <span style={{ color: 'var(--sky)' }}>installing.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ color: 'var(--tx3)', fontSize: 17, marginBottom: 32 }}
      >
        Set up in 15 minutes. Cancel anytime.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', gap: 14, justifyContent: 'center' }}
      >
        <a
          href="https://calendly.com/chris-novainstall/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sky"
        >
          Book a Demo
        </a>
      </motion.div>
    </section>
  )
}
