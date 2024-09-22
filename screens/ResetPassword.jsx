import { Button, StyleSheet, Text, View , TextInput, Touchable, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const ResetPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
        
         <View style={styles.header}>
         <Image
          source={require('./assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>Metics</Text>
      </View>
      <Image style={styles.keyImage}source={require('./assets/password.png')}></Image>
      <Text style={styles.mainHeading}>Reset Your Password</Text>
      <Text style={styles.inputText}>Enter Your Email</Text>
      <TextInput placeholder='Email' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.next}>
        <Text style={styles.nextButton} onPress={()=>navigation.navigate('Otp')}>Next</Text>
      </TouchableOpacity>
     <View style={styles.remember}>
     <Text style={styles.rememberPassword}>Remember Your Password?</Text>
     <TouchableOpacity style={styles.rememberLogin}   >
     <Text style={styles.rememberLogin} onPress={()=> navigation.navigate('Login')}>Login</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
container:{
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    flexDirection:'column',
    padding:35
},
header: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20, 
  },
  text1: {
    top:80,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10, 
    color: '#271464',
    textAlign:'center',
    left:-35
  },
  image: {
    top:80,
    height: 80,
    width: 80,
    right:25
  },
  keyImage:{
    height:80,
    width:80,
    top:140,
    left:120
  },
  mainHeading:{
    top:150,
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold'
  },
  inputText:{
    fontSize:15,
    top:200,
    // left:10,
    marginBottom:10
  },
  input:{
    top:210,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 5,
    padding:25,
    
  },
  next:{
    top:230,
    backgroundColor:'#02b975',
    textAlign:'center',
    color:'black',
    padding:5,
    borderRadius: 5
  },
  nextButton:{
    
    backgroundColor:'#02b975',
    textAlign:'center',
    color:'white',
    padding:5,
    fontSize:16
  },
  remember:{
    flexDirection:'row',
    textAlign:'center'
  },
  rememberPassword:{
    top:260,
    left:30,
    textAlign:'center',
    
  },
  rememberLogin:{
    color:'blue',
    fontSize:15,
    top:130,
    left:16,
    textAlign:'center',
    

  }
})