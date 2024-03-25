import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#38a69d" },
  ContainerLogo: {
    flex: 2,
    backgroundColor: "#38a69d",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default styles;
