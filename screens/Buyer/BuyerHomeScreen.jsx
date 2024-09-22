import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BuyerBottomTab from '../../BuyerBottomTab'

const BuyerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <BuyerBottomTab/>
    </View>
  )
}

export default BuyerHomeScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    }
})