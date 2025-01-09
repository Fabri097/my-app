import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardProduct = ({ product }) => {
  const { title, price, rating, thumbnail } = product;

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetail", { product })}
      >
        <View style={styles.card}>
          <Image source={{ uri: thumbnail }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Precio: ${price}</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetail", { product })}>
              <Text style={styles.buttonText}>Más info 🌍✈️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: "#E5E7EB"
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    padding: 10,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  price: {
    fontSize: 16,
    color: "#333",
    marginVertical: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CardProduct;
