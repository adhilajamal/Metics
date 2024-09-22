import { StyleSheet, Text, View ,Image,TouchableOpacity, ScrollView,Modal,Button} from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const DetailsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
         <Image style={styles.arrow} source={require('../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>Details</Text>

     <ScrollView style={{top:15}}>
     <View style={styles.detailsContainer}>
        <Text style={styles.RFQNumber}>RFQ#320023</Text>
        <Text style={styles.date}>June 12th at 9:58AM</Text>
            <View style={styles.detailedContainer}>
              <Text style={styles.requestedby}>Requested By</Text>
              <Text style={styles.requestedName}>Wayne Enterprises</Text>
              <View style={{borderWidth:0.5,borderColor:'grey',margin:10}}></View>
              <View style={styles.titleContainer}>
                    <Text style={styles.RFQTitle}>RFQ Title</Text>
                    <Text style={styles.RFQTitleName}>Nizam One</Text>
              </View>
              <View style={styles.referenceContainer}>
                    <Text style={styles.reference}>Reference  Number</Text>
                    <Text style={styles.referenceNo}>lol77</Text>
              </View>
              <View style={styles.typeContainer}>
                    <Text style={styles.contract}>Contract Type</Text>
                    <Text style={styles.contractType}>Open</Text>
              </View>
            </View>
          <TouchableOpacity style={styles.seeMore}  onPress={() => setModalVisible(true)}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={styles.modalRFQNumber}>RFQ#320023</Text>
                <Text style={styles.modaldate}>June 12th at 9:58AM</Text>
            <View style={styles.modaldetailedContainer}>
              <Text style={styles.modalrequestedby}>Requested By</Text>
              <Text style={styles.modalrequestedName}>Wayne Enterprises</Text>
              <View style={{borderWidth:0.5,borderColor:'grey',margin:10}}></View>
              <View style={styles.modaltitleContainer}>
                    <Text style={styles.modalRFQTitle}>RFQ Title</Text>
                    <Text style={styles.modalRFQTitleName}>Nizam One</Text>
              </View>
              <View style={styles.modalreferenceContainer}>
                    <Text style={styles.modalreference}>Reference  Number</Text>
                    <Text style={styles.modalreferenceNo}>lol77</Text>
              </View>
              <View style={styles.modalcategoryContainer}>
                    <Text style={styles.modalcategory}>Product Category</Text>
                    <Text style={styles.modalcategoryNo}>-----</Text>
              </View>
              <View style={styles.modalsubcategoryContainer}>
                    <Text style={styles.modalsubcategory}>Product Sub Category</Text>
                    <Text style={styles.modalsubcategoryNo}>-----</Text>
              </View>
              <View style={styles.modaltypeContainer}>
                    <Text style={styles.modalcontract}>Contract Type</Text>
                    <Text style={styles.modalcontractType}>Open</Text>
              </View>
              <View style={styles.modallinesContainer}>
                <Text style={styles.modalrequestedName}>Lines</Text>
                <View style={styles.modallinesDetails}>
                  <View style={styles.modalproductNameContainer}>
                    <Text style={styles.modalproduct}>Product Name</Text>
                    <Text style={styles.modalproductDetails}>jdf</Text>
                  </View>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>Quantity</Text>
                    <Text style={styles.quantityDetails}>76</Text>
                  </View>
                  <View style={styles.brandContainer}>
                    <Text style={styles.brand}>Brand</Text>
                    <Text style={styles.brandDetails}>ghggh</Text>
                  </View>
                  <View style={styles.targetpriceContainer}>
                    <Text style={styles.targetprice}>Target Price</Text>
                    <Text style={styles.targetpriceDetails}>86.00</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.close}  onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
            </View>
                  
                </View>
              </View>
         </Modal>
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
      

      <View style={styles.compareSection}>
        <Text style={styles.allBidsTitle}>All Bids</Text>
        <TouchableOpacity style={styles.compareButton}>
            <Text style={styles.compareButtonText}>Compare</Text>
        </TouchableOpacity>
        <View style={{borderWidth:0.5,borderColor:'grey',top:-20, width:330,left:10}}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen2')}>
       <View style={styles.bidSection}>
       <View style={styles.quotedByContainer}>
          <Text style={styles.quotedBy}>Quoted By:</Text>
          <Text style={styles.quatedName}>Wayne Enterprises</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.exp}>Expiration Date:</Text>
          <Text style={styles.expDate}>19/06/2024</Text>
        </View>
       </View>
       </TouchableOpacity>
      </View>
      
     </ScrollView>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
        padding:20
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
      detailsContainer:{
        top:60,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8
      },
      RFQNumber:{
        fontSize:17,
        fontWeight:'bold',
        margin:12,
        left:5
        
      },
      date:{
        color:'grey',
        top:-30,
        left:230,
        fontSize:10
      },
      detailedContainer:{
        top:-15,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10
      },
      requestedby:{
        color:'grey',
        margin:10,
        fontSize:13
      },
      requestedName:{
        marginLeft:7,
        fontWeight:'500'
      },
      titleContainer:{
        margin:10,
        flexDirection:'row'
      },
      RFQTitle:{
        color:'grey'
      },
      RFQTitleName:{
        color:'grey',
        left:175,
        marginRight:10
      },
      referenceContainer:{
        margin:10,
        flexDirection:'row'
      },
      reference:{
        color:"grey",
        
      },
      referenceNo:{
        marginRight:10,
        left:150,
        color:'grey'

      },
      typeContainer:{
        margin:10,
        flexDirection:'row'
      },
      contract:{
        color:'grey'
      },
      contractType:{
        marginRight:10,
        left:180,
        color:'grey'
      },
      seeMore:{
        top:-10,
        backgroundColor:'#02b975',
        width:110,
        borderRadius:3,
        height:30,
        left:225
      },
      seeMoreText:{
        top:6,
        textAlign:'center',
        color:'white'
      },
      //modal section
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility:'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 370,
        height:600,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalRFQNumber:{
        fontSize:17,
        fontWeight:'bold',
        right:80,
        margin:10
        
        
      },
      modaldate:{
        color:'grey',
        margin:10,
        top:-35,
        left:80,
        fontSize:10
      },
      modaldetailedContainer:{
        top:-35,
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10,
        width:340
      },
      modalrequestedby:{
        color:'grey',
        margin:10,
        fontSize:13
      },
      modalrequestedName:{
        marginLeft:7,
        fontWeight:'500'
      },
      modaltitleContainer:{
        margin:10,
        flexDirection:'row'
      },
      modalRFQTitle:{
        color:'grey'
      },
      modalRFQTitleName:{
        color:'grey',
        left:175,
        marginRight:10
      },
      modalreferenceContainer:{
        margin:10,
        flexDirection:'row',
        
        
      },
      modalreference:{
        color:"grey",
        
      },
      modalreferenceNo:{
        marginRight:10,
        left:150,
        color:'grey'


      },
      modalcategoryContainer:{
        margin:10,
        flexDirection:'row',
        
        
      },
      modalcategory:{
        color:"grey",
        
      },
      modalcategoryNo:{
        marginRight:10,
        left:160,
        color:'grey'

      },
      modalsubcategoryContainer:{
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
        
        
      },
      modalsubcategory:{
        color:"grey",
        
      },
      modalsubcategoryNo:{

        marginRight:20,
        color:'grey'


      },
      modaltypeContainer:{
        margin:10,
        flexDirection:'row'
      },
      modalcontract:{
        color:'grey'
      },
      modalcontractType:{
        marginRight:10,
        left:180,
        color:'grey'
      },
      modallinesContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10,
        padding:10
      },
      modallinesDetails:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10
      },
      modalproductNameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      modalproduct:{
        color:'grey'
      },
      modalproductDetails:{
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
      targetpriceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
      },
      targetprice:{
        color:'grey'
      },
      targetpriceDetails:{
        color:'grey'
      },
      close:{
        top:-5,
        backgroundColor:'#02b975',
        width:110,
        borderRadius:3,
        height:30,
        left:10
      },
      closeText:{
        top:6,
        textAlign:'center',
        color:'white'
      },
      //comment section
      commentContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:80
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
      //Compare Section
      compareSection:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        top:100
      },
      allBidsTitle:{
        fontSize:15,
        fontWeight:'bold',
        margin:15,
        
      },
      compareButton:{
        left:230,
        top:-35,
        backgroundColor:'green',
        borderRadius:5,
        height:25,
        width:80
      },
      compareButtonText:{
        top:3,
        left:10,
        color:'white'
      },
      bidSection:{
        margin:10,
        width:250,
        borderWidth:0.8,
        borderColor:'grey',
        borderRadius:8
      },
      quotedByContainer:{
        flexDirection:'row',
       
      },
      quotedBy:{
        marginRight:10,
        left:10
      },
      quatedName:{
        left:5
      },
      dateContainer:{
        flexDirection:'row'
      },
      exp:{
        margin:10,
        color:'grey',
        fontSize:12
      },
      expDate:{
        marginTop:10,
        right:5,
        color:'grey',
        fontSize:12
        
      }
})