import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, CreditCard, Zap } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const tiers = [
  {
    name: 'Standard Edition',
    slug: 'standard',
    badge: 'Small Colleges',
    badgeClass: 'font-semibold text-amber-700 bg-amber-50 border-amber-200/60',
    pricing: {
      Monthly: '$499',
      Annual: '$3,990',
    },
    interval: {
      Monthly: '/mo',
      Annual: '/yr',
    },
    ctaLabel: 'Start Standard',
    ctaStyle: 'secondary',
    features: [
      'Core fee collection workflows',
      'Student profile management',
      'Automated invoicing & receipts',
      'Basic reporting dashboards',
    ],
  },
  {
    name: 'Enterprise Edition',
    slug: 'enterprise',
    featured: true,
    badge: 'Most Popular',
    badgeClass: 'font-bold text-amber-800 bg-amber-100 border-amber-300',
    pricing: {
      Monthly: '$899',
      Annual: '$7,190',
    },
    interval: {
      Monthly: '/mo',
      Annual: '/yr',
    },
    ctaLabel: 'Choose Enterprise',
    ctaStyle: 'primary',
    features: [
      'Priority support & onboarding',
      'Custom API access',
      'Advanced analytics suite',
      'Multi-department governance',
    ],
  },
  {
    name: 'Custom University OS',
    slug: 'custom',
    badge: 'Multi-Campus / Enterprise',
    badgeClass: 'font-semibold text-slate-700 bg-slate-100 border-slate-200',
    pricing: {
      Monthly: 'Custom Pricing',
      Annual: 'Contact Sales',
    },
    interval: {
      Monthly: '',
      Annual: '',
    },
    ctaLabel: 'Contact Sales',
    ctaStyle: 'dark',
    features: [
      'Dedicated account manager',
      'Custom SLA & deployment',
      'On-premise sync options',
      'Enterprise-grade security',
    ],
  },
];

export const ProductEditions = () => {
  const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Annual'>('Monthly');

  return (
    <section id="pricing" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="pricing" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm transition-all hover:bg-amber-100/80">
            <CreditCard className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] tracking-tight">
            Choose the edition built for{' '}
            <span className="text-gradient-gold">your institution.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 leading-7">
            Scale from a starter campus deployment to a full enterprise operating system without surprise fees. Pick the plan that matches your growth stage.
          </p>

          <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative w-full sm:w-56 rounded-full border border-amber-500/20 bg-white/80 p-1 shadow-[0_8px_24px_-8px_rgba(245,158,11,0.25)] backdrop-blur-xl">
              <motion.div
                className="absolute top-1 left-1 h-8 w-1/2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_4px_14px_-4px_rgba(245,158,11,0.7)]"
                animate={{ x: billingCycle === 'Annual' ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                aria-hidden
              />
              <div className="relative flex">
                {(['Monthly', 'Annual'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBillingCycle(option)}
                    className={`w-1/2 rounded-full py-2 text-sm font-semibold text-center transition-colors duration-200 ${billingCycle === option ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-xs font-bold uppercase tracking-widest text-emerald-900 ring-1 ring-emerald-400/30"
              animate={{ x: billingCycle === 'Annual' ? 6 : 0, scale: billingCycle === 'Annual' ? 1.02 : 1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              <Zap className="h-3.5 w-3.5" />
              Save 20%
            </motion.span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => {
            const isFeatured = tier.featured;
            return (
              <motion.div
                key={tier.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm relative transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 cursor-pointer"
              >
                {isFeatured && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,171,0,0.14),transparent_55%)]" />
                )}

                <div className="relative flex flex-1 flex-col">
                  <div>
                    <h3 className={`tracking-tight mb-1 ${isFeatured ? 'text-2xl font-black text-amber-600' : 'text-xl font-extrabold text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs ${tier.badgeClass}`}>
                      {tier.badge}
                    </span>
                  </div>

                  <div className="min-h-[110px] flex flex-col justify-center items-center text-center my-4 bg-slate-50/60 rounded-xl p-4 border border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{billingCycle} billing</p>
                    <div className="mt-2 flex items-end justify-center gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billingCycle + tier.slug}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className={`text-4xl sm:text-5xl font-bold tracking-tight ${isFeatured ? 'text-gradient-gold' : 'text-slate-900'}`}
                        >
                          {tier.pricing[billingCycle]}
                        </motion.span>
                      </AnimatePresence>
                      <span className="pb-1 text-sm font-medium text-slate-500">{tier.interval[billingCycle]}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mt-2">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className={`mt-1 flex h-9 w-9 items-center justify-center rounded-2xl ${
                          isFeatured ? 'bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-600 ring-1 ring-amber-400/20' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Check className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-6 text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 w-full">
                    <button
                      type="button"
                      className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${
                        tier.ctaStyle === 'primary'
                          ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-[length:200%_auto] text-slate-950 shadow-md shadow-amber-500/25 transition-all duration-300 hover:bg-right hover:shadow-[0_14px_36px_-10px_rgba(245,158,11,0.75)]'
                          : tier.ctaStyle === 'dark'
                          ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.5)]'
                          : 'border border-slate-900/20 bg-white/80 text-slate-900 hover:border-amber-400/50 hover:bg-amber-50/60'
                      }`}
                    >
                      {tier.ctaLabel}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-500">
          All plans include 14-day free trial • No credit card required • Dedicated onboarding support
        </p>
      </div>
    </section>
  );
};