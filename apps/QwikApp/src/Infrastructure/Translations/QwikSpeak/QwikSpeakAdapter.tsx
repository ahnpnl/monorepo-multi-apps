import { $, component$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import type { IETFLocaleType } from 'js-extension/src/I18n/types';
import { type LoadTranslationFn, QwikSpeakProvider, type SpeakConfig, type Translation } from 'qwik-speak';

import { TranslationProvider } from './TranslationProvider';
import { APP_DEFAULT_LOCALE } from '../../../../config/locales';

const loadTranslation$: LoadTranslationFn = $(async (lang, asset, origin?) => {
    let url = '';
    let data: Translation | null = null;
    // Absolute urls on server
    if (isServer && origin) {
        url = origin;
    }
    url += `/assets/i18n/${lang}/${asset}.json`;

    try {
        const response = await fetch(url);
        data = response.ok ? await response.json() : null;
    } catch (error) {
        console.log('loadTranslation$ error: ', error);
    }

    if (!data) {
        console.warn(`loadTranslation$: ${url} not found`);
    }

    return data;
});

interface QwikSpeakAdapterPropsInterface {
    initialLocale: IETFLocaleType;
}

export const QwikSpeakAdapter = component$(({ initialLocale }: QwikSpeakAdapterPropsInterface) => {
    const speakConfig: SpeakConfig = {
        defaultLocale: { lang: APP_DEFAULT_LOCALE },
        supportedLocales: [{ lang: APP_DEFAULT_LOCALE }, { lang: 'nl-NL' }],
        assets: ['common'],
    };

    return (
        <QwikSpeakProvider
            locale={{ lang: initialLocale }}
            config={speakConfig}
            translationFn={{
                loadTranslation$,
            }}
        >
            <TranslationProvider>
                <Slot />
            </TranslationProvider>
        </QwikSpeakProvider>
    );
});
