import { StyleSheet, Text,Pressable } from 'react-native'

const SubmitButton = ({title,onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button: {
        width: "60%",
        backgroundColor: "#8B4513", 
        padding: 10,
        alignItems: "center", 
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      text: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: 'serif', 
      },
})