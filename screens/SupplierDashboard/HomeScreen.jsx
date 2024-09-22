import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../../BottomTab'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     
      {/* <DrawerScreen /> */}
      <BottomTab />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    }
})