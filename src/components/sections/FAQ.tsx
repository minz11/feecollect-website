import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion } from '../ui/Accordion';
import { Tabs } from '../ui/Tabs';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    icon: null,
    faqs: [
      {
        question: 'What types of institutions does FeeCollect support?',
        answer: 'FeeCollect serves K–12 schools, degree colleges, universities, and multi-campus education groups. Each institution type gets a tailored module set — admissions, academics, finance, hostel, transport, HR, and communication — all on one connected data model.',
      },
      {
        question: 'How does FeeCollect differ from traditional school ERPs?',
        answer: 'Traditional ERPs are fragmented toolkits. FeeCollect is a connected institutional operating platform — single write, real-time sync, unified data model across every module. No sync jobs, no data drift, no ETL pipelines. Built for multi-campus from day one.',
      },
      {
        question: 'Can we try FeeCollect before committing?',
        answer: 'Yes. Every edition includes a 14-day free trial with full platform access. No credit card required. Dedicated onboarding support is included during trial.',
      },
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    icon: null,
    faqs: [
      {
        question: 'How does multi-campus governance work?',
        answer: 'The Enterprise Campus Suite provides shared policies with campus-level overrides. Manage admissions, academics, fee collection, hostel, and transport across all locations from a single dashboard with consolidated group-level reporting.',
      },
      {
        question: 'Is FeeCollect mobile-first for stakeholders?',
        answer: 'Dedicated Parent, Teacher, and Student apps are included. They share the same live data model — attendance, fees, homework, and results update in real time across web and mobile. Apps work offline and sync when connectivity returns.',
      },
      {
        question: 'What modules are included in each edition?',
        answer: 'Lite: Fee collection, student profiles, basic reporting. Education ERP: All Lite + Admissions, Academic OS, Exams, HR & Payroll, Communication, Campus Operations, Transport & Hostel. Enterprise: All ERP + Multi-campus governance, Library, Advanced Analytics, Custom API, SSO, Dedicated success manager.',
      },
      {
        question: 'Can modules be customized per campus?',
        answer: 'Yes. Shared policies with campus-level overrides let groups standardize finance and admissions while allowing local variations for transport, hostel, and timetables.',
      },
    ],
  },
  {
    id: 'implementation',
    label: 'Implementation',
    icon: null,
    faqs: [
      {
        question: 'How long does it take to go live with FeeCollect?',
        answer: 'Most institutions go live within 2–4 weeks, depending on data complexity. We handle the entire migration process — including student records, fee histories, and academic data — with zero downtime to your current operations.',
      },
      {
        question: 'Can we migrate data from our existing ERP?',
        answer: 'Yes. We support migration from all major school ERPs and legacy systems. Our data engineering team maps your existing schema, validates data integrity, and performs a clean migration into FeeCollect. Historical records are fully preserved.',
      },
      {
        question: 'What does the implementation journey look like?',
        answer: 'Discovery (Week 1) → Configuration (Week 2) → Migration (Week 2–3) → Training (Week 3) → Go-Live (Week 4) → Ongoing Support. Each phase includes dedicated support, validation checks, and confidence-building handover.',
      },
      {
        question: 'Is training available in regional languages?',
        answer: 'Yes. Training and help docs in English, Hindi, and major regional languages. On-site and remote sessions with recorded playbooks for new staff.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: null,
    faqs: [
      {
        question: 'How does pricing work across editions?',
        answer: 'FeeCollect comes in three editions that match your growth stage: FeeCollect Lite for small campuses getting started with digital payments (online collection, invoicing, student profiles, basic reporting); Education ERP for complete campus management (everything in Lite plus admissions, Academic OS, HR & payroll, communication, and campus operations); and Enterprise Campus Suite for multi-campus groups (everything in ERP plus multi-campus governance, hostel, library & inventory, advanced analytics, custom API & SSO, and a dedicated account manager). All editions run on the same connected data model so you can upgrade without migration, and every plan includes a 14-day free trial with no credit card required plus dedicated onboarding support.',
      },
      {
        question: 'Are there any hidden costs or setup fees?',
        answer: 'No hidden costs. Setup, migration, onboarding, and training are included in the annual license. Optional services (custom API development, dedicated infrastructure) are quoted separately.',
      },
      {
        question: 'Can we upgrade or downgrade editions mid-cycle?',
        answer: 'Upgrades take effect immediately with prorated billing. Downgrades apply at the next renewal cycle. No data migration required — all editions share the same platform.',
      },
      {
        question: 'Is there a discount for multi-year commitments?',
        answer: 'Yes. Multi-year agreements (2–3 years) include volume discounts. Contact sales for a custom proposal.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: null,
    faqs: [
      {
        question: 'What support is included after go-live?',
        answer: '24×7 support, quarterly health checks, and free updates. A dedicated success manager stays with you through the first academic cycle. Enterprise tier adds SLA-backed response times.',
      },
      {
        question: 'How are updates and new features rolled out?',
        answer: 'Zero-downtime rolling updates with advance notice. New modules are opt-in per campus, so one campus can trial a feature without affecting the group.',
      },
      {
        question: 'Do you offer phone and WhatsApp support?',
        answer: 'Yes. Support channels include email, phone, and WhatsApp Business (Mon–Sat, 9am–9pm IST). Emergency escalation path for critical issues.',
      },
      {
        question: 'What is your uptime guarantee?',
        answer: '99.9% uptime SLA with multi-region redundancy. Automatic failover, real-time replication, and zero-downtime deployments keep your campus running without interruption.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: null,
    faqs: [
      {
        question: 'Is the platform secure and compliant?',
        answer: 'FeeCollect is SOC2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256 encryption. We conduct regular third-party penetration tests and maintain strict role-based access controls.',
      },
      {
        question: 'Does FeeCollect integrate with payment gateways?',
        answer: 'Yes. Integrations with Stripe, Razorpay, PayStack, and bank transfer APIs. Parents can pay via UPI, cards, net banking, or auto-debit — all reconciled automatically.',
      },
      {
        question: 'Can it integrate with our biometric and GPS systems?',
        answer: 'Yes. Biometric, RFID, and GPS providers integrate via standard APIs. Attendance and transport tracking flow directly into the ERP.',
      },
      {
        question: 'Do we retain ownership of our data?',
        answer: 'Absolutely. Your data remains yours. Export full dumps anytime in CSV/Excel, and request complete erasure on exit as per our DPA. No vendor lock-in.',
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          badge="FAQ"
          title={<>Answers to common questions.</>}
          description="Everything you need to know about deploying FeeCollect at your institution."
        />

        <Tabs
          variant="pills"
          items={faqCategories.map((cat) => ({
            label: `${cat.label} (${cat.faqs.length})`,
            content: (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="mt-6 space-y-3"
              >
                {cat.faqs.map((faq, idx) => (
                  <Accordion key={faq.question} title={faq.question} panelId={`faq-panel-${cat.id}-${idx}`}>
                    <p className="px-5 pb-5 text-base leading-relaxed text-brand-neutral-600 border-t border-brand-neutral-100 pt-3 max-w-3xl">
                      {faq.answer}
                    </p>
                  </Accordion>
                ))}
              </motion.div>
            ),
          }))}
        />
      </div>
    </section>
  );
};