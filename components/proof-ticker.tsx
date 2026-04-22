'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  { src: '/logos/locogen.png', alt: 'Locogen' },
  { src: '/logos/apricum.png', alt: 'Apricum' },
  { src: '/logos/fuse.png', alt: 'Fuse' },
  { src: '/logos/virgin-media-o2.png', alt: 'Virgin Media O2' },
  { src: '/logos/uswitch.png', alt: 'Uswitch' },
  { src: '/logos/moneysupermarket.png', alt: 'MoneySuperMarket' },
  { src: '/logos/boxt.png', alt: 'Boxt' },
  { src: '/logos/simmer.png', alt: 'Simmer' },
  { src: '/logos/expressvpn.png', alt: 'ExpressVPN' },
]

const PX_PER_SECOND = 24

// Split logos into two rows for mobile
const row1Logos = logos.slice(0, 5)
const row2Logos = logos.slice(5)

function TickerRow({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<Animation | null>(null)

  useEffect(() => {
    const track = trackRef.current
    const firstSet = setRef.current
    if (!track || !firstSet) return

    let fallbackTimer: ReturnType<typeof setTimeout>

    const startAnimation = () => {
      const w = firstSet.offsetWidth
      if (w === 0) return

      animRef.current?.cancel()

      const from = reverse ? `-${w}px` : '0px'
      const to = reverse ? '0px' : `-${w}px`

      animRef.current = track.animate(
        [{ transform: `translateX(${from})` }, { transform: `translateX(${to})` }],
        { duration: (w / PX_PER_SECOND) * 1000, iterations: Infinity, easing: 'linear' }
      )
    }

    const images = firstSet.querySelectorAll('img')
    let loaded = 0
    const total = images.length
    let ready = false

    const onReady = () => {
      if (ready) return
      ready = true
      startAnimation()
    }

    if (total === 0) {
      onReady()
    } else {
      const onLoad = () => { loaded++; if (loaded >= total) onReady() }
      images.forEach((img) => {
        if (img.complete) onLoad()
        else {
          img.addEventListener('load', onLoad, { once: true })
          img.addEventListener('error', onLoad, { once: true })
        }
      })
      fallbackTimer = setTimeout(onReady, 3000)
    }

    window.addEventListener('resize', startAnimation)
    return () => {
      clearTimeout(fallbackTimer)
      window.removeEventListener('resize', startAnimation)
      animRef.current?.cancel()
    }
  }, [reverse])

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex items-center whitespace-nowrap" style={{ willChange: 'transform' }}>
        <div ref={setRef} className="flex items-center shrink-0">
          {items.map((logo) => (
            <div key={logo.alt} className="inline-flex items-center justify-center mx-5 md:mx-10 shrink-0 h-8 md:h-10">
              <Image src={logo.src} alt={logo.alt} width={100} height={32} loading="eager" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0" aria-hidden>
          {items.map((logo) => (
            <div key={logo.alt} className="inline-flex items-center justify-center mx-5 md:mx-10 shrink-0 h-8 md:h-10">
              <Image src={logo.src} alt={logo.alt} width={100} height={32} loading="eager" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProofTicker() {
  return (
    <div className="w-full bg-transparent">
      <p className="text-center text-[11px] md:text-[12px] font-semibold uppercase tracking-widest text-[#0f1d2a]/50 pt-6 pb-3 md:pb-4">
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
