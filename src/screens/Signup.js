import {useState } from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'
import { useSignUpMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { signupSchema } from '../validations/signupSchema'
import { deleteSesion, insertSession } from '../config/dbSqlite'



const Signup = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [confirmPasswordError,setConfirmPasswordError] = useState("")
  const navigation = useNavigation()
  const [triggerSignup] = useSignUpMutation()
  const dispatch = useDispatch()


  
  

  const onSubmit = async () => {
    try {
        signupSchema.validateSync({email,password,confirmPassword})
        const response =  await triggerSignup({email,password})
        const user = {
            email:response.data.email,
            idToken:response.data.idToken,
            localId:response.data.localId
        }
        dispatch(setUser(user))
          await deleteSesion()
          await insertSession(user.localId,user.email,user.idToken)
    } catch (error) {
        switch(error.path){
            case "email":
                setEmailError(error.message)
                setPasswordError("")
                setConfirmPasswordError("")
                break
            case "password":
                setPasswordError(error.message)
                setEmailError("")
                setConfirmPasswordError("")
                break
            case "confirmPassword":
                setConfirmPasswordError(error.message)
                setEmailError("")
                setPasswordError("")
                break
    }
  }
}


  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Registrarme</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={emailError}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
          />
           <InputForm
            label="Confirmar password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={confirmPasswordError}

          />
          <SubmitButton title="Registrarme" onPress={onSubmit}  
          />
          <Text style={styles.sub}>Tenes cuenta registrada?</Text>
          <Pressable onPress={()=> navigation.navigate("Login")} >
              <Text style={styles.subLink}>Login</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default  Signup


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.primary,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:"Lobster",
      color:colors.lightGray
    },
    sub:{
      fontSize:14,
      fontFamily:"Josefin",
      color:colors.lightGray
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:colors.lightGray
    }
})