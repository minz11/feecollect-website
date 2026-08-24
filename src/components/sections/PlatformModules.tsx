import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Building2,
  Bus,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Layers,
  ScanLine,
  Users,
  Wallet,
} from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const tabs = [
  {
    id: 'admissions',
    label: 'Admissions',
    icon: GraduationCap,
    description: 'Inquiries to enrollment in one connected flow.',
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
    capabilities: [
      'Course & syllabus planning',
      'Timetable & room scheduling',
      'Academic calendars & credit mapping',
      'Faculty workload management',
    ],
    stat: '1,280 courses managed across 12 departments',
  },
  {
    id: 'fee-finance',
    label: 'Fee & Finance',
    icon: Wallet,
    description: 'Collections, invoicing, and reconciliation.',
    capabilities: [
      'Online fee collection with auto-reconciliation',
      'Invoices, receipts & payment reminders',
      'Scholarships, waivers & installment plans',
      'Audit-ready reports and compliance exports',
    ],
    stat: '$1.24M collected this period • 99.98% reconciled',
  },
  {
    id: 'campus-operations',
    label: 'Campus Operations',
    icon: Building2,
    description: 'Facilities, gate access & services.',
    capabilities: [
      'Facility booking and maintenance workflows',
      'Gate access & visitor management',
      'Cafeteria & service transactions',
      'Asset and inventory management',
    ],
    stat: '78 facilities booked • 99% gate accuracy',
  },
  {
    id: 'examinations',
    label: 'Examinations & Grading',
    icon: ClipboardCheck,
    description: 'Exams, grading, results & transcripts.',
    capabilities: [
      'Exam scheduling & seating plans',
      'Question paper & invigilation management',
      'Grading, report cards & transcripts',
      'Results publishing and analytics',
    ],
    stat: '128 exams scheduled • 3.41 average GPA',
  },
  {
    id: 'attendance-rfid',
    label: 'Attendance & RFID',
    icon: ScanLine,
    description: 'Biometric & RFID attendance tracking.',
    capabilities: [
      'Biometric & RFID check-in capture',
      'Live attendance dashboards',
      'Auto-notifications to parents',
      'Late & leave policy enforcement',
    ],
    stat: '96.2% attendance • 4,280 students tracked',
  },
  {
    id: 'transport-hostel',
    label: 'Transport & Hostel',
    icon: Bus,
    description: 'Routes, GPS, allotment & occupancy.',
    capabilities: [
      'Hostel allotment & occupancy tracking',
      'Transport routes, stops & live GPS view',
      'Driver & vehicle management',
      'Hostel fees & mess billing',
    ],
    stat: '92% hostel occupancy • 48 active routes',
  },
  {
    id: 'hr-payroll',
    label: 'HR & Payroll',
    icon: Users,
    description: 'Staff, payroll & leave management.',
    capabilities: [
      'Staff profiles & document management',
      'Payroll runs & payslip generation',
      'Leave, attendance & shifts for staff',
      'Appraisal & role permissions',
    ],
    stat: '340 staff onboarded • payroll in 1 day',
  },
];

export const PlatformModules = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="modules" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="modules" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mx-auto space-y-3 mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            CORE MODULES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-neutral-900 tracking-tight">
            One platform,{' '}
            <span className="text-gradient-gold">every module.</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every campus operation on a single, connected system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: vertical pill navigation */}
          <div className="md:col-span-4">
            <div className="relative">
              <div className="max-h-[380px] overflow-y-auto pr-2 space-y-2 overscroll-contain scrollbar-thin scrollbar-thumb-amber-200">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={isActive}
                      className={`group flex w-full items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'border-l-4 border-amber-500 bg-amber-50/60 border-gray-200'
                          : 'border border-gray-200 bg-white text-slate-600 hover:bg-amber-50/40 hover:border-amber-400/60 hover:text-slate-800'
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-[0_8px_16px_-6px_rgba(245,158,11,0.7)]'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-sm font-semibold ${isActive ? 'text-slate-900' : 'text-slate-800'}`}>
                          {tab.label}
                        </span>
                        <span className="block text-xs leading-5 text-slate-500">{tab.description}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>

          {/* Right: single preview card */}
          <div className="md:col-span-8">
            <div className="bg-white border border-brand-neutral-200 rounded-2xl p-8 shadow-soft max-h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-[0_10px_20px_-8px_rgba(245,158,11,0.8)]">
                      <active.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="section-badge text-slate-400">Module preview</p>
                      <h3 className="mt-1 text-2xl font-bold text-slate-900">{active.label}</h3>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {active.capabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                        <span className="text-sm leading-6 text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center gap-2.5 rounded-xl bg-amber-50/70 px-5 py-3.5 ring-1 ring-amber-500/20">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500 animate-pulse" />
                    <p className="text-sm font-semibold text-slate-800">{active.stat}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};