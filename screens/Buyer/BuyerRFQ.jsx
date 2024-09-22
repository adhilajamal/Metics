import { StyleSheet, Text, View, TouchableOpacity, Button,Image } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const BuyerRFQ = ({ navigation }) => {
  const [search,setSearch] = useState('')
  const [header, setHeader] = useState('All');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);


  const [requests] = useState([
    { id: 1, reference: 'T2', company: 'Wayne Enterprises', status: 'IN-PROGRESS', date: '05/08/24' },
    { id: 2, reference: 'T2', company: 'Wayne Enterprises', status: 'Draft', date: '05/08/24' },
    { id: 3, reference: 'T2', company: 'Wayne Enterprises', status: 'Completed', date: '05/08/24' },

  ]);

  const filteredRequests = header === 'All' 
    ? requests 
    : requests.filter(request => request.status === header);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
         <Image style={styles.arrow} source={require('../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>RFQ history</Text>
      
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setHeader('All')}>
            <Text style={header === 'All' ? styles.activeHeader : styles.inactiveHeader}>
              All
            </Text>
            {header === 'All' && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHeader('IN-PROGRESS')}>
            <Text style={header === 'IN-PROGRESS' ? styles.activeHeader : styles.inactiveHeader}>
              In-Progress
            </Text>
            {header === 'IN-PROGRESS' && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHeader('Draft')}>
            <Text style={header === 'Draft' ? styles.activeHeader : styles.inactiveHeader}>
              Draft
            </Text>
            {header === 'Draft' && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHeader('Completed')}>
            <Text style={header === 'Completed' ? styles.activeHeader : styles.inactiveHeader}>
              Completed
            </Text>
            {header === 'Completed' && <View style={styles.underline}></View>}
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>


        <View style={styles.buttons}>
            <TouchableOpacity>
              <View style={styles.export}>
                <Text style={styles.exportButton}>Export CSV</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.newRFQ}>
                <Text style={styles.exportButton}>Create New RFQ</Text>
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
        {filteredRequests.map(request => (
          <TouchableOpacity onPress={()=>navigation.navigate('RFQDetails')}>
            <View key={request.id} style={styles.requestContainer}>
            <Text style={styles.detail1}>Reference Number</Text>
            <Text style={styles.detail2}>{request.reference}</Text>
            <View style={{ borderWidth: 0.8, borderColor: '#dfdfdf', top: 10,marginLeft:-15,marginRight:-15 }}></View>
            <Text style={styles.detail3}>{request.company}</Text>
            <Text style={request.status=='IN-PROGRESS'? styles.detail4:styles.details45}>{request.status}</Text>
            <Text style={styles.detail5}>{request.date}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity>
      <View style={styles.plusButton}>
        <Text style={styles.plusbuttonText}>+</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default BuyerRFQ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    height:'100%'
  },
 
  arrow:{
    top:70,
    width:20,
    height:15
  },
  screenTitle: {
    fontSize: 22,
    marginBottom: 30,
    marginLeft:30,
    top:48
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 70, 
  },
  activeHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  inactiveHeader: {
    fontWeight: 'normal',
    color: 'grey',
    fontSize: 15,
  },
  underline: {
    backgroundColor: 'black',
    height: 2,
    
  },
  divider: {
    width: '100%',
    backgroundColor: 'grey',
    height: 1,
    marginVertical: 1,
    top:-50 
  },
  buttons:{
    flexDirection:'row'
  },
 
  search: {
    top:-52,
    left:20,
    flexDirection: 'row',
    borderWidth: 1,
    height: 35,
    width: '35%',
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
    top:8,
    right:25,
    height:20,
    width:20
  },
  export:{
    backgroundColor:'black',
    width:80,
    height:30,
    borderRadius:5,
    top:-30
  },
  newRFQ:{
    top:-30,
    left:10,
    width:120,
    height:30,
    backgroundColor:'#02b975',
    borderRadius:5
  },
  exportButton:{
    color:'white',
    textAlign:'center',
    top:5,
    fontSize:12
  },
  scrollview:{
    top:-55,
   height:'auto'
    
    // marginBottom:10,
    
  },
  requestContainer: {
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom:10,
    top:10
  
  },
  detail1: {
    color: 'grey',
    fontSize: 16,
    padding:15
  },
  detail2: {
    paddingLeft:15,
    fontSize: 18,
    marginVertical: 5, 
  },
  detail3: {
    top:20,
    left:7,
    fontSize: 16,
    color: 'grey',
    padding:5
  },
  detail4: {
    fontSize: 15,
    color: '#70ff69',
    alignSelf: 'flex-end',
    top:-90,
    right:10
  },
  details45: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'flex-end',
    top:-90,
    right:10
  },
  detail5: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-end', 
    top:-20,
    right:10
  },
  plusButton:{
    backgroundColor:'#00b875',
    width:40,
    height:40,
    borderRadius:15,
    left:300,
    top:-10
  },
  plusbuttonText:{
    textAlign:'center',
    color:'white',
    fontSize:30
  }
});
