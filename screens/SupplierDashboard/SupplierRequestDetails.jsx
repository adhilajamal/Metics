import { StyleSheet, Text, View ,TouchableOpacity,Image,ScrollView,TextInput} from 'react-native'
import React ,{useState}from 'react'
import CheckBox from '@react-native-community/checkbox';

const SupplierRequestDetails = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={styles.arrow} source={require('../assets/back.png')} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Request</Text>
            <View style={{borderWidth:0.5,borderColor:'grey',top:55}}></View>
            <View style={styles.requestContainer}>
                <Text style={styles.request}>Request</Text>
                <TouchableOpacity style={styles.bidButton}>
                    <Text style={styles.bidText}>Bid</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.ignoreButton}>
                    <Text style={styles.ignoreText}>Ignore</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{top:20}}>
     <View style={styles.detailsContainer}>
        <Text style={styles.RFQNumber}>RFQ#320023</Text>
            <View style={styles.detailedContainer}>
              <Text style={styles.requestedby}>Requested By</Text>
              <Text style={styles.requestedName}>Wayne Enterprises</Text>
              <View style={{borderWidth:0.5,borderColor:'grey',margin:10}}></View>
              <View style={styles.titleContainer}>
                    <Text style={styles.RFQTitle}>RFQ Title</Text>
                    <Text style={styles.RFQTitleName}>Test 2</Text>
              </View>
              <View style={styles.referenceContainer}>
                    <Text style={styles.reference}>Reference  Number</Text>
                    <Text style={styles.referenceNo}>T2</Text>
              </View>
              <View style={styles.typeContainer}>
                    <Text style={styles.contract}>Contract Type</Text>
                    <Text style={styles.contractType}>Open</Text>
              </View>
            </View>
        </View>

      {/*Attatchments */}

        <View style={styles.attachmentContainer}>
          <Text style={styles.attachment}>Attachments</Text>
          <Text style={styles.attachmentDetails}>No Attachments Available</Text>
        </View>

      {/*Payment Templates*/}
      <View style={styles.paymentTemplatesContainer}>
        <Text style={styles.paymentTitle}>Payment Templates</Text>
        <View style={styles.paymentView}>
          <View style={styles.paymentHeader}>
            <Text  style={styles.slno}>Sl no</Text>
            <Text  style={styles.slno}>Name</Text>
            <Text  style={styles.slno}>Select</Text>
          </View>
          <View style={{borderWidth:0.5,borderColor:'grey'}}></View>
          <View  style={styles.paymentData}>
            <Text  style={styles.data}>1</Text>
            <Text  style={styles.data}>Terms and Conditions</Text>
            <Text  style={styles.data}>sbcsc</Text>
          </View>
          <View style={styles.paymentData}>
            <Text  style={styles.data}>1</Text>
            <Text style={styles.data}>bdfjd</Text>
            <Text style={styles.data}>bdfdhvbd</Text>
          </View>
        </View>
      </View>
      
      {/*Terms and Conditions*/}
      <View style={styles.termsContainerr}>
        <Text style={styles.termsandcondition}>Terms and Conditions</Text>
        <View style={styles.conditionContainerr}>
          <Text style={styles.conditionText}> All information provided within the app is for general informational purposes only. We reserve the right to modify or discontinue services at any time without notice. Unauthorized use of this app or its content may give rise to a claim for damages. Your continued use of this app signifies your acceptance of these terms. Please review these terms periodically for updates.</Text>
        </View>
        <TouchableOpacity style={styles.agreeButton}  >
            <Text style={styles.agreeText}>Agree</Text>
        </TouchableOpacity>
      </View>
      {/*Note to supplier*/}
      <View style={styles.notetoSupplierContainer}>
        <Text style={styles.termsandcondition}>Note to Supplier</Text>
        <View style={styles.textContainer}>
        <TextInput style={styles.noteText} placeholder='Note here...' ></TextInput>
        </View>
      </View>

      {/*Comment Section*/}
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

      {/*Quote section*/}
    <View style={styles.quoteContainer}>
     <View style={styles.quoteStyle}>
     <Text style={styles.quoteTextStyle}>Name:</Text>
     <Text style={styles.quoteTextStyle}>Test2</Text> 
     </View>
      <View style={styles.quoteStyle}>
      <Text style={styles.quoteTextStyle}>Qty:</Text>
      <Text style={styles.quoteTextStyle}>1 AE</Text>
      </View>
     <View style={styles.quoteStyle}>
     <Text style={styles.quoteTextStyle}>Brand:</Text>
     <Text style={styles.quoteTextStyle}>aaaaaaa</Text>
     </View>
     <View style={styles.quoteStyle}>
     <Text style={styles.quoteTextStyle}>Target Price:</Text>
     <Text style={styles.quoteTextStyle}>45000.00</Text>
     </View>
     <View style={styles.quoteStyle}>
     <Text style={styles.quoteTextStyle}>Created At:</Text>
     <Text style={styles.quoteTextStyle}>11/05/24</Text>
     </View>
     <View style={styles.quoteStyle}>
     <Text style={styles.quoteTextStyle}>Promised Date:</Text>
     <Text style={styles.quoteTextStyle}>aaaaaaa</Text>
     </View>
     <TouchableOpacity style={styles.quoteButton}  >
        <Text style={styles.quoteText}>Quote</Text>
    </TouchableOpacity>
    </View>
   

    <View style={{height:200}}></View>
    </ScrollView>
    </View>
  )
}

export default SupplierRequestDetails

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
        padding:20
      },
      arrow:{
        top:45,
        width:20,
        height:15,
        left:10
      },
      screenTitle: {
        fontSize: 22,
        marginLeft:25,
        top:25,
        left:20
       
      },
      requestContainer:{
        margin:10,
        flexDirection:'row'
      },
      request:{
        fontSize:22,
        margin:20,
        top:50
      },
      bidButton:{
        backgroundColor:'#02b975',
        height:28,
        width:60,
        borderRadius:5,
        marginRight:10,
        top:70,
        left:80
      },
      bidText:{
        textAlign:'center',
        color:'white',
        top:5
      },
      ignoreButton:{
        backgroundColor:'red',
        height:28,
        width:60,
        borderRadius:5,
        top:70,
        left:80
      },
      ignoreText:{
        textAlign:'center',
        color:'white',
        top:5
      },
      detailsContainer:{
        top:30,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        
      },
      RFQNumber:{
        fontSize:16,
        fontWeight:'bold',
        margin:10,
        left:15
        
      },
     
      detailedContainer:{
        top:-10,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:5,
        
      },
      requestedby:{
        color:'grey',
        margin:10,
        fontSize:12
      },
      requestedName:{
        marginLeft:7,
        fontWeight:'500',
        fontSize:12
      },
      titleContainer:{
       marginLeft:10,
       marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      RFQTitle:{
        fontSize:12,
        color:'grey'
      },
      RFQTitleName:{
        color:'grey',
        fontSize:12
      
      },
      referenceContainer:{
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
         justifyContent:'space-between'
      },
      reference:{
        color:"grey",
        fontSize:12
        
      },
      referenceNo:{
        fontSize:12,
       
        color:'grey'

      },
      typeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
      },
      contract:{
        fontSize:12,
        color:'grey'
      },
      contractType:{
        fontSize:12,
        color:'grey'
      },
      //attachment
      attachmentContainer:{
        top:45,
        padding:15,
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey'
      },
      attachment:{
        marginBottom:3

      },
      attachmentDetails:{
        color:'grey',
        fontSize:12
      },
      //payement templates
      paymentTemplatesContainer:{
        marginTop:10,
        top:45,
        padding:15,
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey'
      },
      paymentTitle:{
        fontSize:16
      },
      paymentView:{
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey',
        margin:5
       

      },
      paymentHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
      },
      slno:{
        color:'grey'
      },
     
      paymentData:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
      },
      data:{
        color:'grey'
      },
      //terms and condition
      termsContainerr:{
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey',
        
        top:60
      },
      termsandcondition:{
        fontSize:16,
        margin:10,
      },
      conditionContainerr:{
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey',
        margin:10,
        bottom:10
      },
      conditionText:{
        padding:8,
        color:'grey',
        fontSize:12
      },
      agreeButton:{
        top:-10,
        backgroundColor:'#02b975',
        width:110,
        borderRadius:3,
        height:30,
        left:225
      },
      agreeText:{
        top:6,
        textAlign:'center',
        color:'white',
        
      },
      //note section
      notetoSupplierContainer:{
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey',
        bottom:10,
        top:80
      },
      textContainer:{
        borderWidth:0.8,
        borderRadius:8,
        borderColor:'grey',
        bottom:10,
        margin:15
      },
      noteText:{
        backgroundColor:'white',
        height:100,
        textAlign:'top',
        
      },
     
      //comment section
      commentContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:100
      },
      commentTitle:{
        margin:10,
        marginLeft:15,
        fontSize:15,

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
      //quote section
      quoteContainer:{
        top:120,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        padding:10,
        
      },
      quoteStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        color:'grey'
      },
      quoteTextStyle:{
        color:'grey',
        padding:5
      },
      quoteButton:{
        top:5,
        backgroundColor:'#02b975',
        width:70,
        borderRadius:3,
        height:30,
        left:260
      },
      quoteText:{
        top:6,
        textAlign:'center',
        color:'white',

        
      },
})