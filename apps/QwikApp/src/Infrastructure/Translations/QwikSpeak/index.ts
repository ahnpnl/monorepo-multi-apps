import { type IETFLocaleType, LANG_TO_LOCALE, type LanguageType } from 'js-extension/src/I18n';

import { APP_DEFAULT_LOCALE } from '../../../../config/locales';

export const fromLangToLocale = (lang: LanguageType): IETFLocaleType => {
    return LANG_TO_LOCALE[lang] ?? APP_DEFAULT_LOCALE;
};

export * from './QwikSpeakAdapter';
export * from './TestTranslationAdapter';
export * from './TranslationProvider';
