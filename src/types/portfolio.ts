import { Language } from './i18n';

export type BilingualText = Record<Language, string>;

export type ProjectCategory = 
  | 'all' 
  | 'ai-agents' 
  | 'backend-fullstack' 
  | 'web3' 
  | 'systems-algorithms' 
  | 'cybersecurity';

export interface ProjectBadge {
  type: 'hackathon' | 'private' | 'award' | 'community';
  label: BilingualText;
}

export interface Project {
  id: string;
  title: string;
  headline: BilingualText;
  description: BilingualText;
  categories: ProjectCategory[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  badge?: ProjectBadge;
  stars?: number;
}

export interface ExperienceItem {
  id: string;
  role: BilingualText;
  organization: string;
  period: string;
  description: BilingualText;
  badge?: BilingualText;
}

export interface SkillCategory {
  id: string;
  title: BilingualText;
  skills: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: BilingualText;
  description: BilingualText;
  highlight?: string;
  sourceUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: BilingualText;
  period: string;
  location: string;
  scholarshipOrDistinction?: BilingualText;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface LanguageItem {
  name: BilingualText;
  proficiency: BilingualText;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  location: BilingualText;
  availability: BilingualText;
  headline: BilingualText;
  heroPitch: BilingualText;
  fullAbout: BilingualText;
  photoUrl: string;
  email: string;
  cvUrl: string;
  socialLinks: SocialLinkItem[];
}