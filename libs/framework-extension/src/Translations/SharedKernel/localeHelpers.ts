import { IETFLocaleType, ISOLocaleType, LanguageType } from '../Core/Port/translationServiceInterface';

export const fromIsoLocaleToIETFLocale = (locale: ISOLocaleType): IETFLocaleType => {
    return locale.replace('_', '-') as IETFLocaleType;
};

export const fromLocaleToLang = (locale: IETFLocaleType): LanguageType => {
    return locale.replace(/-.*/, '');
};
