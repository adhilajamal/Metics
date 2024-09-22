import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput ,ScrollView} from 'react-native'
import React,{useState} from 'react'


const BuyerPurchaseAndOrders = ({navigation}) => {
  const [search,setSearch] = useState('')
  const [requests,SetRequests] = useState([
    { id: 1, requisitionNo: 'sdhssd', company: 'Wayne Enterprises', status: 'Awarded', amount: '6537' },
    { id: 2, requisitionNo: 'jffjv', company: 'Wayne Enterprises', status: 'Awarded', amount: '4546' },



  ]);

 
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
         <Image style={styles.arrow} source={require('../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>Purchase Order</Text>
     <View style={{top:60}}>
     <View style={styles.allContainer}>
        <Text style={styles.all}>All</Text>
        <Text style={styles.allNo}>2</Text>
        <Image style={styles.allImage} source={require('../assets/delivery.png')}></Image>
      </View>
     <View style={{flexDirection:'row'}}>
     <TouchableOpacity>
              <View style={styles.export}>
                <Text style={styles.exportButton}>Export CSV</Text>
              </View>
      </TouchableOpacity>
      <View style={styles.search}>
              <TextInput style={{ left: 20, color: 'grey' }} value={search} placeholder='Search' onChange={()=>setSearch()}></TextInput>
              <TouchableOpacity>
              <Image source={require('../assets/search.png')} style={styles.searchButton}/>
              </TouchableOpacity>
      </View>
     </View>

     <ScrollView style={styles.scrollview}>
      <View>
        {requests.map(request => (
          <TouchableOpacity onPress={()=>navigation.navigate('PurchaseOrderDetails')}>
            <View key={request.id} style={styles.requestContainer}>
            <Text style={styles.detail1}>Requisition Number</Text>
            <Text style={styles.detail2}>{request.requisitionNo}</Text>
            <View style={{ borderWidth: 0.8, borderColor: '#dfdfdf',marginLeft:-15,marginRight:-15 }}></View>
            <Text style={styles.detail3}>{request.company}</Text>
            <Text style={styles.detail4}>{request.status}</Text>
            <Text style={styles.detail5}>{request.amount}</Text>
          </View>
          </TouchableOpacity>
        ))}
       </View>
      </ScrollView>
      <View style={{height:100}}></View>
     </View>
    </View>
  )
}

export default BuyerPurchaseAndOrders

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
    fontSize: 22,
    marginLeft:25,
    top:28,
    left:10
   
  },
  allContainer:{
    borderColor:'grey',
    borderWidth:0.8,
    borderRadius:8,
    paddingTop:30,
    paddingLeft:30,
    paddingRight:30
   
  },
  all:{
    top:-10,
    fontSize:16
  },
  allNo:{
    marginLeft:5,
    fontSize:16
  },
  allImage:{
    height:35,
    width:35,
    bottom:40,
    left:250
  },
  export:{
    backgroundColor:'black',
    width:80,
    height:30,
    borderRadius:5,
    top:10,
    left:10
  },
  exportButton:{
    color:'white',
    textAlign:'center',
    top:5,
    fontSize:12
  },
  search: {
    top:-10,
    left:120,
    flexDirection: 'row',
    borderWidth: 1,
    height: 30,
    width: '40%',
    borderColor: 'grey',
    borderRadius: 25,
    // alignSelf: 'center',
    justifyContent: 'space-between', 
    // paddingHorizontal: 15,
    marginVertical: 20, 
  },
  searchButton: {
    alignSelf: 'center',
    color: 'grey',
    top:5,
    right:15,
    height:20,
    width:20
  },
  scrollview:{
  height:'auto'
    
  },
  requestContainer: {
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom:10,
    top:10
  
  },
  detail1: {
    color: 'grey',
    fontSize: 16,
    paddingLeft:15,
    fontSize:14,
    top:10
  },
  detail2: {
    paddingLeft:15,
    fontSize: 18,
    marginVertical: 15, 
    fontSize:14

  },
  detail3: {
    top:15,
    left:12,
    fontSize: 16,
    color: 'grey',
    
  },
  detail4: {
    fontSize: 15,
    color: '#70ff69',
    alignSelf: 'flex-end',
    top:-70,
    right:10
  },
  detail5: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-end', 
    top:-15,
    right:10,
    fontSize:14
  },
})