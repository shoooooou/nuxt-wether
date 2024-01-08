import type { City } from "@/interface";

export default function useWeatherInfo(city: City) {
  const config = useRuntimeConfig();
  const asyncData = useLazyAsyncData(
    `useWeatherInfo-${city.id}`,
    (): Promise<any> => {
      const weatherInfoUrl = config.public.weatherInfoUrl;
      const params: { lang: string; q: string; appid: string } = {
        lang: "ja",
        q: city.q,
        appid: config.public.weathermapAppid,
      };
      const queryParams = new URLSearchParams(params);
      const urlFull = `${weatherInfoUrl}?${queryParams}`;
      console.log(urlFull);
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
