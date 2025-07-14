export type SkillCategory = {
  id: string;
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // 1-5
  projects: Project[];
  certifications: Certification[];
};

type Project = {
  name: string;
  description: string;
};

type Certification = {
  name: string;
  issuer: string;
  type: 'curso' | 'certificación profesional';
  level: 'básico' | 'intermedio' | 'avanzado';
  date: string;
};

export const skillsData: SkillCategory[] = [
  {
    id: 'prog-langs',
    name: 'Lenguajes de Programación',
    skills: [
      {
        name: 'C',
        level: 3,
        projects: [],
        certifications: [
          {
            name: 'Aprende Lenguaje C de CERO a EXPERTO',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Mayo 2023'
          }
        ]
      },
      {
        name: 'C++',
        level: 2,
        projects: [],
        certifications: [
          {
            name: 'Curso de C++ Básico',
            issuer: 'Platzi',
            type: 'curso',
            level: 'básico',
            date: 'Noviembre 2024'
          }
        ]
      },
      {
        name: 'Java',
        level: 2,
        projects: [],
        certifications: [
          {
            name: 'Curso de Java - Nivel Básico',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Septiembre 2023'
          }
        ]
      },
      {
        name: 'Go',
        level: 3,  // Increased to 3 due to having both basic and intermediate certifications
        projects: [],
        certifications: [
          {
            name: 'Curso de Go Intermedio: Programación Orientada a Objetos y Concurrencia',
            issuer: 'Platzi',
            type: 'curso',
            level: 'intermedio',
            date: 'Marzo 2025'
          },
          {
            name: 'Curso Básico de Programación en Go',
            issuer: 'Platzi',
            type: 'curso',
            level: 'básico',
            date: 'Marzo 2025'
          }
        ]
      },
      {
        name: 'Pascal',
        level: 1, // lenguaje de programación básico
        projects: [
          { name: 'AC_alive', description: 'Implementación del Juego de la Vida de Conway en Pascal como parte del proyecto académico AC_alive' }
        ],
        certifications: []
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud y DevOps',
    skills: [
      {
        name: 'Control de Versiones (Git/Github)',
        level: 3,  // Increased level due to multiple certifications
        projects: [],
        certifications: [
          {
            name: 'Curso de Git y GitHub',
            issuer: 'Platzi',
            type: 'curso',
            level: 'básico',
            date: 'Marzo 2025'
          },
          {
            name: 'Github Basics',
            issuer: 'Udemy',
            type: 'curso',
            level: 'básico',
            date: 'Octubre 2024'
          }
        ]
      }
    ]
  },
  {
    id: 'soft-skills',
    name: 'Habilidades Blandas',
    skills: [
      {
        name: 'Gestión del Tiempo',
        level: 2,
        projects: [],
        certifications: [
          {
            name: 'Gestión Del Tiempo: Productividad y Planificación Objetivos',
            issuer: 'Udemy',
            type: 'curso',
            level: 'intermedio',
            date: 'Febrero 2023'
          }
        ]
      }
    ]
  },
  {
    id: 'dev-tools',
    name: 'Herramientas de Desarrollo',
    skills: [
      {
        name: 'Visual Studio Code',
        level: 4,
        projects: [],
        certifications: [
          {
            name: 'Curso de Visual Studio Code y GitHub Copilot',
            issuer: 'Código Facilito',
            type: 'curso',
            level: 'intermedio',
            date: 'Abril 2025'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-tools',
    name: 'Herramientas de IA',
    skills: [
      {
        name: 'GitHub Copilot',
        level: 4,
        projects: [],
        certifications: [
          {
            name: 'Curso de Visual Studio Code y GitHub Copilot',
            issuer: 'Código Facilito',
            type: 'curso',
            level: 'intermedio',
            date: 'Abril 2025'
          }
        ]
      }
    ]
  }
];