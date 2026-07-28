import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_EMPLOYEE } from "../graphql/queries";
import TextField from "../components/TextField";

export default function AddEmployeeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [loading, setLoading] = useState(false);

  const [createEmployee] = useMutation(CREATE_EMPLOYEE);

  async function handleSubmit() {
    setLoading(true);
    try {
      await createEmployee({
        variables: { input: { name, email, department, designation } },
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
        Add New Employee
      </Text>
      <View style={{ padding: 10 }}>
        <TextField content="Enter Name:" value={name} setValue={setName} />
        <TextField content="Enter Email:" value={email} setValue={setEmail} />
        <TextField content="Enter Department:" value={department} setValue={setDepartment} />
        <TextField content="Enter Designation:" value={designation} setValue={setDesignation} />
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
