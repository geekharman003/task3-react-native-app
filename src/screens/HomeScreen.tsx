import { View } from "react-native";
import { useQuery } from "@apollo/client/react";
import React from "react";
import { GET_EMPLOYEES } from "../graphql/queries";
import PrimaryButton from "../components/PrimaryButton";

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
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
