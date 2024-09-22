import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Common = () => {
  return (
    
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.-__oAB-Q_HUbM8K0_V4XNwHaHa?rs=1&pid=ImgDetMain' }}
        style={styles.image}
      />
      <Text style={styles.text1}>Metics</Text>
    </View>
    
  )
}

export default Common

const styles = StyleSheet.create({
   
      header: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 20, 
      },
      text1: {
        top:-110,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10, 
      },
      image: {
        top:-110,
        height: 50,
        width: 50,
      },
})