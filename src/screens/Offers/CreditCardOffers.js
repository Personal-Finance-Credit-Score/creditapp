import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
  } from "react-native";
  
  import { useNavigation } from "@react-navigation/native";
  import Ava from "../../../assets/offer.png"
  import React, { useState, useEffect } from "react";
  import Avatar from "../../../assets/Avatar.png";
  import ArrowLeft from "../../../assets/arrowleft.png";
  import Logo from "../../../assets/riseLogo.png";
  
  const CreditCardOffers = (props) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView className="flex-1 min-w-screen min-h-screen bg-themeLightBlue">
        {/* Navbar */}
        <View className="h-1/8 pt-10 mb-1">
          <View className="flex-row mt-6 mb-5 justify-between items-center ml-4 ">
            <TouchableOpacity
              className="mt-2"
              onPress={() => navigation.goBack()}
              accessible={true}
              accessibilityLabel="Back"
              accessibilityHint="Navigates to the previous screen"
            >
              <Image className="h-[37px] w-[37px]" source={Logo} />
            </TouchableOpacity>
            <Image className="mr-4" source={Avatar} />
          </View>
          <View className="shadow shadow-black "></View>
        </View>

        <ScrollView>
          {/* container for the page */}
          <View className="min-h-screen mb-32">
            <View>
              <Text className="font-bold text-themeNavyBlue text-[30px] ml-[25px] mb-3">Your Offers</Text>
            </View>

            {/* container for tabs and content */}
            <View className="px-5">
              {/* cc & loan tabs */}
              <View className="flex-row">
      
                <TouchableOpacity
                  className="w-1/2 h-[50px] justify-center rounded-t-xl bg-themeGreen from-current"
                  onPress={() => {
                    navigation.navigate("LoanOffers");
                  }}
                >
                  <Text className="text-themeWhite text-center p-1">Credit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="w-1/2 h-[50px] justify-center rounded-t-xl border-2 border-themeClearGray bg-themeLightBlue"
                  onPress={() => {
                    navigation.navigate("LoanOffers");
                  }}
                >
                  <Text className="text-center text-themeClearGray">Loans</Text>
                </TouchableOpacity>
              </View>
              
              {/* all tab content container */}
              <View className="h-full">
                
                {/* first card offer */}
                <View className="p-2 mb-2 border border-themeClearGray bg-themeWhite">
                  <View className="bg-themePlaceholder w-32 h-24 "></View>
                  <Text className="font-bold text-themeNavyBlue mt-2 text-[17px]">Wells Fargo</Text>
                  <View className="flex-1 flex-row mt-[25px] space-x-3">
                    <Image className="self-start ml-[9px]"source={Ava} />
                  <Text className="text-[17px] mr-[20px]">Your chance of approval is <Text className="font-bold text-themeNavyBlue self-center">good</Text></Text></View>
                <View className="ml-5 mt-2"><Text>Reward rate: 2x - 3x per dollar</Text></View>
                <View className="ml-5 mt-2"><Text>Annual fee: $5</Text></View>
                <View className="ml-5 mt-2"><Text>Welcome bonus: 5,000 miles</Text></View>   
                
                <TouchableOpacity
                  className="bg-themeNavyBlue mt-5 w-100 h-[50px] justify-center border-2 "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >  
                  <Text className="text-themeWhite text-center p-1">View more</Text>
                </TouchableOpacity> 
                
                <TouchableOpacity 
                  className="bg-themeWhite mt-5 w-100 h-[50px] justify-center "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >
                    <Text className="text-themeNavyBlue text-center p-1">See details and rates</Text>
                </TouchableOpacity>
                </View>
                
                {/* second card offer */}
                <View className="p-2 border border-themeClearGray mb-2 bg-themeWhite">
                  <View className="bg-themePlaceholder w-32 h-24 "></View>
                  <Text className="font-bold text-themeNavyBlue mt-2 text-[17px]">Chase Sapphire</Text>
                  <View className="flex-1 flex-row mt-[25px] space-x-3">
                    <Image className="self-start ml-1"source={Ava} />
                  <Text className="text-[17px] mr-[20px]">Your chance of approval is <Text className="font-bold text-themeGreen self-center">high</Text></Text></View>
                <View className="ml-5 mt-2"><Text>Reward rate: 2x - 5x per dollar</Text></View>
                <View className="ml-5 mt-2"><Text>Annual fee: $95</Text></View>
                <View className="ml-5 mt-2"><Text>Welcome bonus: 75,000 miles</Text></View> 
                <TouchableOpacity
                  className="bg-themeNavyBlue mt-5 w-100 h-[50px] justify-center border-2 "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >  
                  <Text className="text-themeWhite text-center p-1">View more</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  className="bg-themeWhite mt-5 w-100 h-[50px] justify-center "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >
                    <Text className="text-themeNavyBlue text-center p-1">See details and rates</Text>
                </TouchableOpacity>

                </View>
                {/* third card offer */}
                <View className="p-2 mb-2 border border-themeClearGray bg-themeWhite">
                  <View className="bg-themePlaceholder w-32 h-24 "></View>
                  <Text className="font-bold text-themeNavyBlue mt-2 text-[17px]">Capital One</Text>
                  <View className="flex-1 flex-row mt-[25px] space-x-3">
                    <Image className="self-start ml-1"source={Ava} />
                  <Text className="text-[17px] mr-[20px]">Your chance of approval is <Text className="font-bold text-orange-400 self-center">fair</Text></Text></View>
                <View className="ml-5 mt-2"><Text>Reward rate: 4x per dollar</Text></View>
                <View className="ml-5 mt-2"><Text>Annual fee: $200</Text></View>
                <View className="ml-5 mt-2"><Text>Welcome bonus: 125,000 miles</Text></View> 
                <TouchableOpacity
                  className="bg-themeNavyBlue mt-5 w-100 h-[50px] justify-center border-2 "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >  
                  <Text className="text-themeWhite text-center p-1">View more</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="bg-themeWhite mt-5 w-100 h-[50px] justify-center "
                  onPress={() => {
                      navigation.navigate("Homescreen");
                    }}
                  >
                    <Text className="text-themeNavyBlue text-center p-1">See details and rates</Text>
                </TouchableOpacity>
                
                </View>
              </View>
             </View>
            </View>
            
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default CreditCardOffers;
  