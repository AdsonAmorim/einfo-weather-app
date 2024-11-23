import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import { Typography } from "../typography";
import SunnySvg from "@/assets/images/weather/rain.svg";
import { GetWeatherByCityNameResponse } from "@/api";
import { convertMetersPerSecondToKmPerHour } from "@/utils/convert-meters-per-second-in-km-per-hr";

interface InfoCardProps extends GetWeatherByCityNameResponse {}

export function InfoCard({ main, weather, wind, name, sys }: InfoCardProps) {
  const currentDate = new Date().toLocaleDateString("pt-br", {
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <View style={{ position: "relative" }}>
        <SunnySvg
          width={400}
          height={400}
          style={{
            position: "absolute",
            top: -170,
            right: -20,
            shadowColor: "#222",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        />
      </View>
      <BlurView intensity={50} style={styles.blurCard}>
        <Typography style={styles.date}>
          {name} - {sys.country}
        </Typography>
        <Typography style={styles.date}>Hoje, {currentDate}</Typography>
        <Typography style={styles.temperature}>~ {main.temp} °C</Typography>
        <Typography style={styles.condition}>
          {weather[0].description}
        </Typography>
        <View style={styles.details}>
          <Typography style={styles.detailText}>
            Ventos | {convertMetersPerSecondToKmPerHour(Number(wind.speed))}{" "}
            km/h
          </Typography>
          <Typography style={styles.detailText}>
            Umidade | {main.humidity}%
          </Typography>
        </View>
      </BlurView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  blurCard: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    overflow: "hidden",
  },
  date: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  temperature: {
    fontSize: 72,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  condition: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
  },
  detailText: {
    fontSize: 16,
    color: "white",
  },
});
