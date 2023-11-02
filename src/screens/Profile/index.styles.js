import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffeea",
  },

  logoContainer: {
    flex: 1.5,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    marginBottom: 30,
    borderColor: "#800080",
    borderWidth: 10,
  },

  usernameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  usernameText: {
    marginRight: 15,
    fontSize: 36,
    lineHeight: 40,
  },

  logoutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    height: 40,
  },
  logoutButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  },
  logoutText: {
    color: "#fffeea",
    fontWeight: "600",
  },

  longTextContainer: {
    borderColor: "#3a8a3a",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  longText: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: "500",
    padding: 10,
  },
});
