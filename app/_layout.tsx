import { ProviderAuth } from "@/utils/provider/provider_auth";
import { ProviderLoading } from "@/utils/provider/provider_loading";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <ProviderLoading>
        <QueryClientProvider client={queryClient}>
          <ProviderAuth>
            <Slot />
          </ProviderAuth>
        </QueryClientProvider>
      </ProviderLoading>
    </SafeAreaProvider>
  );
}
