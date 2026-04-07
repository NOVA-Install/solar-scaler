'use client'

import { motion } from 'framer-motion'

const VP = { once: true, margin: '0px 0px -80px 0px' } as const

/* ── Feature row data ── */
const features = [
  {
    num: '01',
    title: 'Growth on autopilot',
    desc: <>Connect your calendar. <span className="nova-wordmark">NOVA</span> makes sure you&apos;re always busy. Leads flow in from every channel, get qualified by AI, and land in your diary. No manual work required.</>,
    tags: ['Calendar sync', 'Auto-scheduling', 'Lead qualification'],
    visual: 'growth',
  },
  {
    num: '02',
    title: 'Your website & funnel, set up in one click',
    desc: <><span className="nova-wordmark">NOVA</span> builds your website and lead funnel automatically. Embedded tracking uses first-party cookies so you get full analytics. See exactly where every lead came from and what they did.</>,
    tags: ['One-click setup', '1st party tracking', 'Full analytics', 'Lead attribution'],
    visual: 'website',
  },
  {
    num: '03',
    title: 'Give customers an instant price',
    desc: 'Enable a quote calculator with one click. It links to your website automatically. Homeowners pick their options, see a price instantly and checkout on the same page.',
    tags: ['One-click enable', 'Solar quotes', 'Boiler quotes', 'Grant logic built in'],
    visual: 'solar',
  },
  {
    num: '04',
    title: 'AI analyse each property',
    desc: <>Auto-pull EPC, property data &amp; energy bills. Every customer enquiry is automatically matched to their property. <span className="nova-wordmark">NOVA</span> pulls the EPC rating, property type, heating system, and estimated energy costs. No more asking homeowners questions they don&apos;t know the answers to.</>,
    tags: ['EPC register', 'Property details', 'Energy estimates', 'Auto-populated'],
    visual: 'epc',
  },
  {
    num: '05',
    title: 'AI sales - nothing gets missed',
    desc: <><span className="nova-wordmark">NOVA</span> responds to every lead in seconds, 24/7. AI qualifies, answers questions, and books surveys so you never miss a customer, even when you&apos;re on a job.</>,
    tags: ['Instant responses', '24/7 AI', 'Lead qualification', 'Auto-booking'],
    visual: 'messaging',
  },
  {
    num: '06',
    title: 'Email, SMS & WhatsApp - on autopilot',
    desc: 'Booking confirmations, install reminders, follow-ups. Sent automatically at the right time. Keep your customers in the loop without lifting a finger.',
    tags: ['Email', 'SMS', 'WhatsApp', 'Automated workflows'],
    visual: 'notifications',
  },
]

/* ── Visual mockup components ── */

function GrowthVisual() {
  const platforms = [
    { name: 'Meta Ads', desc: 'Facebook & Instagram', color: '#0081FB', icon: <path d="M12 10.4C9.6 7.2 7.4 5 5.2 5 2.2 5 0 8.6 0 12.8s2.2 7.8 5.2 7.8c2.2 0 4.4-2.2 6.8-5.4 2.4 3.2 4.6 5.4 6.8 5.4 3 0 5.2-3.6 5.2-7.8S21.8 5 18.8 5c-2.2 0-4.4 2.2-6.8 5.4z" fill="#0081FB" /> },
    { name: 'Google Ads', desc: 'Search & local', color: '#4285F4', icon: <><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></> },
    { name: 'YouTube', desc: 'Video ads', color: '#FF0000', icon: <><path d="M23 9.71a8.5 8.5 0 00-.91-3.866 8.95 8.95 0 00-3.83-3.576A9.15 9.15 0 0012.024 1C6.477 1 2.002 5.477 2.002 11.024a9.97 9.97 0 001.388 5.133L2 23l7.027-1.338a9.93 9.93 0 004.997 1.338C19.524 23 24 18.523 24 12.976 24 11.83 23.638 10.71 23 9.71z" fill="#FF0000" /><path d="M9.5 15.5l5-3.5-5-3.5v7z" fill="#fff" /></> },
    { name: 'TikTok', desc: 'Short-form video', color: '#000', icon: <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0015.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="#000" /> },
    { name: 'Bing Ads', desc: 'Microsoft search', color: '#0078D4', icon: <><path d="M2 12c0 3.073 1.783 5.927 4.583 7.267l.75-2.083A7.4 7.4 0 014.6 12c0-4.08 3.32-7.4 7.4-7.4s7.4 3.32 7.4 7.4-3.32 7.4-7.4 7.4a7.36 7.36 0 01-3.35-.8l-.75 2.083A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="#0078D4" /><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#0078D4" /></> },
    { name: 'LinkedIn', desc: 'B2B & homeowner', color: '#0A66C2', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="#0A66C2" /> },
    { name: 'X', desc: 'Promoted posts', color: '#000', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000" /> },
    { name: 'Reddit', desc: 'Community targeting', color: '#FF4500', icon: <><circle cx="12" cy="12" r="11" fill="#FF4500" /><path d="M16.5 13.38c0-1.14-.66-2.09-1.62-2.56a2.4 2.4 0 00-1.2-2.04l.96-2.64c.12-.3-.06-.66-.36-.78a.62.62 0 00-.78.36L12.6 8.22c-.18-.03-.39-.06-.6-.06s-.42.03-.6.06L10.5 5.7a.617.617 0 00-.78-.36c-.3.12-.48.48-.36.78l.96 2.64a2.4 2.4 0 00-1.2 2.04c-.96.48-1.62 1.42-1.62 2.58 0 .18 0 .36.06.54C8.46 15.12 10.08 16 12 16s3.54-.9 4.44-2.1c.06-.18.06-.36.06-.52z" fill="#fff" /></> },
    { name: 'Outbrain', desc: 'Native content ads', color: '#003B5C', icon: <><rect width="24" height="24" rx="4" fill="#003B5C" /><path d="M6 7h4v10H6zm5 3h4v7h-4zm5-5h4v12h-4z" fill="#FF5100" /></> },
    { name: 'Taboola', desc: 'Content discovery', color: '#1A4B8C', icon: <><rect width="24" height="24" rx="4" fill="#1A4B8C" /><path d="M7 6h3v12H7zm4 4h3v8h-3zm4-2h3v10h-3z" fill="#fff" /></> },
    { name: 'Door Knocking', desc: 'Field canvassing', color: '', icon: null },
    { name: <>NOVA Marketplace</>, desc: 'Installer network', color: '', icon: null },
  ]

  return (
    <div className="growth-grid os-growth-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
      {platforms.map((p, i) => (
        <div key={i} style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 12, padding: '14px 10px', textAlign: 'center', transition: 'all .3s' }}>
          <div style={{ fontSize: 24, marginBottom: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 28 }}>
            {p.icon ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{p.icon}</svg>
            ) : p.desc === 'Field canvassing' ? (
              <span>{'\u{1F6AA}'}</span>
            ) : (
              <span className="nova-wordmark" style={{ fontSize: 11, color: 'var(--tx)' }}>NOVA</span>
            )}
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--tx)' }}>{p.name}</div>
          <div style={{ fontSize: 10, color: 'var(--tx3)', marginTop: 2 }}>{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

function WebsiteVisual() {
  return (
    <div style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--sf2)', borderBottom: '1px solid var(--bd)' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--bd2)', display: 'inline-block' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--bd2)', display: 'inline-block' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--bd2)', display: 'inline-block' }} />
        </div>
        <div style={{ fontSize: 11, color: 'var(--tx3)', fontFamily: 'var(--font-mono)', margin: '0 auto' }}>yourcompany.co.uk</div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ textAlign: 'center', padding: '20px 16px', background: 'linear-gradient(135deg, rgba(74,189,232,0.06), rgba(74,189,232,0.02))', borderRadius: 10, marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--tx3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Dave&apos;s Heating</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--tx)', marginBottom: 10 }}>Boiler &amp; Solar Installs in Bristol</div>
          <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 100, background: 'var(--sky)', color: '#fff', fontSize: 12, fontWeight: 600 }}>Get a Free Quote</span>
        </div>
        <div style={{ background: 'var(--sf2)', border: '1px solid var(--bd)', borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--sky-d)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--sky-d)" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
            Live Analytics
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            {[{ v: '1,240', l: 'Visitors' }, { v: '8.2%', l: 'Conv. rate' }, { v: '102', l: 'Leads' }].map((s) => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--tx)' }}>{s.v}</div>
                <div style={{ fontSize: 10, color: 'var(--tx3)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SolarVisual() {
  const cards = [
    { name: 'Starter', panels: '4 panels · 1.6kW', price: '£3,400', saving: 'Save £320/yr', popular: false },
    { name: 'Standard', panels: '8 panels · 3.2kW', price: '£5,800', saving: 'Save £580/yr', popular: true },
    { name: 'Premium', panels: '12 panels · 4.8kW', price: '£7,900', saving: 'Save £840/yr', popular: false },
  ]
  return (
    <div style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 16, padding: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--tx)', textAlign: 'center', marginBottom: 16 }}>Choose your solar package</div>
      <div className="solar-cards os-solar-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {cards.map((c) => (
          <div key={c.name} style={{ background: c.popular ? 'rgba(74,189,232,0.04)' : 'var(--sf2)', border: `1px solid ${c.popular ? 'var(--sky)' : 'var(--bd)'}`, borderRadius: 12, padding: '14px 10px', textAlign: 'center', position: 'relative' }}>
            {c.popular && <div style={{ position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)', fontSize: 9, fontWeight: 700, padding: '2px 10px', borderRadius: 100, background: 'var(--sky)', color: '#fff', whiteSpace: 'nowrap' }}>Most popular</div>}
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--tx)', marginBottom: 4 }}>{c.name}</div>
            <div style={{ fontSize: 11, color: 'var(--tx3)', marginBottom: 10 }}>{c.panels}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--tx)', letterSpacing: '-0.02em' }}>{c.price}</div>
            <div style={{ fontSize: 11, color: 'var(--grn)', fontWeight: 600, marginTop: 2, marginBottom: 10 }}>{c.saving}</div>
            <span style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 100, background: c.popular ? 'var(--sky)' : 'var(--sf)', border: `1px solid ${c.popular ? 'var(--sky)' : 'var(--bd)'}`, fontSize: 11, fontWeight: 600, color: c.popular ? '#fff' : 'var(--tx2)' }}>Select</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EPCVisual() {
  return (
    <div style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 16, padding: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--tx)', margin: 0 }}>14 Oakfield Road, BS3 4QA</h4>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: 'rgba(58,184,112,0.1)', color: 'var(--grn)' }}>EPC pulled</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
        {[
          { letter: 'A', w: 45, bg: '#00845a', label: '' },
          { letter: 'B', w: 65, bg: '#2ca04e', label: '' },
          { letter: 'C', w: 90, bg: '#8dbd25', label: '' },
          { letter: 'D', w: 120, bg: '#ffd500', label: '← Current' },
          { letter: 'E', w: 150, bg: '#f4ab3a', label: '' },
        ].map((bar) => (
          <div key={bar.letter} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: bar.w, height: 22, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: 10, fontWeight: 700, color: '#fff', background: bar.bg }}>{bar.letter}</div>
            <span style={{ fontSize: 11, color: 'var(--tx3)', width: 70, textAlign: 'right' }}>{bar.label}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, paddingTop: 16, borderTop: '1px solid var(--bd)' }}>
        {[{ v: 'D (58)', l: 'EPC Rating' }, { v: '£1,840', l: 'Est. energy/yr' }, { v: 'Gas', l: 'Heating fuel' }].map((d) => (
          <div key={d.l} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--tx)' }}>{d.v}</div>
            <div style={{ fontSize: 11, color: 'var(--tx3)', marginTop: 2 }}>{d.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagingVisual() {
  return (
    <div style={{ background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '12px 16px', background: 'var(--sf2)', borderBottom: '1px solid var(--bd)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--grn)' }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--tx)' }}>Sarah Mitchell</span>
        <span style={{ fontSize: 11, color: 'var(--tx3)', marginLeft: 'auto' }}>Website lead</span>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', fontSize: 13, lineHeight: 1.5, color: 'var(--tx2)', background: 'var(--sf2)', alignSelf: 'flex-start' }}>
          Hi, I&apos;d like a quote for solar panels on a 3 bed semi?
        </div>
        <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', fontSize: 13, lineHeight: 1.5, color: 'var(--tx2)', background: 'rgba(74,189,232,0.08)', alignSelf: 'flex-end' }}>
          Hi Sarah! I can help with that. Based on your property, I&apos;d recommend our 8-panel package. Would you like to book a free survey?
          <span style={{ display: 'block', fontSize: 10, color: 'var(--sky-d)', fontFamily: 'var(--font-mono)', marginTop: 4, textAlign: 'right' }}>✦ AI · 3s</span>
        </div>
        <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', fontSize: 13, lineHeight: 1.5, color: 'var(--tx2)', background: 'var(--sf2)', alignSelf: 'flex-start' }}>
          Yes please, is Thursday free?
        </div>
        <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', fontSize: 13, lineHeight: 1.5, color: 'var(--tx2)', background: 'rgba(74,189,232,0.08)', alignSelf: 'flex-end' }}>
          Thursday 2pm is available. I&apos;ve booked you in and sent a confirmation. See you then!
          <span style={{ display: 'block', fontSize: 10, color: 'var(--sky-d)', fontFamily: 'var(--font-mono)', marginTop: 4, textAlign: 'right' }}>✦ AI · 2s</span>
        </div>
      </div>
    </div>
  )
}

function NotificationsVisual() {
  const notifs = [
    { icon: '✉', cls: 'email', title: 'Booking Confirmation', desc: 'Sent to Sarah M. · Survey Thu 2pm', time: 'Just now', bg: 'rgba(74,189,232,0.1)', color: 'var(--sky-d)' },
    { icon: '💬', cls: 'sms', title: 'Install Reminder', desc: 'Sent to James W. · Install tomorrow 9am', time: '2h ago', bg: 'rgba(58,184,112,0.1)', color: 'var(--grn)' },
    { icon: '✓', cls: 'whatsapp', title: 'Review Request', desc: 'Sent to Tom H. · Install completed', time: '1d ago', bg: 'rgba(37,211,102,0.1)', color: '#25D366' },
    { icon: '✉', cls: 'email', title: 'Quote Follow-up', desc: 'Sent to Mark D. · Quoted 3 days ago', time: '1d ago', bg: 'rgba(74,189,232,0.1)', color: 'var(--sky-d)' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {notifs.map((n) => (
        <div key={n.title + n.desc} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--sf)', border: '1px solid var(--bd)', borderRadius: 12, padding: '14px 16px', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0, background: n.bg, color: n.color }}>{n.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--tx)' }}>{n.title}</div>
            <div style={{ fontSize: 11, color: 'var(--tx3)', marginTop: 2 }}>{n.desc}</div>
          </div>
          <div style={{ fontSize: 10, color: 'var(--tx3)', whiteSpace: 'nowrap', flexShrink: 0 }}>{n.time}</div>
        </div>
      ))}
    </div>
  )
}

const visualMap: Record<string, React.ReactNode> = {
  growth: <GrowthVisual />,
  website: <WebsiteVisual />,
  solar: <SolarVisual />,
  epc: <EPCVisual />,
  messaging: <MessagingVisual />,
  notifications: <NotificationsVisual />,
}

export default function OSFeaturesSection() {
  return (
    <section id="features" style={{ padding: '60px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <div className="sl">Features</div>
          <div className="st">Built for how installers <span className="ac" style={{ color: 'var(--sky)' }}>actually work</span></div>
          <p className="ssub" style={{ maxWidth: 520, margin: '0 auto' }}>Every feature exists because an installer asked for it.</p>
        </motion.div>

        {/* Feature rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {features.map((feat, i) => {
            const isEven = i % 2 === 1
            return (
              <motion.div
                key={feat.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="feat-row os-feat-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                  padding: '48px 0',
                  borderTop: '1px solid var(--bd)',
                  ...(i === features.length - 1 ? { borderBottom: '1px solid var(--bd)' } : {}),
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="os-feat-text"
                  style={{ maxWidth: 440, order: isEven ? 1 : 0 }}
                >
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--sky-d)', letterSpacing: '.1em', marginBottom: 12 }}>{feat.num}</div>
                  <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 12, color: 'var(--tx)', margin: '0 0 12px' }}>{feat.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--tx3)', lineHeight: 1.65, margin: 0 }}>{feat.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {feat.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'var(--sf2)', color: 'var(--tx2)', border: '1px solid var(--bd)' }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ position: 'relative', order: isEven ? 0 : 1 }}
                >
                  {visualMap[feat.visual]}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .feat-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 40px 0 !important;
          }
          .feat-row > * { order: 0 !important; }
          .growth-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .solar-cards {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  )
}
