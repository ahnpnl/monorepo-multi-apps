import angular from "@analogjs/vite-plugin-angular";

import { defineConfig } from 'vite';

export default defineConfig(() => ({
    plugins: [
        angular({
            tsconfig: 'tsconfig.json',
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['test/Framework/testSetup.ts'],
        include: ['test/**/*.spec.ts'],
        passWithNoTests: true,
    },
}));
