import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Enter your information</Text>
        <Text>This information will be used to create your account.</Text>
        <Text>Your information is securely encrypted. We’ll never sell your person info. Your credit won’t be impacted</Text>

        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={text => setDob(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Street"
          value={street}
          onChangeText={text => setStreet(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Zip"
          value={zip}
          onChangeText={text => setZip(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last 4 of SSN"
          value={ssn}
          onChangeText={text => setSsn(text)}
          style={styles.input}
        />
      <TextInput  
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        
        <Button title="Submit" onPress={handleFormSubmit} />
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

export default Login;
