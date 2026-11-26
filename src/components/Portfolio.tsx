import React from 'react';
import { Github, ArrowRight, GitBranch } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'completado':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'in progress':
      case 'en progreso':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'planned':
      case 'planeado':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

const getTechnologyImage = (tech: string) => {
  const images: { [key: string]: string } = {
    'AWS': '/logos/aws.png',
    'AWS Cloud': '/logos/aws.png',
    'AWS CloudWatch': '/logos/aws cloudwatch.png',
    'Python': '/logos/Python.png',
    'Linux': '/logos/Linux.png',
    'Zabbix': '/logos/zabbix_logo.png',
    'Cisco': '/logos/cisco.png',
    'Packet Tracer': '/logos/packettracer.png',
    'Networking': '/logos/networking.png',
    'Redes': '/logos/networking.png',
    'OSPF': '/logos/networking.png',
    'Cybersecurity': '/logos/cybersecurity.png',
    'Ciberseguridad': '/logos/cybersecurity.png',
    'GNS3': '/logos/GNS3.png',
    'Active Directory': '/logos/active directory.png',
    'Docker': '/logos/docker.png',
    'VMware': '/logos/vmware.png',
    'Terraform': '/logos/terraform.png',
    'Ansible': '/logos/ansible.png',
    'Firebase': '/logos/firebase.png',
    'React': '/logos/react.png',
    'TypeScript': '/logos/typescript.png',
    'Vercel': '/logos/vercel.png',
  };

  return images[tech] || '';
};

  const isGitLabUrl = (url: string) => url.includes('gitlab.com');

  return (
    <section id="portfolios" className="py-20 px-4 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-6xl font-bold mb-6 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="text-gradient-shimmer">
              {t.portfolios.title}
            </span>
          </h2>
          <p
            ref={subtitleAnimation.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-xl text-muted-foreground mb-8 leading-relaxed scroll-animate ${subtitleAnimation.isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            {t.portfolios.subtitle}
          </p>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.portfolios.projects.map((project, index) => {
            const projectAnimation = useScrollAnimation();

            return (
              <Card
                key={index}
                ref={projectAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card card-hover overlay-gradient group scroll-scale ${projectAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {project.icon && (
                        <span className="text-3xl leading-none shrink-0" aria-hidden="true">
                          {project.icon}
                        </span>
                      )}
                      <CardTitle className="text-lg group-hover:text-gradient-shimmer transition-all duration-300 truncate">
                        {project.title}
                      </CardTitle>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Problem / Solution / Outcome */}
                  <dl className="space-y-3 mb-6 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                        {t.portfolios.problemLabel}
                      </dt>
                      <dd className="text-muted-foreground leading-relaxed">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                        {t.portfolios.solutionLabel}
                      </dt>
                      <dd className="text-muted-foreground leading-relaxed">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                        {t.portfolios.outcomeLabel}
                      </dt>
                      <dd className="text-muted-foreground leading-relaxed">{project.outcome}</dd>
                    </div>
                  </dl>

                  {/* Visual Stack */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      {t.portfolios.technologiesUsed}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => {
                        const techImage = getTechnologyImage(tech);
                        return (
                          <div
                            key={techIndex}
                            title={tech}
                            aria-label={tech}
                            className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/40 border border-border/50 hover:bg-secondary hover:border-primary/40 transition-all duration-300 pop-hover"
                          >
                            {techImage ? (
                              <img
                                src={techImage}
                                alt={tech}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            ) : (
                              <span className="text-[10px] font-semibold text-center px-1">{tech}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Skills (ATS reinforcement) */}
                  {project.keySkills && project.keySkills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        {t.portfolios.keySkillsLabel}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.keySkills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="px-2 py-0.5 text-[10px] font-medium bg-muted/30 border-border/60 text-muted-foreground rounded-md"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 btn-hover-effect btn-shine arrow-hover group/btn transition-all duration-300 hover:-translate-y-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      {isGitLabUrl(project.githubUrl) ? (
                        <GitBranch className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      ) : (
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      )}
                      {t.portfolios.viewCode}
                      <ArrowRight className="w-4 h-4 ml-auto arrow-icon" />
                    </Button>
                  </div>
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