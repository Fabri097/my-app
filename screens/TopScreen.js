import React from "react";
import NationalScreen from "./NationalScreen";
import StackScreen from "./StackScreen";
import { View, StyleSheet, ScrollView, Text } from "react-native";

const TopScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.item}>
          <NationalScreen />
        </View>
        <View style={styles.item}>
          <StackScreen />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  screen: {
    marginTop: 5,
  },
  item: {
    margin: -20,
    padding: 15,
  },
});

export default TopScreen;
