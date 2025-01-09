
import { StatusBar } from "react-native"
import { colors } from "./src/globals/colors"
//import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store from "./src/store"

export default function App() {
  
  return (
    <>
    <Provider store={store}>
       <Navigator/>
    </Provider>   
     <StatusBar style="light" backgroundColor={colors.accent}/>
    </>
  )
}

//const styles = StyleSheet.create({})
