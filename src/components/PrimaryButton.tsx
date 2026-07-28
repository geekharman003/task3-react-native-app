import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function PrimaryButton() {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
      style={{
        width: "auto",
        height: "auto",
        backgroundColor: "skyblue",
        borderRadius: 10,
        padding: 5,
      }}
      onPress={() => navigation.navigate("Employees")}
    >
      <Text>View Employees</Text>
    </Pressable>
  );
}
