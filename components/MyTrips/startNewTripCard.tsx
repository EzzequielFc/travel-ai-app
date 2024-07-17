import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 56,
        display: "flex",
        alignItems: "center",
        gap: 24,
      }}
    >
      <Ionicons name="location-sharp" size={32} color={Colors.PRIMARY} />
      <Text
        style={{
          color: Colors.zinc[100],
          fontSize: 18,
          fontFamily: "inter-bold",
        }}
      >
        Nenhuma viagem planejada ainda
      </Text>
      <Text
        style={{
          color: Colors.zinc[500],
          fontSize: 16,
          fontFamily: "inter-regular",

          textAlign: "center",
        }}
      >
        Me parece uma boa hora para se planejar uma viajem. Começe agora!
      </Text>

      <TouchableOpacity
        style={{
          padding: 12,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 24,
        }}
        activeOpacity={0.7}
      >
        <Text
          style={{
            color: Colors.GRAY[500],
            fontFamily: "inter-bold",
            fontSize: 16,
          }}
        >
          Começe uma nova viajem
        </Text>
      </TouchableOpacity>
    </View>
  );
}
