import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SkillsCloud from './SkillsCloud';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.skills.title}
          </span>
        </h2>

        {/* 3D Interactive Skills Cloud */}
        <SkillsCloud />

        {/* Category Grid — grouped competencies for ATS and recruiters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-12 md:mt-16 max-w-6xl mx-auto">
          {t.skills.groups.map((group) => (
            <div
              key={group.key}
              className="glass-card p-5 rounded-lg card-hover border"
              style={{ borderColor: `${group.color}55` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="font-semibold text-foreground text-sm md:text-base uppercase tracking-wide">
                  {group.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">{group.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="px-2 py-0.5 text-[11px] font-medium bg-card border-border text-foreground"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;