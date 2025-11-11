import { memo } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { SCREEN_WIDTH } from "../constants/app";

const LabelInput = memo(function LabelInput({ ...props }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label }}>{props.id}</Text>
      <TextInput style={{ ...styles.input }} {...props} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.8,
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
  },
});

export default LabelInput;
