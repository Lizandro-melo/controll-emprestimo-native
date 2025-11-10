import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useAppTheme } from "../hooks/theme";

export default function LabelInput({ ...props }: TextInputProps) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: theme.text }}>{props.id}</Text>
      <TextInput style={{ ...styles.input, color: theme.text }} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    display: "flex",
    gap: 10,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e5e7eb",
    padding: 10,
    width: "100%",
  },
});
