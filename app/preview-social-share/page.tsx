import Image from 'next/image'

export default function PreviewSocialShare() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-8 flex flex-col gap-12 items-center">
      <h1 className="text-2xl font-bold text-center" style={{ color: 'var(--tx)' }}>
        OG Image Preview — Pick a direction
      </h1>
      <p className="text-sm text-center -mt-8" style={{ color: 'var(--tx3)' }}>
        Each card is 1200x630 (OG image ratio). Screenshot the one you like.
      </p>

      {/* Option A — Logo left, text left-aligned */}
      <section className="flex flex-col gap-3 w-full max-w-[900px]">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--tx2)' }}>A — Left-aligned, logo top-left</h2>
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '1200/630', background: 'linear-gradient(135deg, #4ABDE8 0%, #2a9bc8 100%)' }}
        >
          <div className="w-full h-full flex flex-col justify-between p-[6%]">
            <div className="flex items-center gap-[2%]">
              <Image src="/logo.png" alt="Solar Scaler" width={80} height={80} className="rounded-full" style={{ border: 'none' }} />
              <span className="text-white font-black uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2vw, 24px)' }}>
                SOLAR SCALER
              </span>
            </div>

            <div>
              <h2 className="text-white font-[800] leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}>
                More installs.<br />Less chasing.
              </h2>
            </div>

            <p className="text-white/60 font-medium" style={{ fontSize: 'clamp(13px, 1.6vw, 19px)' }}>
              Guaranteed solar appointments. Qualified &amp; guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Option B — Centred, logo big above text */}
      <section className="flex flex-col gap-3 w-full max-w-[900px]">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--tx2)' }}>B — Centred, logo above headline</h2>
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '1200/630', background: 'linear-gradient(180deg, #4ABDE8 0%, #2a9bc8 100%)' }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-[3%] p-[5%]">
            <Image src="/logo.png" alt="Solar Scaler" width={96} height={96} className="rounded-full" style={{ border: 'none' }} />

            <span className="text-white/70 font-black uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.4vw, 17px)' }}>
              SOLAR SCALER
            </span>

            <h2 className="text-white text-center font-[800] leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(32px, 5vw, 62px)' }}>
              More installs.<br />Less chasing.
            </h2>
          </div>
        </div>
      </section>

      {/* Option C — Logo right, text left, split layout */}
      <section className="flex flex-col gap-3 w-full max-w-[900px]">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--tx2)' }}>C — Split layout, logo right</h2>
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '1200/630', background: 'linear-gradient(135deg, #4ABDE8 0%, #3aaad6 100%)' }}
        >
          <div className="w-full h-full flex items-center p-[6%]">
            {/* Left: text */}
            <div className="flex-1 flex flex-col gap-[4%]">
              <span className="text-white/60 font-black uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.4vw, 17px)' }}>
                SOLAR SCALER
              </span>
              <h2 className="text-white font-[800] leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
                More installs.<br />Less chasing.
              </h2>
              <p className="text-white/60 font-medium" style={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>
                Guaranteed solar appointments. Qualified &amp; guaranteed.
              </p>
            </div>

            {/* Right: big logo */}
            <div className="flex items-center justify-center pl-[4%]">
              <Image src="/logo.png" alt="Solar Scaler" width={180} height={180} className="rounded-full" style={{ border: 'none', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Option D — Headline only, massive text, small logo bottom */}
      <section className="flex flex-col gap-3 w-full max-w-[900px]">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--tx2)' }}>D — Massive text, logo bottom-right</h2>
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: '1200/630', background: '#4ABDE8' }}
        >
          <div className="w-full h-full flex flex-col justify-between p-[6%]">
            <div />

            <h2 className="text-white font-[900] leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(44px, 7vw, 86px)' }}>
              More installs.<br />Less chasing.
            </h2>

            <div className="flex items-center justify-between">
              <p className="text-white/50 font-medium" style={{ fontSize: 'clamp(12px, 1.5vw, 18px)' }}>
                Guaranteed solar appointments. Qualified &amp; guaranteed.
              </p>
              <div className="flex items-center gap-[1.5%]">
                <Image src="/logo.png" alt="Solar Scaler" width={48} height={48} className="rounded-full" style={{ border: 'none' }} />
                <span className="text-white/70 font-black uppercase tracking-[0.05em]" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px, 1.3vw, 15px)' }}>
                  SOLAR SCALER
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  )
}
