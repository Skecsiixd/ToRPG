import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Quests = () => {
  return (
    <View style={styles.container}>
      <Text>Quests</Text>
    </View>
  );
};

export default Quests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
