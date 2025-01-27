import { StyleSheet, Text, View, Pressable} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const CardOrder = ({order}) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Total: {order.total} $ </Text>
      </View>
      <Pressable  style={styles.iconContainer}>
        <FontAwesome name="plane" size={30} color="white" />
      </Pressable>
    </View>
  )
}

export default CardOrder

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
    borderWidth: 1,
    borderColor: '#8B4513',
    borderStyle: 'dashed',
  },
  content: {
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 16,
    color: '#8B4513',
    fontFamily: 'serif',
    marginBottom: 5,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: '#8B4513',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})