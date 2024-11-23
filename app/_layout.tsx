import React, { useEffect, useState } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";

import {
  useFonts,
  Overpass_400Regular,
  Overpass_600SemiBold,
} from "@expo-google-fonts/overpass";
import { Alert } from "react-native";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    async function requestLocation() {
      const location = await Location.requestForegroundPermissionsAsync();

      if (location.status !== "granted") {
        Alert.alert(
          "Para usar nosso app é necessário conceder permissões de localzização"
        );
      }
    }
    requestLocation();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
