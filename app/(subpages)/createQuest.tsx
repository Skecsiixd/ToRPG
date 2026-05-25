import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import QuestForm from "../../components/QuestForm";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useAppContext } from "../../context/AppContext";

const CreateQuest = () => {
  const { addQuest } = useAppContext();

  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={{ alignSelf: "flex-start", paddingHorizontal: 15 }}>
        QUEST NAME
      </ThemedText>
      <Spacer height={10} />
      <QuestForm></QuestForm>
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
