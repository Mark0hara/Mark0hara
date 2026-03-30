import React from 'react';
import { MapPin, Mail, Linkedin, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useParallax } from '@/hooks/useParallax';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { displayedText, isComplete } = useTypewriter({ 
    text: t.hero.subtitle, 
    speed: 80, 
    delay: 1000 
  });
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      
      {/* Enhanced animated background with parallax */}
      <div 
        className="absolute inset-0 gradient-hero animate-gradient" 
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-floating animate-radial-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-floating animate-magnetic" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 via-accent/8 to-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up opacity-0" style={{ animation: 'fade-up 0.8s ease-out 0.2s forwards' }}>
            <span className="text-gradient-shimmer">
              {t.hero.title}
            </span>
          </h1>
          
          <h2 className={`text-xl md:text-2xl text-foreground dark:text-cyan-100 mb-6 min-h-[2rem] ${!isComplete ? 'typewriter-cursor' : ''}`}>
            {displayedText}
          </h2>

          {/* Technical Bullets */}
          <div className="flex flex-col items-center gap-2 mb-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
            {t.hero.bullets?.map((bullet: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-foreground dark:text-gray-100 max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-up" style={{animationDelay: '0.5s'}}>
            {t.hero.description}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base animate-fade-up" style={{animationDelay: '0.6s'}}>
            <a href="#" className="flex items-center gap-2 text-foreground dark:text-white hover:text-primary transition-all duration-300 hover-lift magnetic-hover">
              <MapPin className="w-4 h-4" />
              {t.hero.location}
            </a>
            <a 
              href="https://linkedin.com/in/markoharasba580" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground dark:text-white hover:text-primary transition-all duration-300 hover-lift magnetic-hover"
            >
              <Linkedin className="w-4 h-4" />
              /in/Mark_O'Hara
            </a>
            <a href="mailto:marco.antonio.jc2000@gmail.com" className="flex items-center gap-2 text-foreground dark:text-white hover:text-primary transition-all duration-300 hover-lift magnetic-hover">
              <Mail className="w-4 h-4" />
              marco.antonio.jc2000@gmail.com
            </a>
          </div>

          {/* CTA */}
          <div className="flex justify-center animate-fade-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="gradient-primary hover-glow btn-shine ripple-effect arrow-hover group relative overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                {t.hero.contactMe}
                <ArrowRight className="w-4 h-4 ml-2 arrow-icon transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
