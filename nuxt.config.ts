// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      baseURL: 'https://nigeleke.github.io/jacquialexander.com.au/', // Exposed to the frontend as well.
      cdnURL: 'https://nigeleke.github.io/jacquialexander.com.au/', // Exposed to the frontend as well.
    }
  },

  css: [
    '@/assets/css/main.scss'
  ],

})
