// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  head:{
    htmlAttrs:{
      lang: "id"
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  ssr: true
})
