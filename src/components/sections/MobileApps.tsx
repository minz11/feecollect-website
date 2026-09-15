import { SectionHeader } from '../ui/SectionHeader';
import { PhoneMockup } from '../ui/PhoneMockup';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const apps = [
  {
    label: 'Parent App',
    capabilities: ['Fee payment & receipts', 'Attendance & leave updates', 'Homework & circulars', 'Direct messaging'],
  },
  {
    label: 'Teacher App',
    capabilities: ['Mark attendance', 'Enter marks & grades', 'Timetable & substitution', 'Class communication'],
  },
  {
    label: 'Student App',
    capabilities: ['Timetable & syllabus', 'Assignments & results', 'Library & hostel status', 'Campus notifications'],
  },
];

export const MobileApps = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Mobile ecosystem"
          title={<>Beyond desktop. <span className="text-brand-neutral-900">Complete mobile ecosystem.</span></>}
          description="FeeCollect extends to every stakeholder — parents, teachers and students — with dedicated mobile apps connected to the same live data."
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
          <div aria-hidden className="pointer-events-none hidden lg:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
          {apps.map((app, idx) => (
            <div
              ref={idx === 0 ? ref : undefined}
              className={cn('animate-fade-in-up', isInView ? 'in-view' : '')}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className={`flex flex-col items-center rounded-2xl border bg-white p-5 shadow-sm hover:shadow-card hover:-translate-y-1 transition-[transform,box-shadow] duration-200 ${idx === 1 ? 'border-brand-yellow/20 shadow-card' : 'border-brand-neutral-200'}`}
                style={{ transform: idx === 0 ? 'rotate(-0.5deg)' : idx === 2 ? 'rotate(0.5deg)' : undefined }}
              >
                <PhoneMockup label={app.label} />
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-brand-neutral-500">{['Parent workflow: Payment → Updates', 'Teacher workflow: Attendance → Grades', 'Student workflow: Timetable → Results'][idx]}</p>
                <ul className="mt-2 w-full space-y-1.5">
                  {app.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-brand-neutral-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-brand-neutral-500">Every app shares the unified FeeCollect data model — one login, one source of truth across web and mobile.</p>
      </div>
    </section>
  );
};