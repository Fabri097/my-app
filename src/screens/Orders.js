import { FlatList, StyleSheet, Text, View } from 'react-native'
import CardOrder from '../components/CardOrder'
import { useGetOrdersUserQuery } from '../services/orders'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyListComponent from '../components/EmptyListComponent'


const Orders = () => {
  const localId = useSelector(state => state.user.localId)
  const {data:orders,isLoading} = useGetOrdersUserQuery({localId})

  if(isLoading) return <LoadingSpinner/>
  if(!orders) return <EmptyListComponent message="No hay ordenes"/>
  
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CardOrder order={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})