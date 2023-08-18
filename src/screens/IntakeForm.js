import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TextInput, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import Avatar from "../../assets/Avatar.png";
import { supabase } from '../../lib/supabase'

const IntakeForm = (props) => {
  const { email, password} = props
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [ssn, setSsn] = useState("");
  const [income, setIncome] = useState("");
  const [loading, setLoading] = useState(false)


  async function signUpWithEmail() {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    
    if (error) Alert.alert(error.message)

  }

  return (
    <View>
      {/* Navbar without back arrow */}
      <ScrollView>

        {/* Page container */}
        <View className="pt-10 flex flex-1 mx-auto min-w-screen min-h-screen items-right text-center pt-30 mb-32">
          <Text className="text-3xl font-bold text-themeNavyBlue">Enter your information</Text>
          <Text></Text>
          <Text className="text-2xl font-semibold text-themeNavyBlue">
            This information will be used to create your account.
          </Text>
          <Text></Text>
          <Text className="text-base font-bold text-themeNavyBlue">
            Your information is securely encrypted.
          </Text>
          <Text className="text-base font-bold text-themeNavyBlue">
            Your credit won’t be impacted
          </Text>
          <Text className="text-base font-bold text-themeNavyBlue">
            We’ll never sell your personal info.
          </Text>
          <Text></Text>
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">First Name</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">Last Name</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">Date Of Birth</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="MM/DD/YYYY"
            value={dob}
            onChangeText={(text) => setDob(text)}
          />
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">Current Address</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="Street"
            value={street}
            onChangeText={(text) => setStreet(text)}
          />
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <View className="flex flex-row space-x-4">
            <TextInput
              className="relative rounded-sm border border-gray-300 bg-white w-40 h-10 pl-2.5 mb-2"
              placeholder="State"
              value={state}
              onChangeText={(text) => setState(text)}
            />
            <TextInput
              className="relative rounded-sm border border-gray-300 bg-white w-36 h-10 pl-2.5 mb-2"
              placeholder="Zip"
              value={zip}
              onChangeText={(text) => setZip(text)}
            />
          </View>
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">Phone</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">
            Social Security Number (SSN)
          </Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="Last 4 of SSN"
            value={ssn}
            onChangeText={(text) => setSsn(text)}
          />
          <Text className="text-base font-medium pl-2 text-themeNavyBlue">Income</Text>
          <TextInput
            className="relative rounded-sm border border-gray-300 bg-white w-80 h-10 pl-2.5 mb-2"
            placeholder="Income"
            value={income}
            onChangeText={(text) => setIncome(text)}
          />
          <TouchableOpacity
            className="relative rounded-sm border bg-themeNavyBlue w-80 h-10 pl-2.5 mt-5 mb-2"
            title="Continue"
            // onPress={handleFormSubmit}
            onPress={() => signUpWithEmail()}
          >
            <Text className="text-white text-center my-auto rounded">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default IntakeForm;
