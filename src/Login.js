import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import React from 'react';


const Login = (props) => {

    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.textStyle} >
        <Text>Next screen hey!</Text>
        <TouchableOpacity
                onPress={() => navigation.navigate('Homescreen')}
            ><Text>home screen</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Login;