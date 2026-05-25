import React, { useState } from "react";
import { View, StyleSheet, useColorScheme, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Figyelem: A ThemedText elérési útját a saját projektstruktúrádhoz kell igazítanod!
import ThemedText from "./ThemedText";
import { Colors } from "../constants/Colors";
import { ViewProps } from "react-native";
import { isWhiteSpaceLike, transform } from "typescript";

interface DifficulityBoxProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  text: "easy" | "medium" | "hard";
  xp: number;
  focused: boolean;
  difficulityHandler: (difficulity: "easy" | "medium" | "hard") => void;
}

const DifficulityBox = ({
  icon,
  iconColor,
  text,
  xp,
  focused,
  difficulityHandler,
  ...props
}: DifficulityBoxProps & ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Pressable onPress={() => difficulityHandler(text)}>
      <View
        {...props}
        style={[
          styles.box,
          {
            borderColor:
              focused && text == "easy"
                ? Colors.difficulty.easy.border
                : focused && text == "medium"
                  ? Colors.difficulty.medium.border
                  : focused && text == "hard"
                    ? Colors.difficulty.hard.border
                    : theme.border,
            backgroundColor:
              focused && text == "easy"
                ? Colors.difficulty.easy.fill
                : focused && text == "medium"
                  ? Colors.difficulty.medium.fill
                  : focused && text == "hard"
                    ? Colors.difficulty.hard.fill
                    : theme.uiBackground,
            marginHorizontal: 2,
            marginTop: 10,
          },
          props.style,
        ]}
      >
        <MaterialCommunityIcons name={icon} size={30} color={iconColor} />
        <ThemedText
          title={true}
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textTransform: "capitalize",
          }}
        >
          {text}
        </ThemedText>
        <ThemedText title={false}>+{xp} XP</ThemedText>
      </View>
    </Pressable>
  );
};

export default DifficulityBox;

const styles = StyleSheet.create({
  box: {
    height: 105, // Belső távolság bal és jobb oldalt
    width: 105, // Belső távolság fent és lent
    alignSelf: "center",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 20, // This rounds the corners!
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
