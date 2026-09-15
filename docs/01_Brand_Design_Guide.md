# FeeCollect.io – Brand Design System Guide

## Brand Vision & Core Principles
FeeCollect.io is a modern enterprise operating system for educational institutions. It communicates:
- **Slogan:** One Platform. Every Institution.
- **Philosophy:** Everything Works Together.
- **Visual Vibe:** Stripe / Linear / Vercel standard (Modern, Enterprise, Connected, Calm, Reliable, Minimal, Scalable).

## Color Philosophy & Token Mapping
- **Signature Accent:** `#FFAB00` (Brand Yellow) — gradient `#FFC34D → #FFAB00` for premium marks (logo tassel, bookmark, gold button).
- **Primary Dark (Navy / Ink):** `#0F172A` (slate-900) / `#1E293B` (slate-800) — logo book & cap, headings (`h1`/`h2`), dark surfaces, shadows. Replaces pure black `#0A0A0A`.
- **Dominant Surface:** `#FFFFFF` (Pure White).
- **Secondary Neutrals:** Slate scale `#F8FAFC → #64748B` for borders, muted text, card fills — aligned to logo page layers (`#F8FAFC`, `#E2E8F0`, `#CBD5E1`).

### Full Token Table (tailwind.config.js `brand.*`)

| Token | Hex | Role |
|---|---|---|
| `brand.yellow.DEFAULT` | `#FFAB00` | Accent — CTAs, dots, focus rings, active states |
| `brand.yellow.hover` | `#E69A00` | Accent hover |
| `brand.yellow.gold-light` | `#FFC34D` | Gradient start — tassel, bookmark |
| `brand.yellow.light` | `rgba(255,171,0,0.1)` | Tint — active category/module, KPI pill |
| `brand.yellow.glow` | `rgba(255,171,0,0.15)` | Glow — shadows |
| `brand.white` | `#FFFFFF` | Dominant background |
| `brand.neutral.950` | `#020617` | Darkest slate |
| `brand.neutral.900` | `#0F172A` | Navy Ink — headings, dark CTA, logo book/cap |
| `brand.neutral.800` | `#1E293B` | Slate-800 — wordmark FeeCollect, mortarboard |
| `brand.neutral.700` | `#334155` | Slate-700 — mortarboard top |
| `brand.neutral.600` | `#475569` | Muted body text |
| `brand.neutral.500` | `#64748B` | Placeholders / subtitles |
| `brand.neutral.400` | `#94A3B8` | Disabled states |
| `brand.neutral.300` | `#CBD5E1` | Secondary borders — logo page |
| `brand.neutral.200` | `#E2E8F0` | Primary borders & dividers — logo page |
| `brand.neutral.100` | `#F1F5F9` | Secondary backgrounds |
| `brand.neutral.50` | `#F8FAFC` | Soft card fill — logo page |
| `shadows` | `rgba(15,23,42,0.08-0.12)` | Navy-tinted — matches logo dropShadow |

### Color Allocations
- **Marketing Website:** 75% White, 15% Slate Neutral (`#F8FAFC` / `#E2E8F0`), 5% Navy (`#0F172A`), 5% Brand Yellow (`#FFAB00`).
- **ERP Application:** 82% White, 13% Slate Neutral, 2% Navy, 3% Brand Yellow.

### Navy Use Cases
- Logo lockup, `h1`/`h2` headings, dark CTA `bg-brand-neutral-900`, footer wordmark, shadows `rgba(15,23,42,…)`.

### Permissible Yellow Accent Use Cases
- Brand Logo Signature Mark (tassel, bookmark, button — gradient `#FFC34D → #FFAB00`)
- Primary Call to Action (CTA) buttons
- Active Navigation state highlights
- Input focus rings
- Step indicators and key metrics highlights

### Logo Mark
- The FeeCollect mark is a **book + graduation cap** with gold tassel/bookmark and navy ink (`#0F172A` / `#1E293B`).
- The **book/cap motif is reserved for the logo only** — prohibited for general illustrations, icons, or marketing graphics (keeps the mark distinctive).
- Wordmark: `FeeCollect` in `#1E293B` (Inter SemiBold, tracking -1.5), `.io` in `#737373` (Regular).

## Typography
- **Typeface:** Inter (Google Fonts) across Web, ERP, Mobile Apps, and Documentation.

## Spatial System & Visual Language
- **Grid:** 8-point spatial grid system (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- **Motifs:** Modular cards with subtle 1px borders (`border-brand-neutral-200` → `#E2E8F0` slate), connected nodes with thin lines, soft yellow glow (`#FFAB00` at low opacity), navy-tinted shadows (`rgba(15,23,42,0.08)`).
- **Prohibited:** Cartoon illustrations (except logo mark), glassmorphism, heavy gradients (except logo gold gradient), or excessive colors.
