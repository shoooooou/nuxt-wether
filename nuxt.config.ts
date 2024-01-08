// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      weatherInfoUrl:"https://api.openweathermap.org/data/2.5/weather",
      weathermapAppid:"c7ecfc76ab4439eecf7d37bbce808329"
    }
  }
})
