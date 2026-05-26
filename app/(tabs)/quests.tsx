import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ExtendedQuestBox from "../../components/ExtendedQuestBox";
import { useAppContext } from "../../context/AppContext";
import { router } from "expo-router";
import { withOpacity } from "../../lib/utils";
import { Colors } from "../../constants/Colors";
const Quests = () => {
  const { quests } = useAppContext();

  return (
    <ThemedView style={styles.container} safe={true}>
      <Pressable
        onPress={() => router.push("(subpages)/createQuest")}
        style={styles.createButton}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          + Create New Quest
        </Text>
      </Pressable>
      <ScrollView>
        {quests.map((quest) => (
          <ExtendedQuestBox
            key={quest.title}
            TitleText={quest.title}
            SubText={quest.description}
            XpAmount={quest.xpReward}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Quests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createButton: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    backgroundColor: withOpacity(Colors.purple[800], 0.5),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: withOpacity(Colors.purple[800], 0.9),
  },
});
