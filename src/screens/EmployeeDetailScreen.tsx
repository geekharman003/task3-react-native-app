import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { useRoute } from "@react-navigation/native";
import { GET_EMPLOYEE } from "../graphql/queries";
import { EmployeeCardProps } from "../types/employee";

export default function EmployeeDetailScreen() {
  const route = useRoute();
  console.log(route.params);

  const { loading, error, data } = useQuery<{ employee: EmployeeCardProps }>(
    GET_EMPLOYEE,
    {
      variables: { id: route?.params?.id || 1 },
    },
  );

  if (loading) return <Text>Loading Employee...</Text>;
  if (error) return <Text>Error while loading Employee</Text>;

  return (
    <View style={{backgroundColor:"skyblue",padding:10}}>
      <Text>ID: {data?.employee.id}</Text>
      <Text>Name: {data?.employee.name}</Text>
      <Text>Email: {data?.employee.email}</Text>
      <Text>Department: {data?.employee.department}</Text>
      <Text>Designation: {data?.employee.designation}</Text>
    </View>
  );
}
