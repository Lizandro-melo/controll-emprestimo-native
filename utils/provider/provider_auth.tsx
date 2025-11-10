import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";

import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
import Nav from "../components/nav";
import { api } from "../constants";

export type LoginData = {
  login: string;
  senha: string;
};

type ContextAuthType = {
  auth: boolean;
  loginIn: (data: LoginData) => void;
  loginOff: () => void;
  setAuth: Dispatch<SetStateAction<boolean>>;
  headers: {
    Authorization: string;
  };
};

export const ContextAuth = createContext({} as ContextAuthType);

export function ProviderAuth({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<boolean>(false);
  const [headers, setHeaders] = useState<{ Authorization: string }>({
    Authorization: "",
  });

  useLayoutEffect(() => {
    const checkSession = async () => {
      const session = await SecureStore.getItemAsync("session");
      setHeaders({ Authorization: `Bearer ${session}` });
      router.replace(session ? "/session" : "/");
    };
    checkSession();
  }, []);

  const loginIn = async (data: LoginData) => {
    if (!data.senha || !data.login) {
      Alert.alert("Alerta", "Por favor preencha todos os campos");
      return;
    }
    await api
      .post("/auth/login", data)
      .then(async (response) => {
        router.push("/session");
        await SecureStore.setItemAsync("session", response.data.result);
      })
      .catch((e) => {
        Alert.alert("Alerta", e.response?.data.m || e.message);
      });
  };

  const loginOff = async () => {
    setAuth(false);
    await SecureStore.deleteItemAsync("session");
    router.push("/");
  };

  return (
    <ContextAuth.Provider
      value={{
        auth,
        loginIn,
        loginOff,
        setAuth,
        headers,
      }}
    >
      {auth ? <Nav>{children}</Nav> : <>{children}</>}
    </ContextAuth.Provider>
  );
}
