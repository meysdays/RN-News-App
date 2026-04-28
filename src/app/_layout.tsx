import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: Inter_400Regular,
    medium: Inter_500Medium,
    semibold: Inter_600SemiBold,
    bold: Inter_700Bold,
    extraBold: Inter_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="news" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
