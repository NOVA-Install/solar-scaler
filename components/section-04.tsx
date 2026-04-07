'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const backSpring = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Section04() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto" id="apply">
      <div className="bg-[var(--sf)] border border-[var(--bd)] rounded-xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--sky)] opacity-[0.04] blur-3xl pointer-events-none" />

        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -120px 0px' }}
            className="mb-6"
          >
            <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[var(--sky-d)] mb-3">04</p>
            <h2 className="font-bold text-[clamp(26px,3.5vw,44px)] leading-tight tracking-tight text-[var(--tx)] max-w-2xl mb-4 text-balance">
              5 spots. First come, first served.
            </h2>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--sky-g)] border border-[var(--sky)]/30 text-[var(--sky)] text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sky)] animate-pulse" />
            5 Spots · Early Access
          </div>

          <p className="text-[var(--tx-secondary)] text-base max-w-lg mb-8">
            Once they&apos;re gone, they&apos;re gone.
          </p>

          {/* Spots counter — spring-pop each dot */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex gap-2 mb-10"
          >
            {[1, 2, 3, 4, 5].map((spot) => (
              <motion.div
                key={spot}
                variants={backSpring}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border font-bold text-sm ${
                  spot <= 3
                    ? 'bg-[var(--sky)] border-[var(--sky)] text-white'
                    : 'border-[var(--bd)] text-[var(--tx3)]'
                }`}
              >
                {spot <= 3 ? '✓' : spot}
              </motion.div>
            ))}
            <div className="flex items-center ml-3">
              <span className="text-[var(--tx3)] text-sm">3 of 5 spots taken</span>
            </div>
          </motion.div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'Talk to us directly', body: 'No account managers. Just us.' },
              { title: 'Cheaper leads', body: 'Our marketplace. Founder pricing.' },
              { title: 'Our full attention', body: "We don't overbook. Ever." },
            ].map((card) => (
              <div key={card.title} className="bg-[var(--sf2)] border border-[var(--bd)] rounded-xl p-5">
                <p className="text-[var(--tx)] font-semibold text-sm mb-1">{card.title}</p>
                <p className="text-[var(--tx3)] text-sm leading-snug">{card.body}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center gap-4 w-full bg-[var(--sky)] text-white font-bold tracking-wide rounded-2xl hover:bg-[var(--sky-d)] transition-colors shadow-xl shadow-[var(--sky)]/30"
            style={{ fontSize: 'clamp(17px, 2vw, 22px)', padding: 'clamp(20px, 3vw, 28px) 32px' }}
          >
            Apply for early access
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
