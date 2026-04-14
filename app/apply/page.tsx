import Image from 'next/image'
import Script from 'next/script'

export const metadata = {
  title: 'Book a Call — Solar Scaler',
  description: 'Book a free 15-minute call with the Solar Scaler team.',
}

export default function ApplyPage() {
  return (
    <main className="bg-white">

      {/* Header */}
      <header className="w-full flex items-center justify-between py-5 px-6 max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tx3)] hover:text-[var(--tx)] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </a>
        <span
          className="font-black uppercase tracking-[0.12em] select-none text-[var(--tx)]"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)' }}
        >
          SOLAR SCALER
        </span>
        <div className="w-10" />
      </header>

      {/* Intro — compact on mobile, side-by-side on desktop */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-4 pb-2 md:pt-8 md:pb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shrink-0 border-4 border-[var(--sky)]/20">
            <Image
              src="/matt.jpg"
              alt="Matt Ussher"
              width={360}
              height={360}
              className="w-full h-full object-cover"
              style={{ objectPosition: '45% 45%', transform: 'scale(1.75)' }}
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-[clamp(20px,3.5vw,32px)] font-bold tracking-tight text-[var(--tx)] mb-1.5">
              Have a quick chat with Matt.
            </h1>
            <p className="text-[var(--tx2)] text-[14px] md:text-base leading-relaxed max-w-md">
              Quick 15-min chat to understand your <strong className="text-[var(--tx)]">current setup</strong>, what you&apos;re looking to achieve, and whether we can <strong className="text-[var(--tx)]">support your growth</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Cal embed — flows naturally, no height constraints */}
      <section className="w-full max-w-4xl mx-auto px-6">
        <div id="my-cal-inline-15min" className="w-full" />
      </section>

      <Script id="cal-embed" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});
Cal.ns["15min"]("inline", {
  elementOrSelector:"#my-cal-inline-15min",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "matt-ussher-vniceg/15min",
});
Cal.ns["15min"]("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
Cal.ns["15min"]("on", {
  action: "bookingSuccessful",
  callback: function() {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }
});`}
      </Script>

      {/* Footer */}
      <footer className="border-t border-[var(--bd)] px-6 py-6 flex justify-center">
        <p className="text-[var(--tx3)] text-xs">&copy; {new Date().getFullYear()} Solar Scaler. All rights reserved.</p>
      </footer>

    </main>
  )
}
