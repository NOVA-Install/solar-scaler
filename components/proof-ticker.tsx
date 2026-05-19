'use client'

import Image from 'next/image'

const logos = [
  { src: '/logos/locogen.png', alt: 'Locogen' },
  { src: '/logos/apricum.png', alt: 'Apricum' },
  { src: '/logos/fuse.png', alt: 'Fuse' },
  { src: '/logos/uswitch.png', alt: 'Uswitch' },
  { src: '/logos/moneysupermarket.png', alt: 'MoneySuperMarket' },
  { src: '/logos/boxt.png', alt: 'Boxt' },
  { src: '/logos/expressvpn.png', alt: 'ExpressVPN' },
]

// Number of times to duplicate the logo set — 4 copies guarantees
// the track is always wider than 2× viewport, so no gap ever appears.
const COPIES = 4
const DURATION = '30s'

function LogoSet({ items }: { items: typeof logos }) {
  return (
    <div className="flex items-center shrink-0">
      {items.map((logo) => (
        <div key={logo.alt} className="inline-flex items-center justify-center px-5 md:px-10 shrink-0 h-8 md:h-10">
          <Image src={logo.src} alt={logo.alt} width={100} height={32} loading="eager" className="h-8 md:h-10 w-auto object-contain" />
        </div>
      ))}
    </div>
  )
}

function TickerRow({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center"
        style={{
          width: 'max-content',
          animation: `ticker-scroll ${DURATION} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {Array.from({ length: COPIES }).map((_, i) => (
          <LogoSet key={i} items={items} />
        ))}
      </div>
    </div>
  )
}

// Split logos into two rows for mobile
const row1Logos = logos.slice(0, 4)
const row2Logos = logos.slice(4)

export default function ProofTicker() {
  return (
    <div className="w-full bg-transparent">
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / ${COPIES})); }
        }
      `}</style>

      <p className="text-center text-[15px] md:text-[12px] font-semibold uppercase tracking-widest text-[#0f1d2a]/50 pt-6 pb-3 md:pb-4">
        Built by experts from:
      </p>

      {/* Desktop: single row with all logos */}
      <div className="hidden md:block pb-5">
        <TickerRow items={logos} />
      </div>

      {/* Mobile: two rows, second row reversed */}
      <div className="md:hidden flex flex-col gap-3 pb-4">
        <TickerRow items={row1Logos} />
        <TickerRow items={row2Logos} reverse />
      </div>
    </div>
  )
}
