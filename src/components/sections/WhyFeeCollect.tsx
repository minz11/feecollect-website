import { motion } from 'framer-motion';
import { Shield, Server, Zap, Database, Globe, Lock, CheckCircle2 } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const differentiators = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, GDPR compliant, AES-256 encryption at rest and in transit. Regular third-party penetration testing and strict role-based access controls.',
  },
  {
    icon: Server,
    title: 'Proven Reliability',
    description: '99.9% uptime SLA with multi-region redundancy. Automatic failover, real-time replication, and zero-downtime deployments keep your campus running without interruption.',
  },
  {
    icon: Zap,
    title: 'Real-Time Everything',
    description: 'Single-write architecture means every change — fee payment, grade entry, attendance scan — is instantly visible across all modules, dashboards, and connected campuses.',
  },
  {
    icon: Database,
    title: 'Unified Data Model',
    description: 'One source of truth for students, staff, finances, and academics. No sync jobs, no ETL pipelines, no data drift. Queries and reports run on live operational data.',
  },
  {
    icon: Globe,
    title: 'Multi-Campus Native',
    description: 'Built from the ground up for multi-entity governance. Shared policies with campus-level overrides, consolidated reporting, and centralized user management across locations.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'Pre-configured for education-sector regulations: FERPA, HIPAA (where applicable), state reporting mandates, and accreditation audit trails — all maintained by our team.',
  },
];

export const WhyFeeCollect = () => {
  return (
    <section id="why-feecollect" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="faq" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            WHY FEECOLLECT
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-neutral-900 tracking-tight">
            Built for institutions that need{' '}
            <span className="text-gradient-gold">certainty, not compromise.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Six differentiators that separate a campus operating system from fragmented tools.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-600 ring-1 ring-amber-500/20 shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-neutral-900">{item.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-12 shadow-soft">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-bold text-gradient-gold uppercase tracking-widest">Trusted by institutions nationwide</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-neutral-900">
              Join 200+ campuses that moved from fragmented software to a connected OS.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              See why finance directors, registrars, and IT leaders choose FeeCollect for their most critical operations.
            </p>
            <a
              href="mailto:hello@feecollect.io"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-[length:200%_auto] px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_30px_-8px_rgba(245,158,11,0.6)] transition-all duration-300 hover:bg-right hover:shadow-[0_14px_40px_-8px_rgba(245,158,11,0.75)]"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};