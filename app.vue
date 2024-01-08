<script setup lang="ts">
import type { City } from "@/interface";
useState<Map<number, City>>("cityList", () => {
  const cityList = new Map<number, City>();
  cityList.set(130010, { id: 130010, name: "大阪", q: "Osaka" });
  cityList.set(140010, { id: 140010, name: "神戸", q: "Kobe" });
  cityList.set(150010, { id: 150010, name: "姫路", q: "Himeji" });
  cityList.set(160010, { id: 160010, name: "東京", q: "Tokyo" });
  return cityList;
});
</script>
<template>
  <header>
    <h1>天気情報fetchサンプル</h1>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
