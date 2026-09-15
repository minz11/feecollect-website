import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Building2,
  Bus,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  ScanLine,
  Users,
  Wallet,
  Megaphone,
} from 'lucide-react';
import { BrowserMockup } from '../ui/BrowserMockup';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';
import { Tabs } from '../ui/Tabs';

type Module = {
  id: string;
  label: string;
  icon: typeof GraduationCap;
  description: string;
  imageSrc?: string;
  capabilities: string[];
  stat: string;
  annotation?: string;
  workflow?: string[];
  roles?: string[];
  related?: string[];
};

type Category = {
  id: string;
  label: string;
  modules: Module[];
};

const categories: Category[] = [
  {
    id: 'academic',
    label: 'Academic',
    modules: [
      {
        id: 'admissions',
        label: 'Admissions',
        icon: GraduationCap,
        description: 'Inquiries to enrollment in one connected flow.',
        imageSrc: undefined,
        annotation: 'Application → Verification → Approval → Enrollment',
        workflow: ['Inquiry', 'Application', 'Verification', 'Approval', 'Fee Assignment', 'Enrollment', 'Parent Activation'],
        roles: ['Administrator', 'Principal', 'Parent'],
        related: ['Student Information', 'Fee & Finance', 'Communication'],
        capabilities: [
          'Digital admissions & inquiry management',
          'Application review with document verification',
          'Offer letters, waitlists & seat allocation',
          'Enrollment forms and parent onboarding',
        ],
        stat: '2,412 inquiries → 412 enrolled this cycle',
      },
      {
        id: 'academic-os',
        label: 'Academic OS',
        icon: BookOpen,
        description: 'Courses, timetables & academic structure.',
        imageSrc: '/erp/curriculum-planner.svg',
        annotation: 'Course → Timetable → Allocation',
        workflow: ['Syllabus', 'Course', 'Timetable', 'Room', 'Faculty Allocation'],
        roles: ['Administrator', 'Teacher', 'Principal'],
        related: ['Admissions', 'Examinations', 'HR'],
        capabilities: [
          'Course & syllabus planning',
          'Timetable & room scheduling',
          'Academic calendars & credit mapping',
          'Faculty workload management',
        ],
        stat: '1,280 courses managed across 12 departments',
      },
      {
        id: 'examinations',
        label: 'Examinations & Grading',
        icon: ClipboardCheck,
        description: 'Exams, grading, results & transcripts.',
        imageSrc: undefined,
        annotation: 'Schedule → Invigilation → Grading → Report Card',
        workflow: ['Schedule', 'Seating', 'Invigilation', 'Grading', 'Report Card', 'Transcript'],
        roles: ['Teacher', 'Administrator', 'Principal'],
        related: ['Academic OS', 'Communication', 'Reports'],
        capabilities: [
          'Exam scheduling & seating plans',
          'Question paper & invigilation management',
          'Grading, report cards & transcripts',
          'Results publishing and analytics',
        ],
        stat: '128 exams scheduled • 3.41 average GPA',
      },
    ],
  },
  {
    id: 'administration',
    label: 'Administration',
    modules: [
      {
        id: 'hr-payroll',
        label: 'HR & Payroll',
        icon: Users,
        description: 'Staff, payroll & leave management.',
        imageSrc: undefined,
        annotation: 'Onboarding → Attendance → Payroll → Payslip',
        workflow: ['Onboarding', 'Attendance', 'Leave', 'Payroll', 'Payslip', 'Appraisal'],
        roles: ['HR', 'Principal', 'Finance'],
        related: ['Attendance', 'Finance', 'Reports'],
        capabilities: [
          'Staff profiles & document management',
          'Payroll runs & payslip generation',
          'Leave, attendance & shifts for staff',
          'Appraisal & role permissions',
        ],
        stat: '340 staff onboarded • payroll in 1 day',
      },
      {
        id: 'attendance-rfid',
        label: 'Attendance & RFID',
        icon: ScanLine,
        description: 'Biometric & RFID attendance tracking.',
        imageSrc: undefined,
        annotation: 'Check-in → Dashboard → Parent Alert',
        workflow: ['Capture', 'Dashboard', 'Verification', 'Parent Notification', 'Report'],
        roles: ['Teacher', 'Administrator', 'Parent'],
        related: ['Communication', 'Academic OS', 'Mobile App'],
        capabilities: [
          'Biometric & RFID check-in capture',
          'Live attendance dashboards',
          'Auto-notifications to parents',
          'Late & leave policy enforcement',
        ],
        stat: '96.2% attendance • 4,280 students tracked',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    modules: [
      {
        id: 'fee-finance',
        label: 'Fee & Finance',
        icon: Wallet,
        description: 'Collections, invoicing, and reconciliation.',
        imageSrc: '/erp/fees-invoices.svg',
        annotation: 'Invoice → Payment → Reconciliation → Receipt',
        workflow: ['Fee Plan', 'Invoice', 'Payment (UPI/Card)', 'Reconciliation', 'Receipt', 'Scholarship/Waiver'],
        roles: ['Finance', 'Administrator', 'Parent', 'Management'],
        related: ['Admissions', 'Transport & Hostel', 'Reports'],
        capabilities: [
          'Online fee collection with auto-reconciliation',
          'Invoices, receipts & payment reminders',
          'Scholarships, waivers & installment plans',
          'Audit-ready reports and compliance exports',
        ],
        stat: '$1.24M collected this period • 99.98% reconciled',
      },
    ],
  },
  {
    id: 'campus',
    label: 'Campus',
    modules: [
      {
        id: 'campus-operations',
        label: 'Campus Operations',
        icon: Building2,
        description: 'Facilities, gate access & services.',
        imageSrc: undefined,
        annotation: 'Booking → Approval → Usage → Billing',
        workflow: ['Facility Request', 'Approval', 'Booking', 'Gate Entry', 'Usage', 'Asset Log'],
        roles: ['Administrator', 'Security', 'Finance'],
        related: ['Attendance', 'Finance', 'HR'],
        capabilities: [
          'Facility booking and maintenance workflows',
          'Gate access & visitor management',
          'Cafeteria & service transactions',
          'Asset and inventory management',
        ],
        stat: '78 facilities booked • 99% gate accuracy',
      },
      {
        id: 'transport-hostel',
        label: 'Transport & Hostel',
        icon: Bus,
        description: 'Routes, GPS, allotment & occupancy.',
        imageSrc: '/erp/hostel-allotment.svg',
        annotation: 'Route → GPS → Allotment → Billing',
        workflow: ['Route Plan', 'Vehicle Assign', 'GPS Tracking', 'Hostel Allotment', 'Occupancy', 'Mess Billing'],
        roles: ['Transport Admin', 'Warden', 'Parent', 'Student'],
        related: ['Admissions', 'Fee & Finance', 'Parent App'],
        capabilities: [
          'Hostel allotment & occupancy tracking',
          'Transport routes, stops & live GPS view',
          'Driver & vehicle management',
          'Hostel fees & mess billing',
        ],
        stat: '92% hostel occupancy • 48 active routes',
      },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    modules: [
      {
        id: 'communication',
        label: 'Communication',
        icon: Megaphone,
        description: 'Announcements, messaging & parent connect.',
        imageSrc: undefined,
        annotation: 'Draft → Approval → Queue → Delivery Receipt',
        workflow: ['Draft', 'Approval', 'Queue (WhatsApp/SMS/Push)', 'Dispatch', 'Delivery', 'Read Receipt'],
        roles: ['Administrator', 'Teacher', 'Parent', 'Management'],
        related: ['Attendance', 'Examinations', 'Fee & Finance'],
        capabilities: [
          'Circulars & announcements with approvals',
          'Parent-teacher 1:1 messaging',
          'Push, SMS & WhatsApp queue',
          'Delivery & read receipts',
        ],
        stat: '12k messages / month • 98% delivered',
      },
    ],
  },
];

export const PlatformModules = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const activeCat = useMemo(() => categories.find((c) => c.id === activeCategory) ?? categories[0], [activeCategory]);
  const [activeModuleId, setActiveModuleId] = useState<string>(activeCat.modules[0].id);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  // Debounce search input (150ms)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQ(q), 150);
    return () => clearTimeout(timer);
  }, [q]);

  // keep active module in sync when category changes
  const handleCategory = (catId: string) => {
    setActiveCategory(catId);
    const cat = categories.find((c) => c.id === catId)!;
    setActiveModuleId(cat.modules[0].id);
    setQ("");
    setDebouncedQ("");
  };

  const active = useMemo(
    () => activeCat.modules.find((m) => m.id === activeModuleId) ?? activeCat.modules[0],
    [activeCat, activeModuleId]
  );

  const filteredCatModules = useMemo(() => {
    if (!debouncedQ.trim()) return activeCat.modules;
    const needle = debouncedQ.toLowerCase();
    return activeCat.modules.filter((m) => m.label.toLowerCase().includes(needle) || m.description.toLowerCase().includes(needle));
  }, [activeCat, debouncedQ]);

  return (
    <section className="py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Platform modules"
          title={<>One platform, every module.</>}
          description="Browse by category — like using the ERP before you book a demo. Select a category, then a module to preview its live screenshot."
        />

        <div className="mt-3 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search modules (e.g. Fees, Attendance, Hostel)"
              aria-label="Search modules"
              className="w-full rounded-full border border-brand-neutral-200 bg-white px-5 py-2.5 pr-10 text-sm placeholder:text-brand-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/20"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-neutral-400 text-sm">⌕</span>
          </div>
        </div>

        <div className="mt-4">
          <Tabs
            variant="pills"
            defaultIndex={categories.findIndex((c) => c.id === activeCategory)}
            onChange={(idx) => handleCategory(categories[idx].id)}
            items={categories.map((cat) => ({
              label: `${cat.label} (${cat.modules.length})`,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                  <div className="md:col-span-4">
                    <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin pt-1">
                      {filteredCatModules.length === 0 && <p className="text-sm text-brand-neutral-500 px-2 py-4">No modules match “{debouncedQ}”.</p>}
                      {filteredCatModules.map((m) => {
                        const LucideIcon = m.icon;
                        const isActive = cat.id === activeCategory && m.id === activeModuleId;
                        return (
                          <button
                            key={m.id}
                            onClick={() => {
                              if (cat.id !== activeCategory) handleCategory(cat.id);
                              setActiveModuleId(m.id);
                            }}
                            aria-pressed={isActive}
                            className={`flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-[color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${
                              isActive
                                ? 'bg-brand-neutral-900 text-white border-brand-neutral-900 shadow-sm scale-[1.01]'
                                : 'bg-white border-brand-neutral-200 hover:bg-brand-neutral-50 hover:shadow-sm hover:-translate-x-1'
                            }`}
                          >
                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${isActive ? 'bg-brand-neutral-800 text-white border-brand-neutral-700' : 'bg-brand-neutral-50 text-brand-neutral-700 border-brand-neutral-200'}`}>
                              <Icon size="sm"><LucideIcon className="h-4 w-4" aria-hidden="true" /></Icon>
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-brand-neutral-900">{m.label}</span>
                              <span className="block text-xs text-brand-neutral-500">{m.description}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:col-span-8 space-y-2 md:sticky md:top-16 md:self-start">
                    <BrowserMockup src={active.imageSrc} label={active.label} alt={`${active.label} screenshot`} kpi={active.stat} annotation={active.annotation} />
                    <div className="rounded-2xl border border-brand-neutral-200 bg-white p-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon><active.icon className="h-5 w-5" aria-hidden="true" /></Icon>
                            <h3 className="text-base font-semibold text-brand-neutral-900">{active.label}</h3>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {active.capabilities.map((item) => (
                              <li key={item} className="flex items-start gap-2.5">
                                <Icon size="sm"><CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" /></Icon>
                                <span className="text-sm leading-6 text-brand-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {active.workflow && (
<div className="mt-3">
                              <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Workflow</p>
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {active.workflow.map((step, i) => (
                                  <span key={step} className="inline-flex items-center gap-1.5">
                                    <span className="rounded-full border border-brand-neutral-200 bg-brand-neutral-50 px-2 py-0.75 text-xs font-medium text-brand-neutral-700">{step}</span>
                                    {i < (active.workflow!.length - 1) && <span className="text-brand-neutral-300" aria-hidden>→</span>}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {active.roles && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {active.roles.map((r) => (
                                <span key={r} className="rounded-full bg-brand-yellow-light border border-brand-yellow/20 px-2.5 py-1 text-xs font-semibold text-brand-neutral-700">{r}</span>
                              ))}
                            </div>
                          )}
                          {active.related && (
                            <div className="mt-2">
                              <p className="text-xs font-semibold text-brand-neutral-500">Connected modules: <span className="font-normal text-brand-neutral-700">{active.related.join(" • ")}</span></p>
                            </div>
                          )}
                          <div className="mt-3 flex items-center gap-2 rounded-lg bg-brand-neutral-50 px-4 py-2.5 border border-brand-neutral-200">
                            <span className="h-2 w-2 rounded-full bg-brand-yellow" aria-hidden="true" />
                            <p className="text-xs font-semibold text-brand-neutral-700">{active.stat}</p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="flex justify-end">
                      <a href="#showcase" className="text-sm font-semibold text-brand-neutral-900 underline decoration-brand-neutral-300 underline-offset-4 hover:decoration-brand-yellow">View in product walkthrough →</a>
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
};