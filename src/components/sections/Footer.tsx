import type { FC } from 'react';
import {
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';

const productLinks = [
  'Features',
  'Modules',
  'Integrations',
  'Pricing',
  'Changelog',
];

const solutionLinks = [
  'K-12 Schools',
  'Higher Ed',
  'Vocational Institutes',
  'Multi-Campus Systems',
];

const companyLinks = [
  'About',
  'Careers',
  'Privacy Policy',
  'Terms of Service',
  'Security Portal',
];

export const Footer: FC = () => {
  return (
    <footer className="relative overflow-hidden bg-white py-16 text-sm text-slate-800">
{/* Pattern 1 Geometric Background Watermark at reduced opacity */}
       <div className="pointer-events-none absolute inset-0 pattern-geometric-footer opacity-5" />
       <div className="pointer-events-none absolute inset-0 bg-white/98" />
       <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
       <div className="mx-auto max-w-7xl px-6 relative z-10">
         <div className="border-t border-amber-500/20 pt-12">
           <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
             <div className="space-y-5">
               <div className="flex items-center gap-3">
                 <img src="/logo.png" alt="FeeCollect.io logo" className="h-10 w-10 object-contain" />
                 <div>
                   <p className="font-bold text-brand-neutral-900">FeeCollect.io</p>
                   <p className="text-[11px] uppercase tracking-[0.24em] font-semibold text-brand-neutral-600">One Platform. Every Institution.</p>
                 </div>
               </div>

               <p className="max-w-sm leading-relaxed text-brand-neutral-700 font-medium">
                 A connected operating system for educational institutions, unifying admissions, finance, academics, and campus operations in one secure platform.
               </p>

               <div className="flex items-center gap-3 text-slate-700">
                 <a href="https://www.linkedin.com" aria-label="LinkedIn" className="rounded-full border border-brand-yellow/30 bg-white/90 p-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-yellow/50 hover:text-brand-neutral-900 hover:shadow-md">
                   <Linkedin className="h-4 w-4" />
                 </a>
                 <a href="https://www.instagram.com" aria-label="Instagram" className="rounded-full border border-brand-yellow/30 bg-white/90 p-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-yellow/50 hover:text-brand-neutral-900 hover:shadow-md">
                   <Instagram className="h-4 w-4" />
                 </a>
                 <a href="https://www.facebook.com" aria-label="Facebook" className="rounded-full border border-brand-yellow/30 bg-white/90 p-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-yellow/50 hover:text-brand-neutral-900 hover:shadow-md">
                   <Facebook className="h-4 w-4" />
                 </a>
                 <a href="mailto:hello@feecollect.io" aria-label="Email us" className="rounded-full border border-brand-yellow/30 bg-white/90 p-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-yellow/50 hover:text-brand-neutral-900 hover:shadow-md">
                   <Mail className="h-4 w-4" />
                 </a>
               </div>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Product</p>
               <ul className="space-y-3">
                 {productLinks.map((link) => (
                   <li key={link}>
                     <a href="#" className="font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Solutions</p>
               <ul className="space-y-3">
                 {solutionLinks.map((link) => (
                   <li key={link}>
                     <a href="#" className="font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="space-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-neutral-700">Company & Security</p>
               <ul className="space-y-3">
                 {companyLinks.map((link) => (
                   <li key={link}>
                     <a href="#" className="font-medium text-brand-neutral-700 transition-colors duration-200 hover:text-brand-neutral-900 hover:underline">
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="mt-12 flex flex-col gap-4 border-t border-amber-500/20 pt-5 text-slate-700 font-medium md:flex-row md:items-center md:justify-between">
             <div className="flex flex-wrap items-center gap-3 text-sm">
               <span>© {new Date().getFullYear()} FeeCollect.io. All rights reserved.</span>
               <span className="hidden h-1 w-1 rounded-full bg-slate-400 md:block" />
               <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-2.5 py-1 font-semibold text-emerald-900 shadow-sm">
                 <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                 All Systems Operational
               </span>
             </div>

             <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <Globe2 className="h-4 w-4" />
               <span>English (US)</span>
             </div>
           </div>
         </div>
       </div>
     </footer>
  );
};