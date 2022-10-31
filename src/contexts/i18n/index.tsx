import React, { createContext, useCallback, useContext } from 'react';
import { usePersistedState } from '@/hooks/usePersistedState';
import { useState } from 'react';
import {
  DefaultTranslation,
  ContextData,
  LanguageCode,
  TranslationKeys,
} from './interfaces';
import { brazilPortuguese, english } from './languages';

const I18nContext = createContext<ContextData>({} as ContextData);

const I18nProvider: React.FC<{children:React.ReactNode,defaultLanguageCode?:string}> = ({ children,defaultLanguageCode }) => {
  const selectTranslationsByLanguageCode = useCallback((code:string) => {
    let selectedTranslations: DefaultTranslation;
    let selectedLanguageCode: keyof LanguageCode;
    switch (code.toUpperCase()) {
      case 'EN-US':
        selectedLanguageCode = 'en-US';
        selectedTranslations = english;
        break;

      default:
        selectedLanguageCode = 'pt-BR';
        selectedTranslations = brazilPortuguese;
        break;
    }
    return { selectedLanguageCode, selectedTranslations };
  }, []);

  const defaultLanguage = useCallback((): keyof LanguageCode => {
    const browserLanguage = defaultLanguageCode || window.navigator.language;
    const { selectedLanguageCode } = selectTranslationsByLanguageCode(
      browserLanguage,
    );
    return selectedLanguageCode;
  }, [selectTranslationsByLanguageCode]);

  const [languageCode, setLanguageCode] = usePersistedState<keyof LanguageCode>(
    'languageCode',
    defaultLanguage(),
  );

  const defaultTranslationsByBrowser = useCallback((): DefaultTranslation => {
    const { selectedTranslations } = selectTranslationsByLanguageCode(
      languageCode,
    );
    return selectedTranslations;
  }, [languageCode, selectTranslationsByLanguageCode]);

  const [translations, setTranslations] = useState<DefaultTranslation>(
    defaultTranslationsByBrowser(),
  );

  const changeLanguage = useCallback(
    (languageCode: keyof LanguageCode): void => {
      const {
        selectedLanguageCode,
        selectedTranslations,
      } = selectTranslationsByLanguageCode(languageCode);

      setLanguageCode(selectedLanguageCode);
      setTranslations(selectedTranslations);
    },
    [selectTranslationsByLanguageCode, setLanguageCode, setTranslations],
  );

  const translate = useCallback(
    (translateKey: keyof TranslationKeys, countReference?: number): string => {
      const isPlural = !!countReference && countReference > 1;
      const translation = translations[translateKey];

      return isPlural ? translation.plural : translation.singular;
    },
    [translations],
  );

  return (
    <I18nContext.Provider value={{ languageCode, translate, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

const useI18n = (): ContextData => {
  return  useContext(I18nContext);
};

export { useI18n, I18nProvider };
