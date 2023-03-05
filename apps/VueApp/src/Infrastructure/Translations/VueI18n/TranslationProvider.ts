import { computed, InjectionKey, Plugin, ref, watch } from 'vue';
import { createI18n, I18n } from 'vue-i18n';
import {
    IETFLocaleType,
    SetLocaleHookType,
    TranslateHookType,
    TranslationInputType,
    TranslationMessagesType,
} from '../../../../../../libs/framework-extension/src/Translations/Core/Port/translationServiceInterface';

import { VueTranslationStateType } from './types';
import { fromIsoLocaleToIETFLocale } from '../../../../../../libs/framework-extension/src/Translations/SharedKernel/localeHelpers';
import { APP_DEFAULT_LOCALE } from '../../../../config/locales';
import enUSMessages from '../../../../assets/i18n/en-US.json';

export const VueTranslateContext = Symbol('VueTranslateContext') as InjectionKey<TranslateHookType>;
export const VueSetLocaleContext = Symbol('VueSetLocaleContext') as InjectionKey<SetLocaleHookType>;
export const VueTranslationState = Symbol('VueTranslationStateContext') as InjectionKey<VueTranslationStateType>;

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

const setNewLocaleMessages = async (i18nCtx: I18n<{}, {}, {}, string, false>, newLocale: IETFLocaleType): Promise<void> => {
    const localeMessages = i18nCtx.global.getLocaleMessage(newLocale);
    if (!Object.keys(localeMessages).length) {
        try {
            const response = await fetch(`/assets/i18n/${newLocale}.json`);
            const messageData: TranslationMessagesType = response.ok ? await response.json() : Object.create(null);
            i18nCtx.global.setLocaleMessage(newLocale, messageData);
        } catch (e) {
            console.log('useSetLocale error', e);
        }
    }
}

interface VueI18nAdapterOptionsInterface {
    defaultLocale: IETFLocaleType;
    defaultMessages: object;
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
        const currentLocale = ref<IETFLocaleType>(APP_DEFAULT_LOCALE);
        const supportedLocales = ref<IETFLocaleType[]>([APP_DEFAULT_LOCALE]);

        app.use(i18n);
        app.provide(VueSetLocaleContext, (requestedLocale) => {
            currentLocale.value = fromIsoLocaleToIETFLocale(requestedLocale);
        });
        app.provide(VueTranslateContext, (translationInput) => translateHookImpl(i18n, translationInput));
        app.provide(VueTranslationState, {
            locale: computed(() => currentLocale.value),
            supportedLocales: computed(() => supportedLocales.value),
        });

        watch(currentLocale, async (value) => {
            await setNewLocaleMessages(i18n, value);
            /**
             * Change current locale value to new locale.
             *
             * This should be done after fetching locale messages because `vuei18n` will
             * print warnings in console about keys don't have locale messages if switching to new locale and new locale doesn't have locale messages yet.
             */
            i18n.global.locale.value = value;
            supportedLocales.value = Array.from(new Set([...supportedLocales.value, value]));
        }, { immediate: true });
    }
}
