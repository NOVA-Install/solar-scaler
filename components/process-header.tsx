'use client'

import { motion } from 'framer-motion'

export default function ProcessHeader() {
  return (
    <section className="px-6 pt-10 pb-4 md:pt-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center gap-6"
      >
        <h2 className="font-bold text-[clamp(32px,5vw,60px)] leading-none tracking-tight text-[var(--tx)]">
          Our process
        </h2>
      </motion.div>
    </section>
  )
}
