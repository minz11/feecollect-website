## Plan: Build All 8 Remaining Marketing Sections

### Files to Create (8 new component files)

All files go in `src/components/sections/` and follow the exact same patterns as the existing Hero, ProductEditions, Navbar, and Footer components.

---

### Section 3 — `ProblemStatement.tsx`
**Content:** Split layout contrasting legacy ERP fragmentation vs. unified OS.
- **Layout:** Two-column (`md:grid-cols-2`) with left side showing "The Old Way" (fragmented, disconnected modules with X/AlertTriangle icons) and right side showing "The New Way" (connected, unified with CheckCircle2/Plug icons)
- **Dark neutral accent:** Left column uses `bg-brand-neutral-900` with light text to create visual contrast (this counts toward the 20% neutral allocation)
- **Icons:** `AlertTriangle`, `Unplug`, `X` (old way) vs `CheckCircle2`, `Plug`, `ArrowRight` (new way)
- **Animation:** `whileInView` stagger on each column

### Section 4 — `ConnectedPlatform.tsx`
**Content:** Visual demonstration of "Everything Works Together" with a connected node diagram.
- **Layout:** Central visual hub with radiating module nodes connected by thin border lines
- **Visual motif:** CSS-based connected node diagram using `border-brand-neutral-200` lines and `bg-brand-yellow` pulsing center node. No images — pure CSS/Tailwind
- **Icons:** `CircleDot` (center), `GraduationCap` (Admissions), `Wallet` (Fees), `BookOpen` (Academics), `Building2` (Admin), `BarChart3` (Analytics), `Users` (HR)
- **Badge:** "LIVE SYNC" tag matching Hero dashboard motif
- **Animation:** Staggered `whileInView` for each module node

### Section 6 — `PlatformModules.tsx`
**Content:** Clean grid of core functional modules.
- **Layout:** `grid grid-cols-2 md:grid-cols-4` card grid
- **Data:** 8 module cards — Fee Collection, Admissions, Academics, Examinations, Finance, HRMS, Hostel, Transport
- **Card pattern:** Icon in `bg-brand-neutral-100` container, module name, one-line description
- **Icons:** `CreditCard`, `UserPlus`, `BookOpen`, `ClipboardList`, `Landmark`, `Users`, `Building`, `Bus`
- **Animation:** `whileInView` stagger with `delay: idx * 0.05`

### Section 7 — `ProductShowcase.tsx`
**Content:** High-fidelity mock UI previews showing the ERP in action.
- **Layout:** `md:grid-cols-2` showing two side-by-side mock UI panels
- **Panel A:** Data table mock (students/fees) with clean rows, subtle borders, status badges
- **Panel B:** Inline form mock (quick fee entry) with input fields, action buttons
- **Style:** Pure CSS/HTML mockups that look like real ERP UI — no actual images. Uses `bg-brand-neutral-50`, `border-brand-neutral-200`, monospace text for headers
- **Icons:** `Table2`, `PenLine`, `Search`, `Filter`, `ChevronRight`
- **Animation:** Scale-in with `whileInView`

### Section 8 — `WhyFeeCollect.tsx`
**Content:** Enterprise differentiators.
- **Layout:** `md:grid-cols-2` — left side has heading + description, right side has 3-4 differentiator cards stacked vertically
- **Differentiators:** Enterprise Security (SOC2/GDPR), 99.9% Uptime, Sub-200ms Response, Infinite Scalability
- **Icons:** `ShieldCheck`, `Clock`, `Zap`, `Layers`
- **Card style:** Horizontal cards with icon left, text right, `border-brand-neutral-200`
- **id:** `why-feecollect` (matches existing nav link)
- **Animation:** `whileInView` stagger

### Section 9 — `Implementation.tsx`
**Content:** Step-by-step onboarding roadmap.
- **Layout:** Vertical timeline with 4 steps
- **Steps:** 1. Discovery & Planning, 2. Data Migration, 3. Configuration & Training, 4. Go-Live & Support
- **Visual:** Timeline line on the left (or center on desktop), step numbers in `bg-brand-yellow` circles, step descriptions on the right
- **Icons:** `ClipboardCheck`, `Database`, `Settings`, `Rocket`
- **Animation:** Sequential `whileInView` with increasing delay per step

### Section 10 — `FAQ.tsx`
**Content:** Interactive accordion addressing buyer objections.
- **Layout:** Single column, `max-w-3xl mx-auto`
- **Data:** 6-8 FAQ items covering pricing, migration, security, support, customization, integrations
- **Interaction:** `useState` to track open/closed state (one-at-a-time accordion)
- **Accordion animation:** CSS `overflow-hidden` with `max-height` transition, or use framer-motion `AnimatePresence`
- **Icons:** `Plus`, `Minus` (or `ChevronDown` with rotation)
- **id:** `faq` (matches existing nav link)
- **Animation:** `AnimatePresence` for open/close

### Section 11 — `BottomCTA.tsx`
**Content:** High-impact conversion push.
- **Layout:** Centered content block with `bg-brand-neutral-900` background (dark neutral surface — 20% allocation) for visual contrast against the white sections
- **Content:** Bold headline, supporting text, primary yellow CTA button
- **Icons:** `ArrowRight`
- **No border-b** since Footer follows immediately after
- **Animation:** Fade-in with `whileInView`

---

### Files to Modify (1 file)

**`src/App.tsx`:**
- Remove all 8 placeholder `const Component = () => null;` lines
- Add 8 named imports from `./components/sections/ComponentName`
- Imports maintain alphabetical/section-order alignment

---

### Shared Patterns (All Sections)
- **Component style:** `export const ComponentName: React.FC = () => { ... }`
- **Imports:** `React`, `motion` from framer-motion, specific icons from lucide-react
- **Section wrapper:** `<section id="..." className="py-20 bg-brand-white border-b border-brand-neutral-200">`
- **Content container:** `<div className="max-w-7xl mx-auto px-6">`
- **Heading block:** Centered with eyebrow label, H2, description paragraph
- **Animations:** `whileInView` + `viewport={{ once: true }}` with staggered delays
- **Brand tokens only:** No inline hex codes. Use `brand-yellow`, `brand-neutral-*` exclusively
- **No banned elements:** No school tropes, glassmorphism, gradients, or cartoons

### Execution Order
1. Create all 8 component files in parallel
2. Update `App.tsx` imports
3. Verify dev server compiles and renders