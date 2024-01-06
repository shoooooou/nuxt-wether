<script setup lang="ts">
import type { City } from "@/interface";
const cityList = useState<Map<number, City>>("cityList");
</script>

<template>
  <section>
    <h2>都市リスト</h2>
    <ul>
      <li v-for="[id, city] in cityList" :key="id">
        <NuxtLink :to="{ name: `WetherInfo-id`, params: { id: id } }"
          >{{ city.name }}の天気</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>
```
