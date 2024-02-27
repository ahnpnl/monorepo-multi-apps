import type { RouterOptions } from "vue-router";

export const ROUTE_PATH = {
    HOME: "/",
};

export const routes: RouterOptions["routes"] = [
    {
        path: ROUTE_PATH.HOME,
        component: () => import("./routes/index.vue"),
        meta: {
            layout: () => import("./routes/layout.vue"),
        },
    },
];
