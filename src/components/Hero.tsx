import React from 'react';
import { MapPin, Mail, Linkedin, Github, FileDown, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const TECH_CHIPS = ['AWS', 'Zabbix', 'Python', 'Networking', 'IT Support', 'Cloud Infrastructure'];

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {(t.hero as any).availability ?? 'Open to roles'}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-foreground animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            {t.hero.title}
          </h1>

          <h2
            className="text-base md:text-xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.subtitle}
          </h2>

          {/* Tech chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {TECH_CHIPS.map((chip) => (
              <Badge
                key={chip}
                variant="outline"
                className="px-3 py-1 text-xs font-medium bg-card border-border text-foreground hover:border-primary/50 transition-colors"
              >
                {chip}
              </Badge>
            ))}
          </div>

          {/* Bullets */}
          <div className="flex flex-col items-start max-w-2xl mx-auto gap-2 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.bullets?.map((bullet: string, index: number) => (
              <div key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground text-left">
                <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-base animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="gradient-primary arrow-hover"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.contactMe}
              <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-glow">
              <a href="https://github.com/Mark0hara" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-glow">
              <a href="https://linkedin.com/in/markoharasba580" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild className="hover-glow">
              <a href="/cv-marco-jara.pdf" target="_blank" rel="noopener noreferrer" download>
                <FileDown className="w-4 h-4 mr-2" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>

          {/* Contact line */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {t.hero.location}
            </span>
            <a
              href="mailto:marco.antonio.jc2000@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              marco.antonio.jc2000@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
