import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const faqs = [
  {
    question: 'How long does it take to go live with FeeCollect?',
    answer: 'Most institutions go live within 2–4 weeks, depending on data complexity. We handle the entire migration process — including student records, fee histories, and academic data — with zero downtime to your current operations.',
  },
  {
    question: 'Can we migrate data from our existing ERP?',
    answer: 'Yes. We support migration from all major school ERPs and legacy systems. Our data engineering team maps your existing schema, validates data integrity, and performs a clean migration into FeeCollect. Historical records are fully preserved.',
  },
  {
    question: 'How does pricing work across editions?',
    answer: 'FeeCollect Lite is priced per institution with a flat annual fee. Education ERP and Enterprise Campus Suite use a per-student licensing model that scales with enrollment. All editions include unlimited admin users and dedicated onboarding support.',
  },
  {
    question: 'Is the platform secure and compliant?',
    answer: 'FeeCollect is SOC2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256 encryption. We conduct regular third-party penetration tests and maintain strict role-based access controls at every level.',
  },
  {
    question: 'Can FeeCollect handle multi-campus operations?',
    answer: 'The Enterprise Campus Suite is purpose-built for multi-campus governance. Manage admissions, academics, fee collection, hostel, and transport across all locations from a single dashboard with campus-level and group-level reporting.',
  },
  {
    question: 'Does FeeCollect integrate with payment gateways?',
    answer: 'Yes. FeeCollect integrates with all major payment gateways including Stripe, Razorpay, PayStack, and bank transfer APIs. Parents can pay via UPI, cards, net banking, or auto-debit — all reconciled automatically.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="faq" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mx-auto space-y-3 mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-neutral-900 tracking-tight">
            Answers to{' '}
            <span className="text-gradient-gold">common questions.</span>
          </h2>
          <p className="text-sm text-brand-neutral-600 leading-relaxed">
            Everything you need to know about deploying FeeCollect at your institution.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-xl shadow-sm transition-all duration-200 ${
                  isOpen ? 'border-amber-400' : 'border-gray-200 hover:border-amber-400'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center gap-4 p-6 text-left cursor-pointer"
                >
                  <span className="font-semibold text-brand-neutral-900 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-brand-neutral-600 text-sm leading-relaxed mt-3 pt-3 border-t border-brand-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};