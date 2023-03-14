import type { IETFLocaleType, ISOLocaleType, LanguageType } from './types';

export const fromLocaleToLang = (locale: IETFLocaleType): LanguageType => {
    return locale.replace(/-.*/, '');
};

export const fromIsoLocaleToIETFLocale = (locale: ISOLocaleType): IETFLocaleType => {
    return locale.replace('_', '-');
};

export const fromLocaleToLangName = (locale: IETFLocaleType): string | undefined => {
    return new Intl.DisplayNames([locale], { type: 'language' }).of(fromLocaleToLang(locale));
};
