
import { StatusBar } from "react-native"
import { colors } from "./src/globals/colors"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store from "./src/store"
import { init } from "./src/config/dbSqlite"
import { useEffect } from "react"

export default function App() {

  init()
  
  return (
    <>
    <Provider store={store}>
       <Navigator/>
    </Provider>   
     <StatusBar style="light" backgroundColor={colors.accent}/>
    </>
  )
}


