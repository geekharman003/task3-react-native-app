import { View, Text } from "react-native";
import React from "react";
import { EmployeeCardProps } from "../types/employee";

export default function EmployeeCard({
  id,
  name,
  email,
  department,
  designation,
}: EmployeeCardProps) {
  return (
    <View style={{ backgroundColor: "#E3DA8D", marginBottom: 5,padding:10,borderRadius:10 }}>
      <Text>ID:{id}</Text>
      <Text>Name:{name}</Text>
      <Text>Email:{email}</Text>
      <Text>Department:{department}</Text>
      <Text>Designation:{designation}</Text>
    </View>
  );
}


