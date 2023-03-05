import {
    IETFLocaleType,
    TranslationStateInterface,
} from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';
import { ComputedRef } from 'vue';

export type VueTranslationStateType = TranslationStateInterface<ComputedRef<IETFLocaleType>, ComputedRef<IETFLocaleType[]>>;
