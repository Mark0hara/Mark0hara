import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Languages: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="languages" className="py-20" aria-labelledby="languages-title">
      <div className="container mx-auto px-4">
        <h2
          id="languages-title"
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.languages.title}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {Object.values(t.languages.items).map((language, index) => {
            const languageAnimation = useScrollAnimation();
            return (
              <div
                key={language}
                ref={languageAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-5 text-center card-hover scroll-scale ${languageAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <LanguagesIcon className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                <p className="text-foreground font-medium">{language}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Languages;
