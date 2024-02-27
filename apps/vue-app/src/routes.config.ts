import type { RouterOptions } from "vue-router";

export const ROUTE_PATH = {
    HOME: "/",
};

export const routes: RouterOptions["routes"] = [
    {
        path: ROUTE_PATH.HOME,
        meta: {
            layout: () => import("./routes/layout.vue"),
        },
        children: [
            {
                path: "",
                component: () => import("./routes/index.vue"),
            },
            {
                path: "/tv/:showId",
                component: () => import("./routes/shows/[showId]/index.vue"),
            },
        ],
    },
];
