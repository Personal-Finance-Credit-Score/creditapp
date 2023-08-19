import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import verifySuccess from '../../assets/checklock.png'

const ConfirmationScreen = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate('HomeStack'); // Replace 'TargetScreen' with the screen you want to navigate to
    }, 2000); // 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

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

export default ConfirmationScreen;
