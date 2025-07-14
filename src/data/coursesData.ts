export type Course = {
  id: string;
  title: string;
  provider: string;
  date: Date;
  duration: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
  level: 'básico' | 'intermedio' | 'avanzado';
  category: 'programming' | 'tools' | 'soft-skills' | 'other';
};

export const providers = [
  'All',
  'Udemy',
  'Platzi',
  'Código Facilito',
  'Others'
];

export const coursesData: Course[] = [
  {
    id: 'course-1',
    title: 'Curso Básico de Programación en Go',
    provider: 'Platzi',
    date: new Date('2025-03-15'),
    duration: '4 horas',
    description: 'Curso básico de programación en Go que cubre los fundamentos del lenguaje.',
    skills: ['Golang'],
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2232-programacion-golang/diploma/detalle/',
    level: 'básico',
    category: 'programming'
  },
  {
    id: 'course-2',
    title: 'Curso de Go Intermedio: Programación Orientada a Objetos y Concurrencia',
    provider: 'Platzi',
    date: new Date('2025-03-16'),
    duration: '5 horas',
    description: 'Curso intermedio de Go que profundiza en programación orientada a objetos y concurrencia.',
    skills: ['Golang', 'Programación Orientada a Objetos', 'Concurrencia'],
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2357-golang-intermedio/diploma/detalle/',
    level: 'intermedio',
    category: 'programming'
  },
  {
    id: 'course-3',
    title: 'Curso de Git y GitHub',
    provider: 'Platzi',
    date: new Date('2025-03-15'),
    duration: '6 horas',
    description: 'Curso completo de control de versiones con Git y GitHub.',
    skills: ['Control de versiones', 'Git', 'Github'],
    certificateUrl: 'https://platzi.com/p/jrgil/curso/11059-gitgithub/diploma/detalle/',
    level: 'básico',
    category: 'tools'
  },
  {
    id: 'course-4',
    title: 'Curso de C++ Básico',
    provider: 'Platzi',
    date: new Date('2024-11-17'),
    duration: '2 horas',
    description: 'Introducción a los fundamentos de programación en C++.',
    skills: ['C++'],
    certificateUrl: 'https://platzi.com/p/jrgil/curso/2372-c-plus-plus/diploma/detalle/',
    level: 'básico',
    category: 'programming'
  },
  {
    id: 'course-5',
    title: 'Github Basics',
    provider: 'Udemy',
    date: new Date('2024-10-23'),
    duration: '1 hora',
    description: 'Curso básico de GitHub para principiantes.',
    skills: ['Control de versiones', 'Github'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-e05cdb24-ef21-46e7-b6ff-653e276ef402/',
    level: 'básico',
    category: 'tools'
  },
  {
    id: 'course-6',
    title: 'Curso de Java - Nivel Básico',
    provider: 'Udemy',
    date: new Date('2023-09-24'),
    duration: '4.5 horas',
    description: 'Curso introductorio al lenguaje de programación Java.',
    skills: ['Lenguaje de programación: JAVA'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-70267a58-44f7-47b4-9f5a-cd4aaf73d135/',
    level: 'básico',
    category: 'programming'
  },
  {
    id: 'course-7',
    title: 'Aprende Lenguaje C de CERO a EXPERTO',
    provider: 'Udemy',
    date: new Date('2023-05-07'),
    duration: '2.5 horas',
    description: 'Curso completo del lenguaje de programación C desde cero.',
    skills: ['C (lenguaje de programación)', 'Desarrollo backend'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-dbdd0133-33b9-47ce-b0d0-442f53dd7f03/',
    level: 'básico',
    category: 'programming'
  },
  {
    id: 'course-8',
    title: 'Gestión Del Tiempo: Productividad y Planificación Objetivos',
    provider: 'Udemy',
    date: new Date('2023-02-07'),
    duration: '1 hora',
    description: 'Curso sobre técnicas de gestión del tiempo y productividad personal.',
    skills: ['Gestión del tiempo', 'Productividad'],
    certificateUrl: 'https://www.udemy.com/certificate/UC-50268fcd-d61a-4dfb-9d44-2f8d22cf9897/',
    level: 'intermedio',
    category: 'soft-skills'
  },
  {
    id: 'course-9',
    title: 'Curso de Visual Studio Code y GitHub Copilot',
    provider: 'Código Facilito',
    date: new Date('2025-04-15'),
    duration: 'No especificado',
    description: 'Curso sobre el uso avanzado de Visual Studio Code y GitHub Copilot.',
    skills: ['IDE/VSCode', 'IA/GitHub Copilot'],
    certificateUrl: 'https://codigofacilito.com/certificates/c8724f43-aa59-4865-8094-66f59c82f047',
    level: 'intermedio',
    category: 'tools'
  }
];