import { StyleSheet, Text } from "react-native";

const TextPrimary = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextPrimary;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

