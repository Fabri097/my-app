import { StyleSheet, Text, View, TextInput } from "react-native";

const InputForm = ({label, value, onChangeText, isSecure, error}) =>{
    
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} style={styles.input} secureTextEntry={isSecure}/>
            { error ? <View><Text style={styles.error}>{error}</Text></View> : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
      width: "100%",
      padding: 10,
      backgroundColor: "#f0f8ff",
      borderRadius: 10,
      marginBottom: 15,
    },
    titleInput: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      backgroundColor: "#fff",
    },
    error: {
      fontSize: 14,
      color: "red",
      marginTop: 5,
    },
  });
  