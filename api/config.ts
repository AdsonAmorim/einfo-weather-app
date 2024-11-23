import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    appId: process.env.EXPO_PUBLIC_OPEN_WEATHER_APP_ID,
  },
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
