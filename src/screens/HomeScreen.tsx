import { View, Text, Button } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_EMPLOYEES } from "../graphql/queries";

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  console.log(data);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
