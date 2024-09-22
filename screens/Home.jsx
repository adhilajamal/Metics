import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style= {styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})