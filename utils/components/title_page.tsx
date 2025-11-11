import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

type TitlePageProps = {
  title: string;
  description: string;
};

const TitlePage = memo(function TitlePage({ ...props }: TitlePageProps) {
  return (
    <View style={{ display: "flex", gap: 5, paddingBottom: 20 }}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    color: "#8f979b",
  },
});

export default TitlePage;
