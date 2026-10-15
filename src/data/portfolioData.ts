import { 
  ProfileData, 
  MetricItem, 
  Project, 
  ExperienceItem, 
  SkillCategory, 
  EducationItem, 
  CertificationItem, 
  LanguageItem 
} from '../types/portfolio';

export const profileData: ProfileData = {
  name: "Jesús Rodolfo Gil Farías",
  handle: "@Jrgil20",
  location: {
    es: "Caracas, Venezuela",
    en: "Caracas, Venezuela"
  },
  availability: {
    es: "Disponible Presencial/Híbrido en Caracas o 100% Remoto",
    en: "Available On-site/Hybrid in Caracas or 100% Remote"
  },
  headline: {
    es: "Software Engineer | Backend & Full-Stack (TypeScript / Node.js / Python / Java) | Sistemas de Bajo Nivel, IA Aplicada & Web3",
    en: "Software Engineer | Backend & Full-Stack (TypeScript / Node.js / Python / Java) | Low-Level Systems, Applied AI & Web3"
  },
  heroPitch: {
    es: "Desarrollador de Software y estudiante de Ingeniería Informática en la UCAB. Construyo sistemas desde primeros principios: desde arquitecturas Backend, APIs REST y aplicaciones Full-Stack hasta programación de bajo nivel (C/C++/Go/NASM), algoritmos competitivos (ICPC), agentes de IA y soluciones Web3.",
    en: "Software Developer and Informatics Engineering (CS) student at UCAB. I build software from first principles: ranging from Backend architectures, REST APIs, and Full-Stack apps to low-level systems (C/C++/Go/NASM), competitive algorithms (ICPC), Applied AI agents, and Web3 protocols."
  },
  fullAbout: {
    es: "Me apasiona tanto entender cómo funciona el software por debajo del capó (memoria dinámica, arquitectura de computadores, impacto de caché y optimización en C/C++/Go/NASM) como llevar productos reales a producción con TypeScript, Node.js, Python, Java y React. Disfruto participar y organizar eventos tecnológicos: desde hackathones de IA y Web3 hasta competencias algorítmicas (ICPC / Codeforces) y Game Jams.",
    en: "I enjoy going deep into how systems work under the hood (dynamic memory, computer architecture, cache performance, and C/C++/Go/NASM) while shipping production-ready applications with TypeScript, Node.js, Python, Java, and React. I actively build in AI and Web3 hackathons, compete in algorithmic contests (ICPC / Codeforces), participate in Game Jams, and lead developer communities."
  },
  photoUrl: "https://avatars.githubusercontent.com/u/131034722?v=4",
  email: "fariasjr223@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1HtYLMbD1YaPwgFDhmlJ03G-tW5BrpNTZ/view?usp=sharing",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Jrgil20",
      icon: "Github",
      handle: "Jrgil20"
    },
    {
      name: "GitHub Lab",
      url: "https://github.com/JesusRgil",
      icon: "GitBranch",
      handle: "JesusRgil"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jesus-r-gil/",
      icon: "Linkedin",
      handle: "jesus-r-gil"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Jrgil20",
      icon: "Terminal",
      handle: "Jrgil20"
    },
    {
      name: "WakaTime",
      url: "https://wakatime.com/@d7762116-da4a-46bb-85a2-830cd446d82b",
      icon: "Clock",
      handle: "d7762116"
    },
    {
      name: "Credly",
      url: "https://www.credly.com/badges/d5bba642-e9df-4598-9ff4-f0d94eddcb06",
      icon: "Award",
      handle: "GitHub Certified"
    },
    {
      name: "Taplink",
      url: "https://taplink.cc/JesusGil",
      icon: "ExternalLink",
      handle: "JesusGil"
    },
    {
      name: "Telegram",
      url: "https://t.me/Jr_Gil",
      icon: "Send",
      handle: "@Jr_Gil"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jrg20_u",
      icon: "Instagram",
      handle: "@jrg20_u"
    }
  ]
};

export const impactMetrics: MetricItem[] = [
  {
    id: "github-contributions",
    value: "+1,480",
    label: {
      es: "Contribuciones en GitHub (Último Año)",
      en: "GitHub Contributions (Past Year)"
    },
    description: {
      es: "~1.1k commits, 392 Pull Requests, 123 Issues y colaboración en +35 repositorios.",
      en: "~1.1k commits, 392 Pull Requests, 123 Issues, and active collaboration across 35+ repositories."
    },
    highlight: "High Output",
    sourceUrl: "https://github.com/Jrgil20"
  },
  {
    id: "github-rank-vzla",
    value: "Top 25",
    label: {
      es: "Desarrollador más Activo en Venezuela",
      en: "Most Active Developer in Venezuela"
    },
    description: {
      es: "Posicionado entre los programadores con mayor actividad pública en committers.top.",
      en: "Ranked among the top most active public GitHub contributors in Venezuela on committers.top."
    },
    highlight: "National Rank",
    sourceUrl: "https://committers.top/venezuela.html"
  },
  {
    id: "wakatime-hours",
    value: "#19 Nac. | 494h+",
    label: {
      es: "WakaTime Nacional (Venezuela)",
      en: "National WakaTime Rank (Venezuela)"
    },
    description: {
      es: "Más de 494 horas registradas de código activo y desarrollo asistido por IA.",
      en: "Over 494 tracked hours of active programming and AI-assisted software engineering."
    },
    highlight: "Verified Coding Time",
    sourceUrl: "https://wakatime.com/@d7762116-da4a-46bb-85a2-830cd446d82b"
  },
  {
    id: "hackathons",
    value: "1.er Lugar & Top 27",
    label: {
      es: "Premios en Hackathones",
      en: "Hackathon Awards"
    },
    description: {
      es: "Ganador SolucionaLab (IA/NLP 2025) y Top 27 LATAM en Dev3pack Global Hackathon (Solana Web3 2026).",
      en: "1st Place at SolucionaLab (AI/NLP 2025) and Top 27 LATAM at Dev3pack Global Hackathon (Solana Web3 2026)."
    },
    highlight: "Competitive Builder"
  },
  {
    id: "copilot-dev-days",
    value: "3 Ediciones",
    label: {
      es: "GitHub Copilot Dev Days",
      en: "GitHub Copilot Dev Days"
    },
    description: {
      es: "Lead Organizer: 2 ediciones realizadas y una 3.ª próxima a iniciar para la formación comunitaria.",
      en: "Lead Organizer: 2 editions hosted and a 3rd underway, training engineers in modern AI workflows."
    },
    highlight: "Community Leadership"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: {
      es: "Lenguajes Principales",
      en: "Core Languages"
    },
    skills: [
      "TypeScript (36.7% en GitHub)",
      "Java (22.4%)",
      "JavaScript (14.4%)",
      "Python",
      "C",
      "C++",
      "SQL (PL/pgSQL, MySQL)",
      "Go",
      "Ensamblador x86 (NASM)"
    ]
  },
  {
    id: "backend-db",
    title: {
      es: "Backend & Bases de Datos",
      en: "Backend & Databases"
    },
    skills: [
      "Node.js",
      "Express",
      "Diseño de APIs RESTful",
      "PostgreSQL (PL/pgSQL, Triggers, Funciones)",
      "MySQL",
      "JDBC",
      "E/S Asíncrona",
      "Arquitectura Limpia (Clean Architecture)",
      "Domain-Driven Design (DDD)",
      "Aspect-Oriented Programming (AOP)"
    ]
  },
  {
    id: "ai-agents",
    title: {
      es: "Inteligencia Artificial & Procesos Agénticos",
      en: "AI & Agentic Workflows"
    },
    skills: [
      "Azure AI Foundry",
      "Agentes NLP",
      "Orquestación de LLMs",
      "Ingeniería de Prompts",
      "Flujos Agénticos con BDD/SDD (Gherkin)",
      "GitHub Copilot"
    ]
  },
  {
    id: "frontend",
    title: {
      es: "Frontend & Ecosistema Web",
      en: "Frontend & Web Ecosystem"
    },
    skills: [
      "React 18",
      "Tailwind CSS",
      "Vite",
      "HTML5",
      "CSS3",
      "Diseño Responsive & Mobile-First"
    ]
  },
  {
    id: "web3",
    title: {
      es: "Web3 & Blockchain",
      en: "Web3 & Blockchain"
    },
    skills: [
      "Solana",
      "Avalanche (Fuji Testnet)",
      "Contratos Inteligentes (Solidity)",
      "Ethers.js",
      "AvalancheJS",
      "Integración de Wallets (MetaMask)"
    ]
  },
  {
    id: "systems-cs",
    title: {
      es: "Sistemas, Ciencias de la Computación & DevOps",
      en: "Systems, Computer Science & DevOps"
    },
    skills: [
      "Algoritmos y Estructuras de Datos (ICPC)",
      "Programación Orientada a Objetos (POO)",
      "TDD (Test-Driven Development)",
      "Memoria Dinámica & Gestión de Punteros",
      "Arquitectura de Computadores",
      "Seguridad de Redes",
      "Git & GitHub Workflows",
      "Docker",
      "Bash",
      "Linux"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "arrowmaze",
    title: "ArrowMaze",
    headline: {
      es: "Motor Algorítmico en Grafos & Flujos Agénticos (BDD/SDD)",
      en: "Directed-Graph Algorithmic Engine & Agentic Workflows (BDD/SDD)"
    },
    description: {
      es: "Motor lógico sobre grafos dirigidos con generación procedimental mediante búsqueda en anchura (BFS) y backtracking recursivo para garantizar caminos hamiltonianos parciales sin bloqueos muertos (deadlocks). Construido bajo Arquitectura Limpia de 4 capas, Domain-Driven Design (DDD), patrón Command y Programación Orientada a Aspectos (AOP), orquestando agentes de IA mediante Specification-Driven y Behavior-Driven Development para mitigar el decaimiento de restricciones (Constraint Decay) en LLMs.",
      en: "Directed-graph algorithmic engine featuring procedural generation via BFS and recursive backtracking to guarantee deadlock-free paths. Built with 4-layer Clean Architecture, DDD, Command pattern, and Aspect-Oriented Programming (AOP), orchestrating AI coding agents via BDD/SDD (Gherkin) to mitigate LLM Constraint Decay."
    },
    categories: ["ai-agents", "systems-algorithms", "backend-fullstack"],
    stack: [
      "Clean Architecture (4 capas)",
      "DDD",
      "AOP",
      "BDD/SDD (Gherkin)",
      "Grafos Dirigidos (BFS / Backtracking)",
      "Agentes IA"
    ],
    repoUrl: "https://github.com/NRC25783-G4-ArrowMaze"
  },
  {
    id: "smart-networking",
    title: "Smart-Networking",
    headline: {
      es: "dApp para Eventos Tech & AI Matchmaking (Top 27 LATAM)",
      en: "dApp for Tech Events & AI Matchmaking (Top 27 LATAM)"
    },
    description: {
      es: "Aplicación descentralizada (dApp) creada para transformar el networking entre desarrolladores en eventos tecnológicos, hackathones y comunidades. Combina registros verificables on-chain en Solana, emparejamiento inteligente asistido por IA, privacidad híbrida e incentivos nativos. Posicionada en el Top 27 de LATAM en el Dev3pack Global Hackathon (2026).",
      en: "Decentralized application (dApp) designed to enhance developer networking at tech events and hackathons, combining on-chain check-ins on Solana, AI-powered matchmaking, hybrid privacy, and native incentives. Ranked Top 27 in LATAM at the Dev3pack Global Hackathon (2026)."
    },
    categories: ["web3", "ai-agents", "backend-fullstack"],
    stack: [
      "TypeScript",
      "Solana",
      "Web3",
      "React",
      "AI Matchmaking",
      "Tailwind CSS"
    ],
    liveUrl: "https://smart-networking.vercel.app",
    repoUrl: "https://github.com/Jrgil20/Smart-Networking-",
    badge: {
      type: "hackathon",
      label: {
        es: "Top 27 LATAM — Dev3pack",
        en: "Top 27 LATAM — Dev3pack"
      }
    }
  },
  {
    id: "speclock",
    title: "SpecLock",
    headline: {
      es: "Plataforma Descentralizada de Gestión de Proyectos",
      en: "Decentralized Project Management Platform"
    },
    description: {
      es: "Plataforma Web3 con control de acceso basado en roles (Cliente y Desarrollador) sobre Avalanche Fuji Testnet. Permite estructurar proyectos, definir hitos con presupuestos en AVAX y gestionar la entrega y validación transparente de avances mediante contratos inteligentes e integración con MetaMask.",
      en: "Role-based Web3 project management platform on Avalanche Fuji Testnet enabling clients and developers to structure milestones, lock budgets in AVAX, and validate deliverables via smart contracts."
    },
    categories: ["web3", "backend-fullstack"],
    stack: [
      "TypeScript",
      "React 18",
      "Ethers.js",
      "Avalanche Fuji Testnet",
      "Solidity",
      "Tailwind CSS"
    ],
    repoUrl: "https://github.com/SpecLock/SpeckLock"
  },
  {
    id: "nlp-agent-solucionalab",
    title: "Agente Inteligente NLP",
    headline: {
      es: "Automatización de Feedback & Detección de SLAs (1.er Lugar)",
      en: "Customer Feedback Automation & SLA Detection (1st Place)"
    },
    description: {
      es: "Agente inteligente de procesamiento de lenguaje natural (NLP) que automatizó el análisis masivo de feedback de clientes, detectando patrones críticos y validando incumplimientos de SLA en tiempo real para respaldar la toma de decisiones operativas. Proyecto ganador del 1.er lugar en el SolucionaLab Hackathon (2025).",
      en: "Intelligent NLP agent built with Azure AI Foundry and Python that automated customer feedback analysis, detecting critical patterns and validating SLA violations in real time to support operational decision-making. 1st Place winner at SolucionaLab Hackathon (2025)."
    },
    categories: ["ai-agents", "backend-fullstack"],
    stack: [
      "Python",
      "Azure AI Foundry",
      "NLP",
      "LLMs",
      "Prompt Engineering",
      "Data Analysis"
    ],
    badge: {
      type: "award",
      label: {
        es: "1.er Lugar SolucionaLab | Código Privado",
        en: "1st Place SolucionaLab | Private Code"
      }
    }
  },
  {
    id: "gapto10",
    title: "GapTo10",
    headline: {
      es: "Gestión y Proyección de Calificaciones Universitarias",
      en: "University Grade Tracking & Target Score Projection"
    },
    description: {
      es: "Aplicación web utilizada por estudiantes universitarios (4★ en GitHub) para gestionar sus calificaciones, calcular promedios ponderados y proyectar las notas necesarias en evaluaciones pendientes para aprobar cada materia.",
      en: "Web application used by university students (4★ on GitHub) to track grades, compute weighted averages, and calculate exact target scores needed on remaining evaluations."
    },
    categories: ["backend-fullstack"],
    stack: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "GitHub Pages"
    ],
    liveUrl: "https://jrgil20.github.io/gapto10-cfpp/",
    repoUrl: "https://github.com/Jrgil20/gapto10-cfpp",
    stars: 4
  },
  {
    id: "cinex-unidos",
    title: "Cinex-Unidos",
    headline: {
      es: "Plataforma Full-Stack de Cine y Boletería",
      en: "Full-Stack Cinema & Ticket Purchasing Platform"
    },
    description: {
      es: "Plataforma web full-stack para consulta de cartelera activa, sincronización de horarios y compra virtual de boletos mediante flujos de trabajo impulsados por APIs REST y comunicación asíncrona (3★ en GitHub).",
      en: "Full-stack cinema web platform for movie listings, schedule synchronization, and virtual ticket purchasing powered by RESTful APIs and asynchronous workflows (3★ on GitHub)."
    },
    categories: ["backend-fullstack"],
    stack: [
      "Node.js",
      "Express",
      "JavaScript",
      "REST APIs",
      "WebSockets / Fetch API",
      "HTML5/CSS3"
    ],
    repoUrl: "https://github.com/Jrgil20/Cinex-Unidos",
    stars: 3
  },
  {
    id: "practicas-ciberseguridad",
    title: "Prácticas de Ciberseguridad",
    headline: {
      es: "Laboratorio Interactivo de Seguridad en Redes",
      en: "Interactive Network Security Lab"
    },
    description: {
      es: "Repositorio interactivo y educativo (8★ en GitHub) desarrollado como Facilitador Universitario del microcurso 'Seguridad en Redes' en la UCAB, con laboratorios prácticos sobre análisis web, ataques a contraseñas, endurecimiento de dispositivos y protección de redes.",
      en: "Interactive educational repository (8★ on GitHub) created as University Facilitator for the 'Network Security' micro-course at UCAB, covering web analysis, password security, device hardening, and network protection."
    },
    categories: ["cybersecurity"],
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Network Security",
      "Device Hardening"
    ],
    liveUrl: "https://jrgil20.github.io/PracticasCiberSeguridad/",
    repoUrl: "https://github.com/Jrgil20/PracticasCiberSeguridad",
    stars: 8
  },
  {
    id: "triunity-hr",
    title: "TriUnityHR",
    headline: {
      es: "Sistema Modular de Gestión de Capital Humano",
      en: "Modular Human Capital Management System"
    },
    description: {
      es: "Aplicación modular de escritorio para la gestión integral de empleados, contratos, turnos, cálculo de nómina, bonificaciones y deducciones aplicando persistencia relacional en MySQL y principios de programación orientada a objetos.",
      en: "Modular Java desktop application for managing employees, contracts, shifts, payroll calculation, bonuses, and deductions using MySQL relational persistence and OOP design principles."
    },
    categories: ["backend-fullstack"],
    stack: [
      "Java",
      "JavaFX",
      "MySQL",
      "JDBC",
      "POO"
    ],
    badge: {
      type: "private",
      label: {
        es: "Sistema de Escritorio | Código Privado",
        en: "Desktop System | Private Code"
      }
    }
  },
  {
    id: "sistema-academico-sbd-g9",
    title: "Gestión Académica en C & Base de Datos Relacional",
    headline: {
      es: "Motor en C con Memoria Dinámica & Esquema PostgreSQL (SBD_G9)",
      en: "C Engine with Dynamic Memory & PostgreSQL Schema (SBD_G9)"
    },
    description: {
      es: "Motor de procesamiento académico en lenguaje C (cursos, inscripciones, calificaciones y reportes) implementado desde cero con estructuras de memoria dinámica y persistencia en archivos, complementado con el diseño de esquemas relacionales avanzados, triggers, secuencias y funciones en PL/pgSQL (SBD_G9).",
      en: "Academic data processing engine in C built from scratch using dynamic linked lists and file persistence, paired with advanced relational database schemas, triggers, sequences, and functions in PL/pgSQL (SBD_G9)."
    },
    categories: ["systems-algorithms", "backend-fullstack"],
    stack: [
      "C",
      "Listas Enlazadas Dinámicas",
      "File I/O",
      "PostgreSQL",
      "PL/pgSQL"
    ],
    repoUrl: "https://github.com/Jrgil20/SBD_G9"
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "copilot-dev-days",
    role: {
      es: "Lead Organizer",
      en: "Lead Organizer"
    },
    organization: "GitHub Copilot Dev Days (3 Ediciones)",
    period: "2025 – 2026",
    description: {
      es: "Coordinación de la agenda técnica y logística de 3 ediciones del evento (2 ediciones realizadas y una 3.ª próxima a iniciar) enfocado en ingeniería de software asistida por IA; dirección de sesiones prácticas sobre ingeniería de prompts, depuración asistida y validación de código en tiempo real.",
      en: "Coordinated technical agenda and logistics for 3 editions of the event (2 editions completed and a 3rd underway) focused on AI-assisted software engineering; led hands-on workshops on prompt engineering, AI debugging, and real-time code verification."
    },
    badge: {
      es: "Liderazgo & Formación IA",
      en: "Leadership & AI Training"
    }
  },
  {
    id: "ibm-z-ambassador",
    role: {
      es: "IBM Z Student Ambassador (Cohorte 2025–2026)",
      en: "IBM Z Student Ambassador (2025–2026 Cohort)"
    },
    organization: "IBM Z",
    period: "2025 – 2026",
    description: {
      es: "Promoción de tecnologías de computación empresarial y mainframes a nivel universitario; diseño y ponencia de 'Introduction to Enterprise Computing' en la UCAB y formación de estudiantes en Python, manejo de datasets y COBOL durante el IBM Z Career Connection.",
      en: "Advocated enterprise computing and mainframes at the university level; designed and delivered 'Introduction to Enterprise Computing' at UCAB, training students in Python, dataset handling, and COBOL during IBM Z Career Connection."
    },
    badge: {
      es: "Enterprise Computing",
      en: "Enterprise Computing"
    }
  },
  {
    id: "solucionalab-hackathon",
    role: {
      es: "1.er Lugar — Hackathon Nacional",
      en: "1st Place — National Hackathon"
    },
    organization: "SolucionaLab Hackathon (Mercantil Seguros)",
    period: "2025",
    description: {
      es: "Co-desarrollo de un agente inteligente NLP para automatizar el análisis de feedback de usuarios, detectar patrones críticos y validar incumplimientos de SLA en tiempo real.",
      en: "Co-developed an intelligent NLP agent to automate customer feedback analysis, detect critical patterns, and validate SLA breaches in real-time."
    },
    badge: {
      es: "Victoria en Hackathon",
      en: "Hackathon Victory"
    }
  },
  {
    id: "dev3pack-hackathon",
    role: {
      es: "Top 27 LATAM — Global Hackathon",
      en: "Top 27 LATAM — Global Hackathon"
    },
    organization: "Dev3pack Global Hackathon (Solana Web3)",
    period: "2026",
    description: {
      es: "Desarrollo independiente de la dApp Smart-Networking integrando registros on-chain en Solana e inteligencia artificial.",
      en: "Solo development of the Smart-Networking dApp integrating on-chain records on Solana and applied artificial intelligence."
    },
    badge: {
      es: "Top Continental Web3",
      en: "Continental Top Web3"
    }
  },
  {
    id: "icpc-competitive-programming",
    role: {
      es: "Programación Competitiva — Selección ICPC & UCAB",
      en: "Competitive Programming — ICPC & UCAB Squad"
    },
    organization: "ICPC (International Collegiate Programming Contest) & UCAB",
    period: "2024 – 2025",
    description: {
      es: "Representante de la UCAB en la Super Regional ICPC Venezuela–Colombia y ganador del 1.er y 5.º lugar en las competencias locales de programación algorítmica de la UCAB bajo estrictas restricciones de tiempo y memoria.",
      en: "Represented UCAB at the ICPC Venezuela–Colombia Super Regional and earned 1st and 5th place in local algorithmic programming contests at UCAB under strict time and memory constraints."
    },
    badge: {
      es: "Algoritmia & Alto Rendimiento",
      en: "Algorithms & High Performance"
    }
  },
  {
    id: "ucab-campus-leadership",
    role: {
      es: "Facilitador Universitario & Liderazgo en Campus",
      en: "University Facilitator & Campus Leadership"
    },
    organization: "Universidad Católica Andrés Bello (UCAB)",
    period: "2024 – 2026",
    description: {
      es: "Docente del microcurso 'Seguridad en Redes' en la UCAB, preparador/tutor de programación y bases de datos, formador en Servicio Comunitario (Progracademy), miembro de Protocolo UCAB / Cultura UCAB y Staff logístico en Game Jam Caracas.",
      en: "Instructor for the 'Network Security' micro-course at UCAB, academic tutor for programming and databases, community service trainer (Progracademy), member of UCAB Protocol/Culture, and logistics staff at Game Jam Caracas."
    },
    badge: {
      es: "Docencia & Comunidad",
      en: "Teaching & Community"
    }
  }
];

export const educationList: EducationItem[] = [
  {
    id: "ucab-engineering",
    institution: "Universidad Católica Andrés Bello (UCAB)",
    degree: {
      es: "Ingeniería Informática (Computer Science & Software Engineering)",
      en: "Informatics Engineering (Computer Science & Software Engineering)"
    },
    period: "En curso (2022 – Presente)",
    location: "Caracas, Venezuela",
    scholarshipOrDistinction: {
      es: "Formación integral con foco en arquitectura de computadores, bajo nivel, algoritmos, bases de datos y sistemas distribuidos.",
      en: "Comprehensive curriculum focused on computer architecture, low-level systems, algorithms, databases, and distributed architectures."
    }
  },
  {
    id: "ucab-blockchain-diploma",
    institution: "Universidad Católica Andrés Bello (UCAB)",
    degree: {
      es: "Diplomado en Desarrollo Blockchain & Web3",
      en: "Diploma in Blockchain & Web3 Development"
    },
    period: "2024 – 2025",
    location: "Caracas, Venezuela",
    scholarshipOrDistinction: {
      es: "Becario de Excelencia Arbitrum (Arbitrum Excellence Scholarship)",
      en: "Arbitrum Excellence Scholarship Recipient"
    }
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "github-foundations",
    name: "GitHub Foundations Certified",
    issuer: "GitHub",
    credentialUrl: "https://www.credly.com/badges/d5bba642-e9df-4598-9ff4-f0d94eddcb06",
    skills: ["Git", "GitHub Actions", "Project Collaboration", "CI/CD Workflows", "Security & Governance"]
  },
  {
    id: "aws-genai",
    name: "Generative AI Foundations",
    issuer: "AWS & IMMUNE Technology Institute",
    skills: ["Generative AI", "LLMs", "Cloud AI Solutions", "Prompt Engineering"]
  },
  {
    id: "platzi-cpp",
    name: "Programación en C++",
    issuer: "Platzi",
    skills: ["C++", "POO", "Punteros y Gestión de Memoria", "STL"]
  },
  {
    id: "udemy-c",
    name: "Lenguaje C: De Cero a Experto",
    issuer: "Udemy",
    skills: ["C", "Memoria Dinámica (malloc/free)", "Estructuras de Datos", "File I/O"]
  },
  {
    id: "udemy-java",
    name: "Fundamentos de Java (Java Fundamentals)",
    issuer: "Udemy",
    skills: ["Java", "POO", "Herencia", "Polimorfismo", "Manejo de Excepciones"]
  },
  {
    id: "udemy-github",
    name: "GitHub Básico",
    issuer: "Udemy",
    skills: ["Git", "Control de Versiones", "GitHub"]
  }
];

export const languagesList: LanguageItem[] = [
  {
    name: {
      es: "Español",
      en: "Spanish"
    },
    proficiency: {
      es: "Nativo",
      en: "Native"
    }
  },
  {
    name: {
      es: "Inglés",
      en: "English"
    },
    proficiency: {
      es: "Intermedio (B1 — Lectura fluida de documentación técnica y preparación funcional activa)",
      en: "Intermediate (B1 — Fluent technical documentation reading & active conversational practice)"
    }
  },
  {
    name: {
      es: "Italiano",
      en: "Italian"
    },
    proficiency: {
      es: "Básico (A2)",
      en: "Elementary (A2)"
    }
  }
];
