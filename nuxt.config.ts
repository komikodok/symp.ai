import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["/assets/app.css"],
  modules: ['motion-v/nuxt'],
  ssr: false,
  spaLoadingTemplate: true
})