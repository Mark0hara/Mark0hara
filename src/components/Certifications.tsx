import React from 'react';
import { Award, CheckCircle, Clock, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const titleAnimation = useScrollAnimation();

  return (
    <section id="certifications" className="py-20" aria-labelledby="certifications-title">
      <div className="container mx-auto px-4">
        <h2
          id="certifications-title"
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.certifications.title}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {t.certifications.items.map((cert, index) => {
            const certAnimation = useScrollAnimation();
            const isInProgress = cert.status.toLowerCase().includes('progress') || cert.status.toLowerCase().includes('progreso');

            return (
              <article
                key={cert.name}
                ref={certAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`glass-card rounded-lg p-6 card-hover group scroll-scale h-full ${certAnimation.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-secondary/50 flex items-center justify-center">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <Award className="w-9 h-9 text-primary" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <Badge
                        variant={isInProgress ? 'secondary' : 'default'}
                        className="flex items-center gap-1 whitespace-nowrap self-start"
                      >
                        {isInProgress ? <Clock className="w-3 h-3" aria-hidden="true" /> : <CheckCircle className="w-3 h-3" aria-hidden="true" />}
                        {cert.status}
                      </Badge>
                    </div>

                    {cert.meta && (
                      <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                        <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{cert.meta}</span>
                      </div>
                    )}

                    {(cert.credlyUrl || cert.certificateUrl || cert.pdfPath) && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.credlyUrl && (
                          <Button variant="outline" size="sm" className="gap-2" asChild>
                            <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                              {t.certifications.viewCertificate}
                            </a>
                          </Button>
                        )}
                        {cert.certificateUrl && (
                          <Button variant="outline" size="sm" className="gap-2" asChild>
                            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                              {t.certifications.viewOnline}
                            </a>
                          </Button>
                        )}
                        {cert.pdfPath && (
                          <Button variant="outline" size="sm" className="gap-2" asChild>
                            <a href={cert.pdfPath} download>
                              <Download className="w-3 h-3" aria-hidden="true" />
                              {t.certifications.downloadPdf}
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
