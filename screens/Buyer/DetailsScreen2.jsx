import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView,TextInput } from 'react-native'
import React from 'react'

const DetailsScreen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Image style={styles.arrow} source={require('../assets/back.png')} />
    </TouchableOpacity>
    <Text style={styles.screenTitle}>Details</Text>
    <ScrollView style={{top:20}}>

        <View style={styles.quoteContainer}>
            <View style={styles.quoteBy}>
                <Text style={styles.quoteByN}>Quoted By:</Text>
                <Text style={styles.quoteByName}>Wayne Enterprises</Text>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressName}>Address:</Text>
                <Text style={styles.place}>Kakkanad,Kochi</Text>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.contact}>Contact:</Text>
                <Text style={styles.contactNo}>1234567890</Text>
            </View>
        </View>

        <View style={styles.bidContainer}>
            <Text style={styles.bidDetails}>Bid Details</Text>
            <View style={styles.bidNoContainer}>
                <Text style={styles.Bid}>Bid No:</Text>
                <Text style={styles.bidNo}>1116</Text>
            </View>
            <View style={styles.exp}>
                <Text style={styles.expiry}>Expiry Date:</Text>
                <Text style={styles.expiryDate}>06/08/2024</Text>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.status}>Status:</Text>
                <View style={styles.statusBackground}>
                <Text style={styles.state}>DRAFT</Text>
                </View>
            </View>
        </View>


        <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>Comments</Text>
        <View style={styles.circle}></View>
        <View style={styles.line}></View>
        <View style={styles.commentDetails}>
              <Text style={styles.commentName}>Wayne</Text>
              <Text style={styles.commentDate}>July 13,2024</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>Note:</Text>
          <Text style={styles.noteContent}>Avoid disclosing private information here</Text>
        </View>
        <View style={styles.commentSection}>
          <TextInput style={styles.commentInput} placeholder='Comment here'></TextInput>
          <TouchableOpacity style={styles.commentButton}>
            <Text style={styles.commentButtonText}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productContainer}> 
            <View style={styles.productContainer2}>
                <View style={styles.productNameContainer}>
                    <Text style={styles.product}>Product Name</Text>
                    <Text style={styles.productName}>xjnj</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>Quantity</Text>
                    <Text style={styles.quantityDetails}>01</Text>
                </View> 
                <View style={styles.brandContainer}>
                    <Text style={styles.brand}>Brand</Text>
                    <Text style={styles.brandDetails}>sdfs</Text>
                </View> 
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>Price Quoted</Text>
                    <Text style={styles.priceDetails}>111.00</Text>
                </View> 
                <View style={styles.promisedDateContainer}>
                    <Text style={styles.promisedDate}>Promised Date</Text>
                    <Text style={styles.promisedDetails}>06/05/2024</Text>
                </View>
        </View>
        <TouchableOpacity style={styles.seeMore}>
            <Text style={styles.seeMoreText}>Negotiate</Text>
          </TouchableOpacity>
      </View>


      <View style={styles.templateContainer}>
        <Text style={styles.template}>Templates</Text>
        <View style={{borderWidth:0.5,borderColor:'grey',bottom:5}}></View>
        <Text style={styles.templateDetails}>No templates available</Text>
       
      </View>
      <View style={{height:200,}}></View>
    </ScrollView>
    
    </View>
  
  )
}

export default DetailsScreen2

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
        padding:20,
        top:20
      },
      arrow:{
        top:50,
        width:20,
        height:15
      },
      screenTitle: {
        fontSize: 22,
        marginLeft:25,
        top:28,
        left:10
       
      },
      quoteContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:50,
        padding:12
      },
      quoteBy:{
        flexDirection:'row',
        left:18,
        top:5
        
      },
      quoteByN:{
        fontSize:15,

      },
      quoteByName:{
        fontSize:15,
        left:5
      },
      addressContainer:{
        margin:10,
        left:10,
        flexDirection:'row'
      },
      addressName:{
        color:'grey',
        fontSize:13
      },
      place:{
        color:'grey',
        fontSize:13
      },
      contactContainer:{
        marginLeft:20,
        top:-6,
        flexDirection:'row'
      },
      contact:{
        color:'grey',
        fontSize:13
      },
      contactNo:{
        color:'grey',
        fontSize:13
      },
      //bidContainer
      bidContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:70,
        padding:10
      },
      bidDetails:{
        fontSize:15,
        fontWeight:'bold',
        margin:10,
        left:10
      },
      bidNoContainer:{
        marginLeft:20,
        flexDirection:'row',
        
      },
      Bid:{
        color:'grey'
      },
      bidNo:{
        color:'grey',
        left:5
      },
      exp:{
        flexDirection:'row',
        marginLeft:20,
      },
      expiry:{
        color:'grey'

      },
      expiryDate:{
        color:'grey',
        left:5
      },
      statusContainer:{
        flexDirection:'row',
        marginLeft:20
      },
      status:{
        color:'grey'
      },
      statusBackground:{
        backgroundColor:'#e8e8e8',
        width:55,
        borderRadius:3
      },
      state:{
        color:'#02b975',
        left:8,
        top:2,
        fontSize:12,
        
      },

      //comment
      commentContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:90
      },
      commentTitle:{
        margin:10,
        marginLeft:15,
        fontSize:16,
        left:10

      },
      circle:{
        backgroundColor:'#e8e8e8',
        height:10,
        width:10,
        borderRadius:20,
        margin:10,
        left:20
      },
      line:{
        backgroundColor:'#e8e8e8',
        height:40,
        width:1,
        top:-15,
        left:34.5

      },
      commentDetails:{
        flexDirection:'row'
      },
      commentName:{
        top:-62,
        left:50
      },
      commentDate:{
        top:-60,
        fontSize:12,
        left:60,
        color:'grey'
      },
      noteContainer:{
        margin:10,
        top:-42,
        left:20,
        width:280,
        flexDirection:'row',
        backgroundColor:'#e8e8e8',
        borderRadius:5,

      },
      note:{
        margin:3,
        color:'#414141'
      },
      noteContent:{
        top:1,
        margin:3,
        fontSize:12,
        color:'grey'
      },
      commentSection:{
        margin:20,
        top:-50,
        height:1

      },
      commentInput:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        height:40,
        padding:10
      },
      commentButton:{
        top:-40,
        left:236,
        width:75,
        height:40,
        backgroundColor:'#02b975',
        borderTopRightRadius:8,
        borderBottomRightRadius:8
      },
      commentButtonText:{
        color:'white',
        top:10,
        left:6
      },
      productContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:110,
        padding:12
      },
      productContainer2:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        padding:12
      },
      productNameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      product:{
        color:'grey'
      },
      productName:{
        color:'grey'
      },
      quantityContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      quantity:{
        color:'grey'
      },
      quantityDetails:{
        color:'grey'
      },
      brandContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      brand:{
        color:'grey'
      },
      brandDetails:{
        color:'grey'
      },
      priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      price:{
        color:'grey'
      },
      priceDetails:{
        color:'grey'
      },
      promisedDateContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      promisedDate:{
        color:'grey'
      },
      promisedDetails:{
        color:'grey'
      },
      seeMore:{
        top:5,
        backgroundColor:'#02b975',
        width:80,
        borderRadius:3,
        height:30,
        left:240
      },
      seeMoreText:{
        top:6,
        textAlign:'center',
        color:'white'
      },
      templateContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:130,
        padding:25
      },
      template:{
        top:-10,
        fontSize:15
      },
      templateDetails:{
        top:10,
        color:'grey',
        fontSize:12
      },
})