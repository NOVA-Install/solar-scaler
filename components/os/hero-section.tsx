'use client'

function LaptopMockup() {
  return (
    <div style={{ marginTop: 'clamp(16px, 3vh, 52px)', width: 'min(92%, 840px)' }}>
      <div style={{
        background: 'rgba(255,255,255,0.25)',
        borderRadius: 16,
        padding: 7,
        boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
      }}>
        <div style={{
          background: 'var(--sf, #fff)',
          borderRadius: 10,
          aspectRatio: '16/9.2',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Dashboard mockup — scaled down to look dense like the original */}
          <div className="dm-grid os-dm-grid" style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '140px 1fr', fontSize: 11 }}>
            {/* Sidebar — narrower */}
            <div className="dm-sidebar os-dm-sidebar" style={{ background: 'var(--bg2, #f4f7f9)', padding: '10px 8px', borderRight: '1px solid var(--bd, rgba(15,29,42,0.08))', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span className="nova-wordmark" style={{ fontSize: 12, color: 'var(--tx)', marginBottom: 4 }}>NOVA</span>
              <div style={{ padding: '5px 7px', borderRadius: 5, background: 'var(--sky-g, rgba(74,189,232,0.12))', color: 'var(--sky-d, #2a9bc8)', fontWeight: 500, fontSize: 10 }}>Dashboard</div>
              {['Pipeline', 'Leads', 'Quotes', 'Schedule', 'Payments', 'Reviews'].map((item) => (
                <div key={item} style={{ padding: '5px 7px', borderRadius: 5, color: 'var(--tx3, #7a8d9e)', fontWeight: 500, fontSize: 10 }}>{item}</div>
              ))}
            </div>

            {/* Main content — tighter spacing */}
            <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6, overflow: 'hidden' }}>
              {/* Top bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>Good morning, Dave</h3>
                <div style={{ background: 'var(--sky-g)', color: 'var(--sky-d)', padding: '2px 8px', borderRadius: 100, fontSize: 9, fontWeight: 600 }}>&#10022; AI Active - 14 actions today</div>
              </div>

              {/* Stats row — smaller */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
                {[
                  { v: '47', l: 'New leads', c: 'var(--sky-d)' },
                  { v: '£28.4k', l: 'Pipeline', c: 'var(--tx)' },
                  { v: '12', l: 'Jobs booked', c: 'var(--grn)' },
                  { v: '3', l: 'Awaiting pay', c: 'var(--org)' },
                ].map((s) => (
                  <div key={s.l} style={{ background: 'var(--sf2, #f0f4f7)', borderRadius: 6, padding: '6px 8px' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', color: s.c }}>{s.v}</div>
                    <div style={{ fontSize: 8, color: 'var(--tx3)', marginTop: 1 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Pipeline header */}
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--tx2)' }}>Live Pipeline</div>

              {/* Pipeline columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, flex: 1 }}>
                {[
                  { title: 'New', cards: [{ n: 'Sarah M.', v: 'ecoTEC', t: '✦ AI called' }, { n: 'James W.', v: 'Boiler', t: '✦ AI qualified' }] },
                  { title: 'Survey', cards: [{ n: 'Tom H.', v: 'Solar', t: '✦ AI booked' }] },
                  { title: 'Quoted', cards: [{ n: 'Mark D.', v: '£4,200', t: '✦ AI chased' }] },
                  { title: 'Won', cards: [{ n: 'Emma B.', v: '£3,800', t: '' }] },
                  { title: 'Install', cards: [{ n: 'Paul K.', v: 'Thu 9am', t: '' }] },
                ].map((col) => (
                  <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ fontSize: 7, fontWeight: 600, color: 'var(--tx3)', textTransform: 'uppercase', letterSpacing: '.04em', padding: 3, borderRadius: 4, background: 'var(--sf2)', textAlign: 'center' }}>{col.title}</div>
                    {col.cards.map((card) => (
                      <div key={card.n} style={{ background: 'var(--sf, #fff)', border: '1px solid var(--bd)', borderRadius: 5, padding: '4px 5px', fontSize: 8 }}>
                        <div style={{ fontWeight: 600 }}>{card.n}</div>
                        <div style={{ color: 'var(--sky-d)', fontWeight: 500 }}>{card.v}</div>
                        {card.t && (
                          <span style={{ display: 'inline-block', background: 'var(--sky-g)', color: 'var(--sky-d)', borderRadius: 3, padding: '1px 3px', fontSize: 6, marginTop: 1, fontWeight: 600 }}>{card.t}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OSHeroSection() {
  return (
    <section
      className="hero-entrance os-hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        padding: '24px 24px 24px',
        paddingTop: 'max(140px, 16vh)',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #4ABDE8 0%, #5ec8f0 45%, #b8e2f5 75%, var(--bg) 100%)',
      }}
    >
      {/* Tag */}
      <div
        className="hero-fade hero-fade-1"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 16px 6px 10px',
          borderRadius: 100,
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          fontSize: 14,
          color: '#fff',
          fontWeight: 500,
          marginBottom: 28,
        }}
      >
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', animation: 'pulse 2s ease infinite' }} />
        AI-Native Operating System
      </div>

      {/* Headline */}
      <h1
        className="hero-fade hero-fade-2"
        style={{
          fontSize: 'clamp(42px, 7vw, 92px)',
          fontWeight: 700,
          lineHeight: 0.94,
          letterSpacing: '-0.04em',
          color: '#fff',
          maxWidth: 780,
          margin: 0,
        }}
      >
        Your entire install operations.<br />One platform.
      </h1>

      {/* Subtitle */}
      <p
        className="hero-fade hero-fade-3"
        style={{
          fontSize: 'clamp(16px, 1.8vw, 19px)',
          color: 'rgba(255,255,255,0.85)',
          maxWidth: 480,
          lineHeight: 1.6,
          marginTop: 'clamp(8px, 2vh, 20px)',
        }}
      >
        Built for home energy installers. <strong>AI runs your pipeline.</strong> <strong>You focus on installs.</strong>
      </p>

      {/* CTA */}
      <div className="hero-fade hero-fade-4" style={{ display: 'flex', gap: 14, marginTop: 'clamp(12px, 3vh, 36px)' }}>
        <a
          href="https://calendly.com/chris-novainstall/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white"
        >
          Book a Demo
        </a>
      </div>

      {/* Laptop */}
      <div className="hero-fade hero-fade-5" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <LaptopMockup />
      </div>

      <style jsx>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade {
          opacity: 0;
          animation: heroFadeIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-fade-1 { animation-delay: 0.15s; }
        .hero-fade-2 { animation-delay: 0.3s; }
        .hero-fade-3 { animation-delay: 0.5s; }
        .hero-fade-4 { animation-delay: 0.7s; }
        .hero-fade-5 { animation-delay: 0.45s; }
      `}</style>
    </section>
  )
}
