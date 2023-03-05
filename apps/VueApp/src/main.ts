import { createApp } from 'vue'
import { vueI18nAdapter } from './Infrastructure/Translations/VueI18n';

import './style.scss'
import App from './App.vue'

const app = createApp(App);

app.use(vueI18nAdapter);
app.mount('#app')

