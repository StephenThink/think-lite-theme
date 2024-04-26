import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({

    resolve: {
        alias: {
            // Create an alias to map the asset path to the correct location
            '/assets/': '/public/assets/',
        },
    },

    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/css/theme1.css',
                'resources/js/site.js',

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                'resources/css/cp.css',
                'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],

    build: {
        sourcemap: true,
    }
});
