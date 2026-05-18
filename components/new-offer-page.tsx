'use client'

import ProofTicker from './proof-ticker'

export default function NewOfferPage() {
  return (
    <main className="min-h-screen">
      <section
        className="flex flex-col items-center relative"
        style={{
          background: 'linear-gradient(180deg, #4ABDE8 0%, #4ABDE8 65%, #ffffff 100%)',
        }}
      >
        {/* Wordmark */}
        <div className="w-full flex justify-center pt-5 md:pt-10 pb-0">
          <span className="text-white font-black uppercase tracking-[0.12em] select-none" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2vw, 24px)' }}>
            SOLAR SCALER
          </span>
        </div>

        {/* Centred content column */}
        <div className="w-full px-6 pt-6 md:pt-10 pb-4 flex flex-col items-center text-center">

          {/* Headline */}
          <h1
            className="font-sans font-[700] leading-[1.08] tracking-[-0.03em] text-white mb-6"
            style={{ fontSize: 'clamp(22px, 4.5vw, 44px)' }}
          >
            <span className="block whitespace-nowrap">Guaranteed Solar Appointments</span>
            <span className="block whitespace-nowrap">Without the Spend, Setup, or Sales Team</span>
          </h1>

          {/* Hero CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 mb-8 whitespace-nowrap"
            style={{
              border: '2px solid rgba(255,255,255,0.6)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 100,
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              backdropFilter: 'blur(4px)',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            See our transparent pricing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Video placeholder with badge */}
          <div className="relative w-full max-w-2xl mb-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-white text-xs font-bold tracking-widest uppercase shadow-lg"
                style={{ background: '#3ab870' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                <span>Limited Spots for {new Date().toLocaleString('en-GB', { month: 'long' })}</span>
              </div>
            </div>

            <div
              className="w-full aspect-video rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'rgba(15,29,42,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full">
          <ProofTicker />
        </div>

      </section>

      {/* Pricing section */}
      <section id="pricing" className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="st">Simple, transparent <span className="ac">pricing</span></h2>
          </div>

          {/* Guarantee badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { text: 'Guaranteed £300 per appointment' },
              { text: 'Guaranteed free replacement on no-shows' },
              { text: 'Guaranteed no lock-in. Cancel anytime.' },
            ].map((g) => (
              <div
                key={g.text}
                className="flex items-center gap-3 p-4 rounded-lg"
                style={{ background: 'var(--sky-g)', border: '1px solid rgba(74,189,232,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <rect width="20" height="20" rx="4" fill="var(--grn)" />
                  <path d="M6 10l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-semibold leading-snug" style={{ color: 'var(--tx)' }}>{g.text}</span>
              </div>
            ))}
          </div>

          {/* Pricing cards — differences only */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              {
                name: 'Starter',
                price: '£3,000',
                appointments: 10,
                ownLeads: 50,
                comms: '600 SMS · 3,000 call minutes',
                nova: { plan: 'Starter', worth: '£499/mo' },
                extras: [] as string[],
              },
              {
                name: 'Growth',
                price: '£6,000',
                appointments: 20,
                ownLeads: 100,
                comms: '1,200 SMS · 6,000 call minutes',
                nova: { plan: 'Growth', worth: '£899/mo' },
                extras: ['Custom branded website'],
              },
              {
                name: 'Pro',
                price: '£12,000',
                appointments: 40,
                ownLeads: 200,
                comms: '2,400 SMS · 12,000 call minutes',
                nova: { plan: 'Pro', worth: '£1,799/mo' },
                extras: ['Custom branded website'],
              },
            ] as const).map((tier) => {
              const color = ({ Starter: 'var(--tx)', Growth: 'var(--sky)', Pro: 'var(--grn)' } as Record<string, string>)[tier.name] || 'var(--sky)'
              return (
                <div
                  key={tier.name}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{ background: '#fff', border: '1.5px solid var(--bd)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                >
                  {/* Tier strip */}
                  <div className="px-6 py-4" style={{ background: color }}>
                    <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                      {tier.name}
                    </p>
                  </div>

                  <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="font-[700] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 42px)', color: 'var(--tx)' }}>
                        {tier.price}
                      </span>
                      <span className="text-[14px] font-medium" style={{ color: 'var(--tx3)' }}>per month</span>
                    </div>

                    {/* Cost per appointment */}
                    <p className="text-[13px] font-medium mb-5" style={{ color: 'var(--tx3)', marginTop: -12 }}>
                      £{(parseInt(tier.price.replace(/[£,]/g, '')) / tier.appointments).toFixed(0)} per appointment
                    </p>

                    {/* Appointment count — the hero number */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-[32px] font-[700] tracking-tight" style={{ color: 'var(--sky-d)', fontFeatureSettings: '"tnum"' }}>
                        {tier.appointments}
                      </span>
                      <span className="text-[14px] font-medium" style={{ color: 'var(--tx2)' }}>
                        appointments per month
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px mb-4" style={{ background: 'var(--bd)' }} />

                    {/* Extras (Growth/Pro only) */}
                    {tier.extras && tier.extras.length > 0 && (
                      <div className="flex flex-col gap-2.5 mb-4">
                        {tier.extras.map((e) => <DiffLine key={e} label={e} />)}
                      </div>
                    )}

                    {/* NOVA callout — includes leads + comms */}
                    <div
                      className="p-4 rounded-lg mt-auto"
                      style={{ background: 'var(--sky-g)', border: '1px solid rgba(74,189,232,0.15)' }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                          <rect width="18" height="18" rx="4" fill="var(--grn)" />
                          <path d="M5 9l2.5 2.5L13 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] font-semibold" style={{ color: 'var(--tx)' }}>
                          NOVA {tier.nova.plan} CRM
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 text-[13px]" style={{ color: 'var(--tx2)' }}>
                        <div className="flex items-center gap-2">
                          <span>Up to</span>
                          <span className="font-semibold" style={{ color: 'var(--sky-d)', fontFeatureSettings: '"tnum"' }}>{tier.ownLeads}</span>
                          <span>leads per month</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold" style={{ color: 'var(--sky-d)', fontFeatureSettings: '"tnum"' }}>{tier.comms.split(' · ')[0].split(' ')[0]}</span>
                          <span>SMS</span>
                          <span style={{ color: 'var(--tx3)' }}>·</span>
                          <span className="font-semibold" style={{ color: 'var(--sky-d)', fontFeatureSettings: '"tnum"' }}>{tier.comms.split(' · ')[1].split(' ')[0]}</span>
                          <span>call minutes</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(74,189,232,0.15)' }}>
                        <span className="text-[16px] font-bold" style={{ color: 'var(--tx)' }}>
                          Worth {tier.nova.worth}
                        </span>
                        <span className="text-[15px] font-bold uppercase ml-2" style={{ color: 'var(--grn)' }}>
                          Free
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Surveyors note */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span
              className="shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center"
              style={{ background: 'var(--sky-g)', border: '1.5px solid var(--sky)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--sky)' }} />
            </span>
            <span className="text-[14px] font-medium" style={{ color: 'var(--tx2)' }}>In-house surveyors available across all plans</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center mt-8">
            <a href="/apply" className="btn-sky text-center" style={{ fontSize: '17px', padding: '16px 40px' }}>
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Every plan includes */}
      <section className="px-6 py-16 md:py-24" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="st">Included in <span className="ac">every</span> plan</h2>
            <p className="ssub mt-2">Every plan includes NOVA, our purpose-built solar CRM. <strong>An exclusive partnership at no extra cost.</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0" style={{ borderTop: '1px solid var(--bd)' }}>
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m8.66-13.5l-.87.5M4.21 16.5l-.87.5M20.66 16.5l-.87-.5M4.21 7.5l-.87-.5M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>, title: 'Unlimited solar designs', desc: 'Roof modelling and shade analysis on every property.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/><path d="M12 14v3"/></svg>, title: 'AI agents', desc: 'Qualify, follow up and book appointments around the clock.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: 'Quote calculator', desc: 'Configure a system and get a customer-ready price in seconds.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>, title: 'Data enrichment', desc: 'Postcode, property and Solar API data on every lead.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, title: 'DNO applications', desc: 'Pre-filled G98 and G99 paperwork, ready to submit.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'MCS compliance', desc: 'Checklists aligned with current MCS rules.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: 'Proposals that close', desc: 'On-brand, interactive customer proposals.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m8.66-13.5l-.87.5M4.21 16.5l-.87.5M20.66 16.5l-.87-.5M4.21 7.5l-.87-.5"/><circle cx="12" cy="12" r="3"/></svg>, title: 'Attribution & tracking', desc: 'See which channels actually convert.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="6" height="6" rx="1"/><rect x="16" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M5 10v2a2 2 0 002 2h2M19 10v2a2 2 0 01-2 2h-2"/></svg>, title: 'Automations', desc: 'Workflows that move work between teams without copy-paste.' },
            ].map((f, i) => (
              <div
                key={f.title}
                className="p-6"
                style={{
                  borderBottom: '1px solid var(--bd)',
                  borderRight: (i % 3 !== 2) ? '1px solid var(--bd)' : undefined,
                }}
              >
                <div className="mb-3" style={{ color: 'var(--tx3)' }}>{f.icon}</div>
                <h3 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--tx)' }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--tx3)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Who this is for */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="st">Built for installers who want to <span className="ac">scale</span></h2>
          <div className="flex flex-col gap-3 mt-8 text-left max-w-lg mx-auto">
            {[
              'You want more appointments without buying shared leads',
              'You don\'t want to manage a marketing agency',
              'You want to stop qualifying every single enquiry yourself',
              'You want one system instead of five tools duct-taped together',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
                  <rect width="18" height="18" rx="4" fill="var(--grn)" />
                  <path d="M5 9l2.5 2.5L13 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[15px] leading-snug" style={{ color: 'var(--tx2)' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="px-6 py-16 md:py-24" style={{ background: 'var(--sky)', color: '#fff' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold leading-tight tracking-tight text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
            Ready to stop chasing leads?
          </h2>
          <p className="text-white/80 text-[17px] mb-8">
            Book a free call. No commitment. We&apos;ll show you exactly how it works.
          </p>
          <a href="/apply" className="btn-white text-center" style={{ fontSize: '17px', padding: '16px 40px' }}>
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  )
}

/* ── Diff line (used inside pricing cards) ─── */

function DiffLine({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
        <path d="M2 7l3.5 3.5L12 4" stroke="var(--tx2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[14px] leading-snug" style={{ color: 'var(--tx2)' }}>{label}</span>
    </div>
  )
}
