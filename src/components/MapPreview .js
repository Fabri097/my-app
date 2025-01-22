import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { googleapi } from '../googleApi'

const MapPreview = ({location}) => {

    const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
                            center=${location.lat},${location.long}
                            &zoom=13
                            &size=600x300
                            &maptype=roadmap
                            &markers=color:blue%7Clabel:S%7C${location.lat},${location.long}
                            &key=${googleapi}`
  return (
    <View>
        <Image
        source={location.lat &&{uri:mapStaticUrl}}
        style={styles.image}
        />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        backgroundColor:"grey"
    }
})