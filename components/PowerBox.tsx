import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Figyelem: A ThemedText elérési útját a saját projektstruktúrádhoz kell igazítanod!
import ThemedText from "./ThemedText";
import { Colors } from "../constants/Colors";
import { ViewProps } from "react-native";

interface PowerBoxProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor: string;
  text: string;
  attribute: string;
}

const PowerBox = ({
  icon,
  iconColor,
  text,
  attribute,
  ...props
}: PowerBoxProps & ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <View
      {...props}
      style={[
        styles.box,
        {
          borderColor: theme.border,
          backgroundColor: theme.uiBackground,
          marginHorizontal: 2,
          marginTop: 10,
        },
        props.style,
      ]}
    >
      <MaterialCommunityIcons name={icon} size={30} color={iconColor} />
      <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 20 }}>
        {text}
      </ThemedText>
      <ThemedText title={false}>{attribute}</ThemedText>
    </View>
  );
};

export default PowerBox;

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
