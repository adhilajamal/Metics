import { StyleSheet, Text, TouchableOpacity, View,Switch } from 'react-native'
import React,{useState} from 'react'
import BottomTab from '../../BottomTab'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { icon } from '@fortawesome/fontawesome-svg-core';


export default function BuyerDashboard({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
 
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,paddingLeft:30,fontWeight:'bold'}}>Dashboard</Text>
      <TouchableOpacity onPress={() => {}}>
      <Switch
        trackColor={{false: '#d9d9d9', true: '#d9d9d9'}}
        thumbColor={isEnabled ? 'red' : 'red'}
        ios_backgroundColor="#d9d9d9"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </TouchableOpacity>


     <ScrollView>
     <Text style={styles.overview}>Overview </Text>
      <View style={styles.view}>
        <View style={styles.requestview} />
        <View style={styles.requestview} />
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statText}>Total Active RFQs</Text>
          <View style={styles.statRow}>
            <Text style={styles.statNumber}>8</Text>
            <View style={styles.statPercentage}>
              <Text style={styles.statPercentageText}>+7.5%</Text>
            </View>
          </View>
          <Text style={styles.completedText}>Completed 3</Text>
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statText}>Total Suppliers</Text>
          <View style={styles.statRow}>
            <Text style={styles.statNumber}>5</Text>
            <View style={styles.statPercentage}>
              <Text style={styles.statPercentageText}>+7.5%</Text>
            </View>
          </View>
          <Text style={styles.completedText}>Recently Added 3</Text>
        </View>
      </View>
      
      <Text style={styles.quickActionTitle}>Quick Action</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} >
      <View style={styles.row}>
            <TouchableOpacity onPress={()=>navigation.navigate('RFQ History')}>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon1} />
                  <Text style={styles.viewRequest}>View RFQ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon1} />
                  <Text style={styles.viewRequest}>Add New User</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon1} />
                  <Text style={styles.viewRequest}>View Clients</Text>
                </View>
            </TouchableOpacity> 
           
      </View>
      <View style={styles.row2}>
            <TouchableOpacity onPress={()=>navigation.navigate('Purchase and Orders')}>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon2} />
                  <Text style={styles.viewRequest}>View Purchase Orders</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon2} />
                  <Text style={styles.viewRequest}  >International fund transfer</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.viewRequestItem}>
                  <FontAwesome name="file-text" size={20} style={styles.icon2} />
                  <Text style={styles.viewRequest}>View Documents</Text>
                </View>
            </TouchableOpacity> 
           
      </View>
      
      </ScrollView>
      <Text style={styles.RecentUpdateTitle}>Recent Updates</Text>
      <View style={styles.updateContainer}>
       <View style={{left:20}}>
            <Text style={styles.message}>New message from auction creator</Text>
              <Text style={{color:'grey'}}>You have a message</Text>
              <View style={{ borderWidth: 0.8, borderColor: '#dfdfdf',top:15,right:20}}></View>
              <Text style={styles.date}>3 days ago</Text>
              <TouchableOpacity style={styles.viewallButton}>
                <Text style={styles.viewallText}>View All</Text>
              </TouchableOpacity> 
       </View>
      </View>
        <View style={{height:50}}></View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop:90
  },
  switch: {
    transform: [{ scale: 0.8 }],
    left:300,
    bottom:30
  },
  overview: {
    fontSize: 25,
    padding: 30,
    top:-20

  },
  view: {
    top:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  requestview: {
    top:-20,
    width: '48%',
    height: 140,
    borderWidth: 1,
    borderColor: '#8b8b8b',
    borderRadius: 20,
  },
  statsContainer: {
    top:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -150,
  },
  statBox: {
    width: '45%',
    height: 120,
    left:15,
    padding: 10,
    borderRadius: 10,
   
  },
  statText: {
    color: '#8b8b8b',
    fontSize: 14,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  statNumber: {
    fontSize: 25,
    fontWeight: 20,
    left:5,
  },
  statPercentage: {
    marginLeft: 20,
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    padding: 5,
  },
  statPercentageText: {
    color: '#81c541',
    textAlign: 'center',
  },
  completedText: {
    marginTop: 10,
    color: '#8b8b8b',
  },
  quickActionTitle: {
    fontSize: 25,
    paddingLeft: 35,
    marginBottom: 10,
    top:50
  },
  scrollViewContent: {
    width:680,
    height:200
  },
  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',  
    justifyContent: 'space-between', 
    
  },
  row:{
    flexDirection:'row',
    left:-10,
    top:60
    
  },
  row2:{
   
    top:135,
    right:699,
    flexDirection:'row',
    // margin:10
  },
  viewRequestItem: {
    width:215,
    height: 60,
    borderColor: '#8b8b8b',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5,
    flexDirection:'row',
    marginLeft:10,
  },
  viewRequest: {
    flexWrap:'wrap',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
    left:8,
    top:-5
  },
  icon1:{
    color: '#36c179',
    right:30
  },
  icon2: {
    color: '#36c179',
  
  },
  RecentUpdateTitle:{
    top:50,
    fontSize: 25,
    paddingLeft: 35,
    marginBottom: 10,
  },
  updateContainer:{
    borderColor:'grey',
    borderWidth:1,
    borderRadius:10,
    top:50,
    margin:20,
    padding:10
  },
  message:{
    marginTop:10,
    marginBottom:10
  },
  viewallButton:{

  },
  date:{
   paddingLeft:200,
   bottom:18,
   color:'grey',
   left:10
  },
  viewallText:{
   margin:10,
    color: '#36c179',
    left:100
  },

});
