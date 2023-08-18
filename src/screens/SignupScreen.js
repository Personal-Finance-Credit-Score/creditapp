import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import utils from '../../api/users/index';
import ArrowLeft from '../../assets/arrowleft.png'
import Avatar from '../../assets/Avatar.png'
import { supabase } from '../../lib/supabase'

const SignupScreen = ({ creds, setCreds, setisOld }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
    navigation.navigate("IntakeForm")
  }

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen bg-themeLightBlue">
      {/* Navbar */}
      <View className="h-1/8 pt-10 mb-1">
        <View className="flex-row mt-6 mb-5 justify-between ml-4 ">
          <TouchableOpacity
            className="mt-2"
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
            >
            <Image className="" source={ArrowLeft}/>
            {/* <Icon name="arrowleft" size={30} color="#000" className="" /> */}
          </TouchableOpacity>
          <Image className="mr-4" source={Avatar}/>
        </View>
        <View className="shadow shadow-black ">
          
        </View>
      </View>

      {/* Page container */}
      <View className="mb-32">
        <Text className="w-screen max-w-md px-10 text-3xl font-bold text-themeNavyBlue">Create your account</Text>
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
        {/* Confirm password container */}
        <View className="w-screen max-w-md px-7 mt-3">
          <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">Confirm Password</Text>
          <TextInput
            className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            autoCapitalize={'none'}
          />
        </View>

        {/* Password Rules */}
        <View className="ml-9 my-4 text-themeNavyBlue">
          <Text className="text-themeNavyBlue">Password must contain:</Text>
          <Text className="ml-5 text-themeNavyBlue">{`\u2022 12 minimum characters`}</Text>
          <Text className="ml-5 text-themeNavyBlue">{`\u2022 One upper case character`}</Text>
          <Text className="ml-5 text-themeNavyBlue">{`\u2022 One lower case character`}</Text>
          <Text className="ml-5 text-themeNavyBlue">{`\u2022 One special character`}</Text>

        </View>

          {/* Buttons */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity 
              className="bg-themeNavyBlue py-2 rounded"
              disabled={loading} 
              onPress={() => signUpWithEmail()}>
              <Text className="text-themeWhite font-medium text-center text-[15px]">Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-4 rounded" 
            onPress={() => setisOld(true)}>
              <Text className="text-center">Already have an account, press here</Text>
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
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   paragraph: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

export default SignupScreen;
