import { component$, Slot, $ } from '@builder.io/qwik';
import type { IETFLocaleType } from 'js-extension/src/I18n/types';
import { type LoadTranslationFn, QwikSpeakProvider, type Translation, type TranslationFn } from 'qwik-speak';

import { TranslationProvider } from './TranslationProvider';

interface TestTranslationAdapterPropsInterface {
    defaultLocale: IETFLocaleType;
    availableLocales?: IETFLocaleType[];
    translations: Translation;
    initialLocale: IETFLocaleType;
}

export const TestTranslationAdapter = component$(
    ({ defaultLocale, availableLocales, translations, initialLocale }: TestTranslationAdapterPropsInterface) => {
        const speakConfig = {
            defaultLocale: { lang: defaultLocale },
            supportedLocales: availableLocales?.map((locale) => ({ lang: locale })) ?? [{ lang: defaultLocale }],
            assets: ['test'],
        };
        const loadTranslation$: LoadTranslationFn = $(() => translations);

        const translationFn: TranslationFn = {
            loadTranslation$,
        };

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
    },
);
