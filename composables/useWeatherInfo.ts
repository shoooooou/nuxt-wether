import type { City } from "@/interface";
export default function useWeatherInfo(city: City) {
  const asyncData = useLazyAsyncData(
    `useWeatherInfo-${city.id}`,
    (): Promise<any> => {
      const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
      const params: { lang: string; q: string; appid: string } = {
        lang: "ja",
        q: city.q,
        appid: "c7ecfc76ab4439eecf7d37bbce808329",
      };
      const queryParams = new URLSearchParams(params);
      const urlFull = `${weatherInfoUrl}?${queryParams}`;
      const response = $fetch(urlFull);
      return response;
    },
    {
      transform: (data): string => {
        const weatherArray = data.weather;
        const weather = weatherArray[0];
        return weather.description;
      },
    }
  );
  return asyncData;
}
