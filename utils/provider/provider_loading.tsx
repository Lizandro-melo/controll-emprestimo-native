import AntDesign from "@expo/vector-icons/AntDesign";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/app";

export const ContextLoading = createContext(
  {} as {
    startLoading: (promise: Promise<any>) => void;
  }
);

export function ProviderLoading({ children }: { children: ReactNode }) {
  const [stateLoading, setStateLoading] = useState<boolean>(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        isInteraction: true,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const startLoading = async (promise: Promise<any>) => {
    if (stateLoading) return;
    setStateLoading(true);
    try {
      await promise;
    } finally {
      setStateLoading(false);
    }
  };

  return (
    <ContextLoading.Provider
      value={{
        startLoading,
      }}
    >
      <View
        style={{
          ...styles.loading,
          display: stateLoading ? "flex" : "none",
        }}
      >
        <Animated.View
          style={{
            transform: [{ rotate: rotation }],
          }}
        >
          <AntDesign name="loading-3-quarters" size={40} color="black" />
        </Animated.View>
      </View>
      {children}
    </ContextLoading.Provider>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
    zIndex: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
});
