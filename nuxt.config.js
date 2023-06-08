export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'frontend2',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'theme-light',
        },

        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            //{rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css'}
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/app.scss',
        '~/assets/scss/styles.scss',
        // '~/assets/scss/styles.scss',
        'swiper/swiper-bundle.min.css',
    ],
    extends: ['prettier'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/dataApi', '~/plugins/clickOutside'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
    globals: {
        _: true,
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/svg', '@nuxtjs/style-resources', '@nuxt/typescript-build'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios', '@nuxt/image'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        standalone: true,
    },
}
