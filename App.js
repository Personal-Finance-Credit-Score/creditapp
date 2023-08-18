// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
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
import CreditTab from './assets/CreditTab.png'
import MoneyTab from './assets/MoneyTab.png'
import OffersTab from './assets/OffersTab.png'
import MoreTab from './assets/MoreTab.png'


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


const AuthStack = createNativeStackNavigator();

function AuthStackScreen({session}) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="VerificationScreen" component={VerificationScreen} />
      <AuthStack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <AuthStack.Screen name="IntakeForm" component={IntakeForm} />
      <AuthStack.Screen name="LoadingScreen" component={LoadingScreen} />
      
    </AuthStack.Navigator>
  );
}

const OfferStack = createNativeStackNavigator();

function OfferStackScreen({session}) {
  return (
    <OfferStack.Navigator screenOptions={{ headerShown: false }}>
      <OfferStack.Screen name="CreditCardOffers" component={() => <CreditCardOffers session={session} />} />
      <OfferStack.Screen name="LoanOffers" component={() => <LoanOffers session={session} />} />
    </OfferStack.Navigator>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen({session}) {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={() => <Homescreen session={session} />} />
      <HomeStack.Screen name="CreditReport" component={() => <CreditReport session={session} />} />
      <HomeStack.Screen name="PaymentHistory" component={() => <PaymentHistory session={session} />} />
      <HomeStack.Screen name="CreditCardUse" component={() => <CreditCardUse session={session} />} />
      <HomeStack.Screen name="DerogatoryMarks" component={() => <DerogatoryMarks session={session} />} />
      <HomeStack.Screen name="CreditAge" component={() => <CreditAge session={session} />} />
      <HomeStack.Screen name="HardInquiries" component={() => <HardInquiries session={session} />} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({session}) {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Homescreen" title="Credit" component={() => <HomeStackScreen session={session}/>} options={{tabBarLabel:"Credit", tabBarIcon: () => {
            return <Image source={CreditTab} />;
          },
        }} />
        <Tab.Screen name="LoadingScreen" title="Money" component={() => <ComingSoonScreen session={session}/>} options={{tabBarLabel:"Money", tabBarIcon: () => {
            return <Image source={MoneyTab} />;
          },}} />
        <Tab.Screen name="OffersScreen" title="Offers" component={() => <OfferStackScreen session={session}/>} options={{tabBarLabel:"Offers", tabBarIcon: () => {
            return <Image source={OffersTab} />;
          },}} />
        <Tab.Screen name="MoreScreen" title="More" component={() => <ComingSoonScreen session={session}/>} options={{tabBarLabel:"More", tabBarIcon: () => {
            return <Image source={MoreTab} />;
          },}} />
      </Tab.Navigator>
  );
}

  function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
      supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
      });
    }, []);

    console.log("wooo session" + JSON.stringify(session))
    return (
      <NavigationContainer>
        {!session ? <AuthStackScreen /> : <MyTabs key={session.user.id} session={session} />}
        {/* <MyTabs /> */}
      </NavigationContainer>
  );

}

export default App;
