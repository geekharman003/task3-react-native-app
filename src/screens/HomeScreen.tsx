import { View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function HomeScreen() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PrimaryButton />
    </View>
  );
}
