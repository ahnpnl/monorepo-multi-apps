import { useContext } from '@builder.io/qwik';

import type { TranslateHookType } from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';
import { QwikSetLocaleContext, QwikTranslationStateContext } from './TranslationProvider';
import { $translate, useSpeakContext } from 'qwik-speak';

export const useTranslationState = () => useContext(QwikTranslationStateContext);

export const useTranslate = (): TranslateHookType => {
    const speakContext = useSpeakContext();

    return (translationInput) => {
        if (typeof translationInput === 'string') return $translate(translationInput, speakContext);

        const namedValue = translationInput.namedValue ?? Object.create(null);
        if (typeof translationInput.count !== 'undefined') return ''; // do something with pluralization

        return $translate(translationInput.key, namedValue, speakContext);
    };
};

export const useSetLocale = () => useContext(QwikSetLocaleContext);
