import React from "react";
import { Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {
  fontWeight?: "regular" | "bold";
}

export function Typography({ fontWeight, ...rest }: TypographyProps) {
  const fontFamilyWeight =
    fontWeight === "bold" ? "Overpass_600SemiBold" : "Overpass_400Regular";

  return (
    <Text {...rest} style={[rest.style, { fontFamily: fontFamilyWeight }]} />
  );
}
