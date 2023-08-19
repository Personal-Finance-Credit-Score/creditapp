import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import SignupScreen from './SignupScreen';
import Login from './Login';
import { supabase } from '../../lib/supabase'

const Auth = () => {
  const [isOld,setisOld]=useState(true)
  const [goToVerify, setGoToVerify] = useState(false)

  return (
    <SafeAreaView>
      <View >
        {isOld?
        <Login setisOld={setisOld}/>
        :
        <SignupScreen isOld={isOld} setisOld={setisOld}/>
        }
      </View>
    </SafeAreaView>
  );
};

export default Auth;
