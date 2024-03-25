import React from "react";
import { StyleSheet } from "react-native";

import Navigator from "./src/routes";

import { NavigationContainer } from "@react-navigation/native";

const image = require("./src/assets/background_image.jpg");

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  images: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
