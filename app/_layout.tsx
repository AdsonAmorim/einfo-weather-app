import React, { useEffect } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Overpass_400Regular,
  Overpass_600SemiBold,
} from "@expo-google-fonts/overpass";

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

  if (!loaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
