import {
    $,
    component$,
    createContextId,
    type QRL,
    Slot,
    useComputed$,
    useContext,
    useContextProvider,
    useSignal,
} from '@builder.io/qwik';
import { fromLocaleToLang } from 'js-extension/src/I18n/localeHelpers';
import { $plural, $translate, changeLocale, useSpeakContext } from 'qwik-speak';

import type {
    SetLocaleFnType,
    TranslateFnType,
} from 'framework-extension/src/Translations/translationServiceInterface';
import type { IETFLocaleType } from 'js-extension/src/I18n/types';
import type { QwikSpeakTranslationStateType } from '~/Infrastructure/Translations/QwikSpeak/types';

const TranslationStateContextId = createContextId<QwikSpeakTranslationStateType>('TranslationStateContext');

const SetLocaleContextId = createContextId<QRL<SetLocaleFnType>>('SetLocaleContext');

export const useTranslationState = () => useContext(TranslationStateContextId);

export const useSetLocale = () => useContext(SetLocaleContextId);

export const useTranslate = (): TranslateFnType => {
    return (translationInput) => {
        if (typeof translationInput === 'string') return $translate(translationInput);

        const namedValue = translationInput.namedValue ?? Object.create(null);
        if (typeof translationInput.count !== 'undefined') return $plural(translationInput.count, translationInput.key);

        return $translate(translationInput.key, namedValue);
    };
};

export const TranslationProvider = component$(() => {
    const speakContext = useSpeakContext();
    const currentLocale = useComputed$(() => speakContext.locale.lang);
    const supportedLocales = useSignal<IETFLocaleType[]>([]);
    useContextProvider(TranslationStateContextId, {
        locale: useComputed$(() => currentLocale.value),
        language: useComputed$(() => fromLocaleToLang(currentLocale.value)),
        supportedLocales: useComputed$(() => supportedLocales.value),
    });
    useContextProvider(
        SetLocaleContextId,
        $((requestedLocale) => {
            return changeLocale({ lang: requestedLocale }, speakContext);
        }),
    );

    return <Slot />;
});
