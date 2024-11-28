import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity
              onPress={() =>navigation.navigate('Internacional')}
              style={{
                backgroundColor:'purple',
                padding:10,
                marginTop:'20%',
                width:'50%',
                alignSelf:'center',
                borderRadius:10,
            }}
            >
               <Text
                style={{
                    fontSize:15,
                    textAlign:'center',
                    color:'white',
                }}              
                >International🌍</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>navigation.navigate('National')}
              style={{
                backgroundColor:'purple',
                padding:10,
                marginTop:'20%',
                width:'50%',
                alignSelf:'center',
                borderRadius:10,
            }}
            >
               <Text
                style={{
                    fontSize:15,
                    textAlign:'center',
                    color:'white',
                }}              
                >Nacional🗺️</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>navigation.navigate('Top')}
              style={{
                backgroundColor:'purple',
                padding:10,
                marginTop:'20%',
                width:'50%',
                alignSelf:'center',
                borderRadius:10,
            }}
            >
               <Text
                style={{
                    fontSize:15,
                    textAlign:'center',
                    color:'white',
                }}              
                >Top🔥</Text>
                
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen ;