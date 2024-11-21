// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
    css: [
        '@/assets/styles.scss'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Theme,
                options: {
                    darkModeSelector: '.app-dark'
                }
            }
        }
    },
    plugins: ['~/plugins/primevue.js'],
})