import ButtonGeneric from "@/utils/components/button-generic";
import LabelInput from "@/utils/components/label-input";
import { useAppTheme } from "@/utils/hooks/theme";
import { ContextAuth } from "@/utils/provider/provider_auth";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { register, handleSubmit, control } = useForm<{
    login: string;
    senha: string;
  }>();
  const colorScheme = useColorScheme();
  const { loginIn } = useContext(ContextAuth);
  const theme = useAppTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          backgroundColor: theme.background,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          {colorScheme === "dark" && (
            <Image
              source={require("@/utils/assets/images/letreiro_dark.png")}
            />
          )}
          {colorScheme === "light" && (
            <Image
              source={require("@/utils/assets/images/letreiro_white.png")}
            />
          )}
          <View
            style={{
              width: "100%",
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Controller
              control={control}
              name="login"
              render={({ field: { onChange, value } }) => (
                <LabelInput
                  id="Login"
                  placeholder="Digite seu CPF"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="senha"
              render={({ field: { onChange, value } }) => (
                <LabelInput
                  id="Senha"
                  placeholder="Digite sua Senha"
                  textContentType="password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>

          <ButtonGeneric
            variant="default"
            text="Entrar"
            press={handleSubmit(loginIn)}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    minWidth: 400,
  },
});
