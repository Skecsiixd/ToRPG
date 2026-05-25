import React from "react";
import { Pressable, StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import { useAppContext } from "../context/AppContext";
import { Text } from "react-native";

const Profile = () => {
  const { addQuest } = useAppContext();
  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={() =>
          addQuest({
            title: "New Quest",
            description: "This is a new quest",
            xpReward: 100,
          })
        }
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: "blue",
          borderRadius: 10,
        }}
      >
        <Text>Submit Quest</Text>
      </Pressable>
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
