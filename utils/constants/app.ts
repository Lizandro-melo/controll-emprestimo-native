import axios from "axios";
import { Dimensions } from "react-native";

export const api = axios.create({
  baseURL: "https://controll-emprestimo-server.vercel.app/api",
});

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
