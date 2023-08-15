import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
// import Signup from '../api/users/index'

const SignupScreen = (props) => {
  const navigation = useNavigation();
  // const [creds, setCreds] = useState({
  //   name:'',
  //   email:'',
  //   confirmEmail:'',
  //   password:'',
  //   confirmPassword:''
  // })
  
  // function handleChange(e){
    
  //       e.preventDefault()

  //       setCreds({...creds, [e.target.name]:})
  // }

  // const handleFormSubmit = () => {
  //   // You can handle the form data here
  //   const formData = { name, email, age };
  //   console.log('Submitted Form:', formData);

  //   (async function (){
  //       const rt= await Signup()

  //   })()
  //   // Navigate to the Home screen
  //   navigation.navigate('Homescreen');
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={styles.title}>Enter your information</Text>
        
        <TextInput
          placeholder="Email"
          // value={name}
          onChangeText={name => setName(name)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          // value={name}
          onChangeText={name => setName(name)}
          style={styles.input}
        />
       

        <Button title="Submit" />
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Text>Go to Home screen</Text>
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
    }
  });

export default SignupScreen;
