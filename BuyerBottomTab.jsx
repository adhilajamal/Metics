import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BuyerDashboard from './screens/Buyer/BuyerDashboard';
import BuyerRFQ from './screens/Buyer/BuyerRFQ';
import BuyerPurchaseAndOrders from './screens/Buyer/BuyerPurchaseAndOrders';
import Suppliers from './screens/Buyer/Suppliers';
import BuyerSettings from './screens/Buyer/BuyerSettings';

const Tab = createBottomTabNavigator();

function BuyerBottomTab() {
  return (
    <Tab.Navigator initialRouteName='Login' 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let imageSource;

          switch (route.name) {
            case 'BuyerDashboard':
              imageSource = require('./screens/assets/home.png');
              break;
            case 'RFQ History':
              imageSource = require('./screens/assets/reminder.png');
              break;
            case 'Purchase and Orders':
              imageSource = require('./screens/assets/shopping-cart.png');
              break;
            case 'Suppliers':
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
      <Tab.Screen name="BuyerDashboard" component={BuyerDashboard}  options={{headerShown:false, title:'Request History'}} />
      <Tab.Screen name="RFQ History" component={BuyerRFQ} options={{headerShown:false, title:'Request History'}}/>
      <Tab.Screen name="Purchase and Orders" component={BuyerPurchaseAndOrders} options={{headerShown:false, title:'Request History'}}/>
      <Tab.Screen name="Suppliers" component={Suppliers} />
      <Tab.Screen name="Settings" component={BuyerSettings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <BuyerBottomTab />
    </GestureHandlerRootView>
  );
}
