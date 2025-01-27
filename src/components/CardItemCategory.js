import {StyleSheet,Pressable, View} from 'react-native'
import ShadowCard from './Wrappers/ShadowCard'
import TextPrimary from './TextPrimary'
import { useNavigation } from '@react-navigation/native'


const CardItemCategory = ({item:category}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.category}>
      <Pressable onPress={()=> {
      navigation.navigate("ProductsByCategory",{category})

      }}>
      <ShadowCard style={styles.container} >
          <TextPrimary style={styles.text}>{category}</TextPrimary>
      </ShadowCard>
    </Pressable>
    </View>
    
  )
}

export default CardItemCategory

const styles = StyleSheet.create({
  category:{
    marginTop:15,
    alignItems: 'center',
  },
  container: {
    marginBottom: 10,
    padding: 23,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    width: 200, 
    height: 70,
  },
  text: {
    fontSize: 18,
    color: '#8B4513',
    fontFamily: 'serif',
    textAlign: 'center',
  },
})