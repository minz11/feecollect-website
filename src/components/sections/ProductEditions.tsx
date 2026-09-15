import { Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const tiers = [
  {
    name: 'FeeCollect Lite',
    badge: 'Starter',
    description: 'Online fee collection for small campuses getting started with digital payments.',
    features: [
      'Online fee collection & payment links',
      'Automated invoicing & receipts',
      'Student profile management',
      'Basic reporting dashboard',
    ],
    ctaLabel: 'Get Started',
    ctaStyle: 'secondary' as const,
    plan: 'lite',
  },
  {
    name: 'Education ERP',
    badge: 'Most Popular',
    featured: true,
    description: 'Complete campus management — admissions, academics, finance, HR, and communication in one platform.',
    features: [
      'Everything in Lite, plus:',
      'Admissions & enrollment workflows',
      'Academic OS — timetables, grading, exams',
      'HR & payroll management',
      'Parent-teacher communication',
      'Campus operations & transport',
    ],
    ctaLabel: 'Select Education ERP',
    ctaStyle: 'primary' as const,
    plan: 'erp',
  },
  {
    name: 'Enterprise Campus Suite',
    badge: 'Multi-Campus',
    description: 'Full enterprise operating system with multi-campus, analytics, and custom deployment options.',
    features: [
      'Everything in ERP, plus:',
      'Multi-campus & department governance',
      'Hostel, library & inventory management',
      'Advanced analytics & BI exports',
      'Custom API & SSO integration',
      'Dedicated account manager & SLA',
    ],
    ctaLabel: 'Select Enterprise Suite',
    ctaStyle: 'primary' as const,
    plan: 'enterprise',
  },
];

export const ProductEditions = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Institution growth paths"
          title={<>Scale from starter campus to enterprise OS.</>}
          description="Pick the edition that matches your growth stage — not just features, but operational maturity. Every tier runs on the same connected data model. Upgrade without migration."
        />

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-gap-md lg:gap-gap-lg items-stretch">
          {tiers.map((tier, idx) => {
            const isFeatured = tier.featured;
            return (
              <div
                ref={idx === 0 ? ref : undefined}
                className={cn('animate-fade-in-up', isInView ? 'in-view' : '', 'flex')}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <Card
                  key={tier.name}
                  variant={isFeatured ? 'elevated' : 'interactive'}
                  className={`relative flex flex-col justify-between p-card-sm md:p-card-md ${isFeatured ? 'shadow-card-hover border-brand-yellow' : ''}`}
                >
                  {isFeatured && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,171,0,0.08),transparent_55%)]" />
                  )}

                  <div className="relative flex flex-1 flex-col">
                    <div>
                      <h3 className={`text-xl tracking-tight mb-1 ${isFeatured ? 'font-black text-brand-yellow' : 'font-extrabold text-brand-neutral-900'}`}>
                        {tier.name}
                      </h3>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                        isFeatured
                          ? 'border-brand-yellow/30 bg-brand-yellow-light text-brand-neutral-900'
                          : 'border-brand-neutral-200 bg-brand-neutral-50 text-brand-neutral-600'
                      }`}>
                        {tier.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-brand-neutral-600">{tier.description}</p>

                    <div className="space-y-2.5 mt-4">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                            isFeatured ? 'bg-brand-yellow-light text-brand-neutral-900' : 'bg-brand-neutral-50 text-brand-neutral-600'
                          }`}>
                            <Icon size="sm"><Check className="h-3.5 w-3.5" aria-hidden="true" /></Icon>
                          </span>
                          <p className="text-sm leading-6 text-brand-neutral-700">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 w-full">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('contact', tier.plan);
                        }}
                        className={cn(
                          'inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-[color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/20 focus-visible:ring-offset-2 active:scale-[0.98] hover:shadow-sm',
                          tier.ctaStyle === 'primary'
                            ? 'bg-brand-yellow text-brand-neutral-900 hover:bg-brand-yellow-hover'
                            : 'border border-brand-neutral-200 bg-white text-brand-neutral-900 hover:bg-brand-neutral-50'
                        )}
                      >
                        {tier.ctaLabel}
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <p className="mt-3 text-center text-xs text-brand-neutral-500">
          All plans include 14-day free trial &bull; No credit card required &bull; Dedicated onboarding support
        </p>
      </div>
    </section>
  );
};

// Helper function for scroll with plan prefill
function scrollToSection(id: string, plan?: string) {
  const url = new URL(window.location.href);
  url.hash = id;
  if (plan) {
    url.searchParams.set('plan', plan);
  }
  window.history.pushState({}, '', url);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}