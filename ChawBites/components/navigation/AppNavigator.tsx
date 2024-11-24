import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';
import Screen3 from '../../screens/Screen3';
import Screen4 from '../../screens/Screen4';
import Authorization from '../../screens/Authorization';
import { RootStackParamList } from '../../constants/navigationTypes';
import CreateAccount from '@/screens/CreateAccount';
import Login from '@/screens/Login';
import ForgotPassword from '@/screens/ForgotPassword';
import OTPVerification from '@/screens/OTPVerification';
import CreateNewPassword from '@/screens/CreateNewPassword';
import Dashboard from '@/screens/Dashboard';


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Authorization" component={Authorization} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
