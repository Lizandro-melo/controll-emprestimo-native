import { api } from "@/utils/constants/app";
import { ContextAuth } from "@/utils/provider/provider_auth";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useContext, useEffect } from "react";

export default function Index() {
  const { setAuth, loginOff } = useContext(ContextAuth);

  useEffect(() => {
    const checkSession = async () => {
      const session = await SecureStore.getItemAsync("session");
      if (session) {
        api
          .get(`/verify/session?session=${session}`)
          .then((response) => {
            router.push(response.data.result);
            setAuth(true);
          })
          .catch(async (e) => {
            loginOff();
            router.push(e.response.data.result);
          });
      }
    };
    checkSession();
  }, []);

  return (
    <></>
  );
}
