import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { withOpacity } from "../lib/utils";
import PowerBox from "../components/PowerBox";
import QuestBox from "../components/QuestBox";
import Spacer from "../components/Spacer";
import StreakBox from "../components/StreakBox";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
import XpBar from "../components/XpBar";
import { Colors } from "../constants/Colors";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const stats: {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    iconColor: string;
    text: string;
    attribute: string;
  }[] = [
    {
      icon: "lightning-bolt-outline",
      iconColor: Colors.stat.strength.base,
      text: "10",
      attribute: "Strength",
    },
    {
      icon: "brain",
      iconColor: Colors.stat.intellect.base,
      text: "13",
      attribute: "Intellect",
    },
    {
      icon: "fire",
      iconColor: Colors.stat.endurance.base,
      text: "8",
      attribute: "Endurance",
    },
  ];
  const { xp, quests } = useAppContext();

  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText
        style={{
          alignSelf: "flex-start",
          fontSize: 18,
          padding: 15,
          paddingBottom: 0,
        }}
      >
        Hello,
      </ThemedText>
      <ThemedText
        title={true}
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          paddingHorizontal: 15,
        }}
      >
        Adventurer!
      </ThemedText>
      <View
        style={[
          styles.textbox,
          {
            borderColor: withOpacity(Colors.purple[800], 0.9),
            backgroundColor: withOpacity(Colors.purple[800], 0.5),
            marginHorizontal: 10,
            marginTop: 10,
          },
        ]}
      >
        <Text style={[styles.text]}>Knight - Level 6</Text>
      </View>

      <Spacer height={10} />
      <XpBar current={xp} max={1000} />

      <View style={styles.rowContainer}>
        {stats.map((stat) => (
          <PowerBox
            key={stat.attribute}
            icon={stat.icon}
            iconColor={stat.iconColor}
            text={stat.text}
            attribute={stat.attribute}
          />
        ))}
      </View>

      <Spacer height={10} />

      <StreakBox
        TitleText="15 day streak"
        SubText="+1,5x XP multiplier active!"
      />

      <Spacer height={20} />
      <ThemedText style={{ alignSelf: "flex-start", paddingHorizontal: 15 }}>
        TODAY'S QUESTS
      </ThemedText>
      <ScrollView style={{ width: "100%" }}>
        {quests.map((quest) => (
          <QuestBox
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    //justifyContent: "center",
  },
  textbox: {
    paddingHorizontal: 15, // Belső távolság bal és jobb oldalt
    paddingVertical: 5, // Belső távolság fent és lent
    alignSelf: "flex-start",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 20, // This rounds the corners!
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
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
    alignSelf: "center",
    justifyContent: "space-between", // Középre igazítja a dobozokat
    width: "100%",
    paddingHorizontal: 10, // Megtartja a korábbi oldalsó távolságot
    gap: 5, // Modern React Native-ban ez automatikusan tökéletes távolságot tesz a dobozok közé!
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
