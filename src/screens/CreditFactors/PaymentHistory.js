import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Avatar from "../../../assets/Avatar.png";
import ArrowLeft from "../../../assets/arrowleft.png";
import DownArrow from "../../../assets/downarrow.png";
import PayHistory from '../../../assets/paymentHistory.png'

const PaymentHistory = (props) => {
  const navigation = useNavigation();

  // To hide/show elements in the Accounts Section
  // To hide/show elements in the Accounts Section
  const [showAuto, setShowAuto] = useState("hidden");
  const [showCC, setShowCC] = useState("hidden");
  const [showHomeLoans, setShowHomeLoans] = useState("hidden");
  const [showStudent, setShowStudent] = useState("hidden");

  return (
    <SafeAreaView className="flex-1 min-w-screen min-h-screen bg-themeLightBlue">
      {/* Navbar */}
      <View className="h-1/8 pt-10 mb-1">
        <View className="flex-row mt-6 mb-5 justify-between ml-4 ">
          <TouchableOpacity
            className="mt-2"
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
          >
            <Image className="" source={ArrowLeft} />
          </TouchableOpacity>
          <Image className="mr-4" source={Avatar} />
        </View>
        <View className="shadow shadow-black "></View>
      </View>
      
      {/* TODO: Need another navbar for each credit factor */}

      <ScrollView>
        {/* container for the page */}
        <View className="flex flex-1 mb-16 w-screen px-8 max-w-md bg-testBgGreen pt-30">
          <View className='w-full'>
            <Text className="text-3xl text-themeNavyBlue text-left">
                Payment History
            </Text>
          </View>
          <View className="flex-row mt-5">
            <Image source={PayHistory}/>
            <View className="">
                <Text className="text-themeNavyBlue">Percentage of score</Text>
                <Text className="text-themeNavyBlue">35%</Text>
            </View>
          </View>

            <View className="mt-5">
                <Text className="text-themeNavyBlue">How you’ve paid your bills in the past - whether you’ve paid on time or late, or missed payments - is a very important category of credit data for the FICO score. The more severe, recent and frequent the late payment information, the greater the impact on a FICO score.</Text>
            </View>
            <View className="items-center text-center bg-themeGreen py-3 mt-5">
                <Text className="text-themeWhite">Your Payment History rating is</Text>
                <Text className="text-themeWhite text-lg bg-themeDarkGreen p-3 mt-2">Exceptional</Text>
            </View>

          <Text className="text-2xl text-themeNavyBlue">Lorem Epsum</Text>
          <Text className="text-5xl font-medium pt-2 text-themeNavyBlue">
            754
          </Text>
          <Text className="text-themeNavyBlue">
            Calculated using VantageScore 3.9
          </Text>
          <Text className="text-themeNavyBlue">Provided by TransUnion</Text>

          <Text className="mt-5 text-themeNavyBlue">Choose a date</Text>
          <View className="mt-2 mx-7"></View>

          {/* Personal Information Section */}

          <Text className="text-themeBlue font-bold mt-5">
            Personal Information
          </Text>

          <View className="m-3 w-[300px] border border-themeBlue bg-themeBlue"></View>
          <Text className="text-themeBlue">Names Reported</Text>

          {/* Might need this instead of gray text color    color: '#00000050' */}
          <Text className="text-gray-500 pt-2 pb-5">Lorem Epsum</Text>
          <Text className="pb-20 text-themeNavyBlue">Employment Info</Text>
          <Text className="pb-20 text-themeNavyBlue">Addresses Reported</Text>
          <Text className="font-bold text-themeNavyBlue">Accounts</Text>
          <View className="m-3 w-[300px] border border-themeNavyBlue bg-themeNavyBlue"></View>

          {/* Accounts Section */}
          {/* Accounts Section */}
          <View className="items-center">
            {/* section 1 */}
            <TouchableOpacity
              className="py-5 m-1 w-[350px] rounded px-5 flex-row bg-white justify-between"
              onPress={() => {
                if (showAuto === "flex") {
                  setShowAuto("hidden");
                } else {
                  setShowAuto("flex");
                  setShowCC("hidden");
                  setShowHomeLoans("hidden");
                  setShowStudent("hidden");
                }
              }}
            >
              <Text className="">Auto Loans</Text>
              <Image source={DownArrow} />
            </TouchableOpacity>
            <View className={`${showAuto} py-8 w-[346px]`}>
              <View className="flex justify-between flex-row mx-7">
                <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                <Text className="text-themeNavyBlue">$3,000.00</Text>
              </View>
              <Text className="ml-7 text-themeNavyBlue">
                Reported: August 14, 2023
              </Text>
            </View>

            {/* section 2 */}
            <TouchableOpacity
              className="py-5 m-1 w-[350px] px-5 flex-row rounded bg-white justify-between"
              onPress={() => {
                if (showCC === "flex") {
                  setShowCC("hidden");
                } else {
                  setShowAuto("hidden");
                  setShowCC("flex");
                  setShowHomeLoans("hidden");
                  setShowStudent("hidden");
                }
              }}
            >
              <Text className="text-themeNavyBlue">Credit Cards</Text>
              <Image source={DownArrow} />
            </TouchableOpacity>
            <View className={`${showCC} py-8 w-[346px]`}>
              <View className="flex justify-between flex-row mx-7">
                <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                <Text className="text-themeNavyBlue">$3,000.00</Text>
              </View>
              <Text className="ml-7 text-themeNavyBlue">
                Reported: August 14, 2023
              </Text>
            </View>

            {/* section 3 */}
            <TouchableOpacity
              className="py-5 m-1 w-[350px] px-5 flex-row justify-between rounded bg-white"
              onPress={() => {
                if (showHomeLoans === "flex") {
                  setShowHomeLoans("hidden");
                } else {
                  setShowAuto("hidden");
                  setShowCC("hidden");
                  setShowHomeLoans("flex");
                  setShowStudent("hidden");
                }
              }}
            >
              <Text className="text-themeNavyBlue">Home Loans</Text>
              <Image source={DownArrow} />
            </TouchableOpacity>
            <View className={`${showHomeLoans} py-8 w-[346px]`}>
              <View className="flex justify-between flex-row mx-7">
                <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                <Text className="text-themeNavyBlue">$3,000.00</Text>
              </View>
              <Text className="ml-7 text-themeNavyBlue">
                Reported: August 14, 2023
              </Text>
            </View>

            {/* section 4 */}
            <TouchableOpacity
              className="py-5 m-1 w-[350px] px-5 flex-row justify-between rounded bg-white"
              onPress={() => {
                if (showStudent === "flex") {
                  setShowStudent("hidden");
                } else {
                  setShowAuto("hidden");
                  setShowCC("hidden");
                  setShowHomeLoans("hidden");
                  setShowStudent("flex");
                }
              }}
            >
              <Text className="text-themeNavyBlue">Student Loans</Text>
              <Image source={DownArrow} />
            </TouchableOpacity>
            <View className={`${showStudent} py-8 w-[346px]`}>
              <View className="flex justify-between flex-row mx-7">
                <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                <Text className="text-themeNavyBlue">$3,000.00</Text>
              </View>
              <Text className="ml-7 text-themeNavyBlue">
                Reported: August 14, 2023
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentHistory;
