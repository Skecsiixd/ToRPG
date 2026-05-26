import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ style = {} }) => {
  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
    >
      <Ionicons name="caret-back" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.purple[800],
    backgroundColor: Colors.purple[800],
  },
  pressed: {
    opacity: 0.7,
  },
});

export default BackButton;
