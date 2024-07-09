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
import { Entypo } from "@expo/vector-icons";
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
        <Text
          style={{
            fontFamily: "inter-bold",
            fontSize: 24,
            color: Colors.zinc[950],
          }}
        >
          Crie uma nova conta
        </Text>

        <View style={{ gap: 12, marginTop: 24 }}>
          <View>
            <Text
              style={{ fontFamily: "inter-regular", color: Colors.zinc[950] }}
            >
              Nome completo
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor={Colors.zinc[950]}
              onChangeText={setFullName}
            />
          </View>

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
            onPress={onCreateAccount}
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
              Criar conta
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
            onPress={() => router.replace("auth/sign-in")}
          >
            <Text
              style={{
                color: Colors.zinc[950],
                textAlign: "center",
                fontFamily: "inter-bold",
              }}
            >
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
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
    borderColor: Colors.zinc[950],
  },
  container: {
    backgroundColor: Colors.zinc[100],
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
});
