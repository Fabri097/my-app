import { StyleSheet, View, Image, Text } from "react-native"
import SubmitButton from "../components/SubmitButton"
import { useNavigation } from "@react-navigation/native"
import { useGetUserQuery} from "../servicies/user"
import { useSelector } from "react-redux"

const MyProfile = () => {

  const navigation = useNavigation()
  
  const localId = useSelector(state => state.user.localId)
  const {data:user,isLoading} = useGetUserQuery({localId})


  if(isLoading) return <View><Text>Cargando</Text></View>
  
return (
  <View style={styles.container}>
    <Image
      source={user?.image ? {uri:user.image}:require("../../assets/profile_default.png")}
      resizeMode='cover'
      style={styles.image}
    />
    <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
    <SubmitButton title="Agregar localizacion" onPress={()=>{}}/>
  </View>
)
}

export default MyProfile

const styles = StyleSheet.create({})