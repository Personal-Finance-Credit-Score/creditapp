// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homescreen from './src/Homescreen';
import Nextscreen from './src/Nextscreen';

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
      <Tab.Screen name="Nextscreen" component={Nextscreen} />
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