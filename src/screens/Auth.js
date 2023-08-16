import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import SignupScreen from './SignupScreen';
import Login from './Login';

const Auth = () => {
  const [isNew,setIsNew]=useState(true)
  const [creds,setCreds] = useState({
    email:'',
    password:''
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {isNew?
        <Login creds={creds} setCreds={setCreds} setIsNew={setIsNew}/>
        :
        <SignupScreen creds={creds} setCreds={setCreds} setIsNew={setIsNew}/>

        }
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
});

export default Auth;
