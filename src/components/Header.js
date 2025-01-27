import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowGoBack from "./ArrowGoBack";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deleteUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { deleteSesion } from "../config/dbSqlite";

const Header = ({ title }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSesion();
    dispatch(deleteUser());
  };

  return (
    <View style={styles.container}>
      {navigate.canGoBack() ? <ArrowGoBack /> : null}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    color: "#8B4513",
    fontSize: 16,
    fontFamily: "josefin",
  },
  logout: {
    position: "absolute",
    right: 10,
    padding: 5,
  },
});
