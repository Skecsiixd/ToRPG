import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import ThemedView from "../components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ThemedText from "../components/ThemedText";
import { Colors } from "../constants/Colors";
import Spacer from "../components/Spacer";
import { withOpacity } from "../components/AddOpacity";
import PowerBox from "../components/PowerBox";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
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

      <Spacer height={50} />
      <View style={styles.rowContainer}>
        <PowerBox
          icon="lightning-bolt-outline"
          iconColor={Colors.stat.strength.base}
          text="10"
          attribute="Strength"
        />
        <PowerBox
          icon="brain"
          iconColor={Colors.stat.intellect.base}
          text="13"
          attribute="Intellect"
        />
        <PowerBox
          icon="fire"
          iconColor={Colors.stat.endurance.base}
          text="8"
          attribute="Endurance"
        />
      </View>

      <Spacer height={10} />
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    alignSelf: "center", // A képernyő bal szélére igazítja az egész sort
    paddingHorizontal: 10, // Megtartja a korábbi oldalsó távolságot
    gap: 5, // Modern React Native-ban ez automatikusan tökéletes távolságot tesz a dobozok közé!
  },
  box: {
    height: 115, // Belső távolság bal és jobb oldalt
    width: 115, // Belső távolság fent és lent
    alignSelf: "center",
    backgroundColor: "#000000", // A nice blue
    borderRadius: 20, // This rounds the corners!
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
