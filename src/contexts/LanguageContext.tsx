// Language Context Provider with Glitch Animation
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
    
    // Change language at the middle of the glitch animation
    setTimeout(() => {
      setLanguageState(lang);
    }, 300);
    
    // End transition after full animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isTransitioning,
  };

  return (
    <LanguageContext.Provider value={value}>
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