import { Colors } from "@/constants/Colors";
import React from "react";
import { View } from "react-native";

export function Container({ children }: any) {
  return (
    <View style={{ backgroundColor: Colors.zinc[950], flex: 1, padding: 20 }}>
      {children}
    </View>
  );
}
