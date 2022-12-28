import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

export default defineConfig(() => {
    return {
        css: {
            postcss: {
                plugins: [autoprefixer()],
            },
        },
        plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
    };
});
