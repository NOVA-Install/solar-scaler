'use client'

import { motion } from 'framer-motion'

const VP = { once: true, margin: '0px 0px -100px 0px' } as const

const tools = [
  { label: 'Spreadsheets', color: 'var(--red)', r: -2 },
  { label: 'WhatsApp', color: 'var(--grn)', r: 3 },
  { label: 'Email', color: 'var(--sky)', r: -1 },
  { label: 'Texts', color: 'var(--org)', r: 2 },
  { label: 'Calls', color: 'var(--prp)', r: -3 },
  { label: 'Ad Agency', color: 'var(--red)', r: 1 },
  { label: 'Lead Gens', color: 'var(--sky-d)', r: -2 },
  { label: 'Job Management', color: 'var(--tx3)', r: 3 },
  { label: 'Data Tracking', color: 'var(--org)', r: -1 },
  { label: 'Website', color: 'var(--prp)', r: 2 },
  { label: 'Forms', color: 'var(--sky)', r: -3 },
  { label: 'Proposals', color: 'var(--grn)', r: 1 },
]

const benefits = ['One click setup', 'Fully integrated', 'Advanced analytics & automation']

export default function OSProblemSection() {
  return (
    <section style={{ padding: '56px 24px 40px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--tx)' }}>
            Stop running your business across <span style={{ color: 'var(--sky)' }}>multiple different tools</span>
          </h2>
        </motion.div>

        {/* Diagram */}
        <div className="prob-diagram os-prob-diagram" style={{ display: 'flex', alignItems: 'stretch', gap: 32 }}>
          {/* OLD WAY */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 24px', borderRadius: 16, background: 'rgba(224,90,74,0.04)', border: '1px solid rgba(224,90,74,0.12)' }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--red)', marginBottom: 20, fontFamily: 'var(--font-mono)' }}>The old way</div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}
            >
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={VP}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{
                    padding: '10px 16px',
                    background: 'var(--sf, #fff)',
                    border: '1px solid var(--bd)',
                    borderRadius: 10,
                    fontSize: 14,
                    color: 'var(--tx2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 3px 12px rgba(0,0,0,0.03)',
                    transform: `rotate(${tool.r}deg)`,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: tool.color, flexShrink: 0 }} />
                  {tool.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.4 }}
            className="prob-arrow os-prob-arrow"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 4px' }}
          >
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
              <path d="M4 24h52M44 14l12 10-12 10" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* NEW WAY */}
          <div className="prob-after os-prob-after" style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 24px', borderRadius: 16, background: 'rgba(74,189,232,0.04)', border: '1px solid rgba(74,189,232,0.12)' }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--sky)', marginBottom: 20, fontFamily: 'var(--font-mono)' }}>The new way</div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="nova-circle os-nova-circle"
              style={{ position: 'relative', width: 140, height: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '8px auto 0' }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(74,189,232,0.25)',
                background: 'rgba(74,189,232,0.04)',
                boxShadow: '0 0 40px rgba(74,189,232,0.12), 0 0 80px rgba(74,189,232,0.05), inset 0 0 30px rgba(74,189,232,0.04)',
                animation: 'nova-glow 6s ease-in-out infinite',
              }} />
              <span className="nova-wordmark" style={{ fontSize: 28, color: 'var(--sky)', position: 'relative', zIndex: 1 }}>NOVA</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="prob-benefits os-prob-benefits"
              style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, width: '100%' }}
            >
              {benefits.map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: 'var(--tx)' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="var(--grn)" /><path d="M5.5 9.2l2.2 2.3 4.8-4.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {b}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .prob-diagram { flex-direction: column !important; gap: 20px !important; }
          .prob-arrow svg { transform: rotate(90deg); }
          .nova-circle { width: 120px !important; height: 120px !important; }
          .prob-benefits { align-items: center !important; }
          .prob-after { flex: none !important; }
        }
      `}</style>
    </section>
  )
}
