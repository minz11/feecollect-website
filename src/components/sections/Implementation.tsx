import { SectionHeader } from '../ui/SectionHeader';
import { Timeline } from '../ui/Timeline';
import { Button } from '../ui/Button';

const steps = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'We map your workflows, data sources and institutional needs to create a custom onboarding blueprint.',
    date: 'Week 1',
    status: 'completed' as const,
  },
  {
    id: 'configuration',
    title: 'Configuration',
    description: 'Setup campus structure, fee policies, approval workflows and integrations in a secure enterprise environment.',
    date: 'Week 2',
    status: 'completed' as const,
  },
  {
    id: 'migration',
    title: 'Migration',
    description: 'Import student records, fee history, academic data and finance details with zero disruption to ongoing operations.',
    date: 'Week 2–3',
    status: 'completed' as const,
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Hands-on training for administrators, faculty, finance and operations teams to ensure rapid adoption.',
    date: 'Week 3',
    status: 'upcoming' as const,
  },
  {
    id: 'go-live',
    title: 'Go Live',
    description: 'Phased rollout with support coverage, validation checks and confidence-building handover.',
    date: 'Week 4',
    status: 'upcoming' as const,
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Ongoing support, performance monitoring and quarterly reviews keep your campus running smoothly.',
    date: 'Ongoing',
    status: 'upcoming' as const,
  },
];

export const Implementation = () => {
  return (
    <section className="py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Implementation journey"
          title={<>A clear path from planning to go-live.</>}
          description="A predictable, low-risk rollout designed for institutions that need a dependable launch and fast adoption."
        />

        <div className="mt-6 mx-auto max-w-3xl">
          <Timeline items={steps} />
        </div>

        <div className="mt-4 rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50 p-5 md:p-6">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Enterprise readiness baked in</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> Secure Architecture</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Backups</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Data Residency</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Audit Trails</span>
            </div>
            <Button variant="secondary" className="mt-3 rounded-xl px-6 py-3" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan Your Rollout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};