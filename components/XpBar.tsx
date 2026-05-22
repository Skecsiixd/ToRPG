import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import ThemedText from "./ThemedText";

const XpBar = ({ current, max }: { current: number; max: number }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"];
  const percent = Math.min(current / max, 1);

  return (
    <View style={[styles.wrapper]}>
      <View style={styles.row}>
        <ThemedText title={true} style={{ fontSize: 11, fontWeight: "bold" }}>
          XP for the next level
        </ThemedText>
        <Text
          style={{ fontSize: 11, color: Colors.secondary, fontWeight: "bold" }}
        >
          {current} / {max}
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: theme.xpBarBackground }]}>
        <View
          style={[
            styles.fill,
            { width: `${percent * 100}%`, backgroundColor: theme.xpBarFill },
          ]}
        />
      </View>
    </View>
  );
};

export default XpBar;

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 15, marginVertical: 8, width: "100%" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  track: { height: 10, borderRadius: 5, overflow: "hidden" },
  fill: { height: "100%", borderRadius: 5 },
});
