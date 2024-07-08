import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    if (!email && !password) {
      ToastAndroid.show("Verifique os detalhes", ToastAndroid.BOTTOM);
    }

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          ToastAndroid.show("Seja bem-vindo!", ToastAndroid.TOP);
        }
      );
    } catch (error) {
      ToastAndroid.show("Verifique suas credenciais", ToastAndroid.BOTTOM);
    }
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
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "montserrat-bold",
          fontSize: 24,
          color: Colors.PRIMARY,
        }}
      >
        Faça login para começar
      </Text>
      <Text
        style={{
          fontFamily: "montserrat-regular",
          fontSize: 24,
          color: Colors.PRIMARY_LIGHT,
          marginTop: 30,
        }}
      >
        Bem-vindo de volta
      </Text>

      <View style={{ gap: 12, marginTop: 24 }}>
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
          onPress={onSignIn}
          style={{
            padding: 16,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 16,
            marginTop: 48,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Entrar
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
          onPress={() => router.replace("auth/sign-out")}
        >
          <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
            Criar Conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
  },
});
