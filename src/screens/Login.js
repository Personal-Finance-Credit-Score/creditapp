import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import utils from '../../api/users/index';
import RiseLogo from '../../assets/riseLogo.png'
import { supabase } from '../../lib/supabase'

const Login = ({ creds, setCreds, setisOld }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
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
            autoCapitalize={'none'}
          />
        </View>
        {/* password container */}
        <View className="w-screen max-w-md px-7 mt-3">
          <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">Password</Text>
          <TextInput
            className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize={'none'}
          />
        </View>


        {/* Login Button */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity 
              className="bg-themeNavyBlue py-2 rounded"
              disabled={loading} 
              onPress={() => signInWithEmail()}>
              <Text className="text-themeWhite font-medium text-center text-[15px]">Login</Text>
            </TouchableOpacity>
            </View>
          {/* Signup Button */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity 
              className="py-2 rounded"
              onPress={() => setisOld(false)}>
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
