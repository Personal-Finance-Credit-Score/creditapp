// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homescreen from './src/screens/Homescreen';
import Login from './src/screens/Login';
import SignUpScreen from './src/screens/SignupScreen';
import IntakeForm from './src/screens/IntakeForm';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import CreditReport from './src/screens/CreditReport';
import ComingSoonScreen from './src/screens/ComingSoonScreen';
import PaymentHistory from './src/screens/CreditFactors/PaymentHistory';
import CreditCardUse from './src/screens/CreditFactors/CCUse';
import DerogatoryMarks from './src/screens/CreditFactors/DerogatoryMarks';
import CreditAge from './src/screens/CreditFactors/CreditAge';
import HardInquiries from './src/screens/CreditFactors/HardInquiries';
import CreditCardOffers from './src/screens/Offers/CreditCardOffers';
import LoanOffers from "./src/screens/Offers/LoanOffers"

import { supabase } from './lib/supabase'
import { useState, useEffect } from 'react'
import Auth from './src/screens/Auth';


const Tab = createMaterialBottomTabNavigator();

function MyTabs({session}) {
  console.log(`This is within MyTabs ${session.user.id}`)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homescreen" title="Home" component={() => <Homescreen session={session} />} options={{tabBarLabel:"Home"}} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUpScreen} options={{tabBarLabel:"SignUp"}} />
      <Tab.Screen name="IntakeForm" component={IntakeForm} options={{tabBarLabel:"Intake"}} />
      <Tab.Screen name="VerificationScreen" component={VerificationScreen} options={{tabBarLabel:"Verify"}}/>
      <Tab.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{tabBarLabel:"Confirm"}} />
      <Tab.Screen name="LoadingScreen" component={LoadingScreen} options={{tabBarLabel:"Load"}} />
      <Tab.Screen name="CreditReport" component={CreditReport} options={{tabBarLabel:"CR"}} />
      <Tab.Screen name="ComingSoonScreen" component={ComingSoonScreen} options={{tabBarLabel:"Soon"}} />
    </Tab.Navigator>
  );
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
    })
  }, [])  
  return (
    <NavigationContainer>
      {!session ? <Auth /> : <MyTabs key={session.user.id} session={session} />}
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;
