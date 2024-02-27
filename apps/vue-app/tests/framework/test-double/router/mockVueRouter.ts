import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/routes.config.ts";

export const mockRouter = createRouter({
    history: createWebHistory(),
    routes,
});
