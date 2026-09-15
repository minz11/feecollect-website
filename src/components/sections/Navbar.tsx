import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { cn } from '../../lib/utils';
import { useScrollY } from '../../hooks/useScrollY';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const links = [
  { id: 'modules', label: 'Modules' },
  { id: 'mobile', label: 'Mobile App' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrolled = useScrollY(20);
  const activeId = useScrollSpy({ sectionIds: links.map((l) => l.id) });

  // Escape key closes mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const menu = menuRef.current;
    const focusable = menu.querySelectorAll<HTMLElement>('button, a[href]');
    if (focusable.length === 0) return;
    focusable[0].focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    menu.addEventListener('keydown', handleTab);
    return () => menu.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      aria-label="Main navigation"
      className={cn(
        "sticky top-0 z-50 border-b border-brand-neutral-200 transition-[height,box-shadow,background-color] duration-200",
        scrolled
          ? "h-14 bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
          : "h-16 bg-white shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="FeeCollect Logo" className="h-12 w-auto" width={184} height={48} />
        </div>

        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium" role="navigation" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative group py-2 transition-colors ${
                  isActive
                    ? 'text-brand-neutral-900'
                    : 'text-brand-neutral-700 hover:text-brand-neutral-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-yellow transition-[width] duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button
            variant="primary"
            className="rounded-xl px-6 py-3"
            rightIcon={<Icon><ArrowRight className="h-4 w-4" /></Icon>}
            onClick={() => scrollToSection('contact')}
            aria-label="Book Demo"
          >
            Book Demo
          </Button>
        </div>

        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2.5 text-brand-neutral-700 hover:text-brand-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <Icon>{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Icon>
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-brand-neutral-200 bg-white px-6 py-5 space-y-3"
          style={{ overscrollBehavior: 'contain' }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-3 text-sm font-medium text-brand-neutral-700 hover:text-brand-neutral-900"
            >
              {link.label}
            </button>
          ))}
          <Button
            fullWidth
            variant="primary"
            className="rounded-xl py-3"
            onClick={() => { setIsOpen(false); scrollToSection('contact'); }}
          >
            Book Demo
          </Button>
        </div>
      )}
    </header>
  );
};