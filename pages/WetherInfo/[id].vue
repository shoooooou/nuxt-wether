<script setup lang="ts">
import type { City } from "@/interface";
const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed((): City => {
  const id = Number(route.params.id);
  return cityList.value.get(id) as City;
});
const weatherDescription = ref("");
const asyncData = await useAsyncData(
  `/WeatherInfo/${route.params.id}`,
  (): Promise<any> => {
    const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
    const params: { lang: string; q: string; appid: string } = {
      lang: "ja",
      q: selectedCity.value.q,
      appid: "c7ecfc76ab4439eecf7d37bbce808329",
    };
    const queryParams = new URLSearchParams(params);
    const urlFull = `${weatherInfoUrl}?${queryParams}`;
    console.log(urlFull);
    const response = $fetch(urlFull);
    return response;
  },
  {
    pick: ["weather"],
  }
);
const data = asyncData.data;

const weatherArray = data.value.weather;
const weather = weatherArray[0];
weatherDescription.value = weather.description;
</script>

<template>
  <section>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
    <p>リストに<nuxt-link :to="{ name: `index` }">戻る</nuxt-link></p>
  </section>
</template>
