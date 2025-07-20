export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: Technology[];
  role: string;
  duration: string;
  liveUrl?: string;
  repoUrl?: string;
  features: string[];
  category: 'academic' | 'personal' | 'professional';
};

export const categories = ['All', 'Academic', 'Personal', 'Professional'];

export const projectsData: Project[] = [
  {
    id: 'ac_alive',
    title: 'AC_alive',
    description: 'El Juego de la Vida es un autómata celular creado por John Horton Conway en 1970. Es un juego de cero jugadores determinado por el estado inicial.',
    longDescription: 'Proyecto académico de Algoritmo y Programación 1 que implementa el Juego de la Vida de Conway usando matrices para el caldo de cultivo y procedimientos gráficos interactivos. Incluye inicialización, validación de entradas, gestión de archivos, cálculo de vecinas, aplicación de reglas, transición de generaciones y menús de configuración personalizables.',
    imageUrl: 'https://i.imgur.com/gQxbQbP.jpg',
    technologies: [
      { name: 'Pascal', color: '#B0CEFF' }
    ],
    role: 'Desarrollador',
    duration: 'Semestre',
    repoUrl: 'https://github.com/Jrgil20/AlgProg1',
    features: [
      'Definición de matrices para representar el caldo de cultivo y células vecinas',
      'Procedimientos gráficos para presentación, menús interactivos e impresión de la matriz',
      'Inicialización de datos por defecto y validación de entradas de usuario',
      'Gestión de archivos: revisión de entrada y escritura del estado en archivos de salida',
      'Cálculo de vecinas, aplicación de reglas de Conway y transición de generaciones',
      'Opciones de personalización de colores, bordes, rutas y modos de población',
      'Programa principal con flujo de menús, edición del caldo de cultivo y visualización de resultados'
    ],
    category: 'academic'
  }
];