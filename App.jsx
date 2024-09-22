import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home'
import Login from './screens/Login'
import ResetPassword from './screens/ResetPassword';
import Otp from './screens/Otp';
import NewPasswordScreen from './screens/NewPasswordScreen';
import HomeScreen from './screens/SupplierDashboard/HomeScreen';
import Buyer from './screens/Buyer/BuyerDashboard';
import BuyerHomeScreen from './screens/Buyer/BuyerHomeScreen';
import DetailsScreen from './screens/Buyer/DetailsScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DetailsScreen2 from './screens/Buyer/DetailsScreen2';
import DetailsPopup from './screens/Buyer/DetailsPopup';
import PurchaseOrderDetails from './screens/Buyer/PurchaseOrderDetails';
import Dashboard from './screens/SupplierDashboard/Dashboard';
import BuyerDashboard from './screens/Buyer/BuyerDashboard';
import RFQDetails from './screens/Buyer/RFQDetails';
import SupplierRequestDetails from './screens/SupplierDashboard/SupplierRequestDetails';

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
      <Stack.Screen name="resetPassword" component={ResetPassword}  options={{ headerShown: false }} />
      <Stack.Screen name="Otp" component={Otp}  options={{ headerShown: false }} />
      <Stack.Screen name="newpassword" component={NewPasswordScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name='Buyer' component={BuyerHomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{headerShown:false}}/>
      <Stack.Screen name='DetailsScreen2' component={DetailsScreen2} options={{headerShown:false}}/>
      <Stack.Screen name='DetailsPopup' component={DetailsPopup} options={{headerShown:false}}/>
      <Stack.Screen name="PurchaseOrderDetails" component={PurchaseOrderDetails} options={{headerShown:false,}} />
      <Stack.Screen name="RFQDetails" component={RFQDetails} options={{headerShown:false,}} />
      <Stack.Screen name="SupplierRequestDetails" component={SupplierRequestDetails} options={{headerShown:false,}} />


      
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default function App(){
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MyApp/>
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({})