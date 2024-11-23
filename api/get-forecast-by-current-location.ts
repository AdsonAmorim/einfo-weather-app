import { api } from "./config";

interface GetWeatherByCurrentLocation {
  latitude: number;
  longitude: number;
}

export interface GetWeatherByCurrentLocationResponse {
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  main: {
    temp: number; // in celsius
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

export async function getWeatherByCurrentLocation({
  latitude,
  longitude,
}: GetWeatherByCurrentLocation): Promise<GetWeatherByCurrentLocationResponse> {
  return await api.get(
    `/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}`
  );
}
