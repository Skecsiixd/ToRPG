import React from "react";
import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";

const Profile = () => {
  return <ThemedView style={styles.container}></ThemedView>;
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
