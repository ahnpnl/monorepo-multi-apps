export type LanguageType = string;
export type ISOLocaleType = string;
export type IETFLocaleType = string;
type TranslationParametersType = Record<string, string>;
export type TranslationInputType =
    | string
    | {
    key: string;
    namedValue?: TranslationParametersType;
    count?: number;
};
export type TranslationMessagesType = object;

export interface TranslationStateInterface<TLocale = IETFLocaleType, TSupportedLocales = IETFLocaleType[]> {
    locale: TLocale;
    supportedLocales: TSupportedLocales;
}

export type TranslateHookType = (translationInput: TranslationInputType) => string;

export type SetLocaleHookType = (requestedLocale: string) => Promise<void>;
