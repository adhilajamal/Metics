import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator ,DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import NewPasswordScreen from './screens/NewPasswordScreen'; // NewPasswordScreen component
import Common from './screens/Common';
import RequestScreen from './screens/SupplierDashboard/RequestScreen';
import BidScreen from './screens/SupplierDashboard/BidScreen';
import PurchaseAndOrderScreen from './screens/SupplierDashboard/PurchaseAndOrderScreen';
import Clients from './screens/SupplierDashboard/Clients';
import ProductCatalogue from './screens/SupplierDashboard/ProductCatalogue';
import Documents from './screens/SupplierDashboard/Documents';
import Organisations from './screens/SupplierDashboard/Organisations';
import { StyleSheet ,TouchableOpacity,Switch, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from './screens/SupplierDashboard/Dashboard';

const Drawer = createDrawerNavigator();

const ToggleButton = ({ }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    
    <TouchableOpacity onPress={() => {}}>
      <Switch
        trackColor={{false: '#d9d9d9', true: '#d9d9d9'}}
        thumbColor={isEnabled ? '#7eac5a' : '#7eac5a'}
        ios_backgroundColor="#d9d9d9"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
        
      />
    </TouchableOpacity>
  
  );
};

const DrawerScreen = () => {
  return (
    
      <Drawer.Navigator 
    
      initialRouteName="newpassword"
      screenOptions={({navigation})=>({
    // headerStyle: {
    //   textAlign:'left'
    // },
    headerTintColor: 'black',
    drawerStyle: {
      backgroundColor: 'white',
      width: 280,
    },
    drawerLabelStyle: {
      color: 'black',
      fontSize: 16,
      textAlign:'left',
      marginLeft: 0,    
      paddingLeft: 0,    
      width: '100%',      
    },
    drawerActiveTintColor: 'green',
    drawerInactiveTintColor: 'grey',
  
  })}
      >
       <Drawer.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={({ navigation }) => ({
            
            headerRight: () => <ToggleButton  />, 
          })} 
        />
        <Drawer.Screen 
          name="Request" 
          component={RequestScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="file-text" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Bids" 
          component={BidScreen} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="gavel" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Purchase and Orders" 
          component={PurchaseAndOrderScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Clients" 
          component={Clients} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Product Catalogue" 
          component={ProductCatalogue} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="inventory" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Documents" 
          component={Documents} 
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="file" size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Organisations" 
          component={Organisations}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="business" size={size} color={color} />
            ),
          }} 
        />
      </Drawer.Navigator>
   
  );
};
const styles = StyleSheet.create({
 
  switch: {
    transform: [{ scale: 0.7 }],
  },
});


export default DrawerScreen;
