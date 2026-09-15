import { Shield, Server, Zap, Database, Globe, Lock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const differentiators = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, GDPR compliant, AES-256 encryption at rest and in transit. Regular third-party penetration testing and strict role-based access controls.',
    evidence: 'AES-256 encryption • SOC 2 Type II',
  },
  {
    icon: Server,
    title: 'Proven Reliability',
    description: '99.9% uptime SLA with multi-region redundancy. Automatic failover, real-time replication, and zero-downtime deployments keep your campus running without interruption.',
    evidence: '99.9% uptime SLA • Multi-region',
  },
  {
    icon: Zap,
    title: 'Real-Time Everything',
    description: 'Single-write architecture means every change — fee payment, grade entry, attendance scan — is instantly visible across all modules, dashboards, and connected campuses.',
    evidence: '< 200ms sync across modules',
  },
  {
    icon: Database,
    title: 'Unified Data Model',
    description: 'One source of truth for students, staff, finances, and academics. No sync jobs, no ETL pipelines, no data drift. Queries and reports run on live operational data.',
    evidence: 'Single write • Zero data drift',
  },
  {
    icon: Globe,
    title: 'Multi-Campus Native',
    description: 'Built from the ground up for multi-entity governance. Shared policies with campus-level overrides, consolidated reporting, and centralized user management across locations.',
    evidence: '2 → 50+ campuses supported',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'Pre-configured for education-sector regulations: FERPA, HIPAA (where applicable), state reporting mandates, and accreditation audit trails — all maintained by our team.',
    evidence: 'FERPA • HIPAA • State mandates',
  },
];

export const WhyFeeCollect = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Why FeeCollect"
          title={<>Built for institutions that need certainty, not compromise.</>}
          description="Six differentiators that separate a campus operating system from fragmented tools — evidenced after you have seen the platform."
        />

        <div className="mt-6 grid gap-gap-md lg:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item, idx) => (
            <div
              ref={idx === 0 ? ref : undefined}
              className={cn('animate-fade-in-up', isInView ? 'in-view' : '')}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <Card variant="interactive" className="h-full p-card-sm md:p-card-md flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-brand-neutral-200 bg-brand-neutral-50">
                    <Icon><item.icon className="h-5 w-5" aria-hidden="true" /></Icon>
                  </div>
                  <h3 className="text-base font-semibold text-brand-neutral-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-neutral-600 flex-1">{item.description}</p>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-brand-yellow-light border border-brand-yellow/20 px-2.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden />
                  <span className="text-xs font-semibold text-brand-neutral-700">{item.evidence}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50 p-5 md:p-6">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Trusted by institutions nationwide</p>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral-900">
              Built for campuses that demand reliability and scale.
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> Cloud Hosted</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Made in India</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Multi-Campus</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">24×7 Support</span>
            </div>
            <Button variant="primary" className="mt-4 rounded-xl px-6 py-3" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};