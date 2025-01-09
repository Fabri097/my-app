import { StyleSheet, View } from "react-native";

const ShadowCard = ({children,style}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default ShadowCard

const styles = StyleSheet.create({
 container:{
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:4
    },
    shadowOpacity:0.32,
    shadowRadius:5.46,
    elevation:9
 }
})