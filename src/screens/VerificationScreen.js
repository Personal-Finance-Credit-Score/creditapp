import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const VerificationScreen = (props) => {
  const navigation = useNavigation();

  const [verifyCode, setVerifyCode] = useState(null);

  const handleSendAgain =() => {
    console.log("send again " + verifyCode)
  }

  const handleFormSubmit = () => {
    console.log("submitt " + verifyCode)
    navigation.navigate('Homescreen')
  }

  return (
    <SafeAreaView>

      {/* container for the page */}
      <View >

        {/* container for the top half of the screen */}
        <View>
          <Text>Verification</Text>

          {/* placeholder for image */}
          <View ></View>
          <Text>Verification code</Text>
          <Text>A verification code has been sent to your mobile number</Text>
        </View>

        {/* container for bottom half of screen */}
        <View>
    
          <TextInput
            
            placeholder=""
            value={verifyCode}
            onChangeText={text => setVerifyCode(text)}
          />

          <TouchableOpacity  onPress={() => {
              handleSendAgain
              
          }}>
            <Text>Send Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFormSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor: '#64B4A1',
//     alignItems: 'center',
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   inputBox: {
//     width: 150,
//     padding: 5,
//     borderColor: 'gray',
//     borderWidth: 1,
//   },
//   numContainer: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     width: '75%',
//     height: '25%',
//     padding: 10,
//     marginVertical: 10,
//   },
//   submitBtn: {
//     width: 100,
//     padding: "5px",
//     backgroundColor: "gray",
//     color: 'white',
//   },
//   sendAgainBtn: {
//     width: "30vw",
//     padding: "5px",
//     backgroundColor: "white",
//     color: 'black',
//   }
// });

export default VerificationScreen;
