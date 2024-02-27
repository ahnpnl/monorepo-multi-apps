import path from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [vue(), svgLoader()],
    test: {
        environment: "jsdom",
        globals: true,
        testTimeout: 30000,
        setupFiles: ["tests/framework/test-double/plugins/setupVueTestPlugins.ts"],
        passWithNoTests: true,
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        },
    },
}));
