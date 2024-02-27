import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./assets/styles/index.scss";

import App from "./App.vue";
import { routes } from "./routes.config.ts";

const router = createRouter({
    routes,
    history: createWebHistory(),
});
const app = createApp(App);
app.use(router);

app.mount("#app");
