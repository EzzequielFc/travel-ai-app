import React, { useState } from "react";
import { Text, View } from "react-native";

import { Container, StartNewTripCard } from "@/components/index";

import { Colors } from "@/constants/Colors";

import { Ionicons } from "@expo/vector-icons";

function MyStrip() {
  const [userTrips, setUserTrips] = useState("");

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

      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
    </Container>
  );
}

export default MyStrip;
