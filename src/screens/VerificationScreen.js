import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TextInput, Button } from "react-native";
import React, { useState, useRef } from "react";
import Avatar from "../../assets/Avatar.png";
import VerifyIcon from "../../assets/tabletpluslockVerify.png";

const VerificationScreen = (props) => {
  const navigation = useNavigation();
  const ref = useRef();

  const [verifyCode, setVerifyCode] = useState(null);

  // for the 6 verification boxes
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');

  const handleSendAgain = () => {
    console.log("send again " + verifyCode);
  };

  const handleFormSubmit = () => {
    console.log("submitt " + verifyCode);
    navigation.navigate("Homescreen");
  };

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen bg-themeLightBlue">
      
      {/* Navbar without back arrow */}
      <View className="flex h-1/8 pt-10 mb-1">
        <View className="mt-6 mb-2 ml-4 ">
          <Image className="self-end mr-4" source={Avatar} />
        </View>
        <View className="shadow shadow-black "></View>
      </View>

      <ScrollView>
        {/* container for the page */}
        <View className="flex-1 items-center justify-center mt-10">
          {/* container for the top half of the screen */}
          <View className="flex-1">
            <Text className="text-center text-3xl font-bold text-themeNavyBlue">
              Verify your account
            </Text>

            <View className="items-center">
              <Image className="my-14" source={VerifyIcon} />
            </View>
            <Text className="text-2xl text-themeNavyBlue mx-8">
              Enter the verification code we sent to your email.
            </Text>

            <View className="flex-row justify-between mt-12 px-3">
              <TextInput maxLength={1} className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" value={numOne} onChangeText={(value) => {
                setNumOne(value)
                if(value.lenth === 1) {
                  ref.current.focus()
                }
              }}
              returnKeyType="next"
              />
              <TextInput className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" 
              value={numTwo} onChangeText={(value) => {
                setNumTwo(value)
                if(value.lenth === 1) {
                  ref.current.focus()
                }
              }}
              returnKeyType="next"
              />
              <TextInput className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" />
              <TextInput className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" />
              <TextInput className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" />
              <TextInput className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue" />
            </View>
          </View>

          <Text className="mt-8 text-lg text-themeNavyBlue">
            Didn't Receive a code?{" "}
            <Text
              className="font-bold"
              onPress={() => console.log("resent code!")}
            >
              Resend
            </Text>
          </Text>

          <View className="w-screen max-w-md px-9 mt-12">
            <TouchableOpacity
              className="bg-themeNavyBlue max-w-md py-3"
              onPress={handleFormSubmit}
            >
              <Text className="text-center text-white font-bold">Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
