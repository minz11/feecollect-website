import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const clusters = [
  {
    title: 'Academic',
    items: ['Admissions', 'Academics', 'Examinations'],
    sub: 'Inquiry → Enrollment • Courses • Grading',
  },
  {
    title: 'Finance',
    items: ['Fees & Invoices', 'Payroll', 'Reports'],
    sub: 'Collections • Reconciliation • Compliance',
  },
  {
    title: 'Campus Operations',
    items: ['Hostel', 'Transport', 'Library', 'Gate Security'],
    sub: 'Allotment • Routes • Circulation • Access',
  },
];

const roles = ['Admin', 'Teacher', 'Parent', 'Student'];
const campuses = ['School', 'College', 'University', 'Multi-campus'];
const integrations = ['WhatsApp', 'SMS', 'Payment Gateway', 'GPS / Biometric'];

type Line = { x1: number; y1: number; x2: number; y2: number };

export const PlatformOverview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const clusterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const campusRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [lowerLines, setLowerLines] = useState<Line[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !coreRef.current || !campusRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const coreRect = coreRef.current.getBoundingClientRect();
      const coreX = coreRect.left - containerRect.left + coreRect.width / 2;
      const coreY = coreRect.bottom - containerRect.top;
      const campusRect = campusRef.current.getBoundingClientRect();
      const campusY = campusRect.top - containerRect.top + 1;
      const newLines: Line[] = [];
      const newLower: Line[] = [];
      clusterRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = r.left - containerRect.left + r.width / 2;
        const topY = r.top - containerRect.top;
        const bottomY = r.bottom - containerRect.top;
        newLines.push({ x1: coreX, y1: coreY, x2: x, y2: topY });
        newLower.push({ x1: x, y1: bottomY + 1, x2: x, y2: campusY });
      });
      setLines(newLines);
      setLowerLines(newLower);
      setSize({ w: containerRect.width, h: containerRect.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section className="py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Platform overview"
          title={<>One connected platform. <span className="text-brand-neutral-900">Every department.</span></>}
          description="Instead of managing separate software for admissions, academics, finance, examinations, HR, transport, hostel and communication — manage everything from a single integrated ERP."
        />

        <div className="mt-6">
          <div ref={containerRef} className="relative mx-auto max-w-5xl rounded-2xl border border-brand-neutral-200 bg-white p-4 md:p-6 shadow-sm">
            {/* Measured diagonal fan + lower stems to campus */}
            {size.w > 0 && lines.length === 3 && (
              <svg className="pointer-events-none absolute inset-0 hidden lg:block" width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} aria-hidden>
                {lines.map((l, i) => (
                  <g key={`fan-${i}`}>
                    <motion.line
                      x1={l.x1}
                      y1={l.y1}
                      x2={l.x2}
                      y2={l.y2}
                      stroke="#CBD5E1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                    />
                    <circle cx={l.x2} cy={l.y2} r="3" fill="#FFAB00" />
                  </g>
                ))}
                {lowerLines.map((l, i) => (
                  <g key={`lower-${i}`}>
                    <motion.line
                      x1={l.x1}
                      y1={l.y1}
                      x2={l.x2}
                      y2={l.y2}
                      stroke="#CBD5E1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                    />
                    <motion.circle
                      cx={l.x2}
                      cy={l.y2}
                      r="3"
                      fill="#FFAB00"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.45 + i * 0.03 }}
                    />
                  </g>
                ))}
              </svg>
            )}

            {/* Roles ring */}
            <div className="flex flex-wrap justify-center gap-2">
              {roles.map((r) => (
                <span key={r} className="rounded-full border border-brand-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-neutral-700 shadow-sm">
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-brand-neutral-500">User roles surrounding the platform</p>

            {/* Core */}
            <div className="mt-6 flex justify-center">
              <div ref={coreRef} className="rounded-xl border border-brand-neutral-900 bg-brand-neutral-900 px-8 py-4 text-center shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">FeeCollect</p>
                <p className="text-base font-bold text-white">Unified Platform</p>
                <p className="mt-1 text-xs text-brand-neutral-400">Single data model • Real-time sync</p>
              </div>
            </div>

            {/* Clusters */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {clusters.map((c, idx) => (
                <div
                  key={c.title}
                  ref={(el) => {
                    clusterRefs.current[idx] = el;
                  }}
                  className="min-h-[96px] rounded-xl border border-brand-neutral-200 bg-brand-neutral-50 p-3"
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-neutral-700">{c.title}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.items.map((it) => (
                      <span key={it} className="rounded-full border border-brand-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-brand-neutral-700">
                        {it}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-brand-neutral-500">{c.sub}</p>
                </div>
              ))}
            </div>

            {/* Campus layer */}
            <div ref={campusRef} className="mt-4 rounded-xl border border-brand-yellow/20 bg-brand-yellow-light px-3 py-2">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-neutral-700">Campus layer</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {campuses.map((cp) => (
                  <span key={cp} className="rounded-full bg-white border border-brand-neutral-200 px-3 py-1 text-xs font-medium text-brand-neutral-700">
                    {cp}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations entering */}
            <div className="mt-4">
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-brand-neutral-500">Integrations entering from outside</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {integrations.map((it) => (
                  <span key={it} className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-neutral-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden />
                    {it}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-xs font-medium text-brand-neutral-500">
              Everything connects back to one platform • No sync jobs • No data drift
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button variant="primary" className="rounded-xl px-6 py-3" onClick={() => document.querySelector('#modules')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore all modules
          </Button>
        </div>
      </div>
    </section>
  );
};