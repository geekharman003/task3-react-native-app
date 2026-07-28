import { View, Text, FlatList, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_EMPLOYEES } from "../graphql/queries";
import EmployeeCard from "../components/EmployeeCard";
import { EmployeeCardProps } from "../types/employee";

export default function EmployeeListScreen() {
  const { loading, error, data } = useQuery<{ employees: EmployeeCardProps[] }>(
    GET_EMPLOYEES,
  );

  const [filteredEmployees, setFilteredEmployees] = useState<
    EmployeeCardProps[]
  >(data?.employees || []);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setFilteredEmployees(data?.employees || []);
  }, [data]);

  function filterEmployees(name: string) {
    setText(name);
    const filteredResult = data?.employees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase()),
    );

    console.log(filteredResult);

    if (filteredResult) {
      setFilteredEmployees(filteredResult);
    }
  }

  if (loading) return <Text>Loading Employees...</Text>;

  if (error) return <Text>Error while loading employees</Text>;

  return (
    <View>
      <View style={{ flexDirection: "row", padding: 5, gap: 5 }}>
        <TextInput
          style={{
            width: 200,
            borderColor: "black",
            borderWidth: 1,
            outline: "none",
            padding: 5,
            borderRadius: 10,
          }}
          onChangeText={(text) => filterEmployees(text)}
          value={text}
        />
      </View>
      {filteredEmployees && filteredEmployees.length ? (
        <FlatList
          data={filteredEmployees}
          renderItem={({ item }) => (
            <EmployeeCard
              id={item.id}
              name={item.name}
              email={item.email}
              department={item.department}
              designation={item.designation}
            />
          )}
        />
      ) : (
        <Text>No Employee found</Text>
      )}
    </View>
  );
}
