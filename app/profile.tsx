import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PowerBox from "../components/PowerBox";
import ThemedView from "../components/ThemedView";
import { Colors } from "../constants/Colors";
import StreakBox from "../components/StreakBox";

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <StreakBox
        TitleText="15 day streak"
        SubText="+1,5x XP multiplier active!"
      />
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
