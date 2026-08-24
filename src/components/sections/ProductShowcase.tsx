import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const mockups = [
  {
    src: '/showcase-1.jpg',
    label: 'Admin Dashboard',
    tab: '1. Admin Dashboard',
    note: 'Command center for every campus function.',
  },
  {
    src: '/showcase-2.jpg',
    label: 'Fee Management',
    tab: '2. Fee Management',
    note: 'Collections, invoicing, and reconciliation.',
  },
  {
    src: '/showcase-3.jpg',
    label: 'Academics & Exams',
    tab: '3. Academics & Exams',
    note: 'Grading, schedules, and exam operations.',
  },
  {
    src: '/showcase-4.jpg',
    label: 'Hostel & Operations',
    tab: '4. Hostel & Operations',
    note: 'Allotment, transport, and facilities.',
  },
];

export const ProductShowcase = () => {
  const [active, setActive] = useState(0);
  const current = mockups[active];

  return (
    <section id="showcase" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="showcase" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
<span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-neutral-50 border border-brand-neutral-200/80 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-brand-neutral-100/80">
              <MonitorPlay className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
              PLATFORM IN ACTION
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-neutral-900 tracking-tight">
            See how FeeCollect{' '}
            <span className="text-gradient-gold">transforms campus operations.</span>
          </h2>
          <p className="text-base text-brand-neutral-600 leading-relaxed">
            A tour of the screens your teams will use every day — from the command center to the analytics suite.
          </p>
        </div>

        {/* Main Showcase Display */}
        <div className="relative w-full aspect-[16/9] max-h-[550px] bg-brand-neutral-900/5 rounded-2xl border-2 border-brand-neutral-200/80 shadow-soft overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              id="active-showcase-img"
              key={current.src}
              src={current.src}
              alt={current.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Bottom overlay caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">{current.label}</p>
                <p className="mt-0.5 text-xs text-slate-200/90">{current.note}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl ring-1 ring-white/20">
                {active + 1} / {mockups.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation / Switcher Pills */}
        <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          {mockups.map((mockup, index) => {
            const isActive = index === active;
            return (
              <button
                key={mockup.src}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-yellow text-brand-neutral-900 shadow-md'
                    : 'bg-brand-neutral-100 text-brand-neutral-700 border border-brand-neutral-200 hover:border-brand-yellow/50'
                }`}
              >
                {mockup.tab}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};