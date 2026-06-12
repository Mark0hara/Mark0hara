import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import HowIWork from '@/components/HowIWork';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { isTransitioning } = useLanguage();

  return (
    <div className="min-h-screen relative bg-background text-foreground">
      {/* Static, very subtle background accent */}
      <div className="fixed inset-0 background-pattern pointer-events-none" />

      <ScrollProgress />

      <div
        className="relative z-10 transition-opacity duration-150 ease-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <HowIWork />
          <Certifications />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
