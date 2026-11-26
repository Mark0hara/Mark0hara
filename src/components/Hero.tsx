import React from 'react';
import { MapPin, Mail, Linkedin, Github, FileDown, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 relative"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {t.hero.availability}
          </div>

          <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.03s' }}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5 text-[11px] font-semibold text-primary">
              <Award className="w-3.5 h-3.5" aria-hidden="true" />
              AWS Certified Cloud Practitioner
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-foreground animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            {t.hero.title}
          </h1>

          <h2
            className="text-2xl md:text-3xl font-semibold text-primary mb-3 animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            {t.hero.role}
          </h2>

          <p
            className="text-base md:text-xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.subtitle}
          </p>

          <p
            className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-base animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild className="gradient-primary hover-glow">
              <a href="/CV-Marco-Jara.pdf" download>
                <FileDown className="w-4 h-4 mr-2" aria-hidden="true" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-glow">
              <a href="mailto:marco.antonio.jc2000@gmail.com">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                {t.hero.emailMe}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-glow">
              <a href="https://github.com/Mark0hara" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-glow">
              <a href="https://www.linkedin.com/in/markoharasba580/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex justify-center text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
              {t.hero.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
