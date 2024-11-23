export function convertMetersPerSecondToKmPerHour(
  speedInMetersPerSecond: number
) {
  const speedInKmPerHour = speedInMetersPerSecond * 3.6;
  return speedInKmPerHour;
}
