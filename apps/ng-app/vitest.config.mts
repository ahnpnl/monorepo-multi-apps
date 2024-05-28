import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
    plugins: [
        angular({
            tsconfig: 'tsconfig.json', // WORKAROUND: Vitest can't recognize test suites
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['test/Framework/testSetup.ts'],
        include: ['test/**/*.spec.ts'],
        passWithNoTests: true,
        server: {
            deps: {
                inline: [/fesm2022/] // See https://github.com/analogjs/analog/issues/1009#issuecomment-2040165952
            }
        },
    },
}));
