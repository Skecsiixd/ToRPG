import { StyleSheet } from "react-native";
import React from "react";
import QuestForm from "../../components/QuestForm";
import ThemedView from "../../components/ThemedView";

const CreateQuest = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <QuestForm />
    </ThemedView>
  );
};

export default CreateQuest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
