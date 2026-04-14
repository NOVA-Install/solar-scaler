'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  // Energy companies first
  { src: '/logos/fuse.png', alt: 'Fuse' },
  { src: '/logos/locogen.png', alt: 'Locogen' },
  { src: '/logos/apricum.png', alt: 'Apricum' },
  // Others
  { src: '/logos/virgin-media-o2.png', alt: 'Virgin Media O2' },
  { src: '/logos/uswitch.png', alt: 'Uswitch' },
  { src: '/logos/moneysupermarket.png', alt: 'MoneySuperMarket' },
  { src: '/logos/boxt.png', alt: 'Boxt' },
  { src: '/logos/expressvpn.png', alt: 'ExpressVPN' },
  { src: '/logos/simmer.png', alt: 'Simmer' },
]

const PX_PER_SECOND = 64

export default function ProofTicker() {
  const trackRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<Animation | null>(null)

  useEffect(() => {
    const track = trackRef.current
    const firstSet = firstSetRef.current
    if (!track || !firstSet) return

    const startAnimation = () => {
      const w = firstSet.offsetWidth
      if (w === 0) return

      animRef.current?.cancel()

      animRef.current = track.animate(
        [{ transform: 'translateX(0px)' }, { transform: `translateX(-${w}px)` }],
        { duration: (w / PX_PER_SECOND) * 1000, iterations: Infinity, easing: 'linear' }
      )
    }

    // Wait for images to load, then wait for the startDelay
    const images = firstSet.querySelectorAll('img')
    let loaded = 0
    const total = images.length
    let imagesReady = false

    const onAllImagesReady = () => {
      if (imagesReady) return
      imagesReady = true
      startAnimation()
    }

    if (total === 0) {
      onAllImagesReady()
    } else {
      const onImageReady = () => {
        loaded++
        if (loaded >= total) onAllImagesReady()
      }

      images.forEach((img) => {
        if (img.complete) {
          onImageReady()
        } else {
          img.addEventListener('load', onImageReady, { once: true })
          img.addEventListener('error', onImageReady, { once: true })
        }
      })

      // Fallback if image events don't fire
      const fallback = setTimeout(onAllImagesReady, 3000)

      window.addEventListener('resize', startAnimation)

      return () => {
        clearTimeout(fallback)
        window.removeEventListener('resize', startAnimation)
        animRef.current?.cancel()
      }
    }

    window.addEventListener('resize', startAnimation)

    return () => {
      clearTimeout(delayTimer)
      window.removeEventListener('resize', startAnimation)
      animRef.current?.cancel()
    }
  }, [])

  return (
    <div className="w-full bg-transparent">
      <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-[#0f1d2a]/50 pt-6 pb-4">
        Built by experts from:
      </p>
      <div className="overflow-hidden pb-5">
        <div ref={trackRef} className="flex items-center whitespace-nowrap" style={{ willChange: 'transform' }}>
          <div ref={firstSetRef} className="flex items-center shrink-0">
            {logos.map((logo) => (
              <div key={logo.alt} className="inline-flex items-center justify-center mx-6 md:mx-10 shrink-0 h-10">
                <Image src={logo.src} alt={logo.alt} width={100} height={32} loading="eager" className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
          <div className="flex items-center shrink-0" aria-hidden>
            {logos.map((logo) => (
              <div key={logo.alt} className="inline-flex items-center justify-center mx-6 md:mx-10 shrink-0 h-10">
                <Image src={logo.src} alt={logo.alt} width={100} height={32} loading="eager" className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
