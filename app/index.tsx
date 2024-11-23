import React, { useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { InfoCard } from "@/components/info-card";
import { SearchBox } from "@/components/searchbox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography } from "@/components/typography";
import {
  getWeatherByCityName,
  GetWeatherByCityNameResponse,
  getWeatherByCurrentLocation,
} from "@/api";
import { verifyIfHasLocationPermission } from "@/utils/verify-location-permission";
import { getCurrentLocation } from "@/utils/get-current-location";

export default function Index() {
  const { bottom, top } = useSafeAreaInsets();
  const [weatherData, setWeatherData] =
    useState<GetWeatherByCityNameResponse | null>(null);

  const getData = async (value: string) => {
    if (!value) {
      return;
    }

    try {
      const response = await getWeatherByCityName(value);
      setWeatherData(response);
    } catch (error) {
      console.log({ error });
    }
  };

  const getDataByCurrentLocation = async () => {
    const hasPermission = await verifyIfHasLocationPermission();

    if (!hasPermission) {
      return;
    }

    const currentLocation = await getCurrentLocation();

    if (!currentLocation) {
      return;
    }

    try {
      const weatherByCurrentLocation = await getWeatherByCurrentLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      setWeatherData(weatherByCurrentLocation);
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    getDataByCurrentLocation();
  }, []);

  return (
    <LinearGradient
      colors={["#47BFDF", "#4A91FF"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 24,
          marginBottom: bottom,
          marginTop: top,
        }}
      >
        <SearchBox getData={getData} />

        {weatherData && <InfoCard {...weatherData} />}

        <View
          style={{ width: "100%", alignItems: "center", paddingBottom: 16 }}
        >
          <Typography style={{ color: "#fff" }}>
            Feito com ❤️ por Adson
          </Typography>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
