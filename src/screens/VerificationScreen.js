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
import React, { useState } from "react";
import Avatar from "../../assets/Avatar.png";
import VerifyIcon from "../../assets/tabletpluslockVerify.png";

const VerificationScreen = (props) => {
  const navigation = useNavigation();

  // initial array
  const textInputs = Array(6).fill(null);

  // can get what user enters as verification code here:
  const [numbers, setNumbers] = useState(Array(6).fill(""));

  // when user clicks on "resend"
  const handleSendAgain = () => {
    console.log("send again " + numbers);
  };

  const handleTextInputChange = (text, index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = text;
    setNumbers(updatedNumbers);

    if (text.length === 1 && index < textInputs.length - 1) {
      textInputs[index + 1].focus();
    }
  };

  const handleFormSubmit = () => {
    console.log("submitt " + numbers);
    navigation.navigate("ConfirmationScreen");
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
        <View className="flex-1 items-center justify-center mt-10 mb-32">
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

            {/* verification code input boxes */}
            <View className="flex-row justify-between mt-12 px-3">
              {textInputs.map((_, index) => (
                <TextInput
                  className="flex-row border text-3xl w-12 py-2 text-center rounded border-themeNavyBlue"
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(text) => handleTextInputChange(text, index)}
                  ref={(input) => (textInputs[index] = input)}
                />
              ))}
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

export default VerificationScreen;
