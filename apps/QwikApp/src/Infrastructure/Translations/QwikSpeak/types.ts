import type { TranslationStateInterface } from 'framework-extension/src/Translations/translationServiceInterface';
import type { Signal } from '@builder.io/qwik';
import type { IETFLocaleType, LanguageType } from 'js-extension/src/I18n/types';

type ReactiveImmutableLocaleType = Readonly<Signal<IETFLocaleType>>;
type ReactiveImmutableLanguageType = Readonly<Signal<LanguageType>>;

export type QwikSpeakTranslationStateType = TranslationStateInterface<
    ReactiveImmutableLocaleType,
    ReactiveImmutableLanguageType
>;
