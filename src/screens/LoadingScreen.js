import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import RiseLogo from '../../assets/riseLogo.png'

const Login = (props) => {
  const navigation = useNavigation();

  // TODO: Need loading animation???

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen justify-center bg-themeLightBlue">
      <View className="items-center">
        <Image className="w-342 h-349" source={RiseLogo}/>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#64B4A1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

export default Login;
