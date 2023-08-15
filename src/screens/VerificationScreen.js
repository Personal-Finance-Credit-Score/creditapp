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
    <SafeAreaView style={{ flex: 1 }}>

      {/* container for the page */}
      <View style={styles.container}>

        {/* container for the top half of the screen */}
        <View>
          <Text>Verification</Text>

          {/* placeholder for image */}
          <View style={styles.numContainer}></View>
          <Text>Verification code</Text>
          <Text>A verification code has been sent to your mobile number</Text>
        </View>

        {/* container for bottom half of screen */}
        <View>
    
          <TextInput
            style={styles.inputBox}
            placeholder=""
            value={verifyCode}
            onChangeText={text => setVerifyCode(text)}
          />

          <TouchableOpacity style={styles.sendAgainBtn} onPress={() => {
              handleSendAgain
              
          }}>
            <Text>Send Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitBtn} onPress={handleFormSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#64B4A1',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 100,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  numContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '75%',
    height: '25%',
    padding: 10,
    marginVertical: 10,
  },
  submitBtn: {
    width: "30vw",
    padding: "5px",
    backgroundColor: "gray",
    color: 'white',
  },
  sendAgainBtn: {
    width: "30vw",
    padding: "5px",
    backgroundColor: "white",
    color: 'black',
  }
});

export default VerificationScreen;
