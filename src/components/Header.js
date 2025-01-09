import { StyleSheet, Text, View } from "react-native";
import { colors } from "../globals/colors";
import ArrowGoBack from "./ArrowGoBack";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <ArrowGoBack /> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    color: colors.lightGray,
    fontSize: 16,
    fontFamily: "josefin",
  },
});
