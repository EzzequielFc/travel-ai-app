import { Container } from "@/components/container";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function MyStrip() {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.zinc[100],
            fontFamily: "inter-bold",
            fontSize: 28,
          }}
        >
          Minhas Viagens
        </Text>
        <Ionicons name="add-circle" size={32} color={Colors.PRIMARY} />
      </View>
    </Container>
  );
}

export default MyStrip;
