import React from 'react';
import { Github, ArrowRight, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation();

  return (
    <section id="portfolios" className="py-20 px-4 relative overflow-hidden" aria-labelledby="projects-title">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            id="projects-title"
            ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl md:text-4xl font-bold mb-6 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="text-gradient-shimmer">{t.portfolios.title}</span>
          </h2>
          <p
            ref={subtitleAnimation.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-base md:text-lg text-muted-foreground leading-relaxed scroll-animate ${subtitleAnimation.isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            {t.portfolios.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {t.portfolios.projects.map((project, index) => {
            const projectAnimation = useScrollAnimation();
            const details = [
              { label: t.portfolios.problemLabel, value: project.problem },
              { label: t.portfolios.solutionLabel, value: project.solution },
              { label: t.portfolios.implementationLabel, value: project.implementation },
              { label: t.portfolios.outcomeLabel, value: project.outcome },
            ];

            return (
              <Card
                key={project.title}
                ref={projectAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card card-hover group scroll-scale ${projectAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.context && (
                    <p className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Briefcase className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {project.context}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4 mb-6 text-sm">
                    {details.filter((detail) => detail.value).map((detail) => (
                      <div key={detail.label}>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                          {detail.label}
                        </dt>
                        <dd className="text-muted-foreground leading-relaxed">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mb-6">
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      {t.portfolios.technologiesUsed}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-2.5 py-1 text-xs font-medium bg-muted/30 border-border/60 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full arrow-hover group/btn"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                        {t.portfolios.viewCode}
                        <ArrowRight className="w-4 h-4 ml-auto arrow-icon" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
