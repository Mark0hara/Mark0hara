import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import HowIWork from '@/components/HowIWork';
import Certifications from '@/components/Certifications';
import Languages from '@/components/Languages';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { isTransitioning } = useLanguage();

  return (
    <div className="min-h-screen relative bg-background text-foreground">
      <div className="fixed inset-0 background-pattern pointer-events-none" aria-hidden="true" />
      <ScrollProgress />

      <div
        className="relative z-10 transition-opacity duration-150 ease-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Portfolio />
          <Experience />
          <HowIWork />
          <Certifications />
          <Languages />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
