import { Language, Translations } from '../types/i18n';
import { es } from './es';
import { en } from './en';

export const translations: Record<Language, Translations> = {
  es,
  en
};

export const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'; // Default for SSR
  
  const savedLanguage = localStorage.getItem('portfolio-language') as Language;
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }
  
  const browserLanguage = navigator.language.toLowerCase();
  
  // Check for exact matches
  if (browserLanguage.startsWith('es')) {
    return 'es';
  }
  if (browserLanguage.startsWith('en')) {
    return 'en';
  }
  
  // Default to Spanish
  return 'es';
};

export const saveLanguagePreference = (language: Language): void => {
  localStorage.setItem('portfolio-language', language);
};

export { es, en };
export type { Language, Translations }; 