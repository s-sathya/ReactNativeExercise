import React, { useState } from "react";
import { Platform, View, Animated, Pressable } from "react-native";
import { styles } from "./index.styles";

function SelectModeScreen({
  children,
  width = 200,
  height = 50,
  onPress = () => null,
}) {
  const [translateValue] = useState(new Animated.Value(1));

  const animateButton = () => {
    Animated.timing(translateValue, {
      toValue: 5,
      duration: 60,
      useNativeDriver: Platform.OS !== "web",
    }).start(() => {
      Animated.timing(translateValue, {
        toValue: 1,
        duration: 60,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    });
  };

  const handlePress = () => {
    animateButton();
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.buttonParent, { height, width }]}>
        <Animated.View
          style={[
            styles.buttonGrad,
            { height, width, transform: [{ translateY: translateValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Pressable>
  );
}

export default SelectModeScreen;
