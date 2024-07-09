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
import { Entypo, Ionicons } from "@expo/vector-icons";
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
          router.replace("/mytrip");
          ToastAndroid.show("Seja bem-vindo!", ToastAndroid.TOP);
        }
      );
    } catch (error) {
      ToastAndroid.show("Verifique suas credenciais", ToastAndroid.BOTTOM);
    }
  };

  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: Colors.zinc[900],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="paper-plane" size={78} color={Colors.PRIMARY} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.zinc[950]} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "inter-bold",
            fontSize: 24,
            color: Colors.zinc[950],
          }}
        >
          Faça login para começar
        </Text>
        <Text
          style={{
            fontFamily: "inter-regular",
            fontSize: 24,
            color: Colors.zinc[950],
            marginTop: 30,
          }}
        >
          Bem-vindo de volta
        </Text>

        <View style={{ gap: 12, marginTop: 24 }}>
          <View>
            <Text
              style={{ fontFamily: "inter-regular", color: Colors.zinc[950] }}
            >
              Email
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Entre com o Email"
              placeholderTextColor={Colors.zinc[950]}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text
              style={{ fontFamily: "inter-regular", color: Colors.zinc[950] }}
            >
              Senha
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Entre a senha"
              placeholderTextColor={Colors.zinc[950]}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            onPress={onSignIn}
            style={{
              padding: 16,
              backgroundColor: Colors.zinc[950],
              borderRadius: 16,
              marginTop: 48,
            }}
          >
            <Text
              style={{
                color: Colors.PRIMARY,
                textAlign: "center",
                fontFamily: "inter-bold",
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 16,
              backgroundColor: "transparent",
              borderRadius: 16,
              borderWidth: 1,
              borderColor: Colors.zinc[950],
            }}
            onPress={() => router.replace("auth/sign-out")}
          >
            <Text
              style={{
                color: Colors.zinc[950],
                textAlign: "center",
                fontFamily: "inter-bold",
              }}
            >
              Criar Conta
            </Text>
          </TouchableOpacity>
        </View>
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
  input: {
    padding: 10,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.zinc[950],
  },
});
