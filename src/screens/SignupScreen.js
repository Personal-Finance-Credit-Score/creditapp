import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import utils from '../../api/users/index';

const SignupScreen = ({ creds, setCreds, setIsNew }) => {
  const navigation = useNavigation();

  function handleChange(e) {
    e.preventDefault();
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  function handleFormSubmit() {
    (async function () {
      const sendData = await utils.Signup(creds.email, creds.password);
    })();
    // Navigate to the Home screen
    navigation.navigate('Homescreen');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          placeholder="Email"
          value={creds.email}
          onChangeText={handleChange}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={creds.password}
          onChangeText={handleChange}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleFormSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsNew(true)}>
          <Text>Already have an account, press here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64B4A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SignupScreen;
