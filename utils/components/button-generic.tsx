import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

type ButtonGenericProps = {
  variant: "default" | "denied" | "link";
  text: string;
  press: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export default function ButtonGeneric({ ...props }: ButtonGenericProps) {
  return (
    <>
      {props.variant === "default" && (
        <TouchableOpacity
          style={{
            backgroundColor: "#282f3d",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onPress={props.press}
          disabled={props.disabled}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {props.text}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}
