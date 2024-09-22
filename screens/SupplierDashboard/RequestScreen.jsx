import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const RequestScreen = ({ navigation }) => {
  const [search,setSearch] = useState('')
  const [header, setHeader] = useState('All');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Select', value: '' },
    { label: 'January', value: 'january' },
    { label: 'February', value: 'february' },
    { label: 'March', value: 'march' },
    { label: 'April', value: 'april' },
    { label: 'May', value: 'may' },
    { label: 'June', value: 'june' },
    { label: 'July', value: 'july' },
    { label: 'August', value: 'august' },
    { label: 'September', value: 'september' },
    { label: 'October', value: 'october' },
    { label: 'November', value: 'november' },
    { label: 'December', value: 'december' },
  ]);

  const [requests] = useState([
    { id: 1, reference: 'T2', company: 'Wayne Enterprises', status: 'Open', date: '05/08/24' },
    { id: 2, reference: 'T2', company: 'Wayne Enterprises', status: 'Closed', date: '05/08/24' },
    { id: 3, reference: 'T2', company: 'Wayne Enterprises', status: 'Open', date: '05/08/24' },
  ]);

  const filteredRequests = header === 'All' 
    ? requests 
    : requests.filter(request => request.status === header);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
         <Image style={styles.arrow} source={require('../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>Request History</Text>
      
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setHeader('All')}>
            <Text style={header === 'All' ? styles.activeHeader : styles.inactiveHeader}>
              All
            </Text>
            {header === 'All' && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHeader('Open')}>
            <Text style={header === 'Open' ? styles.activeHeader : styles.inactiveHeader}>
              Open
            </Text>
            {header === 'Open' && <View style={styles.underline}></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHeader('Closed')}>
            <Text style={header === 'Closed' ? styles.activeHeader : styles.inactiveHeader}>
              Closed
            </Text>
            {header === 'Closed' && <View style={styles.underline}></View>}
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        <ScrollView style={styles.scrollview}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          placeholder='Select'
        />

        <View style={styles.search}>
          <TextInput style={{ left: 20, color: 'grey' }} value={search} placeholder='Search' onChange={()=>setSearch()}></TextInput>
          <TouchableOpacity>
            <Image source={require('../assets/search.png')} style={styles.searchButton}/>
          </TouchableOpacity>
        </View>
      
        {filteredRequests.map(request => (
          <TouchableOpacity onPress={()=>navigation.navigate('SupplierRequestDetails')}>
            <View key={request.id} style={styles.requestContainer}>
            <Text style={styles.detail1}>Reference Number</Text>
            <Text style={styles.detail2}>{request.reference}</Text>
            <View style={{ borderWidth: 0.8, borderColor: '#dfdfdf', top: 10,marginLeft:-15,marginRight:-15 }}></View>
            <Text style={styles.detail3}>{request.company}</Text>
            <Text style={request.status=='Open'? styles.detail4:styles.details45}>{request.status}</Text>
            <Text style={styles.detail5}>{request.date}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    backgroundColor:'white',
    padding:20
  },
  arrow:{
    top:60,
    width:20,
    height:15,
    left:10
  },
  screenTitle: {
    fontSize: 22,
    marginLeft:25,
    top:38,
    left:20
   
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 75, 
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
    top:10
  },
  dropdown: {
    borderColor: 'grey',
    borderRadius: 30,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  dropdownContainer: {
    top:30,
    right:35,
    width: '35%',
    alignSelf: 'center',
    marginBottom: 20,
    
    
  },
  search: {
    top:-40,
    left:210,
    flexDirection: 'row',
    borderWidth: 1,
    height: 50,
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
    top:16,
    right:25,
    width:20,
    height:20
  },
  scrollview:{
    top:-10,
   
    marginBottom:10,
    marginTop:10
  },
  requestContainer: {
    top:-45,
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
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
    fontSize: 18,
    color: '#70ff69',
    alignSelf: 'flex-end',
    top:-90,
    right:10
  },
  details45: {
    fontSize: 18,
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
});
