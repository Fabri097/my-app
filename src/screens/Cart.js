import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CardCartProduct from "../components/CardCartProduct";
import { colors } from "../globals/colors";
import { usePostOrdersMutation } from "../servicies/orders";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../servicies/cart";
import { useEffect, useState } from "react";

const Cart = () => {
  const [triggerPost] = usePostOrdersMutation();
  const localId = useSelector(state => state.user.localId);
  const { data: cart } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }
  }, [cart]);

  const confirmCart = async () => {
    try {
      await triggerPost({ id: "2", products: [{ id: "2" }], total: 120 });
    } catch (error) {
      console.error("Error al confirmar el carrito:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: {total} $ ARG</Text>
        <Pressable style={styles.button} onPress={confirmCart}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});


