import { StyleSheet, Pressable } from "react-native";
import ShadowCard from "./Wrappers/ShadowCard";
import TextPrimary from "./TextPrimary";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shopSlice";


const CardItemCategory = ({item: category }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable onPress={() => {
      dispatch(setProductsFilteredByCategory(category));
      navigation.navigate("ProductsByCategory", { category });
    }}>
      <ShadowCard style={styles.container}>
        <TextPrimary style={styles.text}>{category}</TextPrimary>
      </ShadowCard>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CAF50",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
});
