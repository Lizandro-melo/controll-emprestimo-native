import { useMemo } from "react";
import { useColorScheme } from "react-native";

const lightTheme = {
  background: "#FFFFFF",
  text: "#282f3d",
  primary: "#6200EE",
  foreground: "#282f3d",
};

const darkTheme = {
  background: "#121212",
  text: "#FFFFFF",
  primary: "#BB86FC",
  foreground: "#282f3d",
};

export function useAppTheme() {
  const colorScheme = useColorScheme();

  const theme = useMemo(() => {
    if (colorScheme === "dark") return darkTheme;
    return lightTheme;
  }, [colorScheme]);

  return theme;
}
