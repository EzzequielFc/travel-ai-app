import { Text, View } from "react-native";
import Login from "./../components/Login";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <Login />
    </View>
  );
}
