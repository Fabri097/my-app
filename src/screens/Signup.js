import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useSignUpMutation } from "../servicies/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { signupSchema } from "../validations/signupSchema";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerSignup] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      signupSchema.validateSync({ email, password, confirmPassword });
      const response = await triggerSignup({ email, password });
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
          setConfirmPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          setConfirmPasswordError("");
          break;
        case "confirmPassword":
          setConfirmPasswordError(error.message);
          setEmailError("");
          setPasswordError("");
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Registrarme</Text>
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
        <SubmitButton title="Registrarme" onPress={onSubmit} />
        <Text style={styles.sub}>¿Tienes cuenta registrada?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sub: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
    textAlign: "center",
  },
  subLink: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 10,
    textAlign: "center",
  },
});
