type Translation = {
  singular: string;
  plural: string;
};

export type LanguageCode = {
  'en-US': string;
  'pt-BR': string;
};

export type TranslationKeys = {
  MSG01:Translation;
  MSG02:Translation;
};

export type DefaultTranslation = {
  [key in keyof TranslationKeys]: Translation;
};

export interface ContextData {
  languageCode: keyof LanguageCode;
  translate(key: keyof TranslationKeys, countReference?: number): string;
  changeLanguage(language: keyof LanguageCode): void;
}
