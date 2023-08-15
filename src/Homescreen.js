import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const Homescreen = (props) => {

    const navigation = useNavigation();

  return (
    <View >
      <Text className="text-3xl bg-red-500">Homescreen yay!</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Nextscreen')}
        ><Text>Next screen</Text></TouchableOpacity>
    </View>
  );
};

export default Homescreen;