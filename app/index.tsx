import React, { useCallback } from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { InfoCard } from "@/components/info-card";
import { SearchBox } from "@/components/searchbox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography } from "@/components/typography";

export default function Index() {
  const { bottom, top } = useSafeAreaInsets();

  const getData = useCallback(() => {}, []);

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

        <InfoCard />

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
