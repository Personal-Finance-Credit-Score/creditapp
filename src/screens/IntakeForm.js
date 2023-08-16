import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
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
  const [income, setIncome] = useState('');



  const handleFormSubmit = () => {
    // You can handle the form data here
    const formData = { firstName, lastName, dob, street, city, state, zip, phone, ssn , income};
    console.log('Submitted Form:', formData);

    // Navigate to the Home screen
    navigation.navigate('Homescreen');
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <View className="pt-10 flex flex-1 mx-auto min-w-screen min-h-screen items-right text-center pt-30">
        <Text className="text-3xl font-bold">Enter your information</Text>
        <Text></Text>
        <Text className="text-2xl font-semibold">This information will be used to create your account.</Text>
        <Text></Text>
        <Text className="text-base font-bold">Your information is securely encrypted.</Text>
        <Text className="text-base font-bold">We’ll never sell your personal info.</Text>
        <Text className="text-base font-bold">Your credit won’t be impacted</Text>
        <Text></Text>
        <Text className="text-base font-medium pl-2">First Name</Text>
        <TextInput
          className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Text className="text-base font-medium pl-2">Last Name</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <Text className="text-base font-medium pl-2">Date Of Birth</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="MM/DD/YYYY"
          value={dob}
          onChangeText={text => setDob(text)}
        />
        <Text className="text-base font-medium pl-2">Current Address</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="Street"
          value={street}
          onChangeText={text => setStreet(text)}
        />
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
        />
        <View className="flex flex-row space-x-4">
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-40 h-10 pl-2.5 mb-2"
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
        />
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-36 h-10 pl-2.5 mb-2"
          placeholder="Zip"
          value={zip}
          onChangeText={text => setZip(text)}
        />
        </View>
        <Text className="text-base font-medium pl-2">Phone</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Text className="text-base font-medium pl-2">Social Security Number (SSN)</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="Last 4 of SSN"
          value={ssn}
          onChangeText={text => setSsn(text)}
        />
        <Text className="text-base font-medium pl-2">Income</Text>
        <TextInput
        className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
          placeholder="Income"
          value={income}
          onChangeText={text => setIncome(text)}
        />
        <TouchableOpacity
        className="relative rounded-sm border bg-themeNavyBlue w-80 h-10 pl-2.5 mb-2"
        title="Continue"
        onPress={handleFormSubmit} >
          <Text
          className="text-white text-center align-middle"
          >Continue</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
