import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#transformation', label: 'Transformation' },
  { href: '#modules', label: 'Modules' },
  { href: '#pricing', label: 'Editions & Pricing' },
  { href: '#showcase', label: 'Platform in Action' },
  { href: '#journey', label: 'Go-Live Steps' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header aria-label="Main navigation" className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-brand-neutral-200/60 shadow-glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="FeeCollect Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium text-brand-neutral-700">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-neutral-900 transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="mailto:hello@feecollect.io" className="button-primary text-sm px-6 py-3 rounded-[1.05rem] gap-2 ring-1 ring-white/40 inline-flex items-center">
            Book Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className="lg:hidden p-2 text-brand-neutral-700 hover:text-brand-neutral-900"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-brand-neutral-200/60 bg-white/95 backdrop-blur-2xl px-6 py-5 space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-brand-neutral-700 hover:text-brand-neutral-900"
            >
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@feecollect.io" className="button-primary w-full text-sm py-3 rounded-xl inline-flex items-center justify-center">
            Book Demo
          </a>
        </motion.div>
      )}
    </header>
  );
};
