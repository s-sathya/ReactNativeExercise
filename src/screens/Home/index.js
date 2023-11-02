import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { styles } from "./index.styles";
import Button from "../../components/button";
import { calculateIconSize } from "./helper";

export default function Home({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const iconSize = calculateIconSize(windowWidth, windowHeight);

  return (
    <View style={styles.homeContainer}>
      <Image
        style={[styles.logo, { height: iconSize, width: iconSize }]}
        source={require("../../assets/logo/logo.png")}
      ></Image>
      <Button
        width={iconSize}
        onPress={() => {
          navigation.push("LOGIN");
        }}
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>CONTINUE</Text>
        </View>
      </Button>
    </View>
  );
}
