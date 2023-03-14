import type { IETFLocaleType, ISOLocaleType, LanguageType } from '../Core/Port/translationServiceInterface';

export const fromIsoLocaleToIETFLocale = (locale: ISOLocaleType): IETFLocaleType => {
    return locale.replace('_', '-');
};

export const fromLocaleToLang = (locale: IETFLocaleType): LanguageType => {
    return locale.replace(/-.*/, '');
};
