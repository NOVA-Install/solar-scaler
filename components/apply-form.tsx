'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ApplyForm() {
  const [state, handleSubmit] = useForm('mlgopnvl')

  if (state.succeeded) {
    return (
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-lg mx-auto text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--grn)] flex items-center justify-center mb-2">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M5 13l6 6L21 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--tx)] tracking-tight">Application received.</h2>
          <p className="text-[var(--tx2)] text-base leading-relaxed">
            We&apos;ll review your details and be in touch within one business day.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-lg mx-auto">

        <div className="mb-8">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-tight text-[var(--tx)] leading-tight mb-1">
            Speak to Our Team.
          </h2>
          <p className="text-sm text-[var(--tx3)]">We&apos;ll get back to you within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Dave Smith"
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] placeholder-[var(--tx3)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition"
              />
              <ValidationError field="name" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Business name
              </label>
              <input
                id="company"
                type="text"
                name="company"
                required
                placeholder="Dave's Solar Ltd"
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] placeholder-[var(--tx3)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition"
              />
              <ValidationError field="company" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="referral" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
              How did you hear about us?
            </label>
            <select
              id="referral"
              name="referral"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition appearance-none"
            >
              <option value="" disabled>Select one</option>
              <option value="wttj">Welcome to the Jungle&apos;s 2025 list of high-growth, purpose-led UK companies — &quot;Building for Better&quot;</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="referral">Word of mouth / referral</option>
              <option value="other">Other</option>
            </select>
            <ValidationError field="referral" errors={state.errors} className="text-[var(--red)] text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="dave@davessolar.co.uk"
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] placeholder-[var(--tx3)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition"
              />
              <ValidationError field="email" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="07700 900000"
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] placeholder-[var(--tx3)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition"
              />
              <ValidationError field="phone" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="installs" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
              How many installs per month?
            </label>
            <select
              id="installs"
              name="installs"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition appearance-none"
            >
              <option value="" disabled>Select one</option>
              <option value="1-5">1–5</option>
              <option value="6-15">6–15</option>
              <option value="16-30">16–30</option>
              <option value="31-50">31–50</option>
              <option value="51-100">51–100</option>
              <option value="101-200">101–200</option>
              <option value="201-300">201–300</option>
              <option value="300+">300+</option>
            </select>
            <ValidationError field="installs" errors={state.errors} className="text-[var(--red)] text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="revenue" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Annual turnover
              </label>
              <select
                id="revenue"
                name="revenue"
                required
                defaultValue=""
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition appearance-none"
              >
                <option value="" disabled>Select one</option>
                <option value="under-100k">Under £100k</option>
                <option value="100k-250k">£100k – £250k</option>
                <option value="250k-500k">£250k – £500k</option>
                <option value="500k-1m">£500k – £1m</option>
                <option value="1m-3m">£1m – £3m</option>
                <option value="3m+">£3m+</option>
              </select>
              <ValidationError field="revenue" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="sales-team" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
                Sales team size
              </label>
              <select
                id="sales-team"
                name="sales-team"
                required
                defaultValue=""
                className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition appearance-none"
              >
                <option value="" disabled>Select one</option>
                <option value="just-me">Just me</option>
                <option value="2-3">2–3 people</option>
                <option value="4-6">4–6 people</option>
                <option value="7-10">7–10 people</option>
                <option value="10+">10+ people</option>
              </select>
              <ValidationError field="sales-team" errors={state.errors} className="text-[var(--red)] text-xs" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">Accreditations</p>
            <p className="text-xs text-[var(--tx3)] -mt-1">Select all that apply. We prioritise working with accredited installers.</p>
            <div className="flex flex-col gap-2">
              {[
                { id: 'mcs', label: 'MCS' },
                { id: 'trustmark', label: 'TrustMark' },
                { id: 'niceic', label: 'NICEIC' },
                { id: 'napit', label: 'NAPIT' },
                { id: 'recc', label: 'RECC / HIES / other consumer code' },
                { id: 'none', label: 'None yet – currently operating without these accreditations' },
                { id: 'in-progress', label: 'In progress – we are currently applying for one or more of the above' },
              ].map(({ id, label }) => (
                <label key={id} className="flex items-center gap-3 rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 cursor-pointer has-[:checked]:border-[var(--sky)] has-[:checked]:bg-[rgba(74,189,232,0.06)] transition">
                  <input type="checkbox" name="accreditations" value={id} className="accent-[var(--sky)] shrink-0" />
                  <p className="text-sm font-medium text-[var(--tx)]">{label}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">Where do your leads come from today?</p>
            <p className="text-xs text-[var(--tx3)] -mt-1">Select all that apply.</p>
            <div className="flex flex-col gap-2">
              {[
                { id: 'word-of-mouth', label: 'Word of mouth / referrals' },
                { id: 'directories', label: 'Directories (Checkatrade, MyBuilder, etc.)' },
                { id: 'google-ads', label: 'Google ads' },
                { id: 'facebook-ads', label: 'Facebook / Instagram ads' },
                { id: 'door-knocking', label: 'Door knocking' },
                { id: 'other', label: 'Other' },
              ].map(({ id, label }) => (
                <label key={id} className="flex items-center gap-3 rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 cursor-pointer has-[:checked]:border-[var(--sky)] has-[:checked]:bg-[rgba(74,189,232,0.06)] transition">
                  <input type="checkbox" name="lead-sources" value={id} className="accent-[var(--sky)] shrink-0" />
                  <p className="text-sm font-medium text-[var(--tx)]">{label}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="challenge" className="text-xs font-semibold text-[var(--tx2)] uppercase tracking-[0.08em]">
              What's the biggest thing stopping you from growing?
            </label>
            <select
              id="challenge"
              name="challenge"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[var(--bd2)] bg-[var(--sf2)] px-4 py-3 text-sm text-[var(--tx)] outline-none focus:border-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]/20 transition appearance-none"
            >
              <option value="" disabled>Select one</option>
              <option value="not-enough-leads">Not enough leads</option>
              <option value="leads-too-expensive">Leads cost too much</option>
              <option value="cant-close">Can't close enough of them</option>
              <option value="too-much-admin">Too much admin / chasing</option>
              <option value="install-capacity">Need more install capacity</option>
            </select>
            <ValidationError field="challenge" errors={state.errors} className="text-[var(--red)] text-xs" />
          </div>

          <ValidationError errors={state.errors} className="text-[var(--red)] text-sm" />

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-2 w-full rounded-2xl bg-[var(--sky)] text-white font-black py-4 text-base hover:bg-[var(--sky-d)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
          >
            {state.submitting ? 'Sending…' : 'Apply for early access'}
          </button>


        </form>
      </div>
    </section>
  )
}
