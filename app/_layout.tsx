import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="docs" options={{ title: "Documentation" }} />
      <Stack.Screen name="codelab1" options={{ title: "Codelab 1 (useContext)" }} />
    </Stack>
  );
}
