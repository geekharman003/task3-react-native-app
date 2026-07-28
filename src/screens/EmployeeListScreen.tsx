import { View, Text, FlatList, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQuery } from "@apollo/client/react";
import { GET_EMPLOYEES } from "../graphql/queries";
import EmployeeCard from "../components/EmployeeCard";
import { Employee, EmployeeCardProps } from "../types/employee";
import { RootStackParamList } from "../navigation/AppNavigator";
import Searchbar from "../components/Searchbar";

export default function EmployeeListScreen() {
  const { loading, error, data } = useQuery<{ employees: EmployeeCardProps[] }>(
    GET_EMPLOYEES,
  );

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(
    data?.employees || [],
  );
  const [text, setText] = useState<string>("");

  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    setFilteredEmployees(data?.employees || []);
  }, [data]);

  function filterEmployees(name: string) {
    setText(name);
    const filteredResult = data?.employees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase()),
    );

    if (filteredResult) {
      setFilteredEmployees(filteredResult);
    }
  }

  if (loading) return <Text>Loading Employees...</Text>;

  if (error) return <Text>Error while loading employees</Text>;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Searchbar text={text} filterEmployees={filterEmployees} />
        <Pressable
          onPress={() => navigation.navigate("AddEmployee")}
          style={{ backgroundColor: "#C9EB8D", padding: 10, borderRadius: 10 }}
        >
          <Text>Add Employee</Text>
        </Pressable>
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
              filteredEmployees={filteredEmployees}
              setFilteredEmployees={setFilteredEmployees}
            />
          )}
        />
      ) : (
        <Text>No Employee found</Text>
      )}
    </View>
  );
}
