import type { IETFLocaleType, LanguageType } from 'js-extension/src/I18n/types';

type TranslationParametersType = Record<string, string>;
export type TranslationInputType =
    | string
    | {
    key: string;
    namedValue?: TranslationParametersType;
    count?: number;
};

export interface TranslationStateInterface<
    TLocale = IETFLocaleType,
    TLanguage = LanguageType,
> {
    locale: TLocale;
    language: TLanguage;
}

export type TranslateFnType = (translationInput: TranslationInputType) => string;

export type SetLocaleFnType = (requestedLocale: string) => Promise<void>;
