import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "montserrat-regular": require("./../assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./../assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-bold": require("./../assets/fonts/Montserrat-Bold.ttf"),
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
