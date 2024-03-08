import type { PLATFORM_SUPPORTED_LANGUAGES } from './language';
import type { PLATFORM_SUPPORTED_LOCALES } from './locale';

export type LanguageType = (typeof PLATFORM_SUPPORTED_LANGUAGES)[keyof typeof PLATFORM_SUPPORTED_LANGUAGES];
export type IETFLocaleType = (typeof PLATFORM_SUPPORTED_LOCALES)[keyof typeof PLATFORM_SUPPORTED_LOCALES];
export type ISOLocaleType = string;
