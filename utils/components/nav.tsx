import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../hooks/theme";
import { ContextAuth } from "../provider/provider_auth";

export default function Nav({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const theme = useAppTheme();
  const { loginOff } = useContext(ContextAuth);
  const colorScheme = useColorScheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleState = () => {
    setIsOpen(!isOpen);
  };

  const ItemList = ({
    icon,
    title,
    path,
  }: {
    icon: React.ReactNode;
    title: string;
    path?: string;
  }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        handleState();
        switch (path) {
          case "/":
            loginOff();
            router.replace("/");
            break;
        }
      }}
    >
      {icon}
      <Text style={{ ...styles.itemText, color: theme.text }}>{title}</Text>
    </TouchableOpacity>
  );

  const NavItens = () => (
    <ScrollView style={{ width: "100%" }}>
      <ItemList
        icon={
          <Ionicons
            name="bar-chart-outline"
            size={20}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        }
        title="Dashboard"
        path="/operadorui"
      />

      <ItemList
        icon={
          <Feather
            name="log-out"
            size={20}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        }
        title="Sair"
        path="/"
      />
    </ScrollView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          {colorScheme === "dark" && (
            <Image
              source={require("@/utils/assets/images/letreiro_dark.png")}
              style={styles.logoSmall}
              resizeMode="contain"
            />
          )}
          {colorScheme === "light" && (
            <Image
              source={require("@/utils/assets/images/letreiro_white.png")}
              style={styles.logoSmall}
              resizeMode="contain"
            />
          )}
          <TouchableOpacity onPress={handleState}>
            <Feather
              name="menu"
              size={28}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>

        {isOpen && (
          <View style={{ ...styles.sidebar }}>
            <NavItens />
          </View>
        )}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddddddff",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  logoSmall: {
    width: 120,
    height: 60,
  },
  sidebar: {
    backgroundColor: "white",
    position: "absolute",
    borderColor: "#ddddddff",
    top: 0,
    left: 0,
    width: 200,
    height: "100%",
    borderRightWidth: 1,

    padding: 20,
    zIndex: 10,
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  itemText: {
    marginLeft: 12,
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  content: {
    flex: 1,
  },
});
