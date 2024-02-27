import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [vue()],
    test: {
        environment: "jsdom",
        globals: true,
        testTimeout: 30000,
        setupFiles: ["tests/framework/test-double/plugins/setupVueTestPlugins.ts"],
        passWithNoTests: true,
    },
}));
