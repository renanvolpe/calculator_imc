import { ImageBackground, StyleSheet } from "react-native";

import FormLogin from "./src/components/login-form";
import Title from "./src/components/title";

const image = require("./src/assets/background_image.jpg");


export default function App() {
  return (
    <ImageBackground source={image} style={styles.images}>
        <Title/>
        <FormLogin/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  images: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
