import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../globals/colors';
import { useState } from 'react';


const Search = ({onChangeKeyword}) => {

    const [textInput,setTextInput] = useState("")
    const [error,setError] = useState("")

    const search = () => {

        const regex = /[+\-*/%@#&]/

        if(regex.test(textInput)){
            return setError("Caracter no valido")
        }
        setError("")
        onChangeKeyword(textInput)

    }

    const removeSearch = () => {
        onChangeKeyword("")
        setTextInput("")
        setError("")
    }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          value={textInput}
          onChangeText={(text)=>setTextInput(text)}
          placeholderTextColor="black"
          placeholder='Buscar'/>
        <Pressable style={styles.button} onPress={search}>
          <FontAwesome name="search" size={30} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'serif',
    color: '#8B4513',
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#8B4513',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontFamily: 'serif',
    textAlign: 'center',
  },
})