import { motion } from 'framer-motion';
import { Search, Layers, Database, BookOpen, Users, Headphones, Compass } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We map your workflows, data sources, and institutional needs to create a custom onboarding blueprint.',
  },
  {
    icon: Layers,
    title: 'Configuration',
    description: 'Setup campus structure, fee policies, approval workflows, and integrations in a secure enterprise environment.',
  },
  {
    icon: Database,
    title: 'Migration',
    description: 'Import student records, fee history, academic data and finance details with zero disruption to ongoing operations.',
  },
  {
    icon: BookOpen,
    title: 'Training',
    description: 'Hands-on training for administrators, faculty, finance, and operations teams to ensure rapid adoption.',
  },
  {
    icon: Users,
    title: 'Go Live',
    description: 'Phased rollout with support coverage, validation checks, and confidence-building handover.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing support, performance monitoring, and quarterly reviews keep your campus running smoothly.',
  },
];

export const Implementation = () => {
  return (
    <section id="journey" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="implementation" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            IMPLEMENTATION JOURNEY
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-neutral-900 tracking-tight">
            A clear path from planning to{' '}
            <span className="text-gradient-gold">go-live.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A predictable, low-risk rollout designed for institutions that need a dependable launch and fast adoption.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-600 ring-1 ring-amber-500/20 shadow-sm">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="section-badge text-brand-neutral-500">Step {idx + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-neutral-900">{step.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};