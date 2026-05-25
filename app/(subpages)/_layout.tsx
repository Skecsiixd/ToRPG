import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "../../context/AppContext";

export default function SubPagesLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
}
