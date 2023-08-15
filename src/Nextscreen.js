import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const Nextscreen = (props) => {

    const navigation = useNavigation();
    
  return (
    <View >
      <Text>Next screen hey!</Text>
      <TouchableOpacity
            onPress={() => navigation.navigate('Homescreen')}
        ><Text>home screen</Text></TouchableOpacity>
    </View>
  );
};

export default Nextscreen;