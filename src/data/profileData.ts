export type Profile = {
  name: string;
  title: string;
  summary: string;
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
  title: "Estudiante de Ingeniería Informática",
  summary: "Estudiante de ingeniería informática con una sólida base en desarrollo backend. Mi experiencia en programación competitiva ha perfeccionado mis habilidades de resolución de problemas y algorítmica. Competente en Python, Go y C/C++",
  photoUrl: "https://avatars.githubusercontent.com/u/131034722?v=4",
  location: "Caracas, VE",
  email: "fariasjesusrodolfo@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jesus-r-gil/",
    github: "https://github.com/Jrgil20",
    telegram: "https://t.me/jr_gil"
  }
};