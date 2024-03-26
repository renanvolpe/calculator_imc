/* components/Aboutscreen.js */

import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [message, setMessage] = useState();
  const [messaegType, setMessageType] = useState();

  const handleLogin = () => {
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    axios
      .post(url, { email: email, password: password })
      .then((response) => {
        const result = response.data;
        console.log(result);
        const { message, status, data } = result;
        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home", { ...data[0] });
        }
      })
      .catch((error) => {
        console.log(error.JSON());
        handleMessage("Error in call", status);
      });
  };

  const handleMessage = (message, type = "failure") => {
    setMessage(message);
    setMessageType(type);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textWelcome}>Bem vindo</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email" style={styles.inputEmail} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite uma senha" style={styles.inputPass} />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => handleLogin}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
