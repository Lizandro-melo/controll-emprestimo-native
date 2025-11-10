import { ContextAuth } from "@/utils/provider/provider_auth";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Dash() {
  const { loginOff } = useContext(ContextAuth);

  const ItemInfo = ({
    title,
    data,
    descricao,
    icon,
  }: {
    title: string;
    data: string;
    descricao: string;
    icon: React.ReactNode;
  }) => {
    return (
      <View style={styles.cards_info}>
        <View
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <View
            style={{
              display: "flex",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{data}</Text>
            <Text style={{ fontSize: 12, color: "#8f979b" }}>{descricao}</Text>
          </View>
        </View>
        {icon}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ display: "flex", gap: 5, paddingBottom: 20 }}>
        <Text style={styles.title_page}>Dashboard</Text>
        <Text style={styles.descricao_page}>Visão geral do seu sistema</Text>
      </View>
      <View style={{ display: "flex", gap: 15 }}>
        <View style={styles.cards_info_group}>
          <Text style={{ fontWeight: "bold" }}>Resumo dia</Text>
          <ItemInfo
            title="Total previsto do dia"
            data="0"
            descricao="Soma total prevista para os pagamentos"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card_info}
                size={15}
              />
            }
          />
          <ItemInfo
            title="Total recebido dia"
            data="0"
            descricao="Soma de todos os pagamentos do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card_info}
                size={15}
              />
            }
          />
        </View>
        <View style={styles.cards_info_group}>
          <Text style={{ fontWeight: "bold" }}>Resumo mês</Text>
          <ItemInfo
            title="Total previsto do mês"
            data="0"
            descricao="Soma de todas as parcelas do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card_info}
                size={15}
              />
            }
          />
          <ItemInfo
            title="Total recebido mês"
            data="0"
            descricao="Soma de todos os pagamentos do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card_info}
                size={15}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title_page: {
    fontSize: 25,
    fontWeight: "bold",
  },
  descricao_page: {
    fontSize: 15,
    color: "#8f979b",
  },
  cards_info_group: {
    display: "flex",
    gap: 15,
    borderColor: "#ddddddff",
    borderWidth: 1,
    flexGrow: 1,
    flexBasis: 300,
    padding: 15,
    borderRadius: 10,
  },
  cards_info: {
    borderColor: "#ddddddff",
    borderWidth: 1,
    flexGrow: 1,
    flexBasis: 300,
    padding: 15,
    borderRadius: 10,
  },
  icon_card_info: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
