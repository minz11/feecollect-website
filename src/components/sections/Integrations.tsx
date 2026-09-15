import { MessageCircle, Mail, CreditCard, MapPin, Fingerprint, Megaphone } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const integrations = [
  { icon: MessageCircle, title: 'WhatsApp', desc: 'Fee reminders, attendance alerts and circulars via WhatsApp Business API.' },
  { icon: Mail, title: 'SMS Gateway', desc: 'Transactional SMS for OTPs, payment confirmations and bulk notifications.' },
  { icon: CreditCard, title: 'Payment Gateway', desc: 'Razorpay, Stripe, PayU and bank integrations with auto-reconciliation.' },
  { icon: MapPin, title: 'GPS Tracking', desc: 'Live transport tracking, route optimisation and geofenced attendance.' },
  { icon: Fingerprint, title: 'Biometric / RFID', desc: 'Attendance capture via biometric devices and RFID cards, synced real-time.' },
  { icon: Megaphone, title: 'Communication', desc: 'Email, push notifications and in-app messaging on one unified queue.' },
];

export const Integrations = () => {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section className="py-section-sm md:py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Integrations"
          title={<>Works with <span className="text-brand-neutral-900">your existing systems</span></>}
          description="FeeCollect connects to the tools you already use — no rip and replace. Payment, WhatsApp, SMS, GPS and biometrics on one live data model."
        />

        <div className="mt-4 grid gap-gap-md md:grid-cols-2 lg:grid-cols-3">
          {integrations.map(({ icon: LucideIcon, title, desc }, idx) => (
            <div
              ref={idx === 0 ? ref : undefined}
              className={cn('animate-fade-in-up', isInView ? 'in-view' : '')}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <Card variant="interactive" className="p-card-sm md:p-card-md h-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-brand-neutral-200 bg-brand-neutral-50">
                  <Icon><LucideIcon className="h-5 w-5" aria-hidden="true" /></Icon>
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-neutral-600">{desc}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50 p-4 md:p-5">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Ready for your infrastructure</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow-light px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">WhatsApp Business</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">SMS Gateway</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Payment Gateway</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">GPS Tracking</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Biometric Ready</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-neutral-700">Email Queue</span>
            </div>
            <Button variant="secondary" className="mt-3 rounded-xl px-6 py-3" onClick={() => document.querySelector('#modules')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore All Modules
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};