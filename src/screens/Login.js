import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import utils from '../../api/users/index';

const Login = ({ creds, setCreds, setIsNew }) => {
  const navigation = useNavigation();

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
    <SafeAreaView>
      <View >
        <Text>Login</Text>

        <TextInput
          placeholder="Email"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          
        />
        <TextInput
          placeholder="Password"
          // value={password}
          // onChangeText={(text) => setPassword(text)}
          
        />

        <TouchableOpacity onPress={handleFormSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsNew(false)}>
          <Text>Don't have an account yet, press here</Text>
        </TouchableOpacity>
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
