import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const COMPETENCIES: { group: string; groupEs: string; items: string[] }[] = [
  {
    group: 'Cloud (AWS)',
    groupEs: 'Cloud (AWS)',
    items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'CloudWatch'],
  },
  {
    group: 'Systems & Identity',
    groupEs: 'Sistemas e Identidad',
    items: ['Windows Server', 'Active Directory', 'Group Policy (GPO)', 'Microsoft 365', 'Exchange Online', 'Intune'],
  },
  {
    group: 'Networking',
    groupEs: 'Networking',
    items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'VLANs', 'ACLs', 'NAT/PAT', 'OSPF'],
  },
  {
    group: 'Monitoring & Automation',
    groupEs: 'Monitoreo y Automatización',
    items: ['Zabbix', 'Grafana', 'Python', 'PowerShell', 'Bash'],
  },
  {
    group: 'Operations',
    groupEs: 'Operaciones',
    items: ['ITIL', 'Incident Management', 'Root Cause Analysis'],
  },
];

const CoreCompetencies: React.FC = () => {
  const { language } = useLanguage();
  const titleAnim = useScrollAnimation();

  const title = language === 'es' ? 'Competencias Principales' : 'Core Competencies';
  const subtitle =
    language === 'es'
      ? 'Tecnologías y prácticas que utilizo a diario en soporte, infraestructura y operaciones.'
      : 'Technologies and practices I use daily across support, infrastructure and operations.';

  return (
    <section id="core-competencies" className="py-16">
      <div className="container mx-auto px-4">
        <div
          ref={titleAnim.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center mb-10 scroll-animate ${titleAnim.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPETENCIES.map((group) => (
            <div key={group.group} className="glass-card rounded-lg p-5 card-hover">
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                {language === 'es' ? group.groupEs : group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="px-2.5 py-0.5 text-xs font-medium bg-card border-border text-foreground hover:border-primary/50 transition-colors"
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

export default CoreCompetencies;