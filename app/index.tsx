import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import Login from "@/components/login";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      {user?.email ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
