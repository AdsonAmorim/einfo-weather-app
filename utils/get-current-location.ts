import * as Location from "expo-location";

export async function getCurrentLocation() {
  let timeoutId: NodeJS.Timeout;

  const timeout = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve(null);
    }, 2500);
  });

  const race = await Promise.race([
    timeout,
    Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    }),
  ]);

  const location = race as Location.LocationObject | null;

  if (!location) {
    return await Location.getLastKnownPositionAsync({
      requiredAccuracy: Location.Accuracy.Low,
    });
  }

  return location;
}
