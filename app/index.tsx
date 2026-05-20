import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import ThemedView from "../components/ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ThemedText from "../components/ThemedText";
import { Colors } from "../constants/Colors";
import Spacer from "../components/Spacer";

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
            borderColor: theme.borderMedium,
            backgroundColor: theme.border,
            marginHorizontal: 10,
            marginTop: 10,
          },
        ]}
      >
        <Text style={styles.text}>Knight - Level 6</Text>
      </View>

      <Spacer height={50} />
      <View style={styles.rowContainer}>
        <View
          style={[
            styles.box,
            {
              borderColor: theme.borderMedium,
              backgroundColor: theme.border,
              marginHorizontal: 2,
              marginTop: 10,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={30}
            color="orange"
          />
          <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 20 }}>
            10
          </ThemedText>
          <ThemedText title={false}>Power</ThemedText>
        </View>
        <View
          style={[
            styles.box,
            {
              borderColor: theme.borderMedium,
              backgroundColor: theme.border,
              marginHorizontal: 2,
              marginTop: 10,
            },
          ]}
        >
          <MaterialCommunityIcons name="brain" size={30} color="pink" />
          <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 20 }}>
            20
          </ThemedText>
          <ThemedText title={false}>Mind</ThemedText>
        </View>
        <View
          style={[
            styles.box,
            {
              borderColor: theme.borderMedium,
              backgroundColor: theme.border,
              marginHorizontal: 2,
              marginTop: 10,
            },
          ]}
        >
          <MaterialCommunityIcons name="fire" size={30} color="cyan" />
          <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 20 }}>
            12
          </ThemedText>
          <ThemedText title={false}>Dexterity</ThemedText>
        </View>
      </View>

      <Spacer height={30} />

      <View
        style={[
          styles.streakbox,
          {
            borderColor: "#ff6a00d5",
            backgroundColor: "#ff6a007f",
            marginHorizontal: 10,
            marginTop: 10,
          },
        ]}
      >
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            name="fire"
            size={50}
            color="orange"
            style={{ alignSelf: "flex-start" }}
          />
        </View>
        <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 16 }}>
          Active Quest
        </ThemedText>
      </View>
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
    height: 110, // Belső távolság bal és jobb oldalt
    width: 110, // Belső távolság fent és lent
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
