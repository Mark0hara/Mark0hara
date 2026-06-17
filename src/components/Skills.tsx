import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Cloud, Server, Network, Activity, Terminal, Wrench, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  server: Server,
  network: Network,
  activity: Activity,
  terminal: Terminal,
  book: Wrench,
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {t.skills.groups.map((group) => {
            const Icon = ICONS[group.icon] || Cloud;
            return (
              <article
                key={group.key}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: group.color }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                    style={{ backgroundColor: `${group.color}1a`, color: group.color }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {group.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="px-2.5 py-0.5 text-[11px] font-medium bg-muted/40 border-border text-foreground rounded-md"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;