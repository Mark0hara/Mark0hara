// Language Context Provider — instant, clean fade
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    setIsTransitioning(true);
    // Fade out current text, swap, fade in new text — total ~300ms
    window.setTimeout(() => {
      setLanguageState(lang);
      window.setTimeout(() => setIsTransitioning(false), 160);
    }, 140);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};