import angular from "@analogjs/vite-plugin-angular";

import { defineConfig } from 'vite';

export default defineConfig(() => ({
    plugins: [angular()],
    test: {
        environment: 'jsdom',
        globals: true,
        testTimeout: 30000,
        passWithNoTests: true
    },
}));
