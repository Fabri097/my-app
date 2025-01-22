import { StyleSheet, Text, View,TextInput } from 'react-native'
import { colors } from '../globals/colors'


const InputForm = ({label,value, onChangeText,isSecure,error}) => {


  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  value={value}  onChangeText={onChangeText} style={styles.input} secureTextEntry={isSecure} />
        {error ? <View><Text style={styles.error}>{error}</Text></View> : null}

    </View>
  )
}


export default InputForm


const styles = StyleSheet.create({
    inputContainer:{
        width:"100%",
        alignItems: 'center',
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        padding:2,
        
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10,
        color:"#8B4513"
      },
      titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        fontWeight: 'bold',
        color:"#8B4513"
      },
      error:{
        fontSize:16,
        color:"red",
       
        fontStyle:"italic",
        marginLeft:20
      }
})