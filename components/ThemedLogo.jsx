import { Image, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import LightLogo from "../assets/img/icon.png";
import DarkLogo from "../assets/img/icondark.png";

const ThemedLogo = () => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} style={styles.logo} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({
  logo: {
    width: 128,
    height: 128,
    marginBottom: 10,
  },
});
