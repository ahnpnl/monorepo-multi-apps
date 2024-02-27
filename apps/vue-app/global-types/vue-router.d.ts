import "vue-router";

// To ensure it is treated as a module, add at least one `export` statement
export {};

declare module "vue-router" {
    import type { Component } from "vue";

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface RouteMeta {
        layout?: () => Promise<Component>;
    }
}
