'use client'

import { motion } from 'framer-motion'

const VP = { once: true, margin: '0px 0px -120px 0px' } as const

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const sources = [
  { name: 'Digital Ads',      dot: '#4abde8', leads: 47, bar: 0.76 },
  { name: 'Door Knocking',    dot: '#f4ab3a', leads: 19, bar: 0.34 },
  { name: 'Referrals',        dot: '#3ab870', leads: 14, bar: 0.26 },
  { name: 'Solar Scaler Marketplace', dot: null,      leads: 23, bar: 0.52, featured: true },
] as const

function LeadSourcesPanel({ fullWidth = false }: { fullWidth?: boolean }) {
  const total = sources.reduce((sum, s) => sum + s.leads, 0)
  return (
    <div style={{ border: '1.5px solid rgba(74,189,232,0.35)', borderRadius: 12, width: fullWidth ? '100%' : 210, overflow: 'hidden', boxShadow: '0 2px 12px rgba(74,189,232,0.12)' }}>
      {/* Rows */}
      {sources.map((s, i) => (
        <div key={s.name} style={{
          padding: '8px 12px',
          borderBottom: i < sources.length - 1 ? '1px solid rgba(15,29,42,0.05)' : undefined,
          background: s.featured ? 'linear-gradient(135deg, #0c1d2e 0%, #0f2640 100%)' : '#fff',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {s.featured ? (
                <div style={{ width: 16, height: 16, borderRadius: 4, background: 'linear-gradient(135deg, #0c1d2e 0%, #0f2640 100%)', border: '1.5px solid rgba(74,189,232,0.4)', boxShadow: '0 0 8px rgba(74,189,232,0.5), inset 0 1px 0 rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'white', fontSize: 5, lineHeight: 1 }}>SS</span>
                </div>
              ) : (
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot!, display: 'inline-block', flexShrink: 0 }} />
              )}
              <span style={{ fontSize: 9, fontWeight: s.featured ? 700 : 600, color: s.featured ? '#fff' : '#3a4d5e', whiteSpace: 'nowrap' }}>{s.name}</span>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: s.featured ? '#4abde8' : '#0f1d2a', marginLeft: 6 }}>{s.leads}</span>
          </div>
          <div style={{ height: 3, background: s.featured ? 'rgba(255,255,255,0.1)' : 'rgba(15,29,42,0.07)', borderRadius: 2 }}>
            <div style={{ height: 3, background: s.featured ? '#4abde8' : s.dot!, borderRadius: 2, width: `${s.bar * 100}%`, boxShadow: s.featured ? '0 0 6px #4abde8' : undefined }} />
          </div>
        </div>
      ))}
      {/* Footer */}
      <div style={{ padding: '6px 12px', background: '#f4f7f9', borderTop: '1px solid rgba(15,29,42,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 7.5, color: '#7a8d9e' }}>Total this month</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#0f1d2a' }}>{total} leads</span>
      </div>
    </div>
  )
}

export default function Section02() {
  return (
    <section className="px-6 py-6 md:py-12 max-w-5xl mx-auto">
      <div className="bg-white border border-[var(--bd)] rounded-2xl p-5 md:p-12 shadow-sm">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-6"
        >
          <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[var(--sky-d)] mb-3">01</p>
          <h2 className="text-[clamp(26px,3.5vw,44px)] leading-tight tracking-tight text-[var(--tx)]">
            <span className="font-bold">First we fill your pipeline with high intent customers.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-3 text-[var(--tx2)] text-base leading-relaxed mb-8"
        >
          <ul className="space-y-2.5 pl-0">
            {[
              'Your lead gen system live in week one. Fully managed.',
              'Your site is built to convert. Built on what the biggest UK installers have spent fortunes testing.',
              'Every penny tracked to actual installs.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--sky)] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>


        {/* Mobile flow — compact two-panel stack, mirrors section-01 pattern */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden flex flex-col gap-0 items-start w-full"
        >
          {/* Lead sources */}
          <span style={{ fontSize: 11, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Lead sources</span>
          <LeadSourcesPanel fullWidth />

          {/* Down arrow */}
          <div className="flex justify-center py-3">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <line x1="8" y1="0" x2="8" y2="18" stroke="rgba(74,189,232,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d="M3 14l5 5 5-5" stroke="rgba(74,189,232,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Your website */}
          <span style={{ fontSize: 11, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Your website</span>
          <div style={{ background: '#fff', border: '1.5px solid rgba(74,189,232,0.35)', borderRadius: 12, overflow: 'hidden', width: '100%', boxShadow: '0 2px 12px rgba(74,189,232,0.1)' }}>
            <div style={{ background: '#f4f7f9', borderBottom: '1px solid rgba(15,29,42,0.07)', padding: '5px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f87171', display: 'inline-block' }} />
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <div style={{ flex: 1, height: 14, borderRadius: 3, background: '#fff', border: '1px solid rgba(15,29,42,0.08)', marginLeft: 4, display: 'flex', alignItems: 'center', paddingLeft: 5 }}>
                <span style={{ fontSize: 7, color: '#7a8d9e', fontFamily: 'monospace' }}>davessolar.co.uk</span>
              </div>
            </div>
            <div style={{ height: 44, background: 'linear-gradient(135deg, #0c1d2e 0%, #1a3a5c 60%, #4ABDE8 100%)', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.6)', position: 'absolute', bottom: 5, left: 8 }}>Solar install · Bristol</span>
            </div>
            <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0f1d2a', marginBottom: 4 }}>Get solar installed. Free survey today.</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 9, color: '#f59e0b' }}>★★★★★</span>
                  <span style={{ fontSize: 8, color: '#7a8d9e' }}>47 reviews</span>
                </div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', background: '#4ABDE8', borderRadius: 100, padding: '5px 14px', flexShrink: 0, marginLeft: 12 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>Get a Quote</span>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(15,29,42,0.06)', padding: '5px 14px' }}>
              <span style={{ fontSize: 8, fontWeight: 600, color: '#2a9bc8' }}>Built &amp; managed by us</span>
            </div>
          </div>

          {/* Down arrow */}
          <div className="flex justify-center py-3">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <line x1="8" y1="0" x2="8" y2="18" stroke="rgba(74,189,232,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d="M3 14l5 5 5-5" stroke="rgba(74,189,232,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Lead card — the punchline */}
          <div style={{ background: '#fff', border: '1.5px solid rgba(74,189,232,0.3)', borderRadius: 14, overflow: 'hidden', width: '100%', boxShadow: '0 4px 20px rgba(74,189,232,0.08)' }}>
            <div style={{ background: 'rgba(58,184,112,0.08)', borderBottom: '1px solid rgba(58,184,112,0.15)', padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3ab870', display: 'inline-block' }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: '#3ab870' }}>New lead</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: '#7a8d9e' }}>just now</span>
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0f1d2a', marginBottom: 3 }}>James T.</div>
                <div style={{ fontSize: 11, color: '#7a8d9e' }}>Bristol, BS3 · 4kW system</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#2a9bc8' }}>£8,400</span>
                <span style={{ fontSize: 9, fontWeight: 600, color: '#e8944a', background: 'rgba(232,148,74,0.1)', borderRadius: 100, padding: '2px 8px' }}>High intent</span>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(15,29,42,0.06)', padding: '6px 16px', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 9, color: '#7a8d9e' }}>Source:</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#4285f4' }}>Google</span>
            </div>
          </div>
        </motion.div>

        {/* Platform grid — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block"
        >
          <div style={{ background: '#f4f7f9', border: '1px solid rgba(15,29,42,0.08)', borderRadius: 16, padding: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.04)', overflowX: 'auto' }}>
            {/* 3-step flow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, minWidth: 600, width: '100%' }}>

              {/* Col 1: Lead sources */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Lead sources</span>
                <LeadSourcesPanel />
              </div>

              {/* Arrow 1 */}
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" style={{ flexShrink: 0 }}>
                <line x1="0" y1="8" x2="22" y2="8" stroke="rgba(74,189,232,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <path d="M18 3l5 5-5 5" stroke="rgba(74,189,232,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Col 2: Your website */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your website</span>
                <div style={{ background: '#fff', border: '1.5px solid rgba(74,189,232,0.35)', borderRadius: 12, overflow: 'hidden', width: 148, boxShadow: '0 2px 12px rgba(74,189,232,0.1)' }}>
                  <div style={{ background: '#f4f7f9', borderBottom: '1px solid rgba(15,29,42,0.07)', padding: '5px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f87171', display: 'inline-block' }} />
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                    <div style={{ flex: 1, height: 14, borderRadius: 3, background: '#fff', border: '1px solid rgba(15,29,42,0.08)', marginLeft: 4, display: 'flex', alignItems: 'center', paddingLeft: 5 }}>
                      <span style={{ fontSize: 6, color: '#7a8d9e', fontFamily: 'monospace' }}>davessolar.co.uk</span>
                    </div>
                  </div>
                  {/* Hero image placeholder */}
                  <div style={{
                    height: 48,
                    background: 'linear-gradient(135deg, #0c1d2e 0%, #1a3a5c 60%, #4ABDE8 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0 8px 5px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Solar panel rows suggestion */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3, padding: '6px 0', opacity: 0.25 }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ display: 'flex', gap: 2, paddingLeft: 8 }}>
                          {[0,1,2,3,4,5,6].map(j => (
                            <div key={j} style={{ width: 12, height: 8, background: '#4ABDE8', borderRadius: 1, border: '0.5px solid rgba(255,255,255,0.3)' }} />
                          ))}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.6)', position: 'relative', zIndex: 1 }}>Solar install · Bristol</span>
                  </div>
                  <div style={{ padding: '7px 9px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#0f1d2a', lineHeight: 1.3, marginBottom: 5 }}>Get solar installed.<br/>Free survey today.</div>
                    <div style={{ marginBottom: 5 }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', background: '#4ABDE8', borderRadius: 100, padding: '3px 10px' }}>
                        <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>Get a Free Quote</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <span style={{ fontSize: 9, color: '#f59e0b' }}>★★★★★</span>
                      <span style={{ fontSize: 8, color: '#7a8d9e' }}>47 reviews</span>
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 8, fontWeight: 600, color: '#2a9bc8', background: 'rgba(74,189,232,0.1)', borderRadius: 100, padding: '2px 10px', whiteSpace: 'nowrap' }}>Built &amp; managed by us</span>
              </div>

              {/* Arrow 2 */}
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" style={{ flexShrink: 0 }}>
                <line x1="0" y1="8" x2="22" y2="8" stroke="rgba(74,189,232,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <path d="M18 3l5 5-5 5" stroke="rgba(74,189,232,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Col 3: Lead lands in your pipeline */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Leads come to you</span>
                <div style={{ background: '#fff', border: '1.5px solid rgba(74,189,232,0.3)', borderRadius: 14, overflow: 'hidden', minWidth: 175, boxShadow: '0 4px 20px rgba(74,189,232,0.1)' }}>
                  {/* New lead badge */}
                  <div style={{ background: 'rgba(58,184,112,0.08)', borderBottom: '1px solid rgba(58,184,112,0.15)', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3ab870', display: 'inline-block' }} />
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#3ab870' }}>New lead</span>
                    <span style={{ marginLeft: 'auto', fontSize: 9, color: '#7a8d9e' }}>just now</span>
                  </div>
                  {/* Lead details */}
                  <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f1d2a' }}>James T.</div>
                    <div style={{ fontSize: 11, color: '#7a8d9e' }}>Bristol, BS3 · 4kW system</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#2a9bc8' }}>£8,400</span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: '#e8944a', background: 'rgba(232,148,74,0.1)', borderRadius: 100, padding: '2px 7px' }}>High intent</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(15,29,42,0.06)', padding: '5px 12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: 9, color: '#7a8d9e' }}>Source:</span>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#4285f4' }}>Google</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
