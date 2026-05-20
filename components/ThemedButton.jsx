import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedButton = ({ style = {}, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    ></Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ThemedButton;
