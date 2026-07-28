import { Text, Pressable, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EmployeeCardProps } from "../types/employee";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useMutation } from "@apollo/client/react";
import { DELETE_EMPLOYEE } from "../graphql/queries";

export default function EmployeeCard({
  id,
  name,
  email,
  department,
  designation,
  filteredEmployees,
  setFilteredEmployees,
}: EmployeeCardProps) {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  async function handleDelete() {
    try {
      await deleteEmployee({ variables: { id } });
      const filteredResult = filteredEmployees.filter(
        (employee) => employee.id !== id,
      );
      setFilteredEmployees(filteredResult);
    } catch (error) {
      console.log("error occured:", error);
    }
  }

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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          onPress={() =>
            navigation.navigate("UpdateEmployee", {
              id,
              name,
              email,
              department,
              designation,
            })
          }
          style={{
            backgroundColor: "orange",
            width: 120,
            borderRadius: 10,
            padding: 5,
            marginTop: 5,
          }}
        >
          <Text>Update Details</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDelete()}
          style={{
            backgroundColor: "red",
            width: "auto",
            borderRadius: 10,
            padding: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ color: "#ffffff" }}>Delete</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
