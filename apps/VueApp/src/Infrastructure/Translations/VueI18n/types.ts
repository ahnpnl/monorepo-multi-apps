import type { ComputedRef } from 'vue';
import type { TranslationStateInterface } from 'framework-extension/src/Translations/translationServiceInterface';
import type { IETFLocaleType, LanguageType } from 'js-extension/src/I18n/types';

export type VueTranslationStateType = TranslationStateInterface<ComputedRef<IETFLocaleType>, ComputedRef<IETFLocaleType[]>, ComputedRef<LanguageType>>;
