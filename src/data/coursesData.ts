export type Course = {
  id: string;
  title: string;
  provider: string;
  date: Date;
  duration: string;
  description: string;
  skills: string[];
  imageUrl: string;
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
    imageUrl: 'https://static.platzi.com/media/achievements/badge-go-57d6b6ee-c9de-4d9e-9e2c-29a0c879748d-1859b16d-1c87-4b38-bf0a-aee1256cc355.webp',
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
    imageUrl: 'https://static.platzi.com/media/achievements/badge-intermedio-golang-20f7fb00-da03-47a1-b62d-4dd583308c52.png',
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
    imageUrl: 'https://static.platzi.com/media/achievements/badge-8-738d990a-87e0-488a-b069-6ac164a2790c.png',
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
    imageUrl: 'https://static.platzi.com/media/achievements/badges-curso-c-basico-9e53cb3b-acf8-4842-bedd-9210ffaba942.png',
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
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e05cdb24-ef21-46e7-b6ff-653e276ef402.jpg?v=1729722776000',
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
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-70267a58-44f7-47b4-9f5a-cd4aaf73d135.jpg?v=1695561503000',
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
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-dbdd0133-33b9-47ce-b0d0-442f53dd7f03.jpg?v=1683449779000',
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
    imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-50268fcd-d61a-4dfb-9d44-2f8d22cf9897.jpg?v=1675826844000',
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
    imageUrl: 'https://codigofacilito.com/assets/certificate-placeholder-c9758dcd4e3398322cc590f6313fde7b4d184b28e67d3500ffdac5d690a75b41.png',
    certificateUrl: 'https://codigofacilito.com/certificates/c8724f43-aa59-4865-8094-66f59c82f047',
    level: 'intermedio',
    category: 'tools'
  }
];