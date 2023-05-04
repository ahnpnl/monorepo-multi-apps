import type { Plugin } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import VueRouterView from './VueRouterView.vue';
import { routerProvider } from './routerProvider';

interface VueRouterAdapterOptionsInterface {
    basePath: string;
    routes: RouteRecordRaw[];
}

export const vueRouterAdapter: Plugin<VueRouterAdapterOptionsInterface> = {
    install(app, { basePath, routes }) {
        const webHistory = createWebHistory(basePath);
        const router = createRouter({
            history: webHistory,
            routes,
            scrollBehavior(_to, _from, savedPosition) {
                return savedPosition ?? { left: 0, top: 0 };
            },
        });
        app.use(router);
        app.use(routerProvider, {
            router,
            routerHistory: webHistory,
        });
        app.component('VueRouterView', VueRouterView);
    },
};
