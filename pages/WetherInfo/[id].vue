<script setup lang="ts">
import type { City } from "@/interface";
const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed((): City => {
  const id = Number(route.params.id);
  return cityList.value.get(id);
});
const weatherDescription = ref("");
</script>

<template>
  <section>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
    <p>リストに<nuxt-link :to="{ name: `index` }">戻る</nuxt-link></p>
  </section>
</template>
