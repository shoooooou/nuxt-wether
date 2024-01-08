<script setup lang="ts">
import type { City } from "@/interface";
const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed((): City => {
  const id = Number(route.params.id);
  return cityList.value.get(id) as City;
});
const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
const params: { lang: string; q: string; appid: string } = {
  lang: "ja",
  q: selectedCity.value.q,
  appid: "c7ecfc76ab4439eecf7d37bbce808329",
};

const asyncData = await useFetch(weatherInfoUrl, {
  key: `/WeatherInfo/${route.params.id}`,
  query: params,
  transform: (data: any): string => {
    const weatherArray = data.weather;
    const weather = weatherArray[0];
    return weather.description;
  },
});

const weatherDescription = asyncData.data;
</script>

<template>
  <section>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
    <p>リストに<nuxt-link :to="{ name: `index` }">戻る</nuxt-link></p>
  </section>
</template>
