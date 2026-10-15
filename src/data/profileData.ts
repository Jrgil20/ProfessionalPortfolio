import { Language } from '../types/i18n';
import { profileData as centralProfile } from './portfolioData';

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
  name: centralProfile.name,
  title: centralProfile.headline,
  summary: centralProfile.fullAbout,
  photoUrl: centralProfile.photoUrl,
  location: "Caracas, Venezuela",
  email: centralProfile.email,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jesus-r-gil/",
    github: "https://github.com/Jrgil20",
    telegram: "https://t.me/Jr_Gil"
  }
};