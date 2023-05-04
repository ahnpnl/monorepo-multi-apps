import type { IETFLocaleType, ISOLocaleType, LanguageType } from './types';

export class LocaleHelper {
    static fromLocaleToLang(locale: IETFLocaleType): LanguageType {
        return locale.replace(/-.*/, '');
    }

    static fromIsoLocaleToIETFLocale(locale: ISOLocaleType): IETFLocaleType {
        return locale.replace('_', '-');
    }

    static fromIETFLocaleToIsoLocale(locale: IETFLocaleType): ISOLocaleType {
        return locale.replace('-', '_');
    }

    static fromLocaleToLangName(locale: IETFLocaleType): string | undefined {
        return new Intl.DisplayNames([locale], { type: 'language' }).of(LocaleHelper.fromLocaleToLang(locale));
    }
}
