import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import utils from "../../api/users/index";
import ArrowLeft from "../../assets/arrowleft.png";
import Avatar from "../../assets/Avatar.png";
import { supabase } from "../../lib/supabase";
import IntakeForm from "./IntakeForm";

const SignupScreen = ({ creds, setCreds, setisOld, isOld }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showIntake, setShowIntake] = useState(false);

  // async function signUpWithEmail() {
  //   setLoading(true)
  //   const { data, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   })
  //   console.log(user)

  //   if (error) Alert.alert(error.message)

  //   setLoading(false)
  //   // navigation.navigate("VerificationScreen")
  // }

  function handleSignUp() {
    let show = true;
    if (password !== confirmPassword) {
      show = false;
    }

    // Check if password meets the criteria
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\/\\]/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasSpecialChar) {
      show = false;
    }
    if (show) {
      setShowIntake(true);
    }
  }

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen bg-themeLightBlue">
      {/* Navbar */}
      <View className="h-1/8 pt-10 mb-1">
        <View className="flex-row mt-6 mb-5 justify-between ml-4 ">
          <TouchableOpacity
            className="mt-2"
            onPress={() => {
              if (!isOld && !showIntake) {
                setisOld(true);
              } else {
                setShowIntake(false);
              }
            }}
            // onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
          >
            <Image className="" source={ArrowLeft} />
            {/* <Icon name="arrowleft" size={30} color="#000" className="" /> */}
          </TouchableOpacity>
          <Image className="mr-4" source={Avatar} />
        </View>
        <View className="shadow shadow-black "></View>
      </View>

      {/* Page container */}
      {!showIntake ? (
        <View className="mb-32">
          {/* useState if !showIntake  */}

          <Text className="w-screen max-w-md px-10 text-3xl font-bold text-themeNavyBlue">
            Create your account
          </Text>
          {/* email container */}
          <View className="w-screen max-w-md px-7 mt-3">
            <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">
              Email
            </Text>
            <TextInput
              className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={"none"}
            />
          </View>
          {/* password container */}
          <View className="w-screen max-w-md px-7 mt-3">
            <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">
              Password
            </Text>
            <TextInput
              className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              autoCapitalize={"none"}
            />
          </View>
          {/* Confirm password container */}
          <View className="w-screen max-w-md px-7 mt-3">
            <Text className="my-1 ml-1 text-themeNavyBlue text-[17px]">
              Confirm Password
            </Text>
            <TextInput
              className="px-3 py-2 rounded border border-gray-300 bg-themeWhite"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
              autoCapitalize={"none"}
            />
          </View>

          {/* Password Rules */}
          <View className="ml-9 my-4 text-themeNavyBlue">
            <Text className="text-themeNavyBlue">Password must contain:</Text>
            <Text className="ml-5 text-themeNavyBlue">{`\u2022 12 minimum characters`}</Text>
            <Text className="ml-5 text-themeNavyBlue">{`\u2022 One upper case character`}</Text>
            <Text className="ml-5 text-themeNavyBlue">{`\u2022 One lower case character`}</Text>
            <Text className="ml-5 text-themeNavyBlue">{`\u2022 One special character`}</Text>
          </View>

          {/* Buttons */}
          <View className="w-screen max-w-md px-7 mt-3">
            <TouchableOpacity
              className="bg-themeNavyBlue py-2 rounded"
              disabled={loading}
              onPress={() => handleSignUp()}
              // onPress={() => signUpWithEmail()}
            >
              {/* if password and confirm fails
                then don't go forward
                else
                opens component intake form
                they fill out form */}
              <Text className="text-themeWhite font-medium text-center text-[15px]">
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-4 rounded"
              onPress={() => setisOld(true)}
            >
              <Text className="text-center">
                Already have an account, press here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <IntakeForm email={email} password={password} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SignupScreen;
