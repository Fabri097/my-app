import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabBarIcon = ({ text, icon, focused }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={icon}
        size={28}
        color={focused ? "#FF6347" : "#87CEEB"} 
      />
      <Text
        style={[
          styles.text,
          { color: focused ? "#FF6347" : "#87CEEB" }, 
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    width: 60,
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0F8FF", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position:"relative",
    bottom:8
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
