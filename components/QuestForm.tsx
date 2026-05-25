import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Colors } from "../constants/Colors";
import { withOpacity } from "../lib/utils";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { router } from "expo-router";
import Spacer from "./Spacer";
import PowerBox from "./PowerBox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DifficulityBox from "./DifficulityBox";

const QuestForm = () => {
  const { addQuest } = useAppContext();
  const [text, setText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [selectedDifficulity, setSelectedDifficulity] = useState<
    "easy" | "medium" | "hard"
  >("easy");
  const difficulities: {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    iconColor: string;
    text: string;
    xp: number;
    focused: boolean;
  }[] = [
    {
      icon: "leaf",
      iconColor: Colors.difficulty.easy.text,
      text: "easy",
      xp: 25,
      focused: false,
    },
    {
      icon: "fire",
      iconColor: Colors.difficulty.medium.text,
      text: "medium",
      xp: 50,
      focused: true,
    },
    {
      icon: "skull",
      iconColor: Colors.difficulty.hard.text,
      text: "hard",
      xp: 100,
      focused: false,
    },
  ];

  const handleDifficulity = (difficulity: "easy" | "medium" | "hard") => {
    setSelectedDifficulity(difficulity);
  };

  const errorAlert = () =>
    Alert.alert("ERROR", "Please Add Quest Name", [
      {
        text: "OK",
        style: "cancel",
      },
    ]);

  const onCreate = () => {
    addQuest({
      title: text,
      description: descriptionText,
      xpReward:
        selectedDifficulity === "easy"
          ? 25
          : selectedDifficulity === "medium"
            ? 50
            : selectedDifficulity === "hard"
              ? 100
              : 0,
    });
    router.push("quests");
    setText("");
    setDescriptionText("");
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textbox,
          {
            borderColor: withOpacity(Colors.purple[800], 0.9),
            backgroundColor: withOpacity(Colors.purple[800], 0.5),
          },
        ]}
      >
        <TextInput
          value={text}
          placeholder="Enter quest name"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          onChangeText={(newText) => setText(newText)}
          style={{
            color: "white",
            fontSize: 16,
            width: "100%",
            paddingHorizontal: 15,
          }}
        />
      </View>
      <Spacer height={5} />
      <View
        style={[
          styles.textbox,
          {
            borderColor: withOpacity(Colors.purple[800], 0.9),
            backgroundColor: withOpacity(Colors.purple[800], 0.5),
            height: 100,
          },
        ]}
      >
        <TextInput
          value={descriptionText}
          placeholder="Enter quest description"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          onChangeText={(newText) => setDescriptionText(newText)}
          style={{
            color: "white",
            fontSize: 16,
            width: "100%",
            paddingHorizontal: 15,
          }}
        />
      </View>

      <View style={styles.rowContainer}>
        {difficulities.map((difficulity) => (
          <DifficulityBox
            key={difficulity.text}
            icon={difficulity.icon}
            iconColor={difficulity.iconColor}
            text={difficulity.text as "easy" | "medium" | "hard"}
            xp={difficulity.xp}
            focused={selectedDifficulity === difficulity.text}
            difficulityHandler={handleDifficulity}
          />
        ))}
      </View>

      <Pressable
        onPress={text != "" ? onCreate : errorAlert}
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: "blue",
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Text>Submit Quest</Text>
      </Pressable>
    </View>
  );
};

export default QuestForm;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    gap: 12,
  },
  rowContainer: {
    flexDirection: "row", // Egymás mellé rakja az elemeket
    alignSelf: "center",
    justifyContent: "space-between", // Középre igazítja a dobozokat
    width: "100%",
    paddingHorizontal: 10, // Megtartja a korábbi oldalsó távolságot
    gap: 5, // Modern React Native-ban ez automatikusan tökéletes távolságot tesz a dobozok közé!
  },
  textbox: {
    height: 70, // Belső távolság bal és jobb oldalt
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 20, // This rounds the corners!
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
