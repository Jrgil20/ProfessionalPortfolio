import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from '../types/i18n';
import { translations, detectBrowserLanguage, saveLanguagePreference } from '../locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Detect and set initial language only on client side
    const detectedLanguage = detectBrowserLanguage();
    setLanguageState(detectedLanguage);
    setIsInitialized(true);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    saveLanguagePreference(newLanguage);
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  // Don't render until language is initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 