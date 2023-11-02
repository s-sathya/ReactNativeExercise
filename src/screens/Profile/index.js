import React, { useContext } from "react";
import { View, Image, Text, Dimensions, ScrollView } from "react-native";
import { styles } from "./index.styles";
import Button from "../../components/button";
import { calculateIconSize } from "./helper";
import userDetailsContext from "../../context/user-details-context";
import { loremipsum } from "../../constants";

export default function Home({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { userDetails } = useContext(userDetailsContext);

  const iconSize = calculateIconSize(windowWidth, windowHeight);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={[
            styles.logo,
            { height: iconSize, width: iconSize, borderRadius: iconSize / 2 },
          ]}
          source={require("../../assets/profile-picture/profilePicture.png")}
        ></Image>

        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{userDetails.username}</Text>

          <View style={styles.logoutContainer}>
            <Button
              width={70}
              height={30}
              onPress={() => {
                navigation.popToTop();
              }}
            >
              <View style={styles.logoutButton}>
                <Text style={styles.logoutText}>LOGOUT</Text>
              </View>
            </Button>
          </View>
        </View>
      </View>

      <ScrollView style={[styles.longTextContainer, { width: iconSize }]}>
        <Text style={styles.longText}>{loremipsum}</Text>
      </ScrollView>
    </View>
  );
}
