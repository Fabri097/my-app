import { StyleSheet,FlatList,View,Text} from 'react-native'
import CardItemCategory from './CardItemCategory'
import { useGetCategoriesQuery} from '../services/shop'


const Categories = () => {

  const {data:categories,isError,error,isSuccess,isLoading} = useGetCategoriesQuery()

  if(isLoading) return <View><Text>cargando</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>
  
  return (
    <FlatList
    data={categories}
    keyExtractor={item => item}
    renderItem={({item})=> <CardItemCategory item={item}/>}
    contentContainerStyle={styles.containerCard}
  />
  )
}

export default Categories

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:60,
  }
})
