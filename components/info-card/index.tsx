import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "../typography";
import SunnySvg from "@/assets/images/weather/rain.svg";

export function InfoCard() {
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
        <Typography style={styles.date}>Today, 12 September</Typography>
        <Typography style={styles.temperature}>29°C</Typography>
        <Typography style={styles.condition}>Cloudy</Typography>
        <View style={styles.details}>
          <Typography style={styles.detailText}>Wind | 10 km/h</Typography>
          <Typography style={styles.detailText}>Hum | 54%</Typography>
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
