import { Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EmployeeCardProps } from "../types/employee";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function EmployeeCard({
  id,
  name,
  email,
  department,
  designation,
}: EmployeeCardProps) {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.navigate("EmployeeDetails", { id })}
      style={{
        backgroundColor: "#E3DA8D",
        marginBottom: 5,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text>ID:{id}</Text>
      <Text>Name:{name}</Text>
      <Text>Email:{email}</Text>
      <Text>Department:{department}</Text>
      <Text>Designation:{designation}</Text>
    </Pressable>
  );
}
