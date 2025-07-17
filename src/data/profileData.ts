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
  };
};

export const profileData: Profile = {
  name: "Jesús Gil",
  title: "Computer Science Student",
  summary: "Computer science student with a strong foundation in backend development. My experience in competitive programming has honed my problem-solving and algorithmic skills. Proficient in Python, Go & C/C++",
  photoUrl: "https://avatars.githubusercontent.com/u/131034722?v=4",
  location: "Caracas, VE",
  email: "jesusgil@example.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jesus-r-gil/",
    github: "https://github.com/Jrgil20",
    telegram: "https://t.me/jr_gil"
  }
};