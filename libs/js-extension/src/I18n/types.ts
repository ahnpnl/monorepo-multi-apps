import type { PLATFORM_SUPPORTED_LANGUAGES } from 'js-extension/src/I18n/language';
import type { PLATFORM_SUPPORTED_LOCALES } from 'js-extension/src/I18n/locale';

import type { ValueOfType } from '../../typings/typings';

export type LanguageType = ValueOfType<typeof PLATFORM_SUPPORTED_LANGUAGES>;
export type IETFLocaleType = ValueOfType<typeof PLATFORM_SUPPORTED_LOCALES>;
export type ISOLocaleType = string;
