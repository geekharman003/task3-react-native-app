import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import EmployeeListScreen from "../screens/EmployeeListScreen";
import EmployeeDetailScreen from "../screens/EmployeeDetailScreen";

export type RootStackParamList = {
  Home: undefined;
  Employees: undefined;
  EmployeeDetails: {id:number};
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
