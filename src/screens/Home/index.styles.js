import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffeea",
    flex: 1,
  },

  logo: {
    marginBottom: 40,
  },

  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  loginText: {
    color: "#fffeea",
    fontWeight: "600",
  },
});
