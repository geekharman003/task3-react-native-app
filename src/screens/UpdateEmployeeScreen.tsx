import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { UPDATE_EMPLOYEE } from "../graphql/queries";

type RootStackParamList = {
  UpdateEmployeeDetailScreen: {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
  };
};

type UpdateEmployeeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "UpdateEmployeeDetailScreen"
>;

export default function UpdateEmployeeScreen() {
  const route = useRoute<UpdateEmployeeDetailScreenRouteProp>();
  const [name, setName] = useState(route?.params?.name);
  const [email, setEmail] = useState(route?.params?.email);
  const [department, setDepartment] = useState(route?.params?.department);
  const [designation, setDesignation] = useState(route?.params?.designation);
  const [loading, setLoading] = useState(false);

  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);

  async function handleSubmit() {
    setLoading(true);
    try {
      await updateEmployee({
        variables: {
          id: route?.params?.id,
          input: { name, email, department, designation },
        },
      });
      setName("");
      setEmail("");
      setDepartment("");
      setDesignation("");
    } catch (error) {
      console.log("error occured:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 5 }}>
        Update Employee
      </Text>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text>
            Enter Name:{" "}
            <TextInput
              style={{ borderWidth: 1, outline: "none", width: 90, padding: 5 }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text>
            Enter Email:{" "}
            <TextInput
              style={{ borderWidth: 1, outline: "none", width: 90, padding: 5 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text>
            Enter Department:{" "}
            <TextInput
              style={{ borderWidth: 1, outline: "none", width: 90, padding: 5 }}
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text>
            Enter Designation:{" "}
            <TextInput
              style={{ borderWidth: 1, outline: "none", width: 90, padding: 5 }}
              value={designation}
              onChangeText={(text) => setDesignation(text)}
            />
          </Text>
        </View>
        <Pressable
          onPress={() => handleSubmit()}
          style={{
            backgroundColor: "#95E889",
            width: 100,
            padding: 5,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {loading ? "Submitting..." : "Submit"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
