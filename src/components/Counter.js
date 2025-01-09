import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../features/counterSlice'

const Counter = () => {

    const [input,setInput] = useState(0)
    const counter = useSelector(state => state.counter.value)
    const dispach = useDispatch()


  return (
    <View>
      <Button title='-' onPress={()=>dispach(decrement())}/>
      <Text>{counter}</Text>
      <Button title='+' onPress={()=>dispach(increment())}/>
      <TextInput value={input} onChangeText={(t)=> setInput(parseInt(t))}/>
       <Button title='cambiar' onPress={()=>dispach(incrementByAmount(input))}/>
      
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})