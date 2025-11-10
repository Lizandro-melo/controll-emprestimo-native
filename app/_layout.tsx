import { useAppTheme } from "@/utils/hooks/theme";
import { ProviderAuth } from "@/utils/provider/provider_auth";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useAppTheme();
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProviderAuth>
      <StatusBar />
      <Slot />
    </ProviderAuth>
  );
}
