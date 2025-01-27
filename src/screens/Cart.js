import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CardCartProduct from "../components/CardCartProduct";
import { colors } from "../globals/colors";
import { usePostOrdersMutation } from "../services/orders";
import { useSelector } from "react-redux";
import { useGetCartQuery, useDeleteCartMutation } from "../services/cart";
import { useEffect, useState } from "react";
import EmptyListComponent from "../components/EmptyListComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  const [triggerPost] = usePostOrdersMutation();
  const [triggerDeleteCart] = useDeleteCartMutation();
  const localId = useSelector((state) => state.user.localId);
  const { data: cart, isLoading } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }
  }, [cart]);

  const confirmCart = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      products: cart,
      createdAt,
      total,
    };
    triggerPost({ order, localId });
    triggerDeleteCart({ localId });
    navigation.navigate("OrdersStack");
  };
  if (isLoading) return <LoadingSpinner />;
  if (!cart)
    return <EmptyListComponent message="No hay productos en el carrito" />;
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: $ {total}  </Text>
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
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  containerTotal: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#8B4513',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#DAA520',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    opacity:0.9
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'serif',
    textAlign: 'center',
  },
});
