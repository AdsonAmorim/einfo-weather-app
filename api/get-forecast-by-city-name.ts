import { api } from "./config";

export interface GetWeatherByCityNameResponse {
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

export async function getWeatherByCityName(
  cityName: string
): Promise<GetWeatherByCityNameResponse> {
  return await api.get(`/2.5/weather?units=metric&q=${cityName.toLowerCase()}`);
}
