import {useState} from 'react'
import { View, Text ,StyleSheet, Pressable, ImageBackground} from 'react-native'
import { colors } from '../globals/colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { loginSchema } from '../validations/loginSchema'
import { deleteSesion, insertSession } from '../config/dbSqlite'


const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const navigation = useNavigation()
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()


  const onSubmit = async () => {

    try {
        loginSchema.validateSync({email,password})
        const response = await triggerLogin({email,password})

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
                break
            case "password":
                setPasswordError(error.message)
                setEmailError("")
                break
        }
    }
  }


  return (

    <ImageBackground   source={require("../../assets/fondo.jpeg")} style={styles.background}>
      <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Ingresar</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error={emailError}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
          />
          <SubmitButton onPress={onSubmit} title="Ingresar"/>
          <Text style={styles.sub}>No tienen una cuenta?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Registrarme</Text>
          </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}


export default Login


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width:"80%",
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif', 
  },
  sub: {
    fontSize: 16,
    color: '#8B4513',
    marginTop: 20,
    textAlign: 'center',
    padding:5,
    fontFamily: 'serif', 
  },
  subLink: {
    fontSize: 14,
    color: '#8B4513',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'serif', 
  },
})