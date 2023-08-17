import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Avatar from '../../assets/Avatar.png'

const ComingSoonScreen = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen bg-themeLightBlue">
        <View className="flex h-1/8 pt-10 mb-1">
        <View className="mt-6 mb-2 ml-4 ">
          <Image className="self-end mr-4" source={Avatar}/>
        </View>
        <View className="shadow shadow-black ">
          
        </View>
      </View>

      {/* page container */}
      <View className="flex-1 items-center justify-center bg-yellow-300">
        <Text className="text-themeNavyBlue text-4xl font-bold">Coming Soon!</Text>
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

export default ComingSoonScreen;
