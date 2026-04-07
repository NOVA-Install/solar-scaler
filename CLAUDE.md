# NOVA B2B Funnel

## Purpose
High-converting B2B landing page funnel targeting solar installers. Goal is to get installers to apply for early access / book a call with NOVA.

## Engineering Standard
**No quick fixes.** When a problem is identified — especially on mobile — the goal is to build the best possible solution, not the easiest one. Hiding elements, overflow-scroll hacks, or gutting visuals to avoid complexity are not acceptable. If a desktop visual doesn't work on mobile, design a proper mobile version of it. Every section should feel intentional and polished on both mobile and desktop. We are building the smoothest, highest-quality version of this page.

## Stack
- Next.js 16.2 (App Router), React 19, TypeScript
- Tailwind CSS v4
- shadcn/ui components (Radix UI primitives)
- Lucide React icons
- Running on port 3002 (`npm run dev -- -p 3002`)

## Project Structure

### CRITICAL: No inline components in page files
`app/page.tsx` is **imports and composition only** — never define components there. Every section lives in its own file under `components/`. If you need to edit a section's content, edit the corresponding component file, NOT `page.tsx`.

### Layout
- `app/page.tsx` — imports and renders all sections (no component definitions here)
- `app/layout.tsx` — root layout, font loading
- `app/globals.css` — all CSS variables, base styles, button utilities, animations

### Page sections (in render order)
- `components/hero-section.tsx` — hero banner with CTA
- `components/process-header.tsx` — process/how-it-works header
- `components/section-01.tsx` — feature section 1
- `components/section-02.tsx` — feature section 2
- `components/section-03.tsx` — feature section 3
- `components/early-access-banner.tsx` — 5-spot early access CTA section
- `components/footer.tsx` — page footer

### Shared
- `components/ui/` — shadcn/ui base components (button, card, etc.)

## Design System (sourced from novainstall.com)

### Fonts
- **Body:** DM Sans (weights 300–700, loaded via `next/font/google`)
- **Mono/Labels:** JetBrains Mono (weights 400–500)
- Both loaded in `app/layout.tsx` and injected as `--font-sans` / `--font-mono` CSS vars

### Color Tokens (exact values from novainstall.com)
| Token | Value | Alias |
|---|---|---|
| `--sky` | `#4ABDE8` | primary blue |
| `--sky-l` | `#6dcef0` | light blue |
| `--sky-d` | `#2a9bc8` | dark blue |
| `--sky-g` | `rgba(74,189,232,0.12)` | ghost/tint |
| `--bg` | `#fafcfd` | page background |
| `--bg2` | `#f4f7f9` | alt background |
| `--sf` | `#fff` | surface |
| `--sf2` | `#f0f4f7` | alt surface |
| `--tx` | `#0f1d2a` | primary text |
| `--tx2` | `#3a4d5e` | secondary text |
| `--tx3` | `#7a8d9e` | muted text |
| `--bd` | `rgba(15,29,42,0.08)` | border |
| `--bd2` | `rgba(15,29,42,0.14)` | strong border |
| `--grn` | `#3ab870` | green accent |
| `--org` | `#e8944a` | orange accent |
| `--red` | `#e05a4a` | red accent |

Legacy aliases (`--sky-dim`, `--tx-primary`, `--tx-secondary`, `--tx-tertiary`, `--surface-1/2/3`) are kept as variable references for backward compat with existing components.

### CSS Utilities (in `globals.css`)
- `.nova-wordmark` — JetBrains Mono wordmark style
- `.sl` — section label (uppercase mono, sky-d color)
- `.st` — section title (`clamp(28px, 4vw, 48px)`, weight 700)
- `.st .ac` — accent span (sky color)
- `.ssub` — section subtitle (tx3, 17px, 1.65 line-height)
- `.btn-white` / `.btn-sky` / `.btn-outline` — pill button variants (100px border-radius)
- `@keyframes pulse` — dot pulse (used in hero tag)
- `@keyframes dash` — SVG dash animation

## Animation System (sourced from novainstall.com)

Uses **GSAP 3 + ScrollTrigger**. In this Next.js project, implement equivalent animations using **Framer Motion** (already in the React ecosystem) following the same patterns:

### Hero entrance — staggered fade-in
Elements start `opacity: 0`, animate in sequence on mount:
```
tag (0.15s) → h1 (0.3s) → subtitle (0.5s) → CTA (0.7s) → device mockup (0.45s, also y: 36→0)
ease: power3.out (≈ easeOut cubic)
```

### Scroll-triggered section reveals
Each section fades up on scroll into view (`top 72–85% of viewport`):
- Section headers: `opacity 0→1`, `duration 0.6s`
- Feature rows: `opacity 0→1, y: 24→0`, `duration 0.7s`, `ease power2.out`
- Text slides in from left/right (alternating rows): `x: ±30→0`, `opacity 0→1`, `delay 0.15s`
- Visual slides in from opposite side + slight scale: `x: ∓30→0`, `scale 0.96→1`, `delay 0.25s`

### Problem section — staggered card cascade
Tool cards (`.tc`) stagger in with `delay: i * 0.05s` each.
NOVA logo animates in with `scale 0.7→1, ease back.out(1.4)` (spring-like overshoot).

### Scroll-pinned section (call timeline)
One section pins to viewport and plays a multi-phase story as the user scrolls through 120% of viewport height (`scrub: 0.5`). In Framer Motion, use `useScroll` + `useTransform` to replicate.

### Marketplace — infinite horizontal scroll rows
6 rows of job cards scroll horizontally at different speeds (20–35s per loop), alternating direction. Implemented with the Web Animations API (`element.animate([...], { iterations: Infinity })`). Cards periodically get `.accepted`/`.declined` states.

### Key easing equivalents (GSAP → CSS/Framer Motion)
| GSAP | CSS/Framer Motion |
|---|---|
| `power2.out` | `easeOut` / `[0.25,0.46,0.45,0.94]` |
| `power3.out` | `easeOut` / `[0.16,1,0.3,1]` |
| `back.out(1.4)` | `[0.34,1.56,0.64,1]` (spring overshoot) |

## Copy Standard — "Installer on the Toilet" Rule

**The reader:** A solar installer, 35–55, running a crew. Busy. Possibly non-native English. Not into reading. Scrolling on their phone on a break. They understand installs, jobs, leads, money — not SaaS terminology.

### Rules
1. **One idea per line.** Never combine two points in one sentence.
2. **Short sentences.** If it's longer than 12 words, find the cut.
3. **Lead with pain or outcome** — never with features. Not "lead prioritisation algorithm" — "you know who to call first."
4. **Bold the one thing** they must remember per block.
5. **No jargon.** Banned: "acquisition engine", "patchwork", "attribution", "leverage", "pipeline visibility", "ecosystem". Allowed: "more jobs", "fewer wasted calls", "track every penny", "know who to call first".
6. **Formatting over paragraphs.** Bullets beat prose. Bold beats plain. Short lines beat long ones. A paragraph = a wall of text to a tradesperson.
7. **The toilet test:** Could a distracted person get the full point in 5 seconds? If not, rewrite.
8. **Never explain the concept** — show the result. Never justify why a feature is good. Just say what it does to their life.
9. **The "so what?" test:** After every line, ask "so what does that mean for me?" If your copy already answers that, it's good. If not, rewrite to include the answer.

### Voice
- Direct. Not salesy. Like a mate who knows the industry explaining something over lunch.
- Short punchy fragments are fine: "More jobs. Less stress." "We handle it."
- Never start with "We believe..." or "Our mission is..."
- **No em dashes (—) in copy.** Use a full stop or restructure the sentence instead.

## Visual Design Standard — "novainstall.com" Rule

Every section visual is a **coded UI mockup**, not a static image, illustration, or placeholder. Build real-looking interfaces in React/Tailwind that communicate the concept directly.

### Reference: novainstall.com visual language
- **Hero**: Full dashboard mockup — metrics strip (leads, pipeline value, jobs booked), live pipeline cards with customer names + AI action badges
- **Feature 1 (Growth)**: Connected ad platform icon grid — Meta, Google, YouTube, TikTok logos with subtle connector lines
- **Feature 2 (Website)**: Website mockup with live analytics overlay (visitor count, conversion rate, leads)
- **Feature 3 (Quote Calculator)**: Pricing comparison table — three solar package tiers, panels/kW/price/savings
- **Feature 4 (Property Analysis)**: Property address card — EPC rating A–G colour bar with current rating highlighted, heating fuel type, estimated annual energy cost
- **Feature 5 (AI Sales)**: Chat conversation window — customer ↔ AI agent exchange, response time badge
- **Feature 6 (Automation)**: Stack of notification cards — booking confirmation, install reminder, review request, quote follow-up

### Rules for building mockups
1. **Functional-looking, not decorative.** Every element should look like it does something — data fields, status badges, progress bars, metric tiles.
2. **Use real-ish data.** Names like "James T.", values like "£12,400", statuses like "Hot". Makes it feel live.
3. **Blue/white palette.** `var(--sky)` for accents, `var(--sf2)` for surfaces, `var(--bd)` for borders. Matches novainstall.com exactly.
4. **Fake browser chrome** when showing a "screen" — three coloured dots (red/yellow/green) + a URL bar skeleton.
5. **No lorem ipsum, no "placeholder text", no grey boxes** standing in for content. Build the actual UI.
6. **Compact and dense.** novainstall.com mockups pack a lot of information into small space — that density signals a real, capable product.
7. **Each mockup illustrates exactly the copy claim** in the same section. The visual proves the words.

### Mobile vs Desktop distinctions
- **Early access banner squares grid**: horizontal row on mobile, vertical column on desktop. Do not unify these into a single layout.

### Section visual plan
| Section | Concept | Mockup to build |
|---|---|---|
| S01 | You don't own rented leads | Split: "Old way" (directory logos + money out) vs "NOVA" (owned pipeline flowing in) |
| S02 | We run your ads | Ads manager dashboard — Meta + Google campaigns, CPL, spend, leads this month |
| S03 | Know everything before you call | Lead detail card — name, address, EPC A–G bar, property type, energy cost, job value, priority badge |

## Business Context
- Product: NOVA — a growth/operations partner for solar installers
- Offer: 5 early access spots, first come first served
- Target: Solar installation companies ready to scale
- Key credibility: Team has real industry experience (installs, grid capacity, solar farm deals)
- CTA: "Apply for early access"
