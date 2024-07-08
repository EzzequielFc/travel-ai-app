import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";
export default function SignOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const onCreateAccount = async () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show("Entre com os detalhes", ToastAndroid.BOTTOM);
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        ToastAndroid.show("Conta criada com sucesso!", ToastAndroid.BOTTOM);
        router.back();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
            onChangeText={setFullName}
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
            onChangeText={setEmail}
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
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          onPress={onCreateAccount}
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
    padding: 12,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
  },
});
