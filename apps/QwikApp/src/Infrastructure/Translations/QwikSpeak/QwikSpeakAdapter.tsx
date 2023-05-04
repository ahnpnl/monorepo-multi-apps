import { component$, Slot } from '@builder.io/qwik';
import type { IETFLocaleType } from 'js-extension/src/I18n';
import { QwikSpeakProvider, type SpeakConfig } from 'qwik-speak';

import { TranslationProvider } from './TranslationProvider';
import { translationFn } from './qwikTranslationFn';
import { APP_DEFAULT_LOCALE, APP_SUPPORTED_LOCALES } from "../../../../config/locales";

export const speakConfig: SpeakConfig = {
    defaultLocale: { lang: APP_DEFAULT_LOCALE },
    supportedLocales: APP_SUPPORTED_LOCALES.map((locale) => ({ lang: locale })),
    assets: ['common'],
};

interface QwikSpeakAdapterPropsInterface {
    initialLocale: IETFLocaleType;
}

export const QwikSpeakAdapter = component$(({ initialLocale }: QwikSpeakAdapterPropsInterface) => {
    return (
        <QwikSpeakProvider
            locale={{ lang: initialLocale }}
            config={speakConfig}
            translationFn={translationFn}
        >
            <TranslationProvider>
                <Slot />
            </TranslationProvider>
        </QwikSpeakProvider>
    );
});
