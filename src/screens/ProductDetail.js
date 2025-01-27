import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { useGetProductCartQuery, usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Counter from "../components/Counter";
import DateTimePicker from "react-native-modal-datetime-picker";
import { useState } from "react";

const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const { product } = route.params;
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();
  const { data: productCart } = useGetProductCartQuery({
    localId,
    productId: product.id,
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isReturnDatePickerVisible, setReturnDatePickerVisibility] =
    useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const increment = () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (quantity >= product.stock - cartQuantity) {
      return;
    } else if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddproduct = async () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (product.stock - cartQuantity === 0) return;
    const newQuantity = quantity + cartQuantity;
    const cartProduct = {
      ...product,
      quantity: newQuantity,
      departureDate,
      returnDate,
    };
    const result = await triggerAddProduct({ localId, cartProduct });
    setQuantity(1);
    navigation.navigate("CartStack");
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDepartureDate(date);
    hideDatePicker();
  };

  const showReturnDatePicker = () => {
    setReturnDatePickerVisibility(true);
  };

  const hideReturnDatePicker = () => {
    setReturnDatePickerVisibility(false);
  };

  const handleReturnConfirm = (date) => {
    setReturnDate(date);
    hideReturnDatePicker();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Precio: $ {product.price} </Text>
        {product.stock - productCart?.quantity === 0 ? (
          <Text style={styles.price}> Sin stock</Text>
        ) : (
          <Counter
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />
        )}

        <View style={styles.datePickersContainer}>
          <View style={styles.datePicker}>
            <Button title="Fecha de Ida" onPress={showDatePicker} />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            {departureDate && <Text>Fecha de Ida: {departureDate.toLocaleDateString()}</Text>}
          </View>
          <View style={styles.datePicker}>
            <Button title="Fecha de Vuelta" onPress={showReturnDatePicker} />
            <DateTimePicker
              isVisible={isReturnDatePickerVisible}
              mode="date"
              onConfirm={handleReturnConfirm}
              onCancel={hideReturnDatePicker}
            />
            {returnDate && <Text>Fecha de Vuelta: {returnDate.toLocaleDateString()}</Text>}
          </View>
        </View>
        <Pressable style={styles.button} onPress={handleAddproduct}>
          <Text style={styles.textButton}>Agregar al carrito</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 10,
    fontFamily: "serif",
    textAlign: "center",
    padding: 10,
  },
  description: {
    fontSize: 16,
    color: "#8B4513",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#8B4513",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8B4513",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontFamily: "serif",
    textAlign: "center",
  },
  datePickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  datePicker: {
    flex: 1,
    alignItems: 'center',
  },
});
