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
  },
  {
    id: 'centro_estudiantes',
    title: 'Centro De Estudiantes',
    description: 'Este es el proyecto academico desarrollado en la materia de algoritmos y programacion 2, basado en el lenguaje de programacion C, el cual tiene como objetivo la gestion de registros de estudiantes, cursos y materias.',
    longDescription: `Este es el proyecto academico desarrollado en la materia de algoritmos y programacion 2, basado en el lenguaje de programacion C, el cual tiene como objetivo la gestion de registros de estudiantes, cursos y materias.\n\nBajo la supervision del profesor: Omar Jesus Hernandez\n\nEl proyecto CentroDeEstudiantes está diseñado para gestionar registros de estudiantes, cursos y materias en una institución educativa. Proporciona funcionalidades para agregar, modificar, eliminar y consultar información sobre estudiantes, cursos y materias. El objetivo principal es facilitar la administración académica y el seguimiento del desempeño estudiantil.`,
    imageUrl: '',
    technologies: [
      { name: 'C', color: '#A8B9CC' }
    ],
    role: 'Desarrollador',
    duration: '1 semestre',
    repoUrl: 'https://github.com/Jrgil20/Proyecto_AlgProgram2',
    features: [
      'Agregar_Materia: Agrega una nueva materia a la lista de materias.',
      'Agregar_Curso: Agrega un nuevo curso a la lista de cursos.',
      'Agregar_Persona: Agrega un nuevo estudiante a la lista de personas.',
      'Agregar_Curso_persona: Inscribe a un estudiante en un curso.',
      'Modificar_Materia: Modifica los detalles de una materia existente.',
      'Modificar_Curso: Modifica los detalles de un curso existente.',
      'Modificar_Persona: Modifica los detalles de un estudiante existente.',
      'Modificar_Curso_persona: Modifica la inscripción de un estudiante en un curso.',
      'Eliminar_materia: Elimina una materia y sus cursos asociados.',
      'Eliminar_curso: Elimina un curso y sus referencias en el sistema.',
      'Eliminar_persona: Elimina un estudiante y sus participaciones.',
      'Eliminar_curso_persona: Elimina la participación de un estudiante en un curso.',
      'Consultar_materia: Consulta y muestra detalles de materias.',
      'Consultar_curso: Consulta y muestra detalles de cursos.',
      'Consultar_Personas: Consulta y muestra detalles de estudiantes.',
      'C_NombreMateria: Busca materias por nombre y muestra sus cursos asociados.',
      'C_NombreAlumno: Busca estudiantes por nombre y muestra sus detalles.',
      'c_Materia: Muestra los detalles de una materia y sus cursos asociados.',
      'c_CursosDePeriodo: Muestra los cursos ofrecidos en un semestre específico.',
      'C_Aprobados: Muestra los estudiantes que han aprobado una materia.',
      'C_Cursos: Muestra todos los cursos con sus estudiantes y calificaciones.',
      'C_CursosDeAnyoLapso: Muestra los cursos de un año y lapso específicos.',
      'C_Alumno: Muestra los cursos y calificaciones de un estudiante específico.',
      'Exportar_Materias, Exportar_Cursos, Exportar_Personas: Guardan datos en archivos.',
      'Importar_Materias, Importar_Cursos, Importar_Personas: Cargan datos desde archivos.'
    ],
    category: 'academic'
  }
];