import { Language } from '../types/i18n';

export type Profile = {
  name: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  photoUrl: string;
  location: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
    telegram?: string;
  };
};

export const profileData: Profile = {
  name: "Jesús Gil",
  title: {
    es: "Estudiante de Ingeniería Informática",
    en: "Computer Science Student"
  },
  summary: {
    es: "Estudiante de ingeniería informática con una sólida base en desarrollo backend. Mi experiencia en programación competitiva ha perfeccionado mis habilidades de resolución de problemas y algorítmica. Competente en Python, Go y C/C++",
    en: "Computer science student with a strong foundation in backend development. My experience in competitive programming has honed my problem-solving and algorithmic skills. Proficient in Python, Go & C/C++"
  },
  photoUrl: "https://avatars.githubusercontent.com/u/131034722?v=4",
  location: "Caracas, VE",
  email: "fariasjesusrodolfo@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jesus-r-gil/",
    github: "https://github.com/Jrgil20",
    telegram: "https://t.me/jr_gil"
  }
};