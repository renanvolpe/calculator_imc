import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from "./src/components/title"
import Form from "./src/components/form"
import ViewBoxesWithColorAndText from "./src/components/view"

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      {/* <ViewBoxesWithColorAndText/> */}
      <Form/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //100% of screen
    backgroundColor: '#e0e5e5e',
    paddingTop:80,
  },
});

