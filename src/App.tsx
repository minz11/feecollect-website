import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemStatement } from './components/sections/ProblemStatement';
import { ProductEditions } from './components/sections/ProductEditions';
import { PlatformModules } from './components/sections/PlatformModules';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { WhyFeeCollect } from './components/sections/WhyFeeCollect';
import { Implementation } from './components/sections/Implementation';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { SectionDivider } from './components/SectionDivider';

/**
 * FeeCollect.io Marketing Assembly Page
 * Full-viewport section flow: Hero → Transformation → Pricing → Modules → Showcase → Why FeeCollect → Journey → FAQ → Contact → Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-neutral-900 font-sans antialiased selection:bg-brand-yellow/20 selection:text-brand-neutral-900">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <section id="hero" className="bg-hero">
          <Hero />
          <SectionDivider />
        </section>

        {/* 3. Problem / Solution */}
        <section id="transformation" className="bg-transformation">
          <ProblemStatement />
          <SectionDivider />
        </section>

        {/* 4. Pricing */}
        <section id="pricing" className="bg-pricing">
          <ProductEditions />
          <SectionDivider />
        </section>

        {/* 5. Modules */}
        <section id="modules" className="bg-core-modules">
          <PlatformModules />
          <SectionDivider />
        </section>

        {/* 6. Product Showcase */}
        <section id="showcase" className="bg-platform-action">
          <ProductShowcase />
          <SectionDivider />
        </section>

        {/* 7. Why FeeCollect */}
        <section id="why-feecollect" className="bg-faq">
          <WhyFeeCollect />
          <SectionDivider />
        </section>

        {/* 8. Implementation Journey */}
        <section id="journey" className="bg-implementation">
          <Implementation />
          <SectionDivider />
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="bg-faq">
          <FAQ />
          <SectionDivider />
        </section>

        {/* 10. Contact Us */}
        <section id="contact" className="bg-contact">
          <Contact />
        </section>
      </main>

      {/* 10. Rich ambient gradient aura below Contact */}
      <div aria-hidden className="relative h-52 w-full overflow-hidden bg-white">
        <div className="absolute -bottom-16 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(50%_80%_at_50%_100%,rgba(245,158,11,0.30),rgba(251,191,36,0.14)_45%,rgba(253,230,138,0.06)_65%,transparent_80%)] blur-2xl" />
        <div className="absolute -bottom-10 right-[8%] h-40 w-72 bg-[radial-gradient(circle_at_center,rgba(255,197,74,0.28),transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-10 left-[8%] h-40 w-72 bg-[radial-gradient(circle_at_center,rgba(253,230,138,0.25),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
      </div>

      {/* 11. Footer */}
      <footer className="bg-footer">
        <Footer />
      </footer>
    </div>
  );
}
