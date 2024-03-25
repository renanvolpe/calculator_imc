import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./style";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerLogo}>
        <Image
          style={styles.tinyLogo}
          resizeMode="contain"
          source={{
            uri: "https://i.ibb.co/Fn5L4tV/logo.png",
          }}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//
