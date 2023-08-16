import { View, Text, TouchableOpacity} from 'react-native';
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
    <SafeAreaView>
      <View >
        {isNew?
        <Login creds={creds} setCreds={setCreds} setIsNew={setIsNew}/>
        :
        <SignupScreen creds={creds} setCreds={setCreds} setIsNew={setIsNew}/>

        }
      </View>
    </SafeAreaView>
  );
};

export default Auth;
