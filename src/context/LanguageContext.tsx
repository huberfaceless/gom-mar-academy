import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase/config';
import { LanguageCode, TranslationKey, translations } from '../i18n/translations';

const STORAGE_KEY = 'gommar-language';
const SUPPORTED_LANGUAGES: LanguageCode[] = ['de', 'en', 'pl'];

type TranslationValues = Record<string, string | number>;

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKey, values?: TranslationValues) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const detectInitialLanguage = (): LanguageCode => {
  if (typeof window === 'undefined') return 'de';

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) return storedLanguage;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const detected = browserLanguages
    .map((locale) => locale.toLowerCase().split('-')[0])
    .find((locale): locale is LanguageCode => SUPPORTED_LANGUAGES.includes(locale as LanguageCode));

  return detected || 'de';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(detectInitialLanguage);

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    auth.languageCode = language;
  }, [language]);

  const t = useCallback((key: TranslationKey, values?: TranslationValues) => {
    const template = translations[language][key] || translations.de[key];
    if (!values) return template;

    return Object.entries(values).reduce(
      (result, [name, value]) => result.replaceAll(`{${name}}`, String(value)),
      template,
    );
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage muss innerhalb des LanguageProvider verwendet werden.');
  return context;
};

