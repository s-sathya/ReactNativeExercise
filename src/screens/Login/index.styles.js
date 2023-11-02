import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffeea",
    flex: 1,
  },
  logo: {
    marginBottom: 20,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  buttonText: {
    color: "#fffeea",
    fontWeight: "600",
  },

  textInput: {
    borderColor: "#800080",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 30,
    height: 50,
    padding: 10,
  },

  error: {
    color: "#ff0000",
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
