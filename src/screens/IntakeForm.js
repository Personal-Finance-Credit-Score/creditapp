import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = (props) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [ssn, setSsn] = useState('');



  const handleFormSubmit = () => {
    // You can handle the form data here
    const formData = { firstName, lastName, dob, street, city, state, zip, phone, ssn };
    console.log('Submitted Form:', formData);

    // Navigate to the Home screen
    navigation.navigate('Homescreen');
  };

  return (
    <SafeAreaView>
      <View >
        <Text>Enter your information</Text>
        <Text>This information will be used to create your account.</Text>
        <Text>Your information is securely encrypted. We’ll never sell your personal info. Your credit won’t be impacted</Text>

        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          
        />
        <TextInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={text => setDob(text)}
          
        />
        <TextInput
          placeholder="Street"
          value={street}
          onChangeText={text => setStreet(text)}
          
        />
        <TextInput
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
          
        />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
          
        />
        <TextInput
          placeholder="Zip"
          value={zip}
          onChangeText={text => setZip(text)}
          
        />
        <TextInput
          placeholder="Last 4 of SSN"
          value={ssn}
          onChangeText={text => setSsn(text)}
          
        />
      <TextInput  
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          
        />
        
        <Button title="Submit" onPress={handleFormSubmit} />
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
