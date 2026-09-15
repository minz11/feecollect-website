import { School, GraduationCap, Building2, Network } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const institutions = [
  {
    icon: School,
    title: 'Schools',
    description: 'K-12 institutions running admissions, fees, academics, transport and parent communication on one platform.',
    meta: 'Nursery → Class 12',
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    description: 'Degree colleges managing semesters, examinations, faculty and compliance reporting without fragmented tools.',
    meta: 'UG & PG programmes',
  },
  {
    icon: Building2,
    title: 'Universities',
    description: 'Multi-department universities with centralized governance, department-level autonomy and consolidated analytics.',
    meta: 'Multi-department',
  },
  {
    icon: Network,
    title: 'Multi-Campus Groups',
    description: 'Education groups operating several campuses with shared policies, campus-level overrides and groupwide reporting.',
    meta: '2 → 50+ campuses',
  },
];

export const InstitutionTypes = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Who we serve"
          title={<>Built for every <span className="text-brand-neutral-900">institution type</span></>}
          description="Whether you run a single school or a nationwide education group, FeeCollect adapts to your structure — not the other way around."
        />

        <div className="mt-6 grid gap-gap-md md:grid-cols-2 xl:grid-cols-4">
          {institutions.map(({ icon: LucideIcon, title, description, meta }, idx) => (
            <div
              ref={idx === 0 ? ref : undefined}
              className={cn('animate-fade-in-up', isInView ? 'in-view' : '')}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <Card variant="interactive" className="p-card-sm md:p-card-md flex flex-col h-full min-h-[260px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-neutral-200 bg-brand-neutral-50">
                  <Icon size="lg"><LucideIcon className="h-6 w-6" aria-hidden="true" /></Icon>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-normal text-brand-neutral-600 flex-1">{description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand-neutral-500">{meta}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center gap-3">
          <a href="#platform-overview" className="inline-block py-2 text-sm font-semibold text-brand-neutral-900 underline decoration-brand-neutral-300 underline-offset-4 hover:decoration-brand-yellow">
            See how the platform connects → 
          </a>
          <span className="text-xs text-brand-neutral-500">One platform, every institution type, fully connected</span>
        </div>
      </div>
    </section>
  );
};