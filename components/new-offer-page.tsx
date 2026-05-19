'use client'

import Image from 'next/image'
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
        <div className="w-full flex flex-col items-center pt-6 md:pt-12 pb-0 gap-2">
          <Image src="/logo.png" alt="Solar Scaler" width={80} height={80} style={{ filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8))' }} />
          <span className="text-white font-black uppercase tracking-[0.05em] select-none" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(18px, 2.2vw, 28px)' }}>
            SOLAR SCALER
          </span>
        </div>

        {/* Centred content column */}
        <div className="w-full px-6 pt-8 md:pt-12 pb-6 flex flex-col items-center text-center">

          {/* Headline + guarantee */}
          <div className="flex flex-col items-center mb-14 w-full">
            <h1
              className="font-sans font-[700] leading-[1.1] tracking-[-0.03em] text-white w-full text-center overflow-hidden"
              style={{ fontSize: 'clamp(24px, 5.8vw, 56px)' }}
            >
              <span className="block">Stop Chasing Solar Leads</span>
              <span className="block">We Deliver Ready Appointments</span>
            </h1>

            <p
              className="font-sans font-[700] tracking-[-0.03em] text-white w-full text-center"
              style={{ fontSize: 'clamp(24px, 5.8vw, 56px)', lineHeight: '1.1', textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationThickness: '3px' }}
            >
              Qualified &amp; Guaranteed
            </p>
          </div>

          {/* Video placeholder with badge */}
          <div className="relative w-full max-w-3xl mb-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <div
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-white text-sm font-bold tracking-widest uppercase shadow-lg"
                style={{ background: '#3ab870' }}
              >
                <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                <span>Limited Spots for {new Date().toLocaleString('en-GB', { month: 'long' })}</span>
              </div>
            </div>

            <div
              className="w-full aspect-video rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'rgba(15,29,42,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 24px 70px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pricing CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 mt-4 mb-4 whitespace-nowrap"
            style={{
              background: '#ffffff',
              color: 'var(--sky-d)',
              padding: '16px 36px',
              borderRadius: 100,
              fontSize: '17px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          >
            See our transparent pricing
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

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

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {([
              {
                name: 'Starter',
                price: '£3,000',
                appointments: 10,
                popular: false,
                hasWebsite: false,
                ownLeads: 50,
                sms: '600',
                callMins: '3,000',
                nova: { plan: 'Starter', worth: '£499/mo' },
              },
              {
                name: 'Growth',
                price: '£6,000',
                appointments: 20,
                popular: true,
                hasWebsite: true,
                ownLeads: 100,
                sms: '1,200',
                callMins: '6,000',
                nova: { plan: 'Growth', worth: '£899/mo' },
              },
              {
                name: 'Pro',
                price: '£12,000',
                appointments: 40,
                popular: false,
                hasWebsite: true,
                ownLeads: 200,
                sms: '2,400',
                callMins: '12,000',
                nova: { plan: 'Pro', worth: '£1,799/mo' },
              },
            ] as const).map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl flex flex-col relative"
                style={{
                  background: '#fff',
                  border: tier.popular ? '2px solid var(--sky)' : '1.5px solid var(--bd)',
                  boxShadow: tier.popular ? '0 8px 30px rgba(74,189,232,0.15)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest text-white px-4 py-1.5 rounded-full"
                      style={{ background: 'var(--sky)', fontFamily: 'var(--font-mono)' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}


                <div className="px-7 pt-7 pb-7 flex flex-col flex-1">
                  {/* Tier name */}
                  <p className="text-[13px] font-bold uppercase tracking-[0.1em] mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'var(--tx3)' }}>
                    {tier.name}
                  </p>

                  {/* Price — hero */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-[700] tracking-tight" style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: 'var(--tx)' }}>
                      {tier.price}
                    </span>
                    <span className="text-[14px] font-medium" style={{ color: 'var(--tx3)' }}>/ month</span>
                  </div>

                  {/* Appointments */}
                  <div className="flex items-baseline gap-2 mb-7">
                    <span className="text-[28px] font-[700] tracking-tight" style={{ color: 'var(--sky-d)', fontFeatureSettings: '"tnum"' }}>
                      {tier.appointments}
                    </span>
                    <span className="text-[14px] font-medium" style={{ color: 'var(--tx2)' }}>
                      appointments / month
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px mb-6" style={{ background: 'var(--bd)' }} />

                  {/* Also Includes */}
                  <p className="text-[13px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--grn)', fontFamily: 'var(--font-mono)' }}>Also Includes</p>
                  <div className="flex flex-col gap-4">
                    {/* NOVA CRM with nested sub-features */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                          <rect width="20" height="20" rx="4" fill="var(--grn)" />
                          <path d="M6 10l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[15px] font-semibold leading-normal" style={{ color: 'var(--tx)' }}>
                          NOVA Solar Growth Engine
                          <span className="font-normal ml-1" style={{ color: 'var(--tx3)' }}>— {tier.name}</span>
                          <span className="font-semibold ml-1" style={{ color: 'var(--sky-d)' }}>(worth {tier.nova.worth})</span>
                        </span>
                      </div>
                      {/* CRM sub-features — indented */}
                      <div className="flex flex-col gap-2 ml-[32px]">
                        <span className="text-[14px] leading-normal" style={{ color: 'var(--tx2)' }}>
                          Up to {tier.ownLeads} of your own leads/mo
                        </span>
                        <span className="text-[14px] leading-normal" style={{ color: 'var(--tx2)' }}>
                          {tier.sms} SMS · {tier.callMins} call minutes
                        </span>
                      </div>
                    </div>

                    {/* Website (Growth/Pro) */}
                    {tier.hasWebsite && (
                      <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                          <rect width="20" height="20" rx="4" fill="var(--grn)" />
                          <path d="M6 10l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[15px] font-semibold leading-normal" style={{ color: 'var(--tx)' }}>
                          Custom branded website
                          <span className="font-semibold ml-1" style={{ color: 'var(--sky-d)' }}>(worth £1,099)</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee strip — below cards */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10">
            {[
              'Guaranteed appointment volume',
              'Guaranteed qualified, exclusive leads',
              'Cancel anytime. No long-term contracts.',
            ].map((g) => (
              <div key={g} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <rect width="16" height="16" rx="3" fill="var(--grn)" />
                  <path d="M4.5 8l2 2L11.5 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-medium" style={{ color: 'var(--tx2)' }}>{g}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center mt-10">
            <a href="/new-offer/apply" className="btn-sky text-center" style={{ fontSize: '18px', padding: '18px 48px' }}>
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
            <p className="ssub mt-2">Every plan includes NOVA, our purpose-built solar growth engine. <strong>Included at no extra cost.</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0" style={{ borderTop: '1px solid var(--bd)' }}>
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m8.66-13.5l-.87.5M4.21 16.5l-.87.5M20.66 16.5l-.87-.5M4.21 7.5l-.87-.5M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>, title: 'Unlimited solar designs', desc: 'Roof modelling and shade analysis on every property.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/><path d="M12 14v3"/></svg>, title: 'AI agents', desc: 'Qualify, follow up and book appointments around the clock.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: 'Quote calculator', desc: 'Configure a system and get a customer-ready price in seconds.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>, title: 'Data enrichment', desc: 'Postcode, property and Solar API data on every lead.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, title: 'Instant DNO approval', desc: 'G98 and G99 applications submitted digitally. Auto-approved in seconds where eligible.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'MCS compliance', desc: 'Handover packs and MCS paperwork, auto-generated.' },
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
              'You don\'t want to pay marketing agency retainers',
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
          <h2 className="font-bold leading-tight tracking-tight text-white mb-5" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}>
            Ready to stop chasing leads?
          </h2>
          <p className="text-white/80 text-[18px] mb-10">
            Book a free call. No commitment. We&apos;ll show you exactly how it works.
          </p>
          <a href="/new-offer/apply" className="btn-white text-center" style={{ fontSize: '18px', padding: '18px 48px' }}>
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
