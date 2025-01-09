import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../globals/colors";

const CardOrder = ({ order }) => {
  const date = new Date(order.createdAt).toLocaleString(); // Corregido aquí

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{order.total} $ </Text>
      </View>
      <AntDesign name="search1" size={30} color={colors.lightGray} />
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.accent,
    margin: 10,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  content: {
    gap: 10,
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
  },
});
