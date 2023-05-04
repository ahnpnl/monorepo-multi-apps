import { $, component$, Slot } from '@builder.io/qwik';
import type { IETFLocaleType } from 'js-extension/src/I18n';
import { QwikSpeakProvider, type Translation } from 'qwik-speak';

import { speakConfig } from './QwikSpeakAdapter';
import { TranslationProvider } from './TranslationProvider';

interface TestTranslationAdapterPropsInterface {
    translations: Translation;
    initialLocale: IETFLocaleType;
}

export const TestTranslationAdapter = component$(
    ({ translations, initialLocale }: TestTranslationAdapterPropsInterface) => {
        return (
            <QwikSpeakProvider
                locale={{ lang: initialLocale }}
                config={speakConfig}
                translationFn={{
                    loadTranslation$: $(() => translations),
                }}
            >
                <TranslationProvider>
                    <Slot />
                </TranslationProvider>
            </QwikSpeakProvider>
        );
    },
);
