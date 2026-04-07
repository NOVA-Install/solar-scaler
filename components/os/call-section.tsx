'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

function IosStatusBar({ time }: { time: string }) {
  return (
    <div style={{ position: 'absolute', top: 12, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 22px', fontSize: 12, fontWeight: 600, color: '#fff', zIndex: 12 }}>
      <span>{time}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <svg width="14" height="11" viewBox="0 0 16 11" fill="none"><rect x="0" y="3" width="3" height="8" rx="1" fill="rgba(255,255,255,0.35)" /><rect x="4.5" y="2" width="3" height="9" rx="1" fill="rgba(255,255,255,0.5)" /><rect x="9" y="1" width="3" height="10" rx="1" fill="rgba(255,255,255,0.7)" /><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#fff" /></svg>
        <svg width="14" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 3C9.8 3 11.8 4 13.2 5.6L14.5 4.2C12.7 2.2 10.2 1 7.5 1S2.3 2.2.5 4.2L1.8 5.6C3.2 4 5.2 3 7.5 3Z" fill="rgba(255,255,255,0.4)" /><path d="M7.5 6C9 6 10.3 6.6 11.3 7.5L12.5 6.2C11.2 5 9.4 4.2 7.5 4.2S3.8 5 2.5 6.2L3.7 7.5C4.7 6.6 6 6 7.5 6Z" fill="rgba(255,255,255,0.6)" /><circle cx="7.5" cy="9.5" r="1.5" fill="#fff" /></svg>
        <svg width="22" height="12" viewBox="0 0 25 12" fill="none"><rect x="0" y="1" width="21" height="10" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1" /><rect x="1.5" y="2.5" width="15" height="7" rx="2" fill="#34C759" /><rect x="22" y="4" width="2" height="4" rx="1" fill="rgba(255,255,255,0.35)" /></svg>
      </span>
    </div>
  )
}

/** Linearly interpolate a value within a set of keyframe stops */
function interpolate(progress: number, stops: number[], values: number[]): number {
  if (progress <= stops[0]) return values[0]
  if (progress >= stops[stops.length - 1]) return values[values.length - 1]
  for (let i = 0; i < stops.length - 1; i++) {
    if (progress >= stops[i] && progress <= stops[i + 1]) {
      const t = (progress - stops[i]) / (stops[i + 1] - stops[i])
      return values[i] + t * (values[i + 1] - values[i])
    }
  }
  return values[values.length - 1]
}

export default function OSCallSection() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const incomingRef = useRef<HTMLDivElement>(null)
  const callScreenRef = useRef<HTMLDivElement>(null)
  const bookedRef = useRef<HTMLDivElement>(null)
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const [seconds, setSeconds] = useState(154)

  // Call timer
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  // Phone scaling — account for nav (60px) + story text (~80px) + margins (~60px)
  const [phoneScale, setPhoneScale] = useState(1)
  useEffect(() => {
    function update() {
      if (window.innerWidth <= 900) { setPhoneScale(0.78); return }
      const overhead = 260 // nav + story text + padding
      const available = window.innerHeight - overhead
      setPhoneScale(available < 578 ? Math.max(0.5, available / 578) : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Vanilla scroll-driven animation — no rAF dependency
  const onScroll = useCallback(() => {
    const el = scrollAreaRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight

    // Progress: 0 when top of scroll area hits top of viewport,
    // 1 when bottom of scroll area hits bottom of viewport
    const totalTravel = el.offsetHeight - vh
    const scrolled = -rect.top
    const progress = Math.max(0, Math.min(1, scrolled / totalTravel))

    // Apply opacity to phone screens
    if (incomingRef.current)
      incomingRef.current.style.opacity = String(interpolate(progress, [0, 0.22, 0.28], [1, 1, 0]))
    if (callScreenRef.current)
      callScreenRef.current.style.opacity = String(interpolate(progress, [0.22, 0.30, 0.58, 0.64], [0, 1, 1, 0]))
    if (bookedRef.current)
      bookedRef.current.style.opacity = String(interpolate(progress, [0.58, 0.68, 1], [0, 1, 1]))

    // Story text
    if (step1Ref.current)
      step1Ref.current.style.opacity = String(interpolate(progress, [0, 0.18, 0.25], [1, 1, 0]))
    if (step2Ref.current)
      step2Ref.current.style.opacity = String(interpolate(progress, [0.25, 0.32, 0.55, 0.60], [0, 1, 1, 0]))
    if (step3Ref.current)
      step3Ref.current.style.opacity = String(interpolate(progress, [0.62, 0.70, 1], [0, 1, 1]))

    // Glow size
    if (glowRef.current) {
      const size = interpolate(progress, [0, 0.5, 1], [500, 800, 1000])
      glowRef.current.style.width = size + 'px'
      glowRef.current.style.height = size + 'px'
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial call
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timerText = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0')

  return (
    <section id="call" style={{ position: 'relative', background: 'linear-gradient(180deg, var(--bg), #e8f4fb)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '40px 24px 12px', background: 'var(--bg)' }}>
        <div className="sl">AI Agent</div>
        <div className="st">Never miss an <span style={{ color: 'var(--sky)' }}>opportunity</span></div>
      </div>

      {/* Scroll area: 220vh tall — gives 120vh of scroll travel (matches original GSAP end: '+=120%') */}
      <div ref={scrollAreaRef} style={{ height: '220vh', position: 'relative' }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: 60,
          background: 'linear-gradient(180deg, var(--bg), #e0f0f9)',
        }}>
          {/* Glow */}
          <div ref={glowRef} style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,189,232,0.08), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, width: '100%', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {/* Story text */}
            <div className="call-story os-call-story" style={{ position: 'relative', textAlign: 'center', minHeight: 64, marginBottom: 16, width: '100%' }}>
              <div ref={step1Ref} style={{ opacity: 1 }}>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 700, color: 'var(--tx)', margin: '0 0 8px', letterSpacing: '-0.03em' }}>A customer calls.</h3>
                <p style={{ fontSize: 'clamp(13px, 2vw, 17px)', color: 'var(--tx3)', lineHeight: 1.5, margin: 0 }}>You&apos;re on a job. Phone&apos;s in the van.</p>
              </div>
              <div ref={step2Ref} style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0 }}>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 700, color: 'var(--tx)', margin: '0 0 8px', letterSpacing: '-0.03em' }}><span className="nova-wordmark">NOVA{'\u2009'}AI</span> handles the call.</h3>
                <p style={{ fontSize: 'clamp(13px, 2vw, 17px)', color: 'var(--tx3)', lineHeight: 1.5, margin: 0 }}>Answers instantly. Qualifies the lead.</p>
              </div>
              <div ref={step3Ref} style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0 }}>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 700, color: 'var(--tx)', margin: '0 0 8px', letterSpacing: '-0.03em' }}>Install booked.</h3>
                <p style={{ fontSize: 'clamp(13px, 2vw, 17px)', color: 'var(--tx3)', lineHeight: 1.5, margin: 0 }}>Customer confirmed. You didn&apos;t lift a finger.</p>
              </div>
            </div>

            {/* iPhone */}
            <div style={{ width: 280, flexShrink: 0 }}>
              <div style={{
                position: 'relative', width: 280, height: 578, borderRadius: 50,
                background: 'linear-gradient(145deg, #2a2a2e, #1a1a1e)', padding: 3,
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)',
                transform: `scale(${phoneScale})`, transformOrigin: 'top center',
                marginBottom: phoneScale < 1 ? -(578 * (1 - phoneScale)) : 0,
              }}>
                {/* Side buttons */}
                <div style={{ position: 'absolute', left: -3, top: 105, width: 3, height: 26, background: '#2a2a2e', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: -3, top: 150, width: 3, height: 46, background: '#2a2a2e', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: -3, top: 205, width: 3, height: 46, background: '#2a2a2e', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', right: -3, top: 161, width: 3, height: 58, background: '#2a2a2e', borderRadius: '0 2px 2px 0' }} />

                <div style={{ width: '100%', height: '100%', borderRadius: 46, background: '#000', overflow: 'hidden', position: 'relative' }}>
                  {/* Dynamic Island */}
                  <div style={{ position: 'absolute', top: '1.75%', left: '50%', transform: 'translateX(-50%)', width: '41.5%', aspectRatio: '114/33', background: '#000', borderRadius: 17, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'radial-gradient(circle, #1a1a2e, #0a0a14)', border: '1px solid rgba(255,255,255,0.08)' }} />
                  </div>

                  {/* Screen 1: Incoming call */}
                  <div ref={incomingRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'stretch', zIndex: 6, overflow: 'hidden', opacity: 1 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 30%, rgba(60,100,160,0.9) 0%, transparent 55%), radial-gradient(ellipse at 70% 55%, rgba(190,150,50,0.8) 0%, transparent 50%), radial-gradient(ellipse at 35% 75%, rgba(50,110,80,0.7) 0%, transparent 50%), radial-gradient(ellipse at 80% 25%, rgba(90,130,170,0.6) 0%, transparent 45%), linear-gradient(180deg, #1e3a5a, #0c1a2c)', zIndex: 0 }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <IosStatusBar time="9:41" />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '56px 18px 0' }}>
                        <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#636366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 500, color: '#fff', flexShrink: 0 }}>IC</div>
                        <div>
                          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.15 }}>Important Customer</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>mobile</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 46px', marginBottom: 14 }}>
                        {['Remind Me', 'Message'].map((label) => (
                          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <div style={{ width: 14, height: 14, background: 'rgba(255,255,255,0.7)', borderRadius: 3 }} />
                            </div>
                            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 38px', marginBottom: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FF3B30', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" transform="rotate(135 12 12)" /></svg>
                          </div>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>Decline</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#34C759', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                          </div>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>Accept</span>
                        </div>
                      </div>
                      <div style={{ width: 100, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.2)', margin: '0 auto 8px' }} />
                    </div>
                  </div>

                  {/* Screen 2: NOVA AI active call */}
                  <div ref={callScreenRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 18px 14px', background: '#000', opacity: 0 }}>
                    <IosStatusBar time="9:42" />
                    <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', marginTop: 100, letterSpacing: '-0.01em' }}>Important Customer</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginTop: 4, marginBottom: 2, letterSpacing: '.02em' }}>{timerText}</div>
                    <div style={{ fontSize: 12, color: 'var(--sky)', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>✦ <span className="nova-wordmark">NOVA{'\u2009'}AI</span> handling call</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, height: 22, marginBottom: 6 }}>
                      {[10, 16, 22, 13, 19, 26, 16, 22, 11, 18, 14, 8].map((h, i) => (
                        <span key={i} style={{ width: 2.5, height: h, borderRadius: 2, background: 'var(--sky)', animation: `wave 1.2s ease-in-out infinite ${i * 0.1}s` }} />
                      ))}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 20, justifyContent: 'center' }}>
                      {['mute', 'keypad', 'audio', 'add call', 'FaceTime', 'contacts'].map((label) => (
                        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                          <div style={{ width: 50, height: 50, padding: 14, background: 'rgba(255,255,255,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 22, height: 22, background: 'rgba(255,255,255,0.6)', borderRadius: 4 }} />
                          </div>
                          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.45)' }}>{label}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#FF3B30', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '56px auto 0' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" transform="rotate(135 12 12)" /></svg>
                    </div>
                    <div style={{ width: 100, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.2)', margin: 'auto auto 8px' }} />
                  </div>

                  {/* Screen 3: Install booked */}
                  <div ref={bookedRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 7, background: '#f8f8fa', opacity: 0 }}>
                    <IosStatusBar time="9:45" />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #4ABDE8 0%, #5ec8f0 40%, #a8ddf0 70%, #f8f8fa 100%)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ marginBottom: 14, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}><circle cx="22" cy="22" r="22" fill="rgba(255,255,255,0.2)" /><circle cx="22" cy="22" r="16" fill="white" /><path d="M14 22L19.5 27.5L30 16" stroke="#34C759" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>Install Confirmed</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 4, fontWeight: 500 }}>Tuesday, 10:00 AM</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: 14, padding: 16, margin: '24px 14px 0', width: 'calc(100% - 28px)', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
                        {[
                          { l: 'Customer', v: 'Important Customer' },
                          { l: 'Service', v: 'Solar Panel Install' },
                          { l: 'Address', v: '14 Oak Lane, Bristol' },
                          { l: 'Reference', v: '#NV-4821' },
                        ].map((row, i, arr) => (
                          <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                            <span style={{ fontSize: 10, color: '#8e8e93' }}>{row.l}</span>
                            <span style={{ fontSize: 10, fontWeight: 600, color: '#1c1c1e', textAlign: 'right' }}>{row.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px 14px', background: '#f2f2f7', borderTop: '0.5px solid rgba(0,0,0,0.1)' }}>
                      <div style={{ height: 34, width: 42, borderRadius: 17, border: '1px solid rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="8" height="14" viewBox="0 0 12 21" fill="none"><path d="M10.5 1L1.5 10.5 10.5 20" stroke="#1c1c1e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 17, height: 34, padding: '0 10px', fontSize: 11, color: '#1c1c1e', fontWeight: 500 }}>
                        novainstall.com
                      </div>
                      <div style={{ height: 34, width: 42, borderRadius: 17, border: '1px solid rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="16" height="4" viewBox="0 0 24 6" fill="#1c1c1e"><circle cx="3" cy="3" r="2.5" /><circle cx="12" cy="3" r="2.5" /><circle cx="21" cy="3" r="2.5" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .call-story { min-height: 50px !important; margin-bottom: 8px !important; padding: 0 16px !important; }
          .call-story h3 { font-size: 20px !important; }
          .call-story p { font-size: 13px !important; }
        }
      `}</style>
    </section>
  )
}
