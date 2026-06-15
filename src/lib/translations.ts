// Translations for EN and ES
export const translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      skills: "Tech Stack",
      methodology: "Methodology",
      certifications: "Certifications",
      portfolios: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "MARCO ANTONIO JARA CUEVAS",
      subtitle: "IT Support Engineer · AWS Cloud Enthusiast · Infrastructure & Monitoring",
      availability: "Open to Cloud Support / IT Engineer roles",
      location: "Santiago - Chile",
      description: "Cloud-focused engineer with hands-on experience in AWS infrastructure, incident troubleshooting, and monitoring. Proven track record resolving L1/L2 incidents, automating operational tasks, and maintaining high-availability environments.",
      downloadCV: "Download CV",
      contactMe: "Let's Talk",
      bullets: [
        "AWS Certified — EC2, S3, IAM, CloudWatch, Lambda, Cost Explorer",
        "L1/L2 Incident Response — RCA, escalation, ITIL-based workflows",
        "Monitoring & Alerting — Zabbix, CloudWatch dashboards, SNS notifications"
      ]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Instituto Nacional de Estadísticas (INE)",
          companyLogo: "censo",
          position: "IT Support Engineer",
          location: "Santiago, Paseo Bulnes",
          period: "January 2024 – July 2024",
          achievements: [
            "Provided enterprise IT support across a distributed operational environment of 300+ end-user devices during national census operations.",
            "Executed device deployment, provisioning, and configuration to ensure operational readiness and continuity in critical field operations.",
            "Performed real-time monitoring, incident triage, escalation, and resolution following ITIL-aligned processes.",
            "Diagnosed and resolved hardware, software, connectivity, and end-user incidents under strict response-time requirements.",
            "Maintained technical documentation, operational runbooks, and knowledge base entries for field support teams.",
            "Contributed to operational reliability and incident reduction through structured troubleshooting and proactive monitoring."
          ]
        },
        {
          company: "SC Informática",
          companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0jqwe13eOQXgCORzN56MDNiMnURvVHxzMw&s",
          position: "IT Support Technician",
          location: "Santiago, Macul",
          period: "May 2023 – December 2023",
          achievements: [
            "Delivered hardware and software support, equipment maintenance, and end-user assistance in a professional services environment.",
            "Administered Windows desktop environments, including user accounts, drivers, updates, and standard productivity software.",
            "Provided on-site and remote technical support, resolving incidents related to operating systems, peripherals, and connectivity.",
            "Managed incident tickets from intake to resolution, ensuring clear communication with users and accurate problem documentation.",
            "Applied systematic troubleshooting to diagnose hardware failures, software conflicts, and basic network issues.",
            "Built foundational systems administration experience supporting day-to-day business operations."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      degree: "Telecommunications, Connectivity and Network Engineering",
      university: "INACAP TECHNOLOGICAL UNIVERSITY",
      location: "Santiago, Center",
      period: "2018 – 2023"
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Core technologies I work with daily. Move the mouse or touch to interact 🔧",
      cloud: [
        { name: 'AWS', description: 'EC2, S3, Lambda, CloudWatch, IAM, VPC, Cost Explorer, SNS' },
        { name: 'Linux', description: 'Ubuntu, CentOS, Bash scripting, systemd, journalctl, cron' },
        { name: 'Networking', description: 'TCP/IP, DNS, DHCP, VPN, VLANs, SNMP, Routing, Subnetting' },
      ],
      development: [
        { name: 'CloudWatch', description: 'Metrics, alarms, dashboards, log groups, anomaly detection' },
        { name: 'Zabbix', description: 'Agent-based monitoring, triggers, escalations, custom templates' },
        { name: 'Python', description: 'Boto3, automation scripts, log parsing, API integrations' },
        { name: 'PowerShell', description: 'AD automation, M365 management, scheduled tasks' },
      ],
      softSkills: [
        { name: 'ITIL', description: 'Incident, Problem, Change Management workflows' },
        { name: 'Troubleshooting', description: 'Systematic diagnosis, RCA, escalation procedures' },
        { name: 'Documentation', description: 'Runbooks, SOPs, knowledge base articles' },
        { name: 'Advanced English', description: 'Technical oral and written communication (C1)' }
      ],
      categories: {
        cloud: {
          title: "Cloud & Networking",
          description: "AWS, Linux, TCP/IP, VPN, DNS, VLANs, IAM"
        },
        development: {
          title: "Monitoring & Automation",
          description: "CloudWatch, Zabbix, Python (Boto3), PowerShell"
        },
        soft: {
          title: "Operations & Methodology",
          description: "ITIL, Troubleshooting, RCA, Documentation, English C1"
        }
      },
      technical: {
        title: "Technical Skills",
        cloud: {
          title: "Cloud Platforms",
          items: ["AWS (EC2, S3, IAM, VPC, Lambda)", "CloudWatch", "Cost Explorer", "SNS"]
        },
        security: {
          title: "Security & Compliance",
          items: ["IAM Policies", "Security Groups", "NACLs", "Incident Response"]
        },
        networking: {
          title: "Networking",
          items: ["TCP/IP", "DNS/DHCP", "VPN", "VLANs", "Subnetting", "SNMP"]
        },
        database: {
          title: "Systems",
          items: ["Windows Server", "Active Directory", "Microsoft 365", "Exchange Online"]
        },
        support: {
          title: "Monitoring",
          items: ["Zabbix", "CloudWatch Dashboards", "SNS Alerts", "Log Analysis"]
        },
        programming: {
          title: "Automation",
          items: ["Python (Boto3)", "Bash", "PowerShell"]
        }
      },
      soft: {
        title: "Professional Skills",
        items: ["Systematic troubleshooting under pressure", "Root cause analysis (RCA)", "Clear incident communication", "Priority-based triage", "Cross-team collaboration", "ITIL-aligned workflows", "Attention to detail in logs and metrics", "Runbook and SOP creation", "Client-facing technical support", "Continuous learning mindset"]
      }
    },
    methodology: {
      title: "How I Work",
      subtitle: "Structured troubleshooting methodology for cloud and infrastructure incidents",
      steps: [
        {
          title: "1. Detect & Triage",
          description: "Alert fires from CloudWatch or Zabbix. I classify severity (P1–P4), identify blast radius, and determine if immediate action or escalation is needed.",
          icon: "alert"
        },
        {
          title: "2. Investigate & Isolate",
          description: "Check CloudWatch logs, EC2 instance status, security groups, and network configs. Reproduce the issue. Narrow down to the failing component — is it compute, network, IAM, or application-level?",
          icon: "search"
        },
        {
          title: "3. Resolve & Document",
          description: "Apply the fix: restart services, adjust IAM policies, modify security groups, scale resources. Validate resolution with metrics. Document RCA, timeline, and preventive actions in the knowledge base.",
          icon: "check"
        },
        {
          title: "4. Prevent & Automate",
          description: "Create CloudWatch alarms for early detection. Write Boto3 scripts to automate repetitive fixes. Update runbooks so the next engineer can resolve it faster.",
          icon: "shield"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      viewCertificate: "View Certificate",
      viewOnline: "View Online",
      downloadPdf: "Download PDF",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
          status: "Completed",
          credlyUrl: "https://www.credly.com/badges/c81c5fdb-1736-413e-b37c-316ed9d9e985/linked_in_profile"
        },
        {
          name: "Advanced English C1 (EF SET)",
          logo: "https://pbs.twimg.com/profile_images/1846105019013013504/XUA9kTZh_400x400.jpg",
          status: "Completed",
          certificateUrl: "https://cert.efset.org/ZWypQE",
          pdfPath: "/certificates/EF_SET_Certificate_Marco_Jara.pdf"
        },
        {
          name: "Data Network Security - Specialization",
          logo: "https://www.acreditta.com/_next/image?url=https%3A%2F%2Facreditta-rutas-prod.s3.amazonaws.com%2Fmedia%2Fpublic%2Fbadge_templates%2Fimages%2F1640_badge_template_4ad4f3a4-1cbb-4493-b92a-4df013da5f7d%2Fmedium.png%3Ftime%3D1766074817936&w=1920&q=75",
          status: "Completed",
          certificateUrl: "https://www.acreditta.com/credential/4eac24dc-ed6c-4483-8084-30e6da7a4bdd",
          pdfPath: "/certificates/Certificado_Seguridad.pdf"
        },
        {
          name: "AWS Solutions Architect Associate",
          logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
          status: "In Progress"
        }
      ]
    },
    languages: {
      title: "Languages",
      items: {
        spanish: "Spanish: Native",
        english: "English: Advanced (C1)"
      }
    },
    contact: {
      title: "Available for Cloud Roles",
      subtitle: "Open to Cloud Support Engineer, Cloud Engineer, and Infrastructure roles. Let's connect.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again."
      }
    },
    portfolios: {
      title: "Projects",
      subtitle: "Real-world cloud infrastructure, monitoring, and networking projects demonstrating hands-on engineering skills.",
      technologiesUsed: "Stack:",
      viewCode: "View Code",
      cta: {
        title: "Let's Build Something Together",
        subtitle: "Open to collaborating on cloud infrastructure and monitoring projects.",
        button: "Get In Touch"
      },
      projects: [
        {
          title: "AWS High-Availability Architecture",
          description: "Multi-AZ architecture on AWS with auto-scaling EC2 instances, Application Load Balancer, and CloudWatch alarms. IAM least-privilege policies, VPC security groups, and 99.9% uptime in testing.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completed"
        },
        {
          title: "Zabbix Enterprise Deployment",
          description: "Zabbix server on EC2 monitoring on-prem and cloud resources. Custom CloudWatch metrics, SNS alerting, and Zabbix triggers for CPU, memory, disk, and network anomalies. MTTD reduced by 40%.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completed"
        },
        {
          title: "CCNA / Networking Labs",
          description: "Enterprise network topologies with VLANs, inter-VLAN routing, ACLs, and OSPF. Simulated link failures, broadcast storms, and security policy enforcement. Full troubleshooting procedures documented.",
          technologies: ["Cisco", "Packet Tracer", "Cybersecurity"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completed"
        },
        {
          title: "Python Automation Scripts",
          description: "Boto3 utilities for AWS reporting, IAM auditing, EC2 lifecycle, and S3 inventory. Bash and PowerShell scripts for log parsing, M365 user provisioning, and scheduled health checks.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completed"
        },
        {
          title: "IT Support Documentation",
          description: "Runbooks, SOPs, and KB articles for L1/L2 incident handling: TCP/IP, DNS, DHCP, VPN, Active Directory, and Microsoft 365. ITIL-aligned workflows and post-incident reviews.",
          technologies: ["Networking", "Cybersecurity"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completed"
        }
      ]
    }
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Stack Técnico",
      methodology: "Metodología",
      certifications: "Certificaciones",
      portfolios: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "MARCO ANTONIO JARA CUEVAS",
      subtitle: "IT Support Engineer · AWS Cloud Enthusiast · Infraestructura & Monitoreo",
      availability: "Disponible para roles Cloud Support / IT Engineer",
      location: "Santiago - Chile",
      description: "Ingeniero enfocado en cloud con experiencia práctica en infraestructura AWS, troubleshooting de incidentes y monitoreo. Track record comprobado resolviendo incidentes L1/L2, automatizando tareas operativas y manteniendo entornos de alta disponibilidad.",
      downloadCV: "Descargar CV",
      contactMe: "Hablemos",
      bullets: [
        "AWS Certified — EC2, S3, IAM, CloudWatch, Lambda, Cost Explorer",
        "Respuesta a Incidentes L1/L2 — RCA, escalamiento, flujos ITIL",
        "Monitoreo & Alertas — Zabbix, dashboards CloudWatch, notificaciones SNS"
      ]
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Fiverr / Freelance",
          companyLogo: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b107a31ef6830829585e7d58950d828b/fiverr.png",
          position: "IT Support Engineer (L1/L2)",
          location: "Remoto",
          period: "Enero 2025 – Diciembre 2025",
          achievements: [
            "Soporte remoto L1/L2 para 50+ clientes internacionales vía AnyDesk y TeamViewer con evaluaciones sobresalientes.",
            "Administración de tenants Microsoft 365: provisioning de usuarios, Exchange Online, políticas de acceso condicional.",
            "Troubleshooting de TCP/IP, DNS, DHCP y VPN en entornos Windows y Linux.",
            "Root cause analysis (RCA) en incidentes recurrentes y documentación de resoluciones en KB interna.",
            "Creación de procedimientos de monitoreo y documentación técnica estandarizada para onboarding de clientes.",
            "Flujos de trabajo alineados a ITIL para gestión de incidentes, escalamiento y solicitudes de cambio."
          ]
        },
        {
          company: "Instituto Nacional de Estadísticas",
          companyLogo: "censo",
          position: "Líder de Soporte de Infraestructura",
          location: "Santiago, Paseo Bulnes",
          period: "Enero 2024 – Julio 2024",
          achievements: [
            "Monitoreo de infraestructura crítica distribuida (300+ endpoints) durante operaciones del censo nacional con dashboards centralizados.",
            "Coordinación de despliegue y provisioning de dispositivos, reduciendo tiempos de respuesta en 30%.",
            "Triage de incidentes en tiempo real, escalamiento y resolución siguiendo estándares ITIL.",
            "Elaboración de reportes operativos y mantenimiento de base de conocimiento interna para equipos de soporte en campo."
          ]
        },
        {
          company: "SC Informática",
          companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0jqwe13eOQXgCORzN56MDNiMnURvVHxzMw&s",
          position: "Cloud Operations & Administrador TI",
          location: "Santiago, Macul",
          period: "Mayo 2023 – Diciembre 2023",
          achievements: [
            "Gestión de políticas IAM, acceso de usuarios y licencias en entornos AWS y Microsoft 365.",
            "Desarrollo de reportes automatizados con AWS (Boto3 + CloudWatch) mejorando visibilidad de recursos y compliance en 20%.",
            "Diagnóstico remoto y análisis de incidentes con herramientas de ticketing y soporte empresarial.",
            "Tareas de operaciones cloud: monitoreo de costos, gobernanza de acceso y documentación de infraestructura."
          ]
        }
      ]
    },
    education: {
      title: "Educación",
      degree: "Ingeniería en Telecomunicaciones, Conectividad y Redes",
      university: "UNIVERSIDAD TECNOLÓGICA INACAP",
      location: "Santiago, Centro",
      period: "2018 – 2023"
    },
    skills: {
      title: "Stack Técnico",
      subtitle: "Tecnologías core con las que trabajo a diario. Mueve el mouse o toca para interactuar 🔧",
      cloud: [
        { name: 'AWS', description: 'EC2, S3, Lambda, CloudWatch, IAM, VPC, Cost Explorer, SNS' },
        { name: 'Linux', description: 'Ubuntu, CentOS, Bash scripting, systemd, journalctl, cron' },
        { name: 'Networking', description: 'TCP/IP, DNS, DHCP, VPN, VLANs, SNMP, Routing, Subnetting' },
      ],
      development: [
        { name: 'CloudWatch', description: 'Métricas, alarmas, dashboards, log groups, detección de anomalías' },
        { name: 'Zabbix', description: 'Monitoreo basado en agentes, triggers, escalaciones, templates custom' },
        { name: 'Python', description: 'Boto3, scripts de automatización, parsing de logs, integraciones API' },
        { name: 'PowerShell', description: 'Automatización AD, gestión M365, tareas programadas' },
      ],
      softSkills: [
        { name: 'ITIL', description: 'Flujos de Incident, Problem y Change Management' },
        { name: 'Troubleshooting', description: 'Diagnóstico sistemático, RCA, procedimientos de escalamiento' },
        { name: 'Documentación', description: 'Runbooks, SOPs, artículos de knowledge base' },
        { name: 'Inglés Avanzado', description: 'Comunicación técnica oral y escrita (C1)' }
      ],
      categories: {
        cloud: {
          title: "Cloud & Networking",
          description: "AWS, Linux, TCP/IP, VPN, DNS, VLANs, IAM"
        },
        development: {
          title: "Monitoreo & Automatización",
          description: "CloudWatch, Zabbix, Python (Boto3), PowerShell"
        },
        soft: {
          title: "Operaciones & Metodología",
          description: "ITIL, Troubleshooting, RCA, Documentación, Inglés C1"
        }
      },
      technical: {
        title: "Habilidades Técnicas",
        cloud: {
          title: "Plataformas Cloud",
          items: ["AWS (EC2, S3, IAM, VPC, Lambda)", "CloudWatch", "Cost Explorer", "SNS"]
        },
        security: {
          title: "Seguridad & Compliance",
          items: ["Políticas IAM", "Security Groups", "NACLs", "Respuesta a Incidentes"]
        },
        networking: {
          title: "Networking",
          items: ["TCP/IP", "DNS/DHCP", "VPN", "VLANs", "Subnetting", "SNMP"]
        },
        database: {
          title: "Sistemas",
          items: ["Windows Server", "Active Directory", "Microsoft 365", "Exchange Online"]
        },
        support: {
          title: "Monitoreo",
          items: ["Zabbix", "Dashboards CloudWatch", "Alertas SNS", "Análisis de Logs"]
        },
        programming: {
          title: "Automatización",
          items: ["Python (Boto3)", "Bash", "PowerShell"]
        }
      },
      soft: {
        title: "Habilidades Profesionales",
        items: ["Troubleshooting sistemático bajo presión", "Root cause analysis (RCA)", "Comunicación clara de incidentes", "Triage basado en prioridad", "Colaboración cross-team", "Flujos de trabajo alineados a ITIL", "Atención al detalle en logs y métricas", "Creación de runbooks y SOPs", "Soporte técnico orientado al cliente", "Mentalidad de aprendizaje continuo"]
      }
    },
    methodology: {
      title: "Cómo Trabajo",
      subtitle: "Metodología estructurada de troubleshooting para incidentes cloud e infraestructura",
      steps: [
        {
          title: "1. Detectar & Triagear",
          description: "Se dispara alerta desde CloudWatch o Zabbix. Clasifico severidad (P1–P4), identifico radio de impacto y determino si se requiere acción inmediata o escalamiento.",
          icon: "alert"
        },
        {
          title: "2. Investigar & Aislar",
          description: "Reviso logs de CloudWatch, estado de instancias EC2, security groups y configuraciones de red. Reproduzco el issue. Aíslo el componente fallando — ¿es compute, network, IAM o nivel de aplicación?",
          icon: "search"
        },
        {
          title: "3. Resolver & Documentar",
          description: "Aplico el fix: reiniciar servicios, ajustar políticas IAM, modificar security groups, escalar recursos. Valido resolución con métricas. Documento RCA, timeline y acciones preventivas en la knowledge base.",
          icon: "check"
        },
        {
          title: "4. Prevenir & Automatizar",
          description: "Creo alarmas CloudWatch para detección temprana. Escribo scripts Boto3 para automatizar fixes repetitivos. Actualizo runbooks para que el próximo ingeniero lo resuelva más rápido.",
          icon: "shield"
        }
      ]
    },
    certifications: {
      title: "Certificaciones",
      viewCertificate: "Ver Certificado",
      viewOnline: "Ver en Línea",
      downloadPdf: "Descargar PDF",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
          status: "Completado",
          credlyUrl: "https://www.credly.com/badges/c81c5fdb-1736-413e-b37c-316ed9d9e985/linked_in_profile"
        },
        {
          name: "Inglés Avanzado C1 (EF SET)",
          logo: "https://pbs.twimg.com/profile_images/1846105019013013504/XUA9kTZh_400x400.jpg",
          status: "Completado",
          certificateUrl: "https://cert.efset.org/ZWypQE",
          pdfPath: "/certificates/EF_SET_Certificate_Marco_Jara.pdf"
        },
        {
          name: "Seguridad En Redes De Datos - Especialidad",
          logo: "https://www.acreditta.com/_next/image?url=https%3A%2F%2Facreditta-rutas-prod.s3.amazonaws.com%2Fmedia%2Fpublic%2Fbadge_templates%2Fimages%2F1640_badge_template_4ad4f3a4-1cbb-4493-b92a-4df013da5f7d%2Fmedium.png%3Ftime%3D1766074817936&w=1920&q=75",
          status: "Completado",
          certificateUrl: "https://www.acreditta.com/credential/4eac24dc-ed6c-4483-8084-30e6da7a4bdd",
          pdfPath: "/certificates/Certificado_Seguridad.pdf"
        },
        {
          name: "AWS Solutions Architect Associate",
          logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
          status: "En Progreso"
        }
      ]
    },
    languages: {
      title: "Idiomas",
      items: {
        spanish: "Español: Nativo",
        english: "Inglés: Avanzado (C1)"
      }
    },
    contact: {
      title: "Disponible para Roles Cloud",
      subtitle: "Abierto a posiciones de Cloud Support Engineer, Cloud Engineer e Infraestructura. Conectemos.",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intenta de nuevo."
      }
    },
    portfolios: {
      title: "Proyectos",
      subtitle: "Proyectos reales de infraestructura cloud, monitoreo y networking que demuestran habilidades de ingeniería práctica.",
      technologiesUsed: "Stack:",
      viewCode: "Ver Código",
      cta: {
        title: "Construyamos Algo Juntos",
        subtitle: "Abierto a colaborar en proyectos de infraestructura cloud y monitoreo.",
        button: "Conectemos"
      },
      projects: [
        {
          title: "Plataforma de Monitoreo AWS",
          description: "Arquitectura multi-AZ en AWS con EC2 auto-scaling, Application Load Balancer y alarmas CloudWatch. Políticas IAM de mínimo privilegio, security groups de VPC y 99.9% uptime en pruebas.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completado"
        },
        {
          title: "Despliegue Empresarial de Zabbix",
          description: "Servidor Zabbix en EC2 monitoreando recursos on-prem y cloud. Métricas custom de CloudWatch, alertas SNS y triggers Zabbix para CPU, memoria, disco y red. MTTD reducido en 40%.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completado"
        },
        {
          title: "Laboratorios de Networking / CCNA",
          description: "Topologías de red empresariales con VLANs, inter-VLAN routing, ACLs y OSPF. Simulación de fallas de enlace, broadcast storms y enforcement de políticas de seguridad. Documentación completa de troubleshooting.",
          technologies: ["Cisco", "Packet Tracer", "Ciberseguridad"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completado"
        },
        {
          title: "Scripts de Automatización en Python",
          description: "Utilidades Boto3 para reportes AWS, auditoría IAM, ciclo de vida EC2 e inventario S3. Scripts Bash y PowerShell para parsing de logs, provisioning M365 y chequeos de salud programados.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completado"
        },
        {
          title: "Documentación de Soporte TI",
          description: "Runbooks, SOPs y artículos KB para manejo de incidentes L1/L2: TCP/IP, DNS, DHCP, VPN, Active Directory y Microsoft 365. Flujos alineados a ITIL y revisiones post-incidente.",
          technologies: ["Redes", "Ciberseguridad"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completado"
        }
      ]
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
