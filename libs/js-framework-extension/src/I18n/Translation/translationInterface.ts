import type { IETFLocaleType, LanguageType } from 'js-extension/src/I18n';

type TranslationParametersType<T = Record<string, unknown>> = T & Record<string, unknown>;
export type TranslationInputType =
    | string
    | {
    key: string;
    namedValue?: TranslationParametersType;
    count?: number;
};

export interface TranslationStateInterface<TLocale = IETFLocaleType, TLanguage = LanguageType> {
    locale: TLocale;
    language: TLanguage;
}

export type TranslateFnType = (translationInput: TranslationInputType) => string;

export type TranslationDataProviderKeyInputsType = Record<string, TranslationInputType | TranslationInputType[]>;

export type TranslationDataType = Record<keyof TranslationDataProviderKeyInputsType, string | string[]>;
