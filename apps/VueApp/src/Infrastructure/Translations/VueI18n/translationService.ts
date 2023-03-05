import { inject } from 'vue';

import {
    SetLocaleHookType,
    TranslateHookType,
} from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';
import { VueSetLocaleContext, VueTranslateContext, VueTranslationState } from './TranslationProvider';
import { VueTranslationStateType } from './types';

export const useTranslationState = () => inject(VueTranslationState) as VueTranslationStateType;

export const useTranslate = () => inject(VueTranslateContext) as TranslateHookType;

export const useSetLocale = () => inject(VueSetLocaleContext) as SetLocaleHookType;
