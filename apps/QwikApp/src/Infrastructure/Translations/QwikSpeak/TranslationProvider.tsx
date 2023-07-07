import { component$, createContextId, Slot, useContext, useContextProvider, useStore } from '@builder.io/qwik';
import type { TranslateFnType, TranslationStateInterface } from 'js-framework-extension/src/I18n/Translation';
import { usePlural, useTranslate as useQwikSpeakTranslate, useSpeakContext } from 'qwik-speak';
import { type IETFLocaleType, LocaleHelper } from "js-extension/src/I18n";

const TranslationStateContextId = createContextId<TranslationStateInterface>('TranslationStateContext');

export const useTranslationState = () => useContext(TranslationStateContextId);

export const useTranslate = (): TranslateFnType => {
    const qwikSpeakTranslate = useQwikSpeakTranslate();
    const plural = usePlural();

    return (translationInput) => {
        if (typeof translationInput === 'string') {
            return qwikSpeakTranslate(translationInput);
        }

        const { namedValue } = translationInput;
        if (typeof translationInput.count !== 'undefined') {
            return plural(translationInput.count, translationInput.key, namedValue);
        }

        return qwikSpeakTranslate(translationInput.key, namedValue);
    };
};

export const TranslationProvider = component$(() => {
    const speakContext = useSpeakContext();
    const initialLocale = speakContext.locale.lang as IETFLocaleType;
    const translationState = useStore<TranslationStateInterface>({
        locale: initialLocale,
        language: LocaleHelper.fromLocaleToLang(initialLocale),
    });
    useContextProvider(TranslationStateContextId, translationState);

    return <Slot />;
});
