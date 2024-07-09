import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

import { Entypo } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 380,
          backgroundColor: Colors.zinc[900],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="paper-plane" size={78} color={Colors.PRIMARY} />
        <Text
          style={{
            fontFamily: "inter-regular",
            color: Colors.WHITE,
            fontSize: 24,
          }}
        >
          V
          <Text style={{ color: Colors.PRIMARY, fontFamily: "inter-bold" }}>
            .ia.
          </Text>
          j.e.i
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "inter-bold",
            color: Colors.zinc[900],
            textAlign: "center",
          }}
        >
          Planejador de viagens
        </Text>

        <Text
          style={{
            color: Colors.zinc[900],
            fontFamily: "inter-regular",
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Descubra qual sua próxima grande aventura. Personalize sua viagem como
          nunca antes visto
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.zinc[900],
              textAlign: "center",
              fontFamily: "inter-bold",
              fontSize: 14,
            }}
          >
            Vamos começar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.zinc[100],
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  button: {
    padding: 16,
    borderRadius: 20,
    marginTop: "25%",
    borderWidth: 2,
  },
});
