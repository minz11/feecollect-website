import { motion } from 'framer-motion';
import { CheckCircle, Circle, ClipboardList, Cpu, ShieldCheck, Sparkles, XCircle, Zap } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const legacy = [
  { icon: XCircle, label: 'Disconnected systems' },
  { icon: ClipboardList, label: 'Manual reconciliation' },
  { icon: Cpu, label: 'Slow reporting cycles' },
];

const modern = [
  { icon: CheckCircle, label: 'Real-time data sync' },
  { icon: ShieldCheck, label: 'Single sign-on access' },
  { icon: Zap, label: 'Unified analytics dashboard' },
];

export const ProblemStatement = () => {
  return (
    <section id="transformation" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="transformation" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">

        <div className="text-center mx-auto max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            THE TRANSFORMATION
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-brand-neutral-900 tracking-tight leading-[1.25]">
            From fragmented systems to one{' '}
            <span className="text-gradient-gold">connected campus OS.</span>
          </h2>
          <p className="text-base sm:text-[16px] text-brand-neutral-600 leading-relaxed">
            One platform replaces siloed tools and manual workflows so campus teams can move faster with a single source of truth for operations, finance, academics, and student experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[28px] border border-gray-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl"
          >
            <div className="mb-6">
              <span className="section-badge inline-flex rounded-full bg-red-50 px-3 py-1 text-red-700 ring-1 ring-red-500/20">
                Fragmented Systems
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-brand-neutral-900">Before: disconnected campus workflows</h3>
            </div>

            <div className="space-y-4">
              {legacy.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-3xl bg-white/80 p-4 text-sm text-brand-neutral-700 border border-gray-200/80 backdrop-blur-xl">
                  <item.icon className="mt-1 h-4 w-4 text-red-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-brand-neutral-200/80 bg-white/80 p-5 text-sm text-brand-neutral-600 backdrop-blur-xl">
              High overhead, slow coordination, and manual approval cycles keep teams stuck in yesterday’s processes.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-card-featured rounded-[28px] p-8 shadow-[0_20px_50px_-20px_rgba(245,158,11,0.25)]"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-700 ring-1 ring-emerald-400/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <Circle className="relative h-2.5 w-2.5 text-emerald-500" />
                </span>
                One Connected OS
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-brand-neutral-900">After: a unified campus operating system</h3>
            </div>

            <div className="space-y-4">
              {modern.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-3xl bg-emerald-50/80 p-4 text-sm text-brand-neutral-700 border border-emerald-100 backdrop-blur-xl">
                  <item.icon className="mt-1 h-4 w-4 text-emerald-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] border border-amber-500/20 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)]">
              <p className="text-sm font-bold text-gradient-gold">27% faster decision-making across admissions, finance, and campus services.</p>
              <p className="mt-2 text-brand-neutral-600">A single platform keeps everyone working from the same real-time data set.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
