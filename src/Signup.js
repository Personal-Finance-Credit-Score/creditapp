import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Signup = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleFormSubmit = () => {
    // You can handle the form data here
    const formData = { name, email, age };
    console.log('Submitted Form:', formData);

    // Navigate to the Home screen
    navigation.navigate('Homescreen');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Next screen hey!</Text>
        
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button title="Submit" onPress={handleFormSubmit} />
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
    backgroundColor: '#fff',
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

export default Nextscreen;
