import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { usePostCartMutation } from "../servicies/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "../components/DatePicker";
import PassengerCounter from "../components/PassangerCounter";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const handleAddproduct = async () => {
    const cartProduct = { ...product, quantity: 1 };
    try {
      await triggerAddProduct({ localId, cartProduct });
      navigation.navigate("CartStack");
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
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
        <Text style={styles.price}>Precio: $ {product.price}</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>Pasajeros:</Text>
          <PassengerCounter
            passengers={passengers}
            increment={() => {
              if (passengers < 10) setPassengers(passengers + 1);
            }}
            decrement={() => {
              if (passengers > 1) setPassengers - 1;
            }}
          />
        </View>
        <View style={styles.dates}>
          {" "}
          <View style={styles.datePickerContainer}>
            {" "}
            <Text style={styles.datePickerLabel}>Fecha de inicio:</Text>{" "}
            <Pressable onPress={() => setStartDatePickerVisibility(true)}>
              {" "}
              <Text style={styles.dateText}>
                {startDate.toDateString()}
              </Text>{" "}
            </Pressable>{" "}
            <DatePicker
              date={startDate}
              setDate={setStartDate}
              isVisible={isStartDatePickerVisible}
              showPicker={() => setStartDatePickerVisibility(true)}
              hidePicker={() => setStartDatePickerVisibility(false)}
            />{" "}
          </View>{" "}
          <View style={styles.datePickerContainer}>
            {" "}
            <Text style={styles.datePickerLabel}>Fecha de fin:</Text>{" "}
            <Pressable onPress={() => setEndDatePickerVisibility(true)}>
              {" "}
              <Text style={styles.dateText}>{endDate.toDateString()}</Text>{" "}
            </Pressable>{" "}
            <DatePicker
              date={endDate}
              setDate={setEndDate}
              isVisible={isEndDatePickerVisible}
              showPicker={() => setEndDatePickerVisibility(true)}
              hidePicker={() => setEndDatePickerVisibility(false)}
            />{" "}
          </View>{" "}
        </View>{" "}
        <Pressable style={styles.button} onPress={handleAddproduct}>
          {" "}
          <Text style={styles.textButton}>Agregar al carrito</Text>{" "}
        </Pressable>{" "}
      </View>{" "}
    </ScrollView>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: "#666",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#e91e63",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginVertical: 20,
  },
  counterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  datePickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  datePickerContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  datePickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  dateText: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
  dates: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
