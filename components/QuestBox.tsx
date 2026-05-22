import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewProps,
} from "react-native";
import { Colors } from "../constants/Colors";
import { withOpacity } from "./AddOpacity";
import ThemedText from "./ThemedText";

interface QuestBoxProps {
  TitleText: string;
  SubText: string;
  XpText: number;
}

const QuestBox = ({
  TitleText,
  SubText,
  XpText,
  ...props
}: QuestBoxProps & ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const [completed, setCompleted] = useState(false);

  return (
    <View
      {...props}
      style={[
        styles.streakbox,
        {
          borderColor: theme.border,
          backgroundColor: theme.uiBackground,
          marginHorizontal: 10,
          marginTop: 10,
          opacity: completed ? 0.5 : 1, // Ha a quest teljesített, akkor legyen áttetszőbb
        },
        props.style,
      ]}
    >
      <View style={styles.rowContainer}>
        <Pressable onPress={() => setCompleted((prev) => !prev)}>
          <MaterialCommunityIcons
            name={
              completed
                ? "checkbox-marked-circle"
                : "checkbox-blank-circle-outline"
            }
            size={50}
            color={Colors.purple[300]}
            style={{ alignSelf: "flex-start" }}
          />
        </Pressable>

        <View style={{ justifyContent: "center" }}>
          <ThemedText
            title={true}
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textDecorationLine: completed ? "line-through" : "none", // Ha a quest teljesített, akkor húzza át a szöveget
            }}
          >
            {TitleText}
          </ThemedText>
          <ThemedText style={{ fontSize: 12 }}>{SubText}</ThemedText>
        </View>

        <View // Ez a doboz a jobb oldalon, XP szöveggel
          style={[
            styles.textbox,
            {
              borderColor: withOpacity(Colors.purple[800], 0.0),
              backgroundColor: withOpacity(Colors.purple[800], 0.5),
              alignSelf: "center", // A dobozt a sor jobb szélére helyezi
              marginLeft: "auto", // Ez biztosítja, hogy a doboz a jobb szélre kerüljön, függetlenül a többi elem szélességétől
            },
          ]}
        >
          <Text style={{ color: Colors.purple[200], fontWeight: "bold" }}>
            +{XpText.toString()} XP
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QuestBox;

const styles = StyleSheet.create({
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
    width: "100%", // A képernyő bal szélére igazítja az egész sort
    paddingHorizontal: 10, // Megtartja a korábbi oldalsó távolságot
    gap: 5, // Modern React Native-ban ez automatikusan tökéletes távolságot tesz a dobozok közé!
  },
  textbox: {
    paddingHorizontal: 10, // Belső távolság bal és jobb oldalt
    paddingVertical: 5, // Belső távolság fent és lent
    alignSelf: "flex-start",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 10, // This rounds the corners!
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
