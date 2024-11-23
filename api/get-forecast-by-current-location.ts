import { WeatherData } from "@/types/weather";
import { api } from "./config";

interface GetForecastByCurrentLocation {
  latitude: number;
  longitude: number;
  interval: number;
}

export async function getForecastByCurrentLocation({
  latitude,
  longitude,
}: GetForecastByCurrentLocation): Promise<WeatherData[]> {
  return await api.get(
    `/forecast?cnt=1&units=metric&lat=${latitude}&lon=${longitude}}`
  );
}
