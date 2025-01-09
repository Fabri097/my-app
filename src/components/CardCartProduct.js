import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../globals/colors";

const CardCartProduct = ({ product }) => {
  const { title, description, price } = product;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>Precio: S/.{price}</Text>
          <Text style={styles.text}>Cantidad: 1</Text>
        </View>
      </View>
      <Entypo name="trash" size={30} color={colors.lightGray} />
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  content: {
    width: "80%",
    gap: 15,
  },
  containerText: {
    flexDirection: "row",
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: colors.lightGray,
  },
  description: {
    color: colors.lightGray,
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
  },
});
