import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../types/i18n';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-2 text-left hover:bg-neutral-50 transition-colors duration-200 flex items-center gap-3 ${
                  language === lang.code ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector; 