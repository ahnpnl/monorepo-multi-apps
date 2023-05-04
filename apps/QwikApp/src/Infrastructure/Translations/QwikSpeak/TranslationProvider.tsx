import { component$, createContextId, Slot, useContext, useContextProvider, useStore } from '@builder.io/qwik';
import { LocaleHelper } from 'js-extension/src/I18n';
import { $plural, $translate, useSpeakContext } from 'qwik-speak';
import type {
    TranslateFnType,
    TranslationStateInterface
} from "js-framework-extension/src/Translations/translationServiceInterface";

const TranslationStateContextId = createContextId<TranslationStateInterface>('TranslationStateContext');

export const useTranslationState = () => useContext(TranslationStateContextId);

export const useTranslate = (): TranslateFnType => {
    return (translationInput) => {
        if (typeof translationInput === 'string') {
            return $translate(translationInput);
        }

        const { namedValue } = translationInput;
        if (typeof translationInput.count !== 'undefined') {
            return $plural(translationInput.count, translationInput.key, namedValue);
        }

        return $translate(translationInput.key, namedValue);
    };
};

export const TranslationProvider = component$(() => {
    const speakContext = useSpeakContext();
    const initialLocale = speakContext.locale.lang;
    const translationState = useStore<TranslationStateInterface>({
        locale: initialLocale,
        language: LocaleHelper.fromLocaleToLang(initialLocale),
    });
    useContextProvider(TranslationStateContextId, translationState);

    return <Slot />;
});
