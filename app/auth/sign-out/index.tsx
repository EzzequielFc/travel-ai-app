import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function SignOut() {
  return (
    <View
      style={{
        padding: 24,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "montserrat-bold",
          fontSize: 24,
          color: Colors.PRIMARY,
        }}
      >
        Crie uma nova conta
      </Text>

      <View style={{ gap: 12, marginTop: 24 }}>
        <View>
          <Text
            style={{ fontFamily: "montserrat-regular", color: Colors.PRIMARY }}
          >
            Nome completo
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor={Colors.PRIMARY_LIGHT}
          />
        </View>

        <View>
          <Text
            style={{ fontFamily: "montserrat-regular", color: Colors.PRIMARY }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Entre com o Email"
            placeholderTextColor={Colors.PRIMARY_LIGHT}
          />
        </View>

        <View>
          <Text
            style={{ fontFamily: "montserrat-regular", color: Colors.PRIMARY }}
          >
            Senha
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Entre a senha"
            placeholderTextColor={Colors.PRIMARY_LIGHT}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 16,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 16,
            marginTop: 48,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Criar conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 16,
            backgroundColor: Colors.WHITE,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
          }}
          onPress={() => router.replace("auth/sign-in")}
        >
          <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 8,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
  },
});
