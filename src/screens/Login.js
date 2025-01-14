import { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../servicies/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { loginSchema } from "../validations/loginSchema";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const response = await triggerLogin({ email, password });
      const user = {
        email: response.data.email,
        idToken: response.data.idToken,
        localId: response.data.localId
      };
      dispatch(setUser(user));
    } catch (error) {
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          Alert.alert(
            'Error',
            error.message,
            [{ text: 'OK' }]
          );
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          Alert.alert(
            'Error',
            error.message,
            [{ text: 'OK' }]
          );
          break;
        default:
          Alert.alert(
            'Error',
            'Email o contraseña incorrectos. Por favor, inténtalo de nuevo.',
            [{ text: 'OK' }]
          );
          setEmailError("");
          setPasswordError("");
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresar</Text>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(t) => setPassword(t)}
            secureTextEntry={!isPasswordVisible}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <SubmitButton onPress={onSubmit} title="Ingresar" />
        <Text style={styles.sub}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Registrarme</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  sub: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  subLink: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
