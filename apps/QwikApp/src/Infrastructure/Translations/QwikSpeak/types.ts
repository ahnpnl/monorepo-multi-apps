import type { Signal } from '@builder.io/qwik';
import type {
    TranslationStateInterface,
    IETFLocaleType,
} from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';

export type QwiKTranslationStateType = TranslationStateInterface<Signal<IETFLocaleType>, Signal<IETFLocaleType[]>>;
