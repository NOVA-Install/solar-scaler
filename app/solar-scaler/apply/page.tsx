import Script from 'next/script'

export const metadata = {
  title: 'Book a Call — Solar Scaler',
  description: 'Book a free 15-minute call with the Solar Scaler team.',
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="w-full flex items-center justify-between pt-8 pb-0 px-6 max-w-lg mx-auto">
        <a href="/solar-scaler" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tx3)] hover:text-[var(--tx)] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </a>
        <div className="flex items-center gap-2.5">
          <span
            className="font-black uppercase tracking-[0.12em] select-none text-[var(--tx)]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2vw, 20px)' }}
          >
            SOLAR SCALER
          </span>
        </div>
        <div className="w-10" />
      </header>

      {/* Cal.com inline embed */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-8">
        <div id="my-cal-inline-15min" style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'scroll' }} />
      </div>

      <Script id="cal-embed" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});
Cal.ns["15min"]("inline", {
  elementOrSelector:"#my-cal-inline-15min",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "matt-ussher-vniceg/15min",
});
Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`}
      </Script>

      {/* Footer */}
      <footer className="border-t border-[var(--bd)] px-6 py-8 flex justify-center">
        <p className="text-[var(--tx3)] text-xs">&copy; {new Date().getFullYear()} Solar Scaler. All rights reserved.</p>
      </footer>

    </main>
  )
}
