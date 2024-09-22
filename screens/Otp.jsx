import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

const Otp = ({navigation}) => {
  return (
    <View style={styles.container}>
        
         <View style={styles.header}>
         <Image
          source={require('./assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>Metics</Text>
      </View>
      {/* <Button onPress={()=> navigation.navigate('Login')} title='Back to Login'/> */}
      <Text style={styles.mainHeading}>Enter OTP</Text>
      <Text style={styles.inputText}>Enter OTP sent to your mail</Text>
      <TextInput placeholder='OTP' style={styles.input}></TextInput>
      <View>
        <Text style={styles.resend}>Resend OTP</Text>
      </View>
      <TouchableOpacity style={styles.next}>
        <Text style={styles.nextButton} onPress={()=>navigation.navigate('newpassword')}>Next</Text>
      </TouchableOpacity>
     <View style={styles.remember}>
     <Text style={styles.rememberPassword}>Remember Your Password?</Text>
     <TouchableOpacity style={styles.rememberLogin} onPress={()=>navigation.navigate('Login')}  >
     <Text style={styles.rememberLogin}>Login</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default Otp

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
    right:30
  },
  image: {
    top:80,
    height: 80,
    width: 80,
    right:20
  },
  mainHeading:{
    top:220,
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
  },
  inputText:{
    top:260,
    // left:10,
    marginBottom:10
  },
  input:{
    top:260,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 5,
    padding:25,
    
  },
  next:{
    top:285,
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
    top:300,
    textAlign:'center',
    
  },
  rememberLogin:{
    color:'blue',
    fontSize:15,
    top:150,
    left:3,
    textAlign:'center',
    

  },
  resend:{
    top:250,
    left:190,
    fontSize:13
  }
})