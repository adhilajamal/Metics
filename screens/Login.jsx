import { Button, Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
        const [selectedOption, setSelectedOption] = useState('Supplier'); 
        const [text,setText]= useState()
      
        // Toggle function
        const toggleOption = (option) => {
          setSelectedOption(option);
        };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text1}>Metics</Text>
      </View>
      <Text style={styles.text2}>Welcome to Metics</Text>
      <Text style={styles.text3}>Login as</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === 'Supplier' && styles.selectedButton, 
          ]}
          onPress={() => toggleOption('Supplier')}
        >
          <Text
            style={[
              styles.togglebuttonText,
              selectedOption === 'Supplier' && styles.selectedText,
            ]}
          >
            Supplier
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === 'Buyer' && styles.selectedButton, 
          ]}
          onPress={() => toggleOption('Buyer')}
        >
          <Text
            style={[
              styles.togglebuttonText,
              selectedOption === 'Buyer' && styles.selectedText,
            ]}
          >
            Buyer
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Email" style={styles.input} value={text} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      <TouchableOpacity onPress={()=>navigation.navigate('resetPassword')}>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {
        if(selectedOption=="Supplier"){
          navigation.navigate('HomeScreen')
        }
        else{
          navigation.navigate('Buyer')
        }
      }}>
        <LinearGradient
          colors={['#0a3176', '#1449a3', '#1e61d0']} 
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText} >Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
     <View style={styles.sign}>
     <Text style={styles.signUp}>Don't have an account?</Text>
     <TouchableOpacity style={styles.signupButton}   >
     <Text style={styles.signupButton}>Sign Up</Text>
     </TouchableOpacity>
     </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
    margin:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20, 
  },
  text1: {
    color:'#271464',
    top:-110,
    fontSize: 30,
    fontWeight: 'bold',
    right:20
  },
  image: {
    top:-110,
    height: 80,
    width: 80,
    right:20
  },
  text2: {
    top:-50,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  text3: {
    marginBottom: 30,
    fontSize:15,
    left:5

  },
  input: {
    top:30,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 5,
    padding:20,
    
    
  },
  forgotPassword: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft:5,
    color:'blue'
    
  },
  sign:{
    top:68,
    left:3,
    flexDirection:'row'
  },
  signupButton:{
    color:'blue',
    top:10,
    marginLeft:2
  },
  signUp: {
    marginTop: 20,
    textAlign: 'center',
    
  },
  gradientButton: {
    top:30,
    marginBottom:-50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
  },
  buttonText:{
    color: 'white',
    fontSize: 16,

    textAlign:'center',
  },
  toggleContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'grey', 
    borderRadius: 20,
    marginHorizontal: 2, 
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#1cbb6a', 
  },
  togglebuttonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff', 
    fontWeight: 'bold',
  }
});
