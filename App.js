import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import App from "./src/index";

export default function ExpoApplication() {
  return (
    <SafeAreaView style={styles.container}>
      <App />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffeea",
    alignItems: "center",
    justifyContent: "center",
  },
});
