import { SectionHeader } from '../ui/SectionHeader';
import { BrowserMockup } from '../ui/BrowserMockup';
import { Tabs } from '../ui/Tabs';
import { Button } from '../ui/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const mockups = [
  {
    src: '/erp/admin-dashboard.svg',
    label: 'Admin Dashboard',
    tab: 'Admin Dashboard',
    note: 'Command center for every campus function.',
    annotation: 'Unified view — all departments at a glance',
    kpi: 'Single data model • Real-time sync',
  },
  {
    src: '/erp/fees-invoices.svg',
    label: 'Fee Management',
    tab: 'Fee Management',
    note: 'Collections, invoicing, and reconciliation — auto-reconciled in < 200ms.',
    annotation: 'Auto-reconciliation live',
    kpi: '99.98% reconciled',
  },
  {
    src: '/erp/curriculum-planner.svg',
    label: 'Academics & Exams',
    tab: 'Academics & Exams',
    note: 'Grading, schedules, and exam operations with analytics.',
    annotation: 'Schedule → Grading → Report Card',
    kpi: '1,280 courses • 12 departments',
  },
  {
    src: '/erp/hostel-allotment.svg',
    label: 'Hostel & Operations',
    tab: 'Hostel & Operations',
    note: 'Allotment, transport, and facilities with GPS & occupancy.',
    annotation: 'Live GPS • 92% occupancy',
    kpi: '48 active routes',
  },
  {
    src: undefined as string | undefined,
    label: 'Library',
    tab: 'Library',
    note: 'Catalog, circulation and inventory — add screenshot to /public/screenshots/showcase/library.webp',
    annotation: 'Catalog → Issue → Return → Inventory',
    kpi: 'Asset-ready — capture pending',
  },
  {
    src: undefined as string | undefined,
    label: 'HRMS',
    tab: 'HRMS',
    note: 'Staff profiles, payroll and leave — add screenshot to /public/screenshots/showcase/hrms.webp',
    annotation: 'Onboarding → Payroll → Leave',
    kpi: 'Asset-ready — capture pending',
  },
];

export const ProductShowcase = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader
          badge="Inside FeeCollect"
          title={<>See how FeeCollect transforms campus operations.</>}
          description="A guided tour of real screens your teams use every day — annotated with what it is, why it matters, and the business outcome."
        />

        <div className="mt-4">
          <div ref={ref} className={cn('animate-fade-in-up', isInView ? 'in-view' : '')}>
            <Tabs
              variant="pills"
              items={mockups.map((m, idx) => ({
                label: m.tab,
                content: (
                  <div>
                    <BrowserMockup src={m.src} label={m.label} alt={m.label} annotation={m.annotation} kpi={m.kpi} isFirstTab={idx === 0} className="shadow-[0_20px_40px_-12px_rgba(15,23,42,0.15)]" />
                    <p className="mt-3 text-center text-sm leading-relaxed text-brand-neutral-600 max-w-2xl mx-auto">{m.note}</p>
                  </div>
                ),
              }))}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {['Admissions', 'Finance', 'Hostel', 'Transport', 'Library', 'HRMS'].map((k) => (
              <span key={k} className="rounded-full border border-brand-neutral-200 bg-white px-3 py-1 text-xs font-medium text-brand-neutral-600">{k}</span>
            ))}
            <span className="text-xs text-brand-neutral-500 self-center">— highlighted in tour above</span>
          </div>

          <div className="mt-4 rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50 p-5 md:p-6 text-center">
            <div className="mx-auto max-w-3xl space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">See it on mobile too</p>
              <p className="text-sm text-brand-neutral-600">Every screen adapts to the Parent, Teacher, and Student apps — same data, native experience.</p>
              <Button variant="primary" className="rounded-xl px-6 py-3" onClick={() => document.querySelector('#mobile')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Mobile Apps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};