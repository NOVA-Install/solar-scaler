'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const taken = 3
const total = 5

function SpotsCounter({ remaining: targetRem, total: tot }: { remaining: number; total: number }) {
  const [displayNum, setDisplayNum] = useState(tot)
  const [visible, setVisible] = useState(true)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        setVisible(true)
        setDisplayNum(tot)
        // brief pause then count down 20 → targetRem
        const delay = setTimeout(() => {
          const duration = 1100
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplayNum(Math.round(tot - (tot - targetRem) * eased))
            if (p < 1) rafRef.current = requestAnimationFrame(tick)
          }
          rafRef.current = requestAnimationFrame(tick)
        }, 300)
        return () => clearTimeout(delay)
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(rafRef.current) }
  }, [targetRem, tot, started])

  const takenCount = tot - displayNum

  return (
    <div ref={ref}>
      {/* Big spots left — above grid */}
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease', marginBottom: 32 }}>
        <div style={{ fontSize: 'clamp(52px, 6vw, 66px)', fontWeight: 900, lineHeight: 1, color: 'white', letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
          <span style={{ color: displayNum < 10 ? '#e01010' : 'white', transition: 'color 0.4s ease' }}>{displayNum}</span> spots
        </div>
        <div style={{ fontSize: 'clamp(52px, 6vw, 66px)', fontWeight: 900, lineHeight: 1.1, color: 'white', letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
          left.
        </div>
      </div>

      {/* Squares grid — horizontal on mobile, vertical on desktop */}
      <div className="grid md:flex md:flex-col" style={{ gridTemplateColumns: `repeat(${tot}, 1fr)`, gap: 8, marginBottom: 18 }}>
        {Array.from({ length: tot }, (_, i) => {
          const isTaken = i < takenCount
          return (
            <div key={i} style={{
              height: 38,
              borderRadius: 8,
              background: isTaken ? 'rgba(0,20,40,0.32)' : 'rgba(255,255,255,0.92)',
              border: isTaken ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.1s ease, border-color 0.1s ease',
            }}>
              {isTaken && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2l6 6M8 2L2 8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}

function AdsMockup() {
  return (
    <div style={{ background: '#f4f7f9', borderRadius: 10, padding: 10, border: '1px solid rgba(15,29,42,0.08)' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        {[
          { name: 'Meta', color: '#1877f2', abbr: 'f' },
          { name: 'Google', color: '#4285f4', abbr: 'G' },
          { name: 'YouTube', color: '#ff0000', abbr: '▶' },
        ].map((p) => (
          <div key={p.name} style={{ background: '#fff', border: '1px solid rgba(15,29,42,0.08)', borderRadius: 8, padding: '6px 8px', textAlign: 'center', flex: 1 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3px', fontWeight: 700, fontSize: 9, color: '#fff' }}>{p.abbr}</div>
            <div style={{ fontSize: 7, color: '#7a8d9e' }}>{p.name}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {[{ label: 'Leads', val: '47' }, { label: 'CPL', val: '£0' }, { label: 'Spend', val: '£846' }].map((m) => (
          <div key={m.label} style={{ background: '#fff', borderRadius: 6, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#2a9bc8' }}>{m.val}</div>
            <div style={{ fontSize: 7, color: '#7a8d9e' }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketplaceMockup() {
  return (
    <div style={{ background: '#f4f7f9', borderRadius: 10, padding: 10, border: '1px solid rgba(15,29,42,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 8, fontWeight: 700, color: '#2a9bc8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Marketplace</span>
        <span style={{ fontSize: 7, fontWeight: 600, color: '#3ab870', background: 'rgba(58,184,112,0.1)', borderRadius: 100, padding: '1px 6px' }}>● Live</span>
      </div>
      {[
        { area: 'Bristol, BS3', type: '4kW', val: '£8,200' },
        { area: 'Bath, BA1', type: '6kW + Battery', val: '£14,600' },
        { area: 'Exeter, EX4', type: '5kW', val: '£9,800' },
      ].map((lead) => (
        <div key={lead.area} style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 6, padding: '5px 8px', marginBottom: 4, border: '1px solid rgba(15,29,42,0.06)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#0f1d2a' }}>{lead.area}</div>
            <div style={{ fontSize: 7, color: '#7a8d9e' }}>{lead.type}</div>
          </div>
          <span style={{ fontSize: 9, fontWeight: 700, color: '#2a9bc8' }}>{lead.val}</span>
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, marginTop: 4 }}>
        <span style={{ fontSize: 8, color: '#7a8d9e', textDecoration: 'line-through' }}>£45/lead</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#f4ab3a' }}>£0 partner rate</span>
      </div>
    </div>
  )
}

function WebsiteMockup() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid rgba(74,189,232,0.35)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(74,189,232,0.1)' }}>
      {/* Browser chrome */}
      <div style={{ background: '#f4f7f9', borderBottom: '1px solid rgba(15,29,42,0.07)', padding: '5px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f87171', display: 'inline-block' }} />
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
        <div style={{ flex: 1, height: 13, borderRadius: 3, background: '#fff', border: '1px solid rgba(15,29,42,0.08)', marginLeft: 4, display: 'flex', alignItems: 'center', paddingLeft: 5 }}>
          <span style={{ fontSize: 6, color: '#7a8d9e', fontFamily: 'monospace' }}>davessolar.co.uk</span>
        </div>
      </div>
      {/* Hero image */}
      <div style={{ height: 44, background: 'linear-gradient(135deg, #0c1d2e 0%, #1a3a5c 60%, #4ABDE8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3, padding: '5px 0', opacity: 0.2 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ display: 'flex', gap: 2, paddingLeft: 8 }}>
              {[0,1,2,3,4,5,6].map(j => (
                <div key={j} style={{ width: 12, height: 7, background: '#4ABDE8', borderRadius: 1, border: '0.5px solid rgba(255,255,255,0.3)' }} />
              ))}
            </div>
          ))}
        </div>
        <span style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.6)', position: 'absolute', bottom: 5, left: 9 }}>Solar install · Bristol</span>
      </div>
      {/* Content */}
      <div style={{ padding: '7px 9px' }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#0f1d2a', lineHeight: 1.3, marginBottom: 5 }}>Get solar installed.<br/>Free survey today.</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: '#4ABDE8', borderRadius: 100, padding: '3px 10px', marginBottom: 5 }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: '#fff' }}>Get a Free Quote</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontSize: 7, color: '#f59e0b' }}>★★★★★</span>
          <span style={{ fontSize: 6, color: '#7a8d9e' }}>47 reviews</span>
        </div>
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div style={{ background: '#f4f7f9', borderRadius: 10, padding: 10, border: '1px solid rgba(15,29,42,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <div style={{ width: 16, height: 16, borderRadius: 5, background: '#4abde8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 900, color: '#fff' }}>S</div>
        <span style={{ fontSize: 9, fontWeight: 600, color: '#0f1d2a' }}>Solar Scaler Team</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3ab870', display: 'block' }} />
          <span style={{ fontSize: 7, color: '#3ab870', fontWeight: 600 }}>Online</span>
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: '8px 8px 8px 2px', padding: '5px 8px', border: '1px solid rgba(15,29,42,0.08)', marginBottom: 5, fontSize: 8, color: '#0f1d2a', lineHeight: 1.4 }}>
        Can you update our ads for our new finance offer?
      </div>
      <div style={{ background: '#4abde8', borderRadius: '8px 8px 2px 8px', padding: '5px 8px', marginBottom: 4, fontSize: 8, color: '#fff', lineHeight: 1.4 }}>
        On it — ads, site and funnel updated by noon.
      </div>
      <div style={{ textAlign: 'right', fontSize: 7, fontWeight: 600, color: '#2a9bc8' }}>1 min response</div>
    </div>
  )
}

function PlatformMockup() {
  return (
    <div style={{ background: '#f4f7f9', borderRadius: 10, padding: 10, border: '1px solid rgba(15,29,42,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontSize: 8.5, fontWeight: 700, color: '#0f1d2a' }}>Dashboard</span>
        <span style={{ fontSize: 7.5, fontWeight: 600, color: '#2a9bc8', background: 'rgba(74,189,232,0.12)', borderRadius: 100, padding: '2px 7px' }}>✦ AI Active</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
        {[
          { label: 'New leads', val: '47', color: '#2a9bc8' },
          { label: 'Pipeline', val: '£28k', color: '#0f1d2a' },
          { label: 'Jobs booked', val: '12', color: '#3ab870' },
          { label: 'Awaiting pay', val: '3', color: '#f4ab3a' },
        ].map((s) => (
          <div key={s.label} style={{ background: '#fff', borderRadius: 6, padding: '5px 8px', border: '1px solid rgba(15,29,42,0.06)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 7, color: '#7a8d9e', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockupMap: Record<string, React.ReactNode> = {
  ads: <AdsMockup />,
  marketplace: <MarketplaceMockup />,
  website: <WebsiteMockup />,
  chat: <ChatMockup />,
  platform: <PlatformMockup />,
}

// Ordered: most dramatic value first
const valueRows = [
  {
    badge: 'Included for free',
    worth: '£3,000/mo value',
    label: 'Lead generation, fully managed',
    sub: 'Digital marketing launched by us. You focus on installs.',
    mockup: 'ads',
  },
  {
    badge: 'Included for free',
    worth: '£2,400 value',
    label: 'Premium custom website, built for you',
    sub: 'Professionally built. Optimised for conversion and brand authority.',
    mockup: 'website',
  },
  {
    badge: 'Included for free',
    worth: '£500/mo value',
    label: 'Full Solar Scaler platform',
    sub: 'CRM, lead generation, customer communication.',
    mockup: 'platform',
  },
  {
    badge: 'Included for free',
    worth: 'Potential free installs',
    label: 'Exclusive high-intent marketplace leads',
    sub: "Early partners gain access to Solar Scaler's own high-intent solar leads.",
    mockup: 'marketplace',
  },
  {
    badge: 'Included for free',
    worth: 'Priceless',
    label: 'Direct access to our team',
    sub: 'No ticket queues. You message us directly at any time.',
    mockup: 'chat',
  },
]

export default function EarlyAccessBanner() {
  return (
    <section id="apply-section" className="w-full border-y border-[var(--border)] bg-[var(--sky-dim)] py-12 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-black uppercase tracking-[0.12em] text-[var(--tx)]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2vw, 22px)' }}>
              SOLAR SCALER
            </span>
          </div>
        </motion.div>

        {/* Two-column offer */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] rounded-2xl overflow-hidden border border-[var(--bd)] shadow-xl">

            {/* LEFT — value stack */}
            <div className="bg-white px-6 md:px-8 py-7">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[var(--sky-d)] mb-5">What&apos;s included</p>

              <div className="space-y-0">
                {valueRows.map((row, i) => (
                  <div key={i} className={`flex items-start gap-4 py-4 ${i < valueRows.length - 1 ? 'border-b border-[var(--bd)]' : ''}`}>
                    {/* Mockup — desktop only */}
                    <div className="hidden md:block w-[148px] shrink-0">
                      {mockupMap[row.mockup]}
                    </div>
                    {/* Label + sub + value pills */}
                    <div className="flex-1 flex flex-col gap-1.5 justify-center min-w-0">
                      <p className="text-[var(--tx)] font-semibold text-sm leading-snug">{row.label}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold rounded-full px-3 py-1 whitespace-nowrap" style={{
                          color: '#fff',
                          background: row.badge === 'EXCLUSIVE' ? '#e8a020' : '#3ab870',
                          letterSpacing: '0.04em',
                        }}>
                          {row.badge}
                        </span>
                        <span className="text-[10px] font-semibold rounded-full px-2.5 py-1 whitespace-nowrap" style={{ color: '#2a9bc8', background: 'rgba(74,189,232,0.1)', border: '1px solid rgba(74,189,232,0.25)' }}>
                          {row.worth}
                        </span>
                      </div>
                      <p className="text-[var(--tx3)] text-xs leading-relaxed">{row.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total value — climactic moment */}
              <div className="mt-5 rounded-xl bg-[var(--sf2)] border border-[var(--bd)] px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-[var(--tx3)]">Total free value</span>
                  <span className="text-[var(--tx)] font-bold text-base">£5,900</span>
                </div>
                <span className="text-[var(--sky-d)] font-bold text-sm">Early partners only</span>
              </div>
            </div>

            {/* RIGHT — close */}
            <div id="apply" className="bg-[var(--sky)] px-7 py-10 flex flex-col items-stretch justify-center gap-6" style={{ scrollMarginTop: '60vh' }}>
              <SpotsCounter remaining={total - taken} total={total} />
              <a
                id="apply-btn"
                href="/solar-scaler/apply"
                className="flex items-center justify-center w-full bg-white text-[var(--sky-d)] font-black rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)', padding: '22px 32px' }}
              >
                Apply
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
