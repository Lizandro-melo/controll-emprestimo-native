import TitlePage from "@/utils/components/title_page";
import { SCREEN_WIDTH } from "@/utils/constants/app";
import styles_global from "@/utils/constants/styles";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { memo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string;
  data: string;
  description: string;
  icon: React.ReactNode;
};

type CardGroupProps = {
  children: React.ReactNode;
  title: string;
};

export default function Dash() {
  const CardGroup = memo(function CardGroup({ ...props }: CardGroupProps) {
    return (
      <View style={styles.card_group}>
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
        {props.children}
      </View>
    );
  });

  const Card = memo(function Card({ ...props }: CardProps) {
    return (
      <View style={styles.card}>
        <View
          style={{
            gap: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
          <View style={{}}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {props.data}
            </Text>
            <Text style={{ fontSize: 12, color: "#8f979b" }}>
              {props.description}
            </Text>
          </View>
        </View>
        {props.icon}
      </View>
    );
  });

  return (
    <ScrollView contentContainerStyle={styles_global.container_default}>
      <TitlePage title="Dashboard" description="Visão geral do seu sistema" />
      <View style={{ gap: 15 }}>
        <CardGroup title="Resumo do dia">
          <Card
            title="Total previsto"
            data="0"
            description="Soma total prevista para os pagamentos"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card}
                size={15}
              />
            }
          />
          <Card
            title="Total recebido"
            data="0"
            description="Soma de todos os pagamentos do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card}
                size={15}
              />
            }
          />
        </CardGroup>
        <CardGroup title="Resumo do mês">
          <Card
            title="Total previsto"
            data="0"
            description="Soma de todas as parcelas do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card}
                size={15}
              />
            }
          />
          <Card
            title="Total recebido"
            data="0"
            description="Soma de todos os pagamentos do mês"
            icon={
              <FontAwesome6
                name="money-bills"
                color={"#888888ff"}
                style={styles.icon_card}
                size={15}
              />
            }
          />
        </CardGroup>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card_group: {
    gap: 15,
    borderColor: "#ddddddff",
    borderWidth: 1,
    flexGrow: 1,
    flexBasis: 300,
    padding: 15,
    borderRadius: 10,
  },
  card: {
    borderColor: "#ddddddff",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    minWidth: SCREEN_WIDTH * 0.8,
  },
  icon_card: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
