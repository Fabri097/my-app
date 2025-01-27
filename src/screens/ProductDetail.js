import { StyleSheet, Text, View,Image, Pressable, ScrollView } from 'react-native'
import { usePostCartMutation } from '../services/cart'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ProductDetail = ({route}) => {

  const navigation = useNavigation()
  const {product} = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProduct] = usePostCartMutation()

  const  handleAddproduct = async () => {

    const cartProduct = {
      ...product,
      quantity:1,
    }
    const result = await triggerAddProduct({localId,cartProduct})
    navigation.navigate("CartStack")
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <Image source={{uri:product.thumbnail}} style={styles.image} resizeMode='contain'/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: $ {product.price} </Text>
      <Pressable style={styles.button} onPress={handleAddproduct}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
    </ScrollView>
    
  )
}

export default ProductDetail

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
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
    fontFamily: 'serif',
    textAlign: 'center',
    padding:10,
  },
  description: {
    fontSize: 16,
    color: '#8B4513',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#8B4513',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'serif',
    textAlign: 'center',
  },
})