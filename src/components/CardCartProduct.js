import { Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';
import { useDeleteCartProductMutation } from '../services/cart';
import { useSelector } from 'react-redux';

const CardCartProduct = ({ product }) => {
  const { category, title, rating, discountPercentage, price, quantity, departureDate, returnDate } = product;
  const localId = useSelector(state => state.user.localId);
  const [triggerDeleteItemCart] = useDeleteCartProductMutation();

  const deleteCartProduct = () => {
    triggerDeleteItemCart({ localId, productId: product.id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title} - {category}</Text>
        <Text style={styles.rating}>Rating: {rating} 🌟</Text>
        <Text style={styles.text}>Dto: $ {discountPercentage}</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>Precio: $ {price}</Text>
          <Text style={styles.text}>Pasajeros: {quantity}</Text>
        </View>
        {departureDate && <Text style={styles.text}>Fecha de Ida: {new Date(departureDate).toLocaleDateString()}</Text>}
        {returnDate && <Text style={styles.text}>Fecha de Vuelta: {new Date(returnDate).toLocaleDateString()}</Text>}
      </View>
      <Pressable onPress={deleteCartProduct}>
        <Entypo name="trash" size={30} color={colors.lightGray} style={styles.trashButton} />
      </Pressable>
    </View>
  );
};
export default CardCartProduct

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#8B4513',
    marginBottom: 5,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#8B4513',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  trashButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position:"relative",
    right:50
  },
});