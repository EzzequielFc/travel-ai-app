import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: { backgroundColor: Colors.zinc[950], padding: 4 },
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "Minhas Viagens",
          tabBarLabelStyle: { fontFamily: "inter-bold" },
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Descobrir",
          tabBarLabelStyle: { fontFamily: "inter-bold" },
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Perfil",
          tabBarLabelStyle: { fontFamily: "inter-bold" },
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
