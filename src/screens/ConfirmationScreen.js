import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import verifySuccess from '../../assets/checklock.png'

const Login = (props) => {
  const navigation = useNavigation();


  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen justify-center bg-themeLightBlue">
      
      {/* page container */}
      <View className="mx-auto">
        <Text className="text-5xl text-themeNavyBlue font-black ">Success!</Text>
        <Image className="items-center" source={verifySuccess} />
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
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     width: '80%',
//     padding: 10,
//     marginVertical: 10,
//   },
// });

export default Login;
