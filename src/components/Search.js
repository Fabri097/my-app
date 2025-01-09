import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../globals/colors";
import { useState } from "react";

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const regex = /[+\-*/%@#&]/;
    if (regex.test(textInput)) {
      return setError("Caracter no valido");
    }
    setError("");
    onChangeKeyword(textInput);
  };

  const removeSearch = () => {
    onChangeKeyword("");
    setTextInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholderTextColor={colors.lightGray}
          placeholder="Buscar"
        />
        <Pressable style={styles.button} onPress={search}>
          <FontAwesome name="search" size={30} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 10,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginLeft: 10,
  },
  error: {
    color: "red",
    marginTop: 1,
    fontSize: 14,
   
  },
});

export default Search;
