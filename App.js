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
import IntakeForm from './src/screens/IntakeForm'
import ConfirmationScreen from './src/screens/ConfirmationScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import VerificationScreen from './src/screens/VerificationScreen'


const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homescreen" component={Homescreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      <Tab.Screen name="IntakeForm" component={IntakeForm} />
      <Tab.Screen name="VerificationScreen" component={VerificationScreen} />
      <Tab.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <Tab.Screen name="LoadingScreen" component={LoadingScreen} />
    </Tab.Navigator>
  );
}


function App() {
  return (
   
    <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Nextscreen" component={Nextscreen} />
    </Stack.Navigator> */}
    <MyTabs />
  </NavigationContainer>
  );
}

export default App;