import { $, component$, createContextId, type QRL, Slot, useContextProvider, useSignal } from '@builder.io/qwik';
import { changeLocale, type LoadTranslationFn, QwikSpeakProvider, useSpeakContext } from 'qwik-speak';
import { isServer } from '@builder.io/qwik/build';

import type {
    IETFLocaleType,
    LanguageType,
    SetLocaleHookType,
    TranslationMessagesType,
} from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';
import { APP_DEFAULT_LOCALE } from '../../../../config/locales';
import type { QwiKTranslationStateType } from '~/Infrastructure/Translations/QwikSpeak/types';

export const QwikTranslationStateContext = createContextId<QwiKTranslationStateType>('QwikTranslationStateContext');

export const QwikSetLocaleContext = createContextId<QRL<SetLocaleHookType>>('QwikSetLocaleContext');

const loadTranslation$: LoadTranslationFn = $(async (lang: LanguageType, asset: string, origin?: string) => {
    let url = '';
    let data: TranslationMessagesType | null = null;
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

const TranslationProvider = component$(() => {
    const speakContext = useSpeakContext();
    const currentLocale = useSignal<IETFLocaleType>(APP_DEFAULT_LOCALE);
    const supportedLocales = useSignal<IETFLocaleType[]>([APP_DEFAULT_LOCALE]);
    useContextProvider(QwikTranslationStateContext, {
        locale: currentLocale,
        supportedLocales,
    });
    useContextProvider(
        QwikSetLocaleContext,
        $((requestedLocale) => {
            currentLocale.value = requestedLocale;
            supportedLocales.value = Array.from(new Set([...supportedLocales.value, requestedLocale]));

            return changeLocale({ lang: requestedLocale }, speakContext);
        }),
    );

    return <Slot />;
});

export const QwikSpeakAdapter = component$(() => {
    return (
        <QwikSpeakProvider
            config={{
                defaultLocale: { lang: APP_DEFAULT_LOCALE },
                supportedLocales: [{ lang: APP_DEFAULT_LOCALE }],
                assets: ['common'],
            }}
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
