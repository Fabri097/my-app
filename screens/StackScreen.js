import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.imgur.com/QYWAcXk.jpeg" }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.heading}>Cartagena</Text>
          <Text style={styles.paragraph}>
            Joya colonial en la costa caribeña de Colombia. Conocida por sus
            playas hermosas y vibrante vida nocturna, destino perfecto para
            disfrutar del sol
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>¡Disfruta tu viaje! 🌴🏰</Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={16}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
    elevation: 5,
    overflow: "hidden",
    width: "90%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Roboto-Condensed",
  },
  paragraph: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    fontFamily: "Roboto-Light",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 8,
  },
});

export default StackScreen;
