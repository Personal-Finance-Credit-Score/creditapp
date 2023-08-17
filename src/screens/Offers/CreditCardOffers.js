import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
  } from "react-native";
  
  import { useNavigation } from "@react-navigation/native";
  import React, { useState, useEffect } from "react";
  import Avatar from "../../../assets/Avatar.png";
  import ArrowLeft from "../../../assets/arrowleft.png";

  const CreditCardOffers = (props) => {
    const navigation = useNavigation();
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
          className="h-28"
          style={{ android: { scrollbars: "none" } }}
          showsHorizontalScrollIndicator={false}
        >
          <View className="bg-themeGreen justify-right w-[500px]">
  
            <TouchableOpacity
              className="flex-1 flex-col w-1/2 bg-themeGreen"
              onPress={() => {
                navigation.navigate("LoanOffers");
              }}
            >
              <Text className="text-themeWhite bg-themeDarkGreen text-center p-1">Loans</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              className="w-20 justify-center"
              onPress={() => {
                navigation.navigate("LoanOffers");
              }}
            >
              <Text className="text-themeWhite text-center"></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
  
        
  
        <ScrollView>
          {/* container for the page */}
          <View><Text>CC offers</Text></View>
           
            
          
          
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default CreditCardOffers;
  