import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../components/ThemedView";
import ExtendedQuestBox from "../components/ExtendedQuestBox";
import { useAppContext } from "../context/AppContext";
import { Link } from "expo-router";
const Quests = () => {
  const { quests } = useAppContext();

  return (
    <ThemedView style={styles.container} safe={true}>
      <Link href="(subpages)/createQuest" push={true}>
        <Text style={{ fontSize: 18, color: "blue", marginBottom: 20 }}>
          Create New Quest
        </Text>
      </Link>
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
});
