import type { FC } from 'react';
import {
  Globe2,
  Mail,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

const productLinks = [
  { label: 'Platform Overview', href: '#platform-overview' },
  { label: 'Modules', href: '#modules' },
  { label: 'Mobile App', href: '#mobile' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Implementation', href: '#implementation' },
];

const solutionLinks = [
  { label: 'K-12 Schools', href: '#institution-types' },
  { label: 'Colleges & Higher Ed', href: '#institution-types' },
  { label: 'Universities', href: '#institution-types' },
  { label: 'Multi-Campus Systems', href: '#platform-overview' },
];

const companyLinks = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a Demo', href: '#contact' },
];

export const Footer: FC = () => {
  return (
    <footer className="relative overflow-hidden py-16 text-sm">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Ecosystem footer motif — reinforces connected platform */}
          <div className="mb-12 rounded-2xl border border-brand-neutral-200 bg-brand-neutral-50 p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-neutral-500">FeeCollect — One Connected Platform</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-medium text-brand-neutral-600">
              <span>Academic</span><span>•</span><span>Finance</span><span>•</span><span>Campus</span><span>•</span><span>Communication</span><span>•</span><span>HRMS</span><span>•</span><span>Mobile</span>
            </div>
            <p className="mt-2 text-xs text-brand-neutral-500">Schools • Colleges • Universities</p>
            <Button variant="primary" className="mt-4 rounded-xl px-6 py-3" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Book Demo</Button>
          </div>
          <div className="border-t border-brand-neutral-200 pt-12">
           <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
             <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <img src="/logo.svg" alt="FeeCollect.io" className="h-12 md:h-14 w-auto object-contain" width={214} height={56} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] font-semibold text-brand-neutral-600">One Platform. Every Institution.</p>
                  </div>
                </div>

               <p className="max-w-sm leading-relaxed text-brand-neutral-700 font-medium">
                 A connected operating system for educational institutions, unifying admissions, finance, academics, and campus operations in one secure platform.
               </p>

                <div className="flex items-center gap-3 text-brand-neutral-700">
                  <a href="mailto:hello@feecollect.io" aria-label="Email us" className="rounded-full border border-brand-neutral-200 bg-white p-2.5 transition-colors duration-200 hover:border-brand-yellow hover:text-brand-neutral-900">
                    <Icon size="sm"><Mail className="h-4 w-4" /></Icon>
                  </a>
                </div>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Product</p>
               <ul className="space-y-3">
                 {productLinks.map(({ label, href }) => (
                   <li key={label}>
                      <a href={href} className="block py-1.5 font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {label}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Solutions</p>
               <ul className="space-y-3">
                 {solutionLinks.map(({ label, href }) => (
                   <li key={label}>
                      <a href={href} className="block py-1.5 font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {label}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Company</p>
               <ul className="space-y-3">
                 {companyLinks.map(({ label, href }) => (
                   <li key={label}>
                      <a href={href} className="block py-1.5 font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {label}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-brand-neutral-200 pt-5 text-brand-neutral-700 font-medium md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span>&copy; {new Date().getFullYear()} FeeCollect.io. All rights reserved.</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-brand-neutral-700 font-medium">
                <Icon size="sm"><Globe2 className="h-4 w-4" /></Icon>
                <span>English (US)</span>
              </div>
           </div>
         </div>
       </div>
     </footer>
  );
};
