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


// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Homescreen"
//         title="Home"
//         component={Homescreen}
//         options={{
//           tabBarLabel: "Credit",

//           tabBarIcon: () => {
//             return <Image source={CreditTab} />;
//           },
//         }}
//       />
//       <Tab.Screen name="Login" component={Login} />
//       <Tab.Screen name="SignUp" component={SignUpScreen} options={{tabBarLabel:"SignUp"}} />
//       <Tab.Screen name="IntakeForm" component={IntakeForm} options={{tabBarLabel:"Intake"}} />
//       <Tab.Screen name="VerificationScreen" component={VerificationScreen} options={{tabBarLabel:"Verify"}}/>
//       <Tab.Screen name="CreditReport" component={CreditReport} options={{tabBarLabel:"CR"}} />
//       <Tab.Screen name="PaymentHistory" component={PaymentHistory} options={{tabBarLabel:"Pay"}} />
//       <Tab.Screen name="CreditCardOffers" component={CreditCardOffers} options={{tabBarLabel:"OFF"}} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.onAuthStateChange((event, session) => {
//       setSession(session);
//     });
//   }, []);
//   return (
//     <NavigationContainer>
//       {/* {!session ? <Auth/> : <MyTabs key={session.user.id} session={session} />} */}
//       <MyTabs />
//     </NavigationContainer>
//   );

// -----------------------------------------------------------------------------------------


const OfferStack = createNativeStackNavigator();

function OfferStackScreen() {
  return (
    <OfferStack.Navigator screenOptions={{ headerShown: false }}>
      <OfferStack.Screen name="CreditCardOffers" component={CreditCardOffers} />
      <OfferStack.Screen name="LoanOffers" component={LoanOffers} />
    </OfferStack.Navigator>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Homescreen} />
      <HomeStack.Screen name="CreditReport" component={CreditReport} />
      <HomeStack.Screen name="PaymentHistory" component={PaymentHistory} />
      <HomeStack.Screen name="CreditCardUse" component={CreditCardUse} />
      <HomeStack.Screen name="DerogatoryMarks" component={DerogatoryMarks} />
      <HomeStack.Screen name="CreditAge" component={CreditAge} />
      <HomeStack.Screen name="HardInquiries" component={HardInquiries} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Homescreen" title="Credit" component={HomeStackScreen} options={{tabBarLabel:"Credit"}} />
        <Tab.Screen name="LoadingScreen" title="Money" component={ComingSoonScreen} options={{tabBarLabel:"Money"}} />
        <Tab.Screen name="OffersScreen" title="Offers" component={OfferStackScreen} options={{tabBarLabel:"Offers"}} />
        <Tab.Screen name="MoreScreen" title="More" component={ComingSoonScreen} options={{tabBarLabel:"More"}} />
      </Tab.Navigator>
    </NavigationContainer>
  );











}

export default App;
