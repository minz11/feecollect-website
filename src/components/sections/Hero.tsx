import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

export const Hero: FC = () => {
  return (
    <section className="mesh-canvas relative overflow-hidden min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="hero" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 relative overflow-hidden rounded-organic-1 p-6 lg:p-8 shadow-glass"
          >
<span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-neutral-50 border border-brand-neutral-200/80 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4 shadow-glass transition-all hover:bg-brand-neutral-100/80">
              <Zap className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
              THE CAMPUS OS
            </span>

            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.16] text-brand-neutral-900">
                Unify Your Entire{' '}
                <span className="text-gradient-gold">Campus Operations</span> on a{' '}
                <span className="text-gradient-gold">Single Platform.</span>
              </h1>
              <p className="max-w-2xl text-base sm:text-[20px] text-brand-neutral-600 leading-relaxed">
                Replace fragmented software with one connected operating system. Streamline admissions, academics, and administration with real-time clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="mailto:hello@feecollect.io" aria-label="Book a live demo" className="button-primary px-7 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 text-brand-neutral-900">
                Book a Live Demo <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#modules" aria-label="Watch 2-minute tour" className="inline-flex items-center justify-center rounded-xl border border-brand-yellow/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-brand-neutral-900 backdrop-blur-xl transition hover:border-brand-yellow/50 hover:bg-white/90">
                <Play className="mr-2 w-4 h-4 text-brand-yellow" />Watch 2-Min Tour
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 text-sm text-brand-neutral-600">
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 12.5L9 6C9.5 5 10.5 5 11 6L17.5 14.5C18 15.5 17 16.5 16 16.5L14 17.5L10.5 21C9.5 22 8.5 21 9 20.5L12 17.5L13.5 16C13.5 16 14.5 15 14 14L7.5 6.5C7 5.5 8 4.5 9 5.5L10.5 7"></path>
                  <circle cx="19" cy="5" r="2"></circle>
                  <circle cx="19" cy="19" r="2"></circle>
                  <path d="M19 5v14M5 19v14"></path>
                </svg>
                Admissions
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Academics
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                  <line x1="12" y1="9" x2="12" y2="15"></line>
                </svg>
                Finance
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h18v10H3z"></path>
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                  <path d="M9 14v2M12 14v2M15 14v2"></path>
                </svg>
                Hostel
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Library
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Hostel Management
              </span>
              <span className="ui-card flex items-center gap-2 rounded-full px-3 py-2 text-brand-neutral-700">
                <svg className="w-4 h-4 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                  <line x1="12" y1="9" x2="12" y2="15"></line>
                </svg>
                Certificate Centre
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Animated Psychedelic Pattern Glow */}
            
            
            {/* 3D layered ERP screenshot collage */}
            <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] flex items-center justify-center p-4">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-yellow/30 via-brand-neutral-100/20 to-transparent blur-3xl rounded-full" />

              <div className="absolute -top-4 left-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-yellow to-brand-neutral-100 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-brand-neutral-950 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.7)]">
                ⚡ Real-Time ERP Sync
              </div>

              {/* Center: main admin dashboard */}
              <div className="relative z-30 w-[88%] rounded-organic-2 bg-white border border-brand-neutral-200/90 shadow-glass-hover overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                <img
                  src="/erp/admin-dashboard.png"
                  alt="Main ERP Admin Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Top-right: student invoices & finance ledger */}
              <div className="absolute -top-6 -right-6 z-10 w-[52%] rounded-organic-3 bg-white border border-brand-neutral-200/80 shadow-glass overflow-hidden opacity-95 transition-all duration-300 hover:z-40 hover:opacity-100 hover:scale-105">
                <img
                  src="/erp/fees-invoices.png"
                  alt="Student Fees and Invoices Ledger"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom-left: curriculum & academic planner */}
              <div className="absolute -bottom-8 -left-8 z-20 w-[50%] rounded-organic-4 bg-white border border-brand-neutral-200/80 shadow-glass overflow-hidden opacity-95 transition-all duration-300 hover:z-40 hover:opacity-100 hover:scale-105">
                <img
                  src="/erp/curriculum-planner.png"
                  alt="Curriculum & Syllabus Planner"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom-right: hostel & room allotment */}
              <div className="absolute -bottom-10 -right-4 z-20 w-[48%] rounded-organic-1 bg-white border border-brand-neutral-200/80 shadow-glass overflow-hidden opacity-95 transition-all duration-300 hover:z-40 hover:opacity-100 hover:scale-105">
                <img
                  src="/erp/hostel-allotment.png"
                  alt="Hostel Room & Bed Allotment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
