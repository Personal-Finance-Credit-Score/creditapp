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
import PayHistory from "../../../assets/paymentHistory.png";

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

      {/* horizontal nav bar */}
      <ScrollView
        horizontal
        className="h-28 mx-auto"
        style={{ android: { scrollbars: "none" } }}
        showsHorizontalScrollIndicator={false}
      >
        <View className="bg-themeGreen flex-row justify-between p-3 w-[550px]">
          <TouchableOpacity
            className="w-20 bg-themeDarkGreen justify-center"
            onPress={() => {
              navigation.navigate("PaymentHistory");
            }}
          >
            <Text className="text-themeWhite text-center">Payment History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-20 justify-center"
            onPress={() => {
              navigation.navigate("CreditCardUse");
            }}
          >
            <Text className="text-themeWhite text-center">Credit Card Use</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-20 justify-center"
            onPress={() => {
              navigation.navigate("DerogatoryMarks");
            }}
          >
            <Text className="text-themeWhite text-center">Derogatory Marks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-20 justify-center"
            onPress={() => {
              navigation.navigate("CreditAge");
            }}
          >
            <Text className="text-themeWhite text-center">Total Account & Credit Age</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-20 justify-center"
            onPress={() => {
              navigation.navigate("HardInquiries");
            }}
          >
            <Text className="text-themeWhite text-center">Hard Inquiries</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* TODO: Need another navbar for each credit factor */}

      <ScrollView>
        {/* container for the page */}
        <View className="flex flex-1 w-screen mx-auto px-8 max-w-md bg-testBgGreen pt-5 mb-32">
          <View className="w-full">
            <Text className="text-3xl text-themeNavyBlue text-left mt-3">
              Payment History
            </Text>
          </View>
          <View className="flex-row justify-around mt-5">
            <Image source={PayHistory} />
            <View className="flex flex-col justify-end mb-3">
              <Text className="text-themeNavyBlue my-2">
                Percentage of score
              </Text>
              <Text className="text-themeNavyBlue text-3xl">35%</Text>
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-themeNavyBlue">
              How you’ve paid your bills in the past - whether you’ve paid on
              time or late, or missed payments - is a very important category of
              credit data for the FICO score. The more severe, recent and
              frequent the late payment information, the greater the impact on a
              FICO score.
            </Text>
          </View>
          <View className="items-center text-center bg-themeGreen py-3 mt-5 rounded">
            <Text className="text-themeWhite">
              Your Payment History rating is
            </Text>
            <Text className="text-themeWhite text-lg bg-themeDarkGreen p-3 mt-2">
              Exceptional
            </Text>
          </View>

          <Text className="text-xl ml-2 text-themeNavyBlue mt-10 mb-3">
            Your Personal Data Points:
          </Text>

          {/* Accounts Section */}
          <View className="items-center">
            {/* section 1 */}
            <View className="py-5 w-[350px] rounded px-5 flex-row bg-themeGreen justify-between">
              <Text className="text-themeWhite">Collections</Text>
              <Text className="text-themeWhite">0</Text>
            </View>

            {/* section 2 */}
            <View className="py-5 m-1 w-[350px] px-5 flex-row rounded bg-themeGreen justify-between">
              <Text className="text-themeWhite">Late Payment 30+ Days</Text>
              <Text className="text-themeWhite">0</Text>
            </View>

            {/* section 3 */}
            <View className="py-5 w-[350px] px-5 flex-row justify-between rounded bg-themeGreen">
              <Text className="text-themeWhite">Collections</Text>
              <Text className="text-themeWhite">0</Text>
            </View>

            {/* section 4 */}
            <View className="py-5 m-1 w-[350px] px-5 flex-row justify-between rounded bg-themeGreen">
              <Text className="text-themeWhite">Student Loans</Text>
              <Text className="text-themeWhite">0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentHistory;
