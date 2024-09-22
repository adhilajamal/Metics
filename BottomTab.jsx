import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/SupplierDashboard/Dashboard';
import RequestScreen from './screens/SupplierDashboard/RequestScreen';
import PurchaseAndOrderScreen from './screens/SupplierDashboard/PurchaseAndOrderScreen';
import Clients from './screens/SupplierDashboard/Clients';
import SettingsScreen from './screens/SupplierDashboard/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiHome } from '@mdi/js';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='newpassword' 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let imageSource;

        switch (route.name) {
          case 'Dashboard':
            imageSource = require('./screens/assets/home.png');
            break;
          case 'Request History':
            imageSource = require('./screens/assets/reminder.png');
            break;
          case 'Purchase and Orders':
            imageSource = require('./screens/assets/shopping-cart.png');
            break;
          case 'Clients':
            imageSource = require('./screens/assets/delivery-truck.png'); 
            break;
          case 'Settings':
            imageSource = require('./screens/assets/settings.png');
            break;
        }

        return (
          <Image 
            source={imageSource} 
            style={{ width: 25, height: 25, tintColor: color }} 
          />
        );
      },
      tabBarLabel: () => null,
      tabBarActiveTintColor: 'black',
    })}
      >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:false, }} />
      <Tab.Screen name="Request History" component={RequestScreen} options={{headerShown:false, title:'Request History'}}/>
      <Tab.Screen name="Purchase and Orders" component={PurchaseAndOrderScreen} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MyTabs />
    </GestureHandlerRootView>
  );
}
