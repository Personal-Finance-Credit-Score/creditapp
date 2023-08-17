import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import utils from '../../api/users/index';
import RiseLogo from '../../assets/riseLogo.png'

const Login = ({ creds, setCreds, setIsNew }) => {
  const navigation = useNavigation();


  // will delete later when we use functionality
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  function handleChange(e) {
    e.preventDefault();
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  function handleFormSubmit() {
    (async function () {
      const sendData = await utils.Login(creds.email, creds.password);
    })();
    // Navigate to the Home screen
    navigation.navigate('Homescreen');
  }

  return (
    <SafeAreaView className="flex-1 bg-themeLightBlue justify-center min-h-screen min-w-screen">
      
      {/* page container */}
      <View className="flex items-center">
        <View className="items-center">
          <Image className="items-center" source={RiseLogo} />
        </View>

        {/* email container */}
        <View className="w-screen max-w-md px-7 mt-3">
          <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">Email</Text>
          <TextInput
            className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {/* password container */}
        <View className="w-screen max-w-md px-7 mt-3">
          <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">Password</Text>
          <TextInput
            className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
            placeholder="Password"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>


        {/* Login Button */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity 
              className="bg-themeNavyBlue py-2 rounded"
              onPress={handleFormSubmit}>
              <Text className="text-themeWhite font-medium text-center text-[15px]">Login</Text>
            </TouchableOpacity>
            </View>
          {/* Signup Button */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity 
              className="py-2 rounded"
              onPress={() => setIsNew(false)}>
              <Text className="text-center font-medium text-[15px]">Sign Up</Text>
            </TouchableOpacity>
          </View>
        
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
