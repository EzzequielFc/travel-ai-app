import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "inter-regular": require("./../assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./../assets/fonts/Inter-Medium.ttf"),
    "inter-bold": require("./../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
