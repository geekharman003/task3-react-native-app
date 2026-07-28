import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import EmployeeListScreen from "../screens/EmployeeListScreen";
import EmployeeDetailScreen from "../screens/EmployeeDetailScreen";
import AddEmployeeScreen from "../screens/AddEmployeeScreen";
import UpdateEmployeeScreen from "../screens/UpdateEmployeeScreen";

export type RootStackParamList = {
  Home: undefined;
  Employees: undefined;
  EmployeeDetails: { id: number };
  AddEmployee: undefined;
  UpdateEmployee: {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Employees"
          component={EmployeeListScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="EmployeeDetails"
          component={EmployeeDetailScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="AddEmployee"
          component={AddEmployeeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="UpdateEmployee"
          component={UpdateEmployeeScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
