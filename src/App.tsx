import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { InstitutionTypes } from './components/sections/InstitutionTypes';
import { PlatformOverview } from './components/sections/PlatformOverview';
import { WhyFeeCollect } from './components/sections/WhyFeeCollect';
import { ProductEditions } from './components/sections/ProductEditions';
import { PlatformModules } from './components/sections/PlatformModules';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { MobileApps } from './components/sections/MobileApps';
import { Integrations } from './components/sections/Integrations';
import { Implementation } from './components/sections/Implementation';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { SectionDivider } from './components/SectionDivider';
import { SectionTransition } from './components/SectionTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/CookieConsent';

/**
 * FeeCollect.io Marketing Assembly Page
 * Blueprint locked IA: Hero → Institution Types → Platform Overview → Why FeeCollect → Product Editions → Modules → Showcase → Mobile → Integrations → Implementation → FAQ → Contact
 */
export default function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-brand-white text-brand-neutral-900 font-sans antialiased selection:bg-brand-yellow/20 selection:text-brand-neutral-900">
        <ScrollProgress />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] rounded-lg bg-brand-neutral-900 px-4 py-2 text-sm font-semibold text-white">
          Skip to main content
        </a>
        <Navbar />

      <main id="main-content">
        <section id="hero" className="bg-hero" aria-label="Hero">
          <Hero />
          <SectionTransition href="#institution-types" label="Who we serve" />
        </section>

        <section id="institution-types" className="bg-subtle relative py-section-sm md:py-section-md" aria-label="Institution types">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <InstitutionTypes />
          <SectionDivider />
        </section>

        <section id="platform-overview" className="bg-white relative py-section-md" aria-label="Platform overview">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-blueprint" />
          <PlatformOverview />
          <SectionTransition href="#why-feecollect" label="Why institutions choose FeeCollect" />
        </section>

        <section id="why-feecollect" className="bg-subtle relative py-section-sm md:py-section-md" aria-label="Why FeeCollect">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <WhyFeeCollect />
          <SectionDivider />
        </section>

        <section id="editions" className="bg-white relative py-section-sm md:py-section-md" aria-label="Product editions">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <ProductEditions />
          <SectionTransition href="#modules" label="Explore all modules" />
        </section>

        <section id="modules" className="bg-subtle relative py-section-md" aria-label="Platform modules">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <PlatformModules />
          <SectionTransition href="#showcase" label="See it in action" />
        </section>

        <section id="showcase" className="bg-accent relative overflow-hidden py-section-sm md:py-section-md" aria-label="Product walkthrough">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-accent" />
          <div className="relative">
          <ProductShowcase />
          </div>
          <SectionTransition href="#mobile" label="Mobile experience" />
        </section>

        <section id="mobile" className="bg-white relative py-section-sm md:py-section-md" aria-label="Mobile apps">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <MobileApps />
          <SectionDivider />
        </section>

        <section id="integrations" className="bg-warm relative py-section-sm md:py-section-md" aria-label="Integrations">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-yellow" />
          <Integrations />
          <SectionTransition href="#implementation" label="How it works" />
        </section>

        <section id="implementation" className="bg-subtle relative py-section-md" aria-label="Implementation">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-blueprint" />
          <Implementation />
          <SectionTransition href="#faq" label="Common questions" />
        </section>

        <section id="faq" className="bg-white relative py-section-sm md:py-section-md" aria-label="Frequently asked questions">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-navy" />
          <FAQ />
          <SectionTransition href="#contact" label="Book a demo" />
        </section>

        <section id="contact" className="bg-contact relative py-section-md" aria-label="Contact us">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-accent" />
          <Contact />
        </section>
      </main>

      <div aria-hidden className="relative h-16 w-full overflow-hidden bg-white">
        <div className="absolute inset-x-0 bottom-0 h-px bg-brand-neutral-200" />
      </div>

      <footer className="bg-footer relative" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-grid-blueprint" />
        <Footer />
      </footer>
      <CookieConsent />
      </div>
    </MotionConfig>
    </ErrorBoundary>
  );
}