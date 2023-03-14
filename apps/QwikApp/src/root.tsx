import { component$, useServerData } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { fromLangToLocale, QwikSpeakAdapter } from '~/Infrastructure/Translations/QwikSpeak';
import type { LanguageType } from 'js-extension/src/I18n/types';

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Dont remove the `<head>` and `<body>` elements.
     */
    const qwikCityEnvData = useServerData('qwikcity') as { params: { lang: LanguageType } } & Record<string, unknown>;

    return (
        <QwikSpeakAdapter initialLocale={fromLangToLocale(qwikCityEnvData.params.lang)}>
            <QwikCityProvider>
                <head>
                    <meta charSet="utf-8" />
                    <link
                        rel="manifest"
                        href="/manifest.json"
                    />
                    <RouterHead />
                </head>
                <body lang="en">
                    <RouterOutlet />
                    <ServiceWorkerRegister />
                </body>
            </QwikCityProvider>
        </QwikSpeakAdapter>
    );
});
