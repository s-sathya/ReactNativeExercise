import React from "react";
import { View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../theme";
import { NAVIGATION } from "../constants";

import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import ProfileScreen from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function Navigator({ initialRouteName }) {
  const scheme = useColorScheme();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <NavigationContainer theme={theme[scheme]}>
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}
          style={{
            width: "100%",
          }}
        >
          <Stack.Screen
            name="HOME"
            component={HomeScreen}
            options={{ title: NAVIGATION.HOME }}
          />
          <Stack.Screen
            name="LOGIN"
            component={LoginScreen}
            options={{ title: NAVIGATION.LOGIN }}
          />
          <Stack.Screen
            name="PROFILE"
            component={ProfileScreen}
            options={{ title: NAVIGATION.PROFILE }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
