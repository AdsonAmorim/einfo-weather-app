import * as Location from "expo-location";

export async function verifyIfHasLocationPermission() {
  const locationPermission = await Location.getForegroundPermissionsAsync();
  return locationPermission.status === "granted";
}
