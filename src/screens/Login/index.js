import React, { useEffect, useState, useContext } from "react";
import { View, Image, Text, Dimensions, TextInput } from "react-native";

import { styles } from "./index.styles";

import Button from "../../components/button";
import userDetailsContext from "../../context/user-details-context";
import { calculateIconSize } from "./helper";

export default function Home({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { setUserDetails } = useContext(userDetailsContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const iconSize = calculateIconSize(windowWidth, windowHeight);

  useEffect(() => {
    // Basic validations
    if (password.length < 8 && password !== "") {
      setError("Incorrect password!");
    } else if (username.includes("z") && username !== "") {
      setError("Incorrect username!");
    } else {
      setError("");
    }
  }, [password, username]);

  const handleSubmit = () => {
    if (!error && username && password) {
      setUserDetails({ username });
      navigation.push("PROFILE");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={[styles.logo, { height: iconSize * 0.2, width: iconSize * 0.2 }]}
        source={require("../../assets/logo/logo.png")}
      ></Image>

      <TextInput
        style={[styles.textInput, { width: iconSize }]}
        placeholder="Email / Username"
        onChangeText={setUsername}
        onSubmitEditing={handleSubmit}
      ></TextInput>

      <TextInput
        style={[styles.textInput, { width: iconSize }]}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={setPassword}
        onSubmitEditing={handleSubmit}
      ></TextInput>

      <Text style={styles.error}>{error}</Text>
      <Button width={iconSize} onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </Button>
    </View>
  );
}
