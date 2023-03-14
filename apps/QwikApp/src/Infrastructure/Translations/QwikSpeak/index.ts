import { type QRL, useTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { fromLocaleToLang } from 'js-extension/src/I18n/localeHelpers';
import type { IETFLocaleType, LanguageType } from 'js-extension/src/I18n/types';
import { useSpeakContext } from 'qwik-speak';
import { APP_DEFAULT_LANG, APP_DEFAULT_LOCALE } from '../../../../config/locales';
import { LANG_TO_LOCALE } from 'js-extension/src/I18n/language';

export const fromLangToLocale = (lang: LanguageType): IETFLocaleType => {
    return LANG_TO_LOCALE[lang] ?? APP_DEFAULT_LOCALE;
};

export const useLocaleChanged = (cb: QRL<(newLang: LanguageType, oldLang: LanguageType) => void>): void => {
    const loc = useLocation();
    const speakContext = useSpeakContext();

    useTask$(async ({ track }) => {
        const updatedLocale = track(() => speakContext.locale.lang);
        const newLang = fromLocaleToLang(updatedLocale);
        const oldLang = fromLocaleToLang(loc.params.lang ?? APP_DEFAULT_LANG);
        await cb(newLang, oldLang);
    });
};

export * from './QwikSpeakAdapter';
export * from './TestTranslationProvider';
export * from './TranslationProvider';
