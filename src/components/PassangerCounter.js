import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const PassengerCounter = ({ passengers, increment, decrement }) => (
  <View style={styles.counterContainer}>
    <Button title="-" onPress={decrement} />
    <Text style={styles.counterText}>{passengers}</Text>
    <Button title="+" onPress={increment} disabled={passengers >= 10} />
  </View>
);

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:20,
    marginVertical: 20,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default PassengerCounter;
