import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Colors } from "../constants/Colors";
import { withOpacity } from "./AddOpacity";
import ThemedText from "./ThemedText";

interface StreakBoxProps {
  TitleText: string;
  SubText: string;
}

const StreakBox = ({
  TitleText,
  SubText,
  ...props
}: StreakBoxProps & ViewProps) => {
  return (
    <View
      {...props}
      style={[
        styles.streakbox,
        {
          borderColor: Colors.streak.border,
          backgroundColor: withOpacity(Colors.streak.base, 0.2),
          marginHorizontal: 10,
          marginTop: 10,
        },
        props.style,
      ]}
    >
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons
          name="fire"
          size={50}
          color={Colors.streak.base}
          style={{ alignSelf: "flex-start" }}
        />
        <View style={{ justifyContent: "center" }}>
          <ThemedText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.streak.text,
            }}
          >
            {TitleText}
          </ThemedText>
          <ThemedText style={{ fontSize: 15, color: Colors.streak.base }}>
            {SubText}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default StreakBox;

const styles = StyleSheet.create({
  streakbox: {
    height: 80, // Belső távolság bal és jobb oldalt
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 20, // This rounds the corners!
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row", // Egymás mellé rakja az elemeket
    alignSelf: "flex-start", // A képernyő bal szélére igazítja az egész sort
    paddingHorizontal: 10, // Megtartja a korábbi oldalsó távolságot
    gap: 5, // Modern React Native-ban ez automatikusan tökéletes távolságot tesz a dobozok közé!
  },
});
