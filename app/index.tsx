import ButtonGeneric from "@/utils/components/button-generic";
import LabelInput from "@/utils/components/label-input";
import { ContextAuth } from "@/utils/provider/provider_auth";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  const { handleSubmit, control } = useForm<{
    login: string;
    senha: string;
  }>();
  const { loginIn } = useContext(ContextAuth);
  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: async (formData: { login: string; senha: string }) => {
      return loginIn(formData);
    },
  });

  return (
    <View style={styles.container}>
      <Image source={require("@/utils/assets/images/letreiro.png")} />
      <View style={styles.container_input}>
        <Controller
          control={control}
          name="login"
          render={({ field: { onChange, value } }) => (
            <LabelInput
              id="Login"
              placeholder="Digite seu CPF"
              value={value}
              onChangeText={onChange}
              returnKeyType="next"
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
              returnKeyType="join"
              onSubmitEditing={handleSubmit((data) => login(data))}
            />
          )}
        />
      </View>

      <ButtonGeneric
        variant="default"
        text="Entrar"
        press={handleSubmit((data) => login(data))}
        disabled={isPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 45,
  },
  container_input: {
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
