import { FlatList, StyleSheet, View, Text} from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'
import { useGetProductsQuery } from '../servicies/shop'


const ProductsByCategory = ({route}) => {

  const {category} = route.params
  const {data,isSuccess,isError, error, isLoading} = useGetProductsQuery(category)
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState([])

  useEffect(()=>{
 
    if(isSuccess){
     setProducts(Object.values(data).filter(product => product.title.includes(keyword)&& product.category === category))
    }
 
  },[keyword,isSuccess])
 
   if(isLoading) return <View><Text>cargando</Text></View>
   if(isError) return <View><Text>{error.message}</Text></View>

   return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search onChangeKeyword={(t) => setKeyword(t)} />
      </View>
      <FlatList
        style={styles.productList}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <CardProduct product={item} />
          </View>
        )}
      />
    </View>
  );
  
    
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  searchContainer: {
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
});
