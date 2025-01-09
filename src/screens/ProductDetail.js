import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const incrementPassengers = () => setPassengers(passengers + 1);
  const decrementPassengers = () => {
    if (passengers > 1) setPassengers(passengers - 1);
  };

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(date);
    hideEndDatePicker();
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

        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>Pasajeros:</Text>
          <View style={styles.counter}>
            <Button title="-" onPress={decrementPassengers} />
            <Text style={styles.counterText}>{passengers}</Text>
            <Button title="+" onPress={incrementPassengers} />
          </View>
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>Fecha de inicio:</Text>
          <Pressable onPress={showStartDatePicker}>
            <Text style={styles.dateText}>{startDate.toDateString()}</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="date"
            onConfirm={handleStartDateConfirm}
            onCancel={hideStartDatePicker}
          />
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>Fecha de fin:</Text>
          <Pressable onPress={showEndDatePicker}>
            <Text style={styles.dateText}>{endDate.toDateString()}</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            onConfirm={handleEndDateConfirm}
            onCancel={hideEndDatePicker}
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Agregar al carrito</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F0F8FF", 
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#696969", 
    marginBottom: 20,
    textAlign: "justify",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6347", // Rojo tomate para resaltar el precio
    marginBottom: 20,
    textAlign: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  counterLabel: {
    fontSize: 18,
    color: "#333",
    marginRight: 10,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  datePickerLabel: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 18,
    color: "#333",
  },
  button: {
    backgroundColor: "#4682B4", // Azul acero para el botón
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  textButton: {
    color: "#FFFFFF", // Texto blanco para el botón
    fontSize: 18,
    fontWeight: "bold",
  },
});
