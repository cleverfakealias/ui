import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  serverMiddleware: {
    '/api/send_email': '~/api/send_email.py',
  },
  env: {
    NUXT_ENV_FORMSPREE_URL: process.env.NUXT_ENV_FORMSPREE_URL,
    NUXT_ENV_CAPTCHA_SITE_KEY_V2: process.env.NUXT_ENV_CAPTCHA_SITE_KEY_V2,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?render=explicit',
        async: true,
        defer: true,
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Q8DS9KDSDJ',
        async: true,
      },
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q8DS9KDSDJ');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      gtag: ['innerHTML'],
    },
    titleTemplate: '%s - BJH Software',
    title:
      'BenHickman.dev - Software Engineer, Web Developer, and Tech Enthusiast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/siberianhusky.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
