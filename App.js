// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/Homescreen';
import Nextscreen from './src/Nextscreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Nextscreen" component={Nextscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;