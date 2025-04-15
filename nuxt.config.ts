// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-04-02',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    "nitro-cloudflare-dev"
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: false,
    strict: true
  },
  alias: {
    "cloudflare": "env.d.ts",
  }
})
