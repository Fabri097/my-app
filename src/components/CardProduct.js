import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'

const CardProduct = ({product}) => {

    const {title,price,stock,thumbnail,rating} = product
    const {width, height} = useWindowDimensions()
    const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("ProductDetail",{product})}>
      <Image style={styles.image} source={{uri:thumbnail}} resizeMode='cover'/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerText}>
            <Text style={width > 400 ? styles.text : styles.textMin}>Precio: $ {price}  </Text>
            <Text style={width > 400 ? styles.text : styles.textMin}>Stock: {stock}</Text>
            <Text style={width > 400 ? styles.text : styles.textMin}>Rating: {rating} 🌟</Text>

        </View>
      </View>
    </Pressable>
  )
}

export default CardProduct

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    fontFamily: 'serif',
    marginBottom: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#8B4513',
    fontFamily: 'serif',
  },
  textMin: {
    fontSize: 12,
    color: '#8B4513',
    fontFamily: 'serif',
  },
})