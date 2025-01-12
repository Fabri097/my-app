import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../globals/colors";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const idToken = useSelector((state) => state.user.idToken);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    height: 70,
  },
});

export default Navigator;

