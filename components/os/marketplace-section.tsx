'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, margin: '0px 0px -80px 0px' } as const

const jobs = [
  { icon: '☀️', addr: '14 Oakfield Rd', type: 'Solar', match: 96 },
  { icon: '🔥', addr: '8 Queens Ave', type: 'Gas Boiler', match: 91 },
  { icon: '⚡', addr: '22 Park Lane', type: 'EV Charger', match: 88 },
  { icon: '❄️', addr: '3 Willow Close', type: 'Heat Pump', match: 85 },
  { icon: '🔋', addr: '19 Chapel St', type: 'Battery', match: 82 },
  { icon: '☀️', addr: '7 Elm Drive', type: 'Solar', match: 79 },
  { icon: '🔥', addr: '41 High Street', type: 'Gas Boiler', match: 76 },
  { icon: '⚡', addr: '55 Bridge Rd', type: 'EV Charger', match: 73 },
  { icon: '❄️', addr: '12 Lime Grove', type: 'Heat Pump', match: 70 },
  { icon: '🔋', addr: '9 Station Rd', type: 'Battery', match: 67 },
  { icon: '☀️', addr: '28 Birch Lane', type: 'Solar', match: 94 },
  { icon: '🔥', addr: '6 Maple Ct', type: 'Gas Boiler', match: 89 },
  { icon: '⚡', addr: '33 Cedar Ave', type: 'EV Charger', match: 86 },
  { icon: '❄️', addr: '17 Ash Walk', type: 'Heat Pump', match: 81 },
  { icon: '🔋', addr: '44 Pine Rd', type: 'Battery', match: 78 },
  { icon: '☀️', addr: '2 Hazel Ct', type: 'Solar', match: 92 },
  { icon: '🔥', addr: '51 Beech Ave', type: 'Gas Boiler', match: 87 },
  { icon: '⚡', addr: '15 Poplar St', type: 'EV Charger', match: 84 },
  { icon: '❄️', addr: '38 Rowan Dr', type: 'Heat Pump', match: 71 },
  { icon: '🔋', addr: '21 Larch Way', type: 'Battery', match: 69 },
  { icon: '☀️', addr: '10 Sycamore Cl', type: 'Solar', match: 95 },
  { icon: '🔥', addr: '5 Alder Rd', type: 'Gas Boiler', match: 90 },
  { icon: '⚡', addr: '27 Holly Ln', type: 'EV Charger', match: 83 },
  { icon: '❄️', addr: '31 Ivy Close', type: 'Heat Pump', match: 77 },
  { icon: '🔋', addr: '48 Fern Way', type: 'Battery', match: 68 },
  { icon: '☀️', addr: '16 Yew Ct', type: 'Solar', match: 93 },
  { icon: '🔥', addr: '23 Oak Rise', type: 'Gas Boiler', match: 88 },
  { icon: '⚡', addr: '39 Elm Walk', type: 'EV Charger', match: 80 },
  { icon: '❄️', addr: '11 Willow Ln', type: 'Heat Pump', match: 74 },
  { icon: '🔋', addr: '56 Spruce Dr', type: 'Battery', match: 66 },
]

export default function OSMarketplaceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const initMarketplace = useCallback(() => {
    const container = containerRef.current
    if (!container || container.children.length > 0) return

    const numRows = 6
    const shuffled = [...jobs].sort(() => Math.random() - 0.5)
    const rows: typeof jobs[] = Array.from({ length: numRows }, () => [])
    shuffled.forEach((job, i) => rows[i % numRows].push(job))
    const gap = 10

    rows.forEach((rowJobs, rowIndex) => {
      const row = document.createElement('div')
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 16px;white-space:nowrap;will-change:transform;'

      const pairCount = rowJobs.length
      const allJobs = [...rowJobs, ...rowJobs]

      allJobs.forEach((job, idx) => {
        const card = document.createElement('div')
        card.className = 'mkt-job-card'
        card.dataset.pair = String(idx % pairCount)
        card.style.cssText = 'display:inline-flex;align-items:center;gap:8px;background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:8px 14px;font-size:13px;flex-shrink:0;'
        card.innerHTML =
          `<span style="font-size:16px">${job.icon}</span>` +
          `<span class="mkt-j-addr" style="font-weight:600;color:var(--tx)">${job.addr}</span>` +
          `<span style="color:var(--tx3);font-size:11px;margin-left:4px">${job.type}</span>` +
          `<span class="mkt-j-match" style="font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--tx3);margin-left:8px;white-space:nowrap">${job.match}% match</span>`
        row.appendChild(card)
      })

      container.appendChild(row)

      // Calculate scroll distance
      let scrollDist = 0
      for (let i = 0; i < pairCount; i++) {
        scrollDist += (row.children[i] as HTMLElement).offsetWidth + gap
      }

      const duration = (20 + (rowIndex % 3) * 5) * 1000
      const isReverse = rowIndex % 2 === 1

      row.animate(
        [{ transform: 'translateX(0px)' }, { transform: `translateX(-${scrollDist}px)` }],
        { duration, iterations: Infinity, direction: isReverse ? 'reverse' : 'normal', easing: 'linear' }
      )
    })

    // Periodically add accepted/declined states
    const interval = setInterval(() => {
      const available = container.querySelectorAll('.mkt-job-card:not(.accepted):not(.declined)')
      if (available.length === 0) return
      const card = available[Math.floor(Math.random() * available.length)] as HTMLElement
      const accepted = Math.random() < 0.75
      const state = accepted ? 'accepted' : 'declined'
      const row = card.parentElement!
      const pairId = card.dataset.pair!
      const pairs = row.querySelectorAll(`[data-pair="${pairId}"]`)
      pairs.forEach((p) => p.classList.add(state))
      setTimeout(() => {
        pairs.forEach((p) => p.classList.remove('accepted', 'declined'))
      }, 4000 + Math.random() * 2000)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cleanup = initMarketplace()
    return cleanup
  }, [initMarketplace])

  return (
    <section id="marketplace" style={{ padding: '56px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <div className="sl" style={{ color: 'var(--prp)' }}>Marketplace</div>
          <div className="st">Access new opportunities through <span style={{ color: 'var(--sky)' }}><span className="nova-wordmark">NOVA</span> marketplace</span></div>
          <p className="ssub" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>Receive jobs tailored to your product offering in your local area. Redistribute leads you can&apos;t fulfil and earn credits.</p>
        </motion.div>

        {/* Feed */}
        <motion.div
          className="mkt-feed-wrap os-mkt-feed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 20,
            background: 'var(--sf)',
            border: '1px solid var(--bd)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            padding: '48px 0',
            minHeight: 420,
          }}
        >
          {/* Fade edges */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 80, zIndex: 5, pointerEvents: 'none', background: 'linear-gradient(90deg, var(--sf), transparent)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 80, zIndex: 5, pointerEvents: 'none', background: 'linear-gradient(270deg, var(--sf), transparent)' }} />

          {/* NOVA hub */}
          <div className="mkt-nova os-mkt-nova" style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 120, height: 120, borderRadius: '50%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', zIndex: 10, background: 'var(--sf)',
          }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '2px solid rgba(74,189,232,0.25)', background: 'rgba(74,189,232,0.04)',
              boxShadow: '0 0 40px rgba(74,189,232,0.12), 0 0 80px rgba(74,189,232,0.05), inset 0 0 30px rgba(74,189,232,0.04)',
              animation: 'nova-glow 6s ease-in-out infinite',
            }} />
            <span className="mkt-nova-text os-mkt-nova-text nova-wordmark" style={{ fontSize: 22, color: 'var(--sky)', position: 'relative', zIndex: 1 }}>NOVA</span>
          </div>

          {/* Job rows */}
          <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }} />
        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .mkt-feed-wrap { min-height: 300px !important; padding: 32px 0 !important; }
          .mkt-nova { width: 80px !important; height: 80px !important; }
          .mkt-nova-text { font-size: 14px !important; }
        }
      `}</style>
    </section>
  )
}
