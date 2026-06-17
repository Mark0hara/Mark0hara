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
      title: "Marco Antonio Jara Cuevas",
      subtitle: "IT Support Engineer | AWS Cloud | Infrastructure & Networking",
      availability: "Open to IT Support, Cloud Support & Infrastructure roles",
      location: "Santiago - Chile",
      description: "Telecommunications and Network Engineer with hands-on experience in enterprise IT support, AWS cloud infrastructure, monitoring, networking and automation. Experienced supporting corporate environments, deploying infrastructure, troubleshooting complex incidents and maintaining operational reliability through monitoring and structured documentation.",
      downloadCV: "Download CV",
      contactMe: "Let's Talk",
      bullets: [
        "Enterprise IT Support — Windows Server, Microsoft 365, Active Directory, Intune",
        "Cloud Infrastructure — AWS EC2, VPC, CloudWatch, Auto Scaling, S3, IAM",
        "Monitoring & Observability — Zabbix, Grafana, CloudWatch, SNS alerting",
        "Enterprise Networking — Routing & Switching, VLANs, ACLs, NAT/PAT, OSPF, TCP/IP, DNS, DHCP, VPN and troubleshooting."
      ]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Fiverr",
          companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/500px-Fiverr_Logo_09.2020.svg.png",
          position: "Freelancer – IT Support Engineer",
          location: "Remote",
          period: "January 2025 – December 2025",
          achievements: [
            "Provided remote IT support to 50+ international clients through Fiverr.",
            "Resolved Windows, Microsoft 365, networking and connectivity incidents in remote environments.",
            "Troubleshot VPN, DNS, DHCP, TCP/IP and endpoint-related issues.",
            "Created technical documentation and step-by-step procedures to reduce recurring incidents.",
            "Maintained high client satisfaction through effective communication and timely resolution."
          ]
        },
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
      title: "Technical Skills & Core Competencies",
      subtitle: "Technical domains, platforms and operational expertise developed through enterprise IT support, cloud infrastructure, monitoring, networking and automation.",
      interactionHint: "",
      groups: [
        {
          key: 'cloud',
          title: 'Cloud Infrastructure',
          description: 'Deployment, monitoring and administration of AWS cloud environments.',
          color: '#06b6d4',
          icon: 'cloud',
          items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'SNS', 'Security Groups']
        },
        {
          key: 'systems',
          title: 'Systems Administration',
          description: 'Enterprise endpoint, identity and Microsoft ecosystem administration.',
          color: '#a78bfa',
          icon: 'server',
          items: ['Windows Server', 'Active Directory', 'Microsoft 365', 'Exchange Online', 'Intune', 'Group Policy (GPO)']
        },
        {
          key: 'networking',
          title: 'Networking',
          description: 'Enterprise networking, segmentation and troubleshooting.',
          color: '#3b82f6',
          icon: 'network',
          items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'VLANs', 'ACLs', 'NAT', 'OSPF', 'SNMP', 'Routing & Switching']
        },
        {
          key: 'monitoring',
          title: 'Monitoring & Observability',
          description: 'Monitoring, alerting and operational visibility.',
          color: '#22c55e',
          icon: 'activity',
          items: ['Zabbix', 'CloudWatch', 'Grafana', 'Dashboards', 'Log Analysis']
        },
        {
          key: 'automation',
          title: 'Automation',
          description: 'Operational automation and scripting.',
          color: '#f59e0b',
          icon: 'terminal',
          items: ['Python', 'PowerShell', 'Bash']
        },
        {
          key: 'operations',
          title: 'IT Operations',
          description: 'Operational support, incident response and process improvement.',
          color: '#ec4899',
          icon: 'book',
          items: ['ITIL', 'Incident Management', 'Root Cause Analysis', 'Troubleshooting', 'Documentation', 'Runbooks']
        }
      ],
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
          title: "Enterprise Networking",
          items: ["Routing & Switching", "VLANs", "ACLs", "NAT/PAT", "OSPF", "TCP/IP", "DNS", "DHCP", "VPN", "Troubleshooting"]
        },
        database: {
          title: "Systems & Identity",
          items: ["Windows Server", "Active Directory", "Group Policy (GPO)", "Microsoft 365", "Exchange Online", "Intune"]
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
      technologiesUsed: "Stack",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      outcomeLabel: "Outcome",
      viewCode: "View Code",
      cta: {
        title: "Let's Build Something Together",
        subtitle: "Open to collaborating on cloud infrastructure and monitoring projects.",
        button: "Get In Touch"
      },
      projects: [
        {
          icon: "🖥️",
          title: "Zabbix Enterprise Monitoring",
          problem: "Limited visibility across hybrid on-prem and cloud infrastructure made incident detection and troubleshooting inefficient.",
          solution: "Deployed a centralized Zabbix monitoring stack on AWS EC2 with Windows and Linux agents, custom templates, triggers, and CloudWatch/SNS integration for alerting.",
          outcome: "Unified observability across hybrid infrastructure with standardized, ITIL-aligned alerting and faster incident detection.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completed"
        },
        {
          icon: "☁️",
          title: "AWS Infrastructure Architecture",
          problem: "Single-AZ workloads without automatic recovery created downtime risk and limited visibility into resource health.",
          solution: "Designed a multi-AZ AWS architecture with EC2 Auto Scaling behind an ALB, segmented VPC, hardened Security Groups, and least-privilege IAM, monitored via CloudWatch and SNS.",
          outcome: "Resilient, automatically scalable infrastructure with centralized monitoring and improved operational reliability.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completed"
        },
        {
          icon: "🌐",
          title: "Enterprise Networking Lab (CCNA-Level)",
          problem: "Routing, segmentation, and security designs needed to be validated on realistic enterprise topologies before production-like rollout.",
          solution: "Built multi-site labs in Cisco Packet Tracer and EVE-NG covering routing & switching, VLANs, inter-VLAN routing, ACLs, NAT/PAT, and OSPF, with structured troubleshooting procedures.",
          outcome: "Strong practical networking experience at CCNA level with documented troubleshooting workflows for enterprise scenarios.",
          technologies: ["Cisco", "Packet Tracer", "Networking"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completed"
        },
        {
          icon: "⚙️",
          title: "Cloud & Systems Automation Toolkit",
          problem: "Repetitive operational tasks across AWS and Microsoft 365 consumed engineering time and increased the risk of human error.",
          solution: "Built a toolkit of Python, PowerShell, and Bash scripts to automate AWS inventory, IAM auditing, EC2/S3 lifecycle actions, and M365/AD user provisioning with standardized logging.",
          outcome: "Reduced manual workload on recurring tasks and improved consistency and visibility across cloud and identity operations.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completed"
        },
        {
          icon: "📘",
          title: "IT Operations Runbooks & Knowledge Base",
          problem: "Inconsistent incident handling and tribal knowledge slowed resolution times and onboarding of new support staff.",
          solution: "Designed structured runbooks, SOPs, and knowledge base articles for L1/L2 incidents across networking, Active Directory, Microsoft 365, Intune, and Windows Server, aligned to ITIL.",
          outcome: "Faster, more consistent incident resolution with clearer escalation paths and reusable operational documentation.",
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
      subtitle: "IT Support Engineer | AWS Cloud | Infraestructura y Networking",
      availability: "Disponible para roles de IT Support, Cloud Support e Infraestructura",
      location: "Santiago - Chile",
      description: "Ingeniero en Telecomunicaciones y Redes con experiencia práctica en soporte TI empresarial, infraestructura cloud en AWS, monitoreo, networking y automatización. Con experiencia soportando entornos corporativos, desplegando infraestructura, resolviendo incidentes complejos y manteniendo la confiabilidad operativa mediante monitoreo y documentación estructurada.",
      downloadCV: "Descargar CV",
      contactMe: "Hablemos",
      bullets: [
        "Soporte TI Empresarial — Windows Server, Microsoft 365, Active Directory, Intune",
        "Infraestructura Cloud — AWS EC2, VPC, CloudWatch, Auto Scaling, S3, IAM",
        "Monitoreo y Observabilidad — Zabbix, Grafana, CloudWatch, alertas SNS",
        "Networking (nivel CCNA) — Routing & Switching, VLANs, ACLs, NAT/PAT, troubleshooting"
      ]
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Fiverr",
          companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png",
          position: "Freelancer – IT Support Engineer",
          location: "Remoto",
          period: "Enero 2025 – Diciembre 2025",
          achievements: [
            "Atendí a más de 50 clientes internacionales con altos niveles de satisfacción.",
            "Entregué soporte técnico L1/L2 en sistemas Windows, redes y entornos Microsoft 365.",
            "Realicé troubleshooting de conectividad TCP/IP, acceso VPN e incidentes relacionados con seguridad.",
            "Implementé soluciones de monitoreo y documentación técnica para mejorar la visibilidad operativa.",
            "Ejecuté análisis de causa raíz (RCA) y contribuí a la mejora continua de procesos."
          ]
        },
        {
          company: "Instituto Nacional de Estadísticas (INE)",
          companyLogo: "censo",
          position: "IT Support Engineer",
          location: "Santiago, Paseo Bulnes",
          period: "Enero 2024 – Julio 2024",
          achievements: [
            "Soporte TI empresarial sobre un entorno operativo distribuido de más de 300 dispositivos durante operaciones del censo nacional.",
            "Despliegue, provisioning y configuración de equipos para asegurar la continuidad operativa en operaciones críticas de campo.",
            "Monitoreo en tiempo real, triage de incidentes, escalamiento y resolución siguiendo procesos alineados a ITIL.",
            "Diagnóstico y resolución de incidentes de hardware, software, conectividad y soporte al usuario final con tiempos de respuesta exigentes.",
            "Mantenimiento de documentación técnica, runbooks operativos y artículos de base de conocimiento para equipos de soporte en terreno.",
            "Contribución a la confiabilidad operativa y a la reducción de incidentes mediante troubleshooting estructurado y monitoreo proactivo."
          ]
        },
        {
          company: "SC Informática",
          companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0jqwe13eOQXgCORzN56MDNiMnURvVHxzMw&s",
          position: "IT Support Technician",
          location: "Santiago, Macul",
          period: "Mayo 2023 – Diciembre 2023",
          achievements: [
            "Soporte de hardware y software, mantenimiento de equipos y asistencia al usuario final en un entorno de servicios profesionales.",
            "Administración de entornos Windows: cuentas de usuario, drivers, actualizaciones y software de productividad estándar.",
            "Soporte técnico presencial y remoto, resolviendo incidentes de sistemas operativos, periféricos y conectividad.",
            "Gestión de tickets de incidentes desde la apertura hasta el cierre, con comunicación clara al usuario y documentación precisa.",
            "Troubleshooting sistemático para diagnosticar fallas de hardware, conflictos de software y problemas básicos de red.",
            "Bases sólidas de administración de sistemas en soporte a operaciones diarias del negocio."
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
      title: "Habilidades Técnicas y Competencias Principales",
      subtitle: "Dominios técnicos, plataformas y experiencia operativa desarrollados en soporte TI empresarial, infraestructura cloud, monitoreo, networking y automatización.",
      interactionHint: "",
      groups: [
        {
          key: 'cloud',
          title: 'Infraestructura Cloud',
          description: 'Despliegue, monitoreo y administración de entornos cloud en AWS.',
          color: '#06b6d4',
          icon: 'cloud',
          items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'SNS', 'Security Groups']
        },
        {
          key: 'systems',
          title: 'Administración de Sistemas',
          description: 'Administración de endpoints, identidad y ecosistema Microsoft empresarial.',
          color: '#a78bfa',
          icon: 'server',
          items: ['Windows Server', 'Active Directory', 'Microsoft 365', 'Exchange Online', 'Intune', 'Group Policy (GPO)']
        },
        {
          key: 'networking',
          title: 'Networking',
          description: 'Networking empresarial, segmentación y troubleshooting.',
          color: '#3b82f6',
          icon: 'network',
          items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'VLANs', 'ACLs', 'NAT', 'OSPF', 'SNMP', 'Routing & Switching']
        },
        {
          key: 'monitoring',
          title: 'Monitoreo y Observabilidad',
          description: 'Monitoreo, alertas y visibilidad operativa.',
          color: '#22c55e',
          icon: 'activity',
          items: ['Zabbix', 'CloudWatch', 'Grafana', 'Dashboards', 'Análisis de Logs']
        },
        {
          key: 'automation',
          title: 'Automatización',
          description: 'Automatización operativa y scripting.',
          color: '#f59e0b',
          icon: 'terminal',
          items: ['Python', 'PowerShell', 'Bash']
        },
        {
          key: 'operations',
          title: 'Operaciones TI',
          description: 'Soporte operativo, respuesta a incidentes y mejora de procesos.',
          color: '#ec4899',
          icon: 'book',
          items: ['ITIL', 'Gestión de Incidentes', 'Análisis de Causa Raíz', 'Troubleshooting', 'Documentación', 'Runbooks']
        }
      ],
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
          title: "Networking Empresarial",
          items: ["Routing & Switching", "VLANs", "ACLs", "NAT/PAT", "OSPF", "TCP/IP", "DNS", "DHCP", "VPN", "Troubleshooting"]
        },
        database: {
          title: "Sistemas e Identidad",
          items: ["Windows Server", "Active Directory", "Group Policy (GPO)", "Microsoft 365", "Exchange Online", "Intune"]
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
      technologiesUsed: "Stack",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      outcomeLabel: "Resultado",
      viewCode: "Ver Código",
      cta: {
        title: "Construyamos Algo Juntos",
        subtitle: "Abierto a colaborar en proyectos de infraestructura cloud y monitoreo.",
        button: "Conectemos"
      },
      projects: [
        {
          icon: "🖥️",
          title: "Monitoreo Empresarial con Zabbix",
          problem: "Visibilidad limitada sobre infraestructura híbrida on-prem y cloud dificultaba la detección de incidentes y el troubleshooting.",
          solution: "Despliegue de un stack de monitoreo Zabbix centralizado sobre AWS EC2 con agentes Windows y Linux, templates personalizados, triggers e integración con CloudWatch/SNS.",
          outcome: "Observabilidad unificada sobre infraestructura híbrida con alertas estandarizadas alineadas a ITIL y detección de incidentes más rápida.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completado"
        },
        {
          icon: "☁️",
          title: "Arquitectura de Infraestructura AWS",
          problem: "Cargas en una sola AZ sin recuperación automática generaban riesgo de downtime y visibilidad limitada sobre la salud de los recursos.",
          solution: "Diseño de una arquitectura AWS multi-AZ con EC2 Auto Scaling detrás de un ALB, VPC segmentada, Security Groups endurecidos e IAM de mínimo privilegio, monitoreada con CloudWatch y SNS.",
          outcome: "Infraestructura resiliente y autoescalable con monitoreo centralizado y mayor confiabilidad operacional.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completado"
        },
        {
          icon: "🌐",
          title: "Laboratorio de Networking Empresarial (Nivel CCNA)",
          problem: "Validar diseños de routing, segmentación y seguridad sobre escenarios realistas antes de aplicarlos en entornos similares a producción.",
          solution: "Construcción de laboratorios multi-sitio en Cisco Packet Tracer y EVE-NG cubriendo routing & switching, VLANs, inter-VLAN, ACLs, NAT/PAT y OSPF con procedimientos de troubleshooting documentados.",
          outcome: "Experiencia práctica sólida en networking a nivel CCNA con flujos de troubleshooting documentados para escenarios empresariales.",
          technologies: ["Cisco", "Packet Tracer", "Redes"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completado"
        },
        {
          icon: "⚙️",
          title: "Toolkit de Automatización Cloud y Sistemas",
          problem: "Tareas operativas repetitivas en AWS y Microsoft 365 consumían tiempo de ingeniería e incrementaban el riesgo de error humano.",
          solution: "Toolkit en Python, PowerShell y Bash para automatizar inventario AWS, auditoría IAM, ciclo de vida EC2/S3 y provisioning de usuarios en M365/AD, con logging estandarizado.",
          outcome: "Menor carga manual en tareas recurrentes y mayor consistencia y visibilidad sobre operaciones cloud e identidad.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completado"
        },
        {
          icon: "📘",
          title: "Runbooks y Base de Conocimiento de Operaciones TI",
          problem: "El manejo inconsistente de incidentes y el conocimiento tribal aumentaban los tiempos de resolución y dificultaban el onboarding.",
          solution: "Runbooks, SOPs y artículos de base de conocimiento para incidentes L1/L2 en networking, Active Directory, Microsoft 365, Intune y Windows Server, alineados a ITIL.",
          outcome: "Resolución de incidentes más rápida y consistente, con rutas de escalamiento más claras y documentación operativa reutilizable.",
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
