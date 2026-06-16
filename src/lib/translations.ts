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
      subtitle: "IT Support Engineer · Cloud Infrastructure · Networking & Monitoring",
      availability: "Open to IT Support, Cloud Support & Infrastructure roles",
      location: "Santiago - Chile",
      description: "Telecommunications and Network Engineer with hands-on experience supporting enterprise environments across AWS cloud infrastructure, Microsoft 365, Active Directory, Windows Server, monitoring and networking. Focused on operational reliability, structured troubleshooting and ITIL-aligned incident management.",
      downloadCV: "Download CV",
      contactMe: "Let's Talk",
      bullets: [
        "Enterprise IT Support — Windows Server, Microsoft 365, Active Directory, Intune",
        "Cloud Infrastructure — AWS EC2, VPC, CloudWatch, Auto Scaling, S3, IAM",
        "Monitoring & Observability — Zabbix, Grafana, CloudWatch, SNS alerting",
        "Networking (CCNA-level) — Routing & Switching, VLANs, ACLs, NAT/PAT, troubleshooting"
      ]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "Fiverr",
          companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png",
          position: "Freelancer – IT Support Engineer",
          location: "Remote",
          period: "January 2025 – December 2025",
          achievements: [
            "Supported more than 50 international clients across diverse technical environments.",
            "Delivered L1/L2 technical support for Windows systems, networking issues and Microsoft 365 environments.",
            "Performed troubleshooting for TCP/IP connectivity, VPN access and security-related incidents.",
            "Implemented monitoring solutions and technical documentation to improve operational visibility.",
            "Conducted Root Cause Analysis (RCA) and contributed to continuous process improvement."
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
          description: "Problem: Single-AZ workloads with no automatic recovery created downtime risk and limited visibility into resource health.\n\nSolution: Designed and deployed a multi-AZ AWS architecture using EC2 Auto Scaling behind an Application Load Balancer, VPC segmentation with public/private subnets, hardened Security Groups and NACLs, and least-privilege IAM policies. Integrated CloudWatch alarms and SNS notifications for proactive incident detection.\n\nTechnologies: AWS EC2, VPC, Auto Scaling, ALB, IAM, CloudWatch, SNS, S3, Python (Boto3).\n\nOutcome: Resilient, self-healing infrastructure with 99.9% uptime in load testing, automated scaling under demand, and end-to-end observability across compute and network layers.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completed"
        },
        {
          title: "Zabbix Enterprise Deployment",
          description: "Problem: Lack of unified visibility across hybrid on-prem and cloud infrastructure delayed incident detection and response.\n\nSolution: Deployed a Zabbix monitoring server on AWS EC2 with agents distributed across Windows and Linux hosts. Built custom templates, triggers, and escalation rules for CPU, memory, disk, services, and network anomalies. Integrated CloudWatch metrics and SNS notifications to centralize alerts and on-call workflows.\n\nTechnologies: Zabbix, AWS EC2, CloudWatch, SNS, Linux, Bash.\n\nOutcome: Centralized observability across hybrid infrastructure, faster mean time to detect critical incidents, and standardized alerting aligned with ITIL incident management.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completed"
        },
        {
          title: "Enterprise Networking Lab (CCNA-Level)",
          description: "Problem: Validate routing, segmentation, and security designs against realistic enterprise network scenarios before applying changes to production-like environments.\n\nSolution: Built multi-site topologies in Cisco Packet Tracer and EVE-NG covering routing and switching, VLAN segmentation, inter-VLAN routing, ACLs, NAT/PAT, OSPF, and trunking. Simulated link failures, broadcast storms, and policy enforcement, documenting structured troubleshooting procedures for each scenario.\n\nTechnologies: Cisco IOS, Packet Tracer, EVE-NG, Routing & Switching, VLANs, ACLs, NAT/PAT, OSPF.\n\nOutcome: Strong practical networking experience based on CCNA-level knowledge, including routing, switching, VLANs, ACLs, NAT/PAT and enterprise network troubleshooting.",
          technologies: ["Cisco", "Packet Tracer", "Networking"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completed"
        },
        {
          title: "Cloud & Systems Automation Toolkit",
          description: "Problem: Repetitive operational tasks across AWS and Microsoft 365 environments consumed engineering time and increased the risk of human error.\n\nSolution: Built a toolkit of Python (Boto3), PowerShell, and Bash scripts to automate AWS resource inventory and reporting, IAM auditing, EC2 lifecycle actions, S3 housekeeping, Microsoft 365 and Active Directory user provisioning, and scheduled health checks. Standardized logging, error handling, and reporting outputs.\n\nTechnologies: Python (Boto3), PowerShell, Bash, AWS (EC2, S3, IAM, CloudWatch), Microsoft 365, Active Directory.\n\nOutcome: Reduced manual workload on recurring operational tasks, improved consistency in administration activities, and increased visibility over cloud and identity resources.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completed"
        },
        {
          title: "IT Operations Runbooks & Knowledge Base",
          description: "Problem: Inconsistent incident handling and tribal knowledge slowed down resolution times and onboarding of new support staff.\n\nSolution: Designed a structured set of runbooks, SOPs, and knowledge base articles covering L1/L2 incident handling for TCP/IP, DNS, DHCP, VPN, Active Directory, Microsoft 365, Intune, and Windows Server. Standardized ITIL-aligned workflows for incident, problem, and change management, including post-incident review templates.\n\nTechnologies: ITIL, Active Directory, Microsoft 365, Intune, Windows Server, Networking fundamentals.\n\nOutcome: Faster and more consistent incident resolution, clearer escalation paths, and reusable operational documentation supporting reliability and team scalability.",
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
      title: "MARCO JARA CUEVAS",
      subtitle: "IT Support Engineer · Infraestructura Cloud · Networking & Monitoreo",
      availability: "Disponible para roles de IT Support, Cloud Support e Infraestructura",
      location: "Santiago - Chile",
      description: "Ingeniero en Telecomunicaciones y Redes con experiencia práctica soportando entornos empresariales en infraestructura cloud AWS, Microsoft 365, Active Directory, Windows Server, monitoreo y networking. Enfocado en confiabilidad operativa, troubleshooting estructurado y gestión de incidentes alineada a ITIL.",
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
          title: "Arquitectura AWS de Alta Disponibilidad",
          description: "Problema: Cargas en una sola AZ sin recuperación automática generaban riesgo de downtime y visibilidad limitada sobre la salud de los recursos.\n\nSolución: Diseño y despliegue de una arquitectura multi-AZ en AWS con EC2 Auto Scaling detrás de un Application Load Balancer, segmentación de VPC con subnets públicas/privadas, Security Groups y NACLs endurecidos, y políticas IAM de mínimo privilegio. Integración de alarmas CloudWatch y notificaciones SNS para detección proactiva de incidentes.\n\nTecnologías: AWS EC2, VPC, Auto Scaling, ALB, IAM, CloudWatch, SNS, S3, Python (Boto3).\n\nResultado: Infraestructura resiliente y auto-reparable con 99.9% de uptime en pruebas de carga, escalamiento automático según demanda y observabilidad extremo a extremo en capas de cómputo y red.",
          technologies: ["AWS", "Python"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completado"
        },
        {
          title: "Despliegue Empresarial de Zabbix",
          description: "Problema: Falta de visibilidad unificada sobre infraestructura híbrida on-prem y cloud, retrasando la detección y respuesta a incidentes.\n\nSolución: Despliegue de un servidor Zabbix sobre AWS EC2 con agentes distribuidos en hosts Windows y Linux. Creación de templates, triggers y reglas de escalamiento para CPU, memoria, disco, servicios y anomalías de red. Integración con métricas de CloudWatch y notificaciones SNS para centralizar alertas y flujos on-call.\n\nTecnologías: Zabbix, AWS EC2, CloudWatch, SNS, Linux, Bash.\n\nResultado: Observabilidad centralizada sobre infraestructura híbrida, reducción del MTTD en incidentes críticos y alertas estandarizadas alineadas a gestión de incidentes ITIL.",
          technologies: ["Zabbix", "AWS", "Linux"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completado"
        },
        {
          title: "Laboratorio de Networking Empresarial (Nivel CCNA)",
          description: "Problema: Validar diseños de routing, segmentación y seguridad sobre escenarios realistas de redes empresariales antes de aplicar cambios en entornos similares a producción.\n\nSolución: Construcción de topologías multi-sitio en Cisco Packet Tracer y EVE-NG cubriendo routing y switching, segmentación VLAN, inter-VLAN routing, ACLs, NAT/PAT, OSPF y trunking. Simulación de fallas de enlace, broadcast storms y enforcement de políticas, documentando procedimientos de troubleshooting estructurados.\n\nTecnologías: Cisco IOS, Packet Tracer, EVE-NG, Routing & Switching, VLANs, ACLs, NAT/PAT, OSPF.\n\nResultado: Experiencia práctica sólida en networking basada en conocimiento de nivel CCNA, incluyendo routing, switching, VLANs, ACLs, NAT/PAT y troubleshooting de redes empresariales.",
          technologies: ["Cisco", "Packet Tracer", "Redes"],
          githubUrl: "https://gitlab.com/mark-o-hara/network-configs",
          status: "Completado"
        },
        {
          title: "Toolkit de Automatización Cloud y Sistemas",
          description: "Problema: Tareas operativas repetitivas en entornos AWS y Microsoft 365 consumían tiempo de ingeniería e incrementaban el riesgo de error humano.\n\nSolución: Construcción de un toolkit en Python (Boto3), PowerShell y Bash para automatizar inventario y reportes de recursos AWS, auditoría IAM, acciones de ciclo de vida EC2, mantenimiento de S3, provisioning de usuarios en Microsoft 365 y Active Directory, y chequeos de salud programados. Estandarización de logging, manejo de errores y reporting.\n\nTecnologías: Python (Boto3), PowerShell, Bash, AWS (EC2, S3, IAM, CloudWatch), Microsoft 365, Active Directory.\n\nResultado: Reducción de la carga manual sobre tareas operativas recurrentes, mayor consistencia en actividades de administración y mejor visibilidad sobre recursos cloud e identidad.",
          technologies: ["Python", "AWS", "Linux"],
          githubUrl: "https://github.com/Mark0hara",
          status: "Completado"
        },
        {
          title: "Runbooks y Base de Conocimiento de Operaciones TI",
          description: "Problema: El manejo inconsistente de incidentes y el conocimiento tribal aumentaban los tiempos de resolución y dificultaban el onboarding de nuevo personal de soporte.\n\nSolución: Diseño de un set estructurado de runbooks, SOPs y artículos de base de conocimiento para el manejo de incidentes L1/L2 sobre TCP/IP, DNS, DHCP, VPN, Active Directory, Microsoft 365, Intune y Windows Server. Estandarización de flujos alineados a ITIL para gestión de incidentes, problemas y cambios, incluyendo plantillas de post-incident review.\n\nTecnologías: ITIL, Active Directory, Microsoft 365, Intune, Windows Server, fundamentos de Redes.\n\nResultado: Resolución de incidentes más rápida y consistente, rutas de escalamiento más claras y documentación operativa reutilizable que sustenta la confiabilidad y la escalabilidad del equipo.",
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
