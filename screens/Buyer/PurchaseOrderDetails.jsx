import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,Modal } from 'react-native'
import React ,{useState}from 'react'


const PurchaseOrderDetails = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={styles.arrow} source={require('../assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Purchase Order Details</Text>
        <ScrollView style={styles.scrollview}>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}> Auction Details</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Title:</Text>
                    <Text style={styles.details}>Requisition Number:</Text>
                    <Text style={styles.details}>Product Category:</Text>
                    <Text style={styles.details}>Product Sub Category:</Text>
                    <Text style={styles.details}>Need by Date:</Text>
                </View>
            </View>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}>Supplier Details</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Name:</Text>
                    <Text style={styles.details}>Address:</Text>
                    <Text style={styles.details}>City:</Text>
                    <Text style={styles.details}>Country:</Text>
                    <Text style={styles.details}>Postal Code:</Text>
                    <Text style={styles.details}>Email:</Text>
                    <Text style={styles.details}>Contact:</Text>
                    <Text style={styles.details}>State:</Text>
                    <Text style={styles.details}>Total Turnover:</Text>
                    <Text style={styles.details}>No of employees:</Text>
                </View>
            </View>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}>Organization Details</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Name:</Text>
                    <Text style={styles.details}>Address:</Text>
                    <Text style={styles.details}>City:</Text>
                    <Text style={styles.details}>Country:</Text>
                    <Text style={styles.details}>Postal Code:</Text>
                    <Text style={styles.details}>Email:</Text>
                    <Text style={styles.details}>Contact:</Text>
                    <Text style={styles.details}>State:</Text>
                    <Text style={styles.details}>Total Turnover:</Text>
                    <Text style={styles.details}>No of employees:</Text>
                </View>
            </View>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}> Items</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Sl no:</Text>
                    <Text style={styles.details}>Name:</Text>
                    <Text style={styles.details}>Quantity:</Text>
                    <Text style={styles.details}>Price:</Text>
                    <Text style={styles.details}>Promised Date:</Text>
                </View>
                <View style={styles.auctionDetailsContainer}>
                <Text style={styles.details}>Sl no:</Text>
                    <Text style={styles.details}>Name:</Text>
                    <Text style={styles.details}>Quantity:</Text>
                    <Text style={styles.details}>Price:</Text>
                    <Text style={styles.details}>Promised Date:</Text>
                </View>
            </View>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}> Bid Details</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Bidders Bid Number:</Text>
                    <Text style={styles.details}>Bid Status:</Text>
                    <Text style={styles.details}>Status:</Text>
                    <Text style={styles.details}>Bid Count:</Text>
                </View>
                <TouchableOpacity style={styles.seeMore} onPress={()=>setModalVisible(true)}>
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
                <View style={styles.modalauctionContainer}>
                <Text style={styles.modaltitle}> Additional Details</Text>
                <View style={styles.modalauctionDetailsContainer}>
                    <Text style={styles.modaldetails}>Bidders Bid Number:</Text>
                    <Text style={styles.modaldetails}>Bid Status:</Text>
                    <Text style={styles.modaldetails}>Response Type:</Text>
                    <Text style={styles.modaldetails}>Bid Expiration Date:</Text>
                    <Text style={styles.modaldetails}>Supplier Note:</Text>
                    <Text style={styles.modaldetails}>Status:</Text>
                    <Text style={styles.modaldetails}>Bid Count:</Text>
                </View>
                <TouchableOpacity style={styles.close} onPress={()=>setModalVisible(false)}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
                </View>
                </View>
                </View>
                    </Modal>



            </View>
            <View style={styles.auctionContainer}>
                <Text style={styles.title}> Template Details</Text>
                <View style={styles.auctionDetailsContainer}>
                    <Text style={styles.details}>Template Name:</Text>
                    <Text style={styles.details}>Description:</Text>
                </View>
            </View>
            <View style={{height:50}}></View>
        </ScrollView>
        
    </View>
   
  )
}

export default PurchaseOrderDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        height:'100%'
      },
      arrow:{
        top:50,
        width:20,
        height:15
      },
      screenTitle: {
        fontSize: 20,
        marginLeft:25,
        top:28,
        left:10
       
      },
    scrollview:{
        height:'auto',
        top:60
        },
    auctionContainer:{
        borderWidth:0.8,
        borderColor:'grey',
        borderRadius:8,
        marginBottom:20
    },
    title:{
        padding:10,
        fontSize:15,
        fontWeight:'600',
        left:10

    },
    auctionDetailsContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10,
        padding:10,
    },
    details:{
        color:'grey',
        padding:3
    },
    seeMore:{
       
        backgroundColor:'#02b975',
        width:110,
        borderRadius:3,
        height:30,
        left:225,
        marginBottom:10,
        paddingBottom:10
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
        width: 350,
        height:300,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalauctionContainer:{
       
        borderRadius:8,
        marginBottom:10,
        width:300
    },
    modaltitle:{
        padding:10,
        fontSize:15,
        fontWeight:'600',
        left:10

    },
    modalauctionDetailsContainer:{
        borderColor:'grey',
        borderWidth:0.8,
        borderRadius:8,
        margin:10,
        padding:10,
        width:330,
        right:25
    },
    modaldetails:{
        color:'grey',
        padding:3
    },
    close:{
        backgroundColor:'#02b975',
        width:110,
        borderRadius:3,
        height:30,
        right:14,
        marginBottom:10,
        paddingBottom:10
      },
      closeText:{
        top:6,
        textAlign:'center',
        color:'white'
      },
})