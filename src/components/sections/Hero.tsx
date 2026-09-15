import type { FC } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Hero: FC = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="relative overflow-hidden bg-white py-section-sm md:py-section-md">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          <div ref={ref} className={cn("lg:col-span-3 space-y-3", isInView ? 'animate-fade-in-up in-view' : 'animate-fade-in-up')}>
            <Badge>One Platform. Every Institution.</Badge>

            <div className="space-y-3">
              <h1 className="text-display-l lg:text-display-xl font-extrabold tracking-tight leading-[1.05] text-brand-neutral-900" style={{ textWrap: 'balance' }}>
                Run your entire <br />
                institution on one platform.
              </h1>
              <p className="max-w-xl text-base sm:text-body-l text-brand-neutral-600 leading-relaxed">
                Connected operations for schools, colleges & universities — admissions → academics → fees → transport → library → HR → communication, live on one data model.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl px-7 py-3.5"
                aria-label="Book a live demo"
                rightIcon={<Icon><ArrowRight className="h-4 w-4" /></Icon>}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Live Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-xl px-7 py-3.5"
                aria-label="Explore modules"
                leftIcon={<Icon><Play className="h-4 w-4" /></Icon>}
                onClick={() => document.querySelector('#modules')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Modules
              </Button>
            </div>

            <p className="flex flex-wrap items-center gap-2 pt-1 text-xs font-medium text-brand-neutral-500" aria-label="Trust strip">
              <span>Schools</span><span className="h-1 w-1 rounded-full bg-brand-neutral-300" aria-hidden />
              <span>Colleges</span><span className="h-1 w-1 rounded-full bg-brand-neutral-300" aria-hidden />
              <span>Universities</span><span className="h-1 w-1 rounded-full bg-brand-neutral-300" aria-hidden />
              <span>Cloud ERP</span><span className="h-1 w-1 rounded-full bg-brand-neutral-300" aria-hidden />
              <span>24×7 Support</span>
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> SOC 2 Type II</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> 99.9% Uptime SLA</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /> GDPR Compliant</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">8 core modules • Multi-campus ready</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {['Admissions', 'Academics', 'Finance', 'Examinations', 'Hostel', 'Transport', 'HRMS', 'Library'].map((label) => (
                <span key={label} className="rounded-full border border-brand-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-neutral-700">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div ref={ref} className={cn("lg:col-span-9 relative", isInView ? 'animate-fade-in-up in-view' : 'animate-fade-in-up')}>
            {/* Mobile: single clean dashboard */}
            <div className="lg:hidden relative w-full max-w-md mx-auto">
              <div className="absolute -top-2 left-4 z-10 inline-flex items-center rounded-full bg-brand-neutral-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm">
                Real-Time ERP Sync
              </div>
              <div className="relative z-30 rounded-2xl bg-white border border-brand-neutral-200 shadow-card overflow-hidden">
                <img src="/erp/admin-dashboard.svg" alt="FeeCollect ERP Admin Dashboard" className="w-full h-auto object-cover" loading="eager" fetchPriority="high" decoding="async" />
              </div>
            </div>

            {/* Desktop: 4-image collage — enlarged to 65% visual weight */}
            <div className="hidden lg:flex relative w-full max-w-4xl mx-auto aspect-[16/9] items-center justify-center p-2 lg:-mr-8">
              <div className="absolute -top-1 left-6 z-10 inline-flex items-center rounded-full bg-brand-neutral-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                Real-Time ERP Sync
              </div>

              <div className="relative z-30 w-[95%] rounded-2xl bg-white border border-brand-neutral-200 shadow-card overflow-hidden transition-transform duration-200 hover:shadow-card-hover">
                <img src="/erp/admin-dashboard.svg" alt="Main ERP Admin Dashboard" className="w-full h-auto object-cover" loading="eager" fetchPriority="high" decoding="async" width="960" height="540" />
              </div>

              <div className="absolute -top-5 -right-2 z-10 w-[50%] rounded-2xl bg-white border border-brand-neutral-200 shadow-card overflow-hidden opacity-95 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <img src="/erp/fees-invoices.svg" alt="Student Fees and Invoices Ledger" className="w-full h-auto object-cover" loading="lazy" decoding="async" width="500" height="340" />
              </div>

              <div className="absolute -bottom-7 -left-4 z-20 w-[48%] rounded-2xl bg-white border border-brand-neutral-200 shadow-card overflow-hidden opacity-95 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <img src="/erp/curriculum-planner.svg" alt="Curriculum & Syllabus Planner" className="w-full h-auto object-cover" loading="lazy" decoding="async" width="480" height="320" />
              </div>

              <div className="absolute -bottom-9 -right-1 z-20 w-[46%] rounded-2xl bg-white border border-brand-neutral-200 shadow-card overflow-hidden opacity-95 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <img src="/erp/hostel-allotment.svg" alt="Hostel Room & Bed Allotment" className="w-full h-auto object-cover" loading="lazy" decoding="async" width="460" height="300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};