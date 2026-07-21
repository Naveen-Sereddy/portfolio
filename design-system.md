# Design System — Naveen Sereddy Portfolio

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0d0404` | Page background |
| `--bg-2` | `#120806` | Section alternates |
| `--bg-3` | `#1a0f0a` | Cards, surfaces |
| `--bg-4` | `#24180d` | Hover states |
| `--text` | `#f0e4d3` | Primary text |
| `--text-2` | `#b8a58f` | Secondary / body copy |
| `--text-3` | `#96826d` | Tertiary / labels |
| `--text-4` | `#5a4d40` | Disabled / very faint |
| `--accent` | `#d0923a` | Gold amber — primary accent |
| `--accent-soft` | `#b57d2b` | Hover state of accent |
| `--accent-muted` | `rgba(208,146,58,0.09)` | Tinted backgrounds |
| `--accent-mid` | `rgba(208,146,58,0.14)` | Badge / tag fills |
| `--border` | `rgba(255,255,255,0.06)` | Default border |
| `--border-strong` | `rgba(255,255,255,0.10)` | Emphasis border |

**Scrollbar:**
- Track: `#141414`
- Thumb: `#2E2E2E`
- Thumb hover: `#3D3D3D`

## Background Treatment

Body uses `background-attachment: fixed` radial glows:
- Top-right: amber ellipse at 8% opacity
- Bottom-left: amber ellipse at 6% opacity

Nav: `rgba(13,4,4,0.70)` + `backdrop-filter: blur(24px) saturate(180%)`

---

## Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / headings | Cormorant Garamond | 400–600 | Serif, editorial, high contrast |
| Body / UI | Inter | 400–700 | Clean, legible at small sizes |
| Mono / labels | JetBrains Mono | 400–500 | Code, eyebrows, captions |

### Type Scale

| Token | Value |
|---|---|
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.8125rem` |
| `--text-base` | `1rem` |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.25rem` |
| `--text-2xl` | `1.5rem` |
| `--text-3xl` | `2rem` |
| `--text-4xl` | `2.625rem` |
| `--text-5xl` | `3.5rem` |
| `--text-6xl` | `4.75rem` |

**Leading:** tight `1.15` · snug `1.25` · normal `1.55`

**Tracking:** labels `.10em` · small labels `.06em`

---

## Spacing Scale

`4px` base unit. Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px.

---

## Components

### Buttons

Three-level hierarchy:

| Class | Role |
|---|---|
| `.btn-primary` | Filled accent — one per view |
| `.btn-ghost` | Outlined — secondary action |
| `.btn-text` | Text link with underline — tertiary |

Button states: `translateY(-2px)` on hover, `scale(0.98)` on active. Primary gets `box-shadow` glow on hover.

### Cards

`.card` — `background: var(--bg-3)`, `border: 1px solid var(--border)`, `border-radius: 1rem`, `box-shadow` depth layer.

Hover: `translateY(-4px)` + stronger shadow + border-color shifts toward accent.

### Tags & Chips

`.chip` — rounded pill, body font, subtle border. Skills and role tags.

`.tag` — identical shape, accent-tinted fill. Category labels.

`.badge` — larger pill, `var(--accent-mid)` fill, for status indicators.

### Section Labels

`.section-label` — `::before` horizontal rule (32px wide, accent color) + uppercase mono text. Wayfinding header for each section.

### Metric Display

`.metric` — inline-flex baseline-aligned pair: large display value in accent + small mono label.

### Eyebrow

`.eyebrow` — `font-family: mono`, `0.75rem`, uppercase, `0.10em` tracking, accent color. Used above h2 headlines.

### Quote Callout

`.quote-callout` — surface card with top accent gradient + decorative `"` mark (8rem Cormorant Garamond, 18% accent opacity).

---

## Layout

`max-width: 1200px` — main container (`.wrap` / `.container`)

`max-width: 1000px` — narrow reading container (`.container-narrow`)

**Work cards:** `display: grid; grid-template-columns: 1fr 1fr` — image one side, info the other. Alternating flip on desktop. Full image cover, no browser chrome for case study links.

---

## Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| `--duration-fast` | `180ms` |
| `--duration-base` | `280ms` |
| `--duration-slow` | `420ms` |

**Reveal on scroll:** `opacity: 0; translateY(24px)` → `opacity: 1; translateY(0)`. Uses IntersectionObserver at `0.12` threshold.

**Line mask (headlines):** clip-reveal via `overflow: hidden` parent + `translateY(110%)` → `translateY(0)` child.

**Reduced motion:** all animations disabled via `@media (prefers-reduced-motion: reduce)`.

---

## Case Study Pages

Shared shell: `case-studies.css` — nav, hero, meta, buttons, next-case, footer.

Static HTML sections, no client-side rendering — personas, journey maps, sitemaps, wireframes, design system, and accessibility artifacts are plain image frames with copy, collapsed into a `<details>` "full process archive" per page. (The React/Babel JSX artifacts under each project's own `case-study/` folder in `Projects/` are separate, earlier-stage exploration files — they aren't what's built into these pages.)

Each case study adapts section weight to its story:
- **FinFlow:** metric-led hero, deep process (10 sections), defend the 73→89 lift
- **MedBridge:** problem-led hero, weight on IA and accessibility
- **Bins & Deals:** business context first, gallery-forward, no research theater

---

## Grain Overlay

SVG `feTurbulence` noise at `0.022` opacity, `position: fixed`, `pointer-events: none`, `z-index: 200`. Applied via `body::after`.

---

## Accessibility

- WCAG 2.1 AA contrast on all text/background pairs
- `:focus-visible` ring in accent color, `3px` offset
- `prefers-reduced-motion` respected globally
- Skip to content link
- All interactive elements keyboard-reachable
- ARIA labels on icon-only buttons
