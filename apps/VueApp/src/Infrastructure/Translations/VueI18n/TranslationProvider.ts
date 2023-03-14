import { computed, inject, type InjectionKey, type Plugin } from 'vue';
import { createI18n, type I18n } from 'vue-i18n';
import type {
    SetLocaleFnType,
    TranslateFnType,
    TranslationInputType,
} from 'framework-extension/src/Translations/translationServiceInterface';

import type { VueTranslationStateType } from './types';
import { APP_DEFAULT_LOCALE } from '../../../../config/locales';
import enUSMessages from '../../../../assets/i18n/en-US.json';
import type { IETFLocaleType } from 'js-extension/src/I18n/types';
import { fromLocaleToLang } from 'js-extension/src/I18n/localeHelpers';

const VueTranslateContext = Symbol('VueTranslateContext') as InjectionKey<TranslateFnType>;
const VueSetLocaleContext = Symbol('VueSetLocaleContext') as InjectionKey<SetLocaleFnType>;
const VueTranslationState = Symbol('VueTranslationStateContext') as InjectionKey<VueTranslationStateType>;

export const useTranslationState = () => inject(VueTranslationState) as VueTranslationStateType;

export const useTranslate = () => inject(VueTranslateContext) as TranslateFnType;

export const useSetLocale = () => inject(VueSetLocaleContext) as SetLocaleFnType;

const translateHookImpl = (i18nCtx: I18n<{}, {}, {}, string, false>, translationInput: TranslationInputType): string => {
    const { t } = i18nCtx.global;
    if (typeof translationInput === 'string') return t(translationInput);

    const namedValue = translationInput.namedValue ?? Object.create(null);
    if (typeof translationInput.count !== 'undefined')
        return t(
            translationInput.key,
            namedValue,
            translationInput.count,
        );

    return t(translationInput.key, namedValue);
}

const setNewLocale = async (i18nCtx: I18n<{}, {}, {}, string, false>, newLocale: IETFLocaleType): Promise<void> => {
    const localeMessages = i18nCtx.global.getLocaleMessage(newLocale);
    if (!Object.keys(localeMessages).length) {
        try {
            const response = await fetch(`/assets/i18n/${newLocale}.json`);
            const messageData = response.ok ? await response.json() : Object.create(null);
            i18nCtx.global.setLocaleMessage(newLocale, messageData);
            i18nCtx.global.locale.value = newLocale;
        } catch (e) {
            console.log('useSetLocale error', e);
        }
    }
}

// Vue Plugin is similar to React or Qwik Context Provider
export const vueI18nAdapter: Plugin = {
    install(app) {
        const i18n = createI18n<any, string, false>({
            legacy: false,
            locale: APP_DEFAULT_LOCALE,
            fallbackLocale: APP_DEFAULT_LOCALE,
            messages: {
                [APP_DEFAULT_LOCALE]: enUSMessages,
            },
        });
        const currentLocale = computed(() => i18n.global.locale.value);

        app.use(i18n);
        app.provide(VueSetLocaleContext, (requestedLocale) => setNewLocale(i18n, requestedLocale));
        app.provide(VueTranslateContext, (translationInput) => translateHookImpl(i18n, translationInput));
        app.provide(VueTranslationState, {
            locale: computed(() => currentLocale.value),
            language: computed(() => fromLocaleToLang(currentLocale.value)),
        });
    }
}
