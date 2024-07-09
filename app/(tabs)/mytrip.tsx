import { Container } from "@/components/container";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

function MyStrip() {
  return (
    <Container>
      <Text style={{ color: Colors.zinc[100] }}>mytrip</Text>
    </Container>
  );
}

export default MyStrip;
