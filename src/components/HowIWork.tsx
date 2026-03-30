import React from 'react';
import { AlertTriangle, Search, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ElementType> = {
  alert: AlertTriangle,
  search: Search,
  check: CheckCircle2,
  shield: ShieldCheck,
};

const HowIWork: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="methodology" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-4 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.methodology.title}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.methodology.subtitle}
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.methodology.steps.map((step: any, index: number) => {
            const stepAnimation = useScrollAnimation();
            const Icon = iconMap[step.icon] || AlertTriangle;

            return (
              <div
                key={index}
                ref={stepAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-6 card-hover scroll-scale ${stepAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg gradient-primary">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
