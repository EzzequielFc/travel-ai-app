import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{
          width: "100%",
          height: 380,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "montserrat-bold",
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
          Planejador de viagens
        </Text>

        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "montserrat-regular",
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
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "montserrat-regular",
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
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  button: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
    marginTop: "25%",
  },
});
