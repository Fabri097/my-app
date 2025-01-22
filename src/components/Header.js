import {Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../globals/colors'
import ArrowGoBack from './ArrowGoBack'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { deleteUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { deleteSesion } from '../config/dbSqlite';



const Header = ({title}) => {

  const navigate = useNavigation()
  const dispatch = useDispatch()

  const onLogout = () => {
    deleteSesion()
    dispatch(deleteUser())
  }

  return (
    <View style={styles.container}>
     {navigate.canGoBack() ? <ArrowGoBack/>  : null } 
    <Text style={styles.title}>{title}</Text>
    <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={20} color={colors.lightGray} />
    </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        position:"relative"
    },
    title:{
        color:colors.lightGray,
        fontSize:16,
        fontFamily:"josefin"
    },
    logout:{
      position:"absolute",
      right:10
    }
})