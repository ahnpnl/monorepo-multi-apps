import { isDev } from '@builder.io/qwik/build';
import { server$ } from '@builder.io/qwik-city';
import type { LoadTranslationFn, TranslationFn } from 'qwik-speak';

const translationData = import.meta.glob('/assets/i18n/**/*.json');

const loadTranslation$: LoadTranslationFn = server$((lang, asset) => {
    const langAsset = `/assets/i18n/${lang}/${asset}.json`;
    if (langAsset in translationData) {
        return translationData[langAsset]();
    }

    if (isDev) {
        console.warn(`loadTranslation$: ${langAsset} not found`);
    }

    return null;
});

export const translationFn: TranslationFn = {
    loadTranslation$,
};
