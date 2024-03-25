/* components/Aboutscreen.js */

import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";

export default function LoginScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Home")}
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
