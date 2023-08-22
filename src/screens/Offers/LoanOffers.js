import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Avatar from "../../../assets/Avatar.png";
import Logo from "../../../assets/riseLogo.png";
import Car from "../../../assets/car.png"
import Home from "../../../assets/home.png"


const LoanOffers = (props) => {
  const navigation = useNavigation();
  const [suggested, setSuggested] = useState("border-b-[2px] border-themeGreen")
  const [lowAPR, setLowAPR] = useState("")
  const [lowMonth, setLowMonth] = useState("")


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
          <View className="">
            <Text className="font-bold text-themeNavyBlue text-[30px] ml-[25px] mb-3">Your Offers</Text>
          </View>

          {/* container for tabs and content */}
          <View className="px-5">
            {/* cc & loan tabs */}
            <View className="flex-row">
    
              <TouchableOpacity
                className="w-1/2 h-[50px] justify-center rounded-t-xl border-2 border-themeClearGray from-current"
                onPress={() => {
                  navigation.navigate("CreditCardOffers");
                }}
              >
                <Text className="text-themeClearGray text-center p-1">Credit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-1/2 h-[50px] justify-center rounded-t-xl border-2 border-themeGreen bg-themeGreen"
                onPress={() => {
                  navigation.navigate("LoanOffers");
                }}
              >
                <Text className="text-center text-themeWhite">Loans</Text>
              </TouchableOpacity>
            </View>
            
            {/* all tab content container */}
            <View className="h-full">
              
            {/* Car and Home icons*/}
            <View>
            <View className="flex-1 flex-row justify-around border-gray-500 border items-center">
              <Image className="h-[37px] w-[37px] my-3" source={Car} />
              <View><Text className="mr-2">Auto</Text></View>
              <View className="border border-gray-500 h-16 ml-2"></View>
              <Image className="h-[37px] w-[37px]" source={Home} />
              <View><Text className="mr-2">Home</Text></View>
            </View>

            {/* slider section */}
            <View className="mt-5 items-center px-4 max-w-sm mx-auto text-center">
                
              <Text className="font-bold text-xl text-themeNavyBlue">You could borrow up to $10,000*</Text>
              <Text className="text-gray-500 mt-2">*Based on your annual income of $150,000</Text>
              <View className="border border-gray-500 my-3 w-full mx-5"></View>
              <Text className="text-themeNavyBlue text-lg font-medium">Loan amount $1,000</Text>
              <View className="border border-gray-500 my-3 w-60 "></View>
              <View className="flex-row justify-between w-full mx-auto px-4">
                <Text className="text-themeNavyBlue">$100</Text>
                <Text className="text-themeNavyBlue">$10,000</Text>
              </View>

              <View className="border border-gray-500 mt-3 w-80 "></View>
              <View className="flex-row justify-around mx-auto w-full">
                
                  <Text className="pt-1 text-lg">Up to $98/mo</Text>

                  <View className="border border-gray-500 h-10"></View>
                  <Text className="pt-1 text-lg">1 to 120 months</Text>

              </View>
              <View className="border border-gray-500 mb-3 w-80 "></View>
            </View>

              {/* card tabs */}
                <View className="flex-row justify-between mt-5 text-gray-500 mb-1 px-5">
                  <TouchableOpacity className={`${suggested} pb-2`} onPress={() => {
                    setLowAPR("")
                    setSuggested("border-b-[2px] border-themeGreen")
                    setLowMonth("")
                  }}><Text className="text-gray-700">Suggested</Text></TouchableOpacity>
                  <TouchableOpacity className={`${lowAPR} pb-2`} onPress={() => {
                    setLowAPR("border-b-[2px] border-themeGreen")
                    setSuggested("")
                    setLowMonth("")
                  }}><Text className="text-gray-700">Lowest APR</Text></TouchableOpacity>
                  <TouchableOpacity className={`${lowMonth} pb-2`} onPress={() => {
                    setLowAPR("")
                    setSuggested("")
                    setLowMonth("border-b-[2px] border-themeGreen")
                  }}><Text className="text-gray-700">Lowest/month</Text></TouchableOpacity>
                </View>

              {/* card 1/3 */}
              <View className="bg-themeWhite mt-2 p-4 border border-gray-400">
              <View className="flex-1 flex-row items-center self-center mt-4 mr-10">
              <Image className="h-[37px] w-[37px] mt-2 mr-5" source={Logo}/>
                <Text className="font-bold text-[17px] mr-2 mt-2">Wells Fargo</Text>
                </View>
                <View className="flex-row w-full justify-around mt-3">
                  <View>
                    <Text>12.40%</Text>
                    <Text>APR est</Text>
                  </View>
                  <View>
                    <Text>$500/mo</Text>
                    <Text>24 mo</Text>
                  </View>
                  <View>
                    <Text>$700</Text>
                    <Text>interest</Text>
                    <Text>fees est</Text>
                  </View>
                  <View>
                    <Text>$1000</Text>
                    <Text>Loan est</Text>
                  </View>
                </View>
                <View className="border-b-[1px] h-0 mt-5"><Text></Text></View>
                <View className="mt-3 ml-2"><Text>% discount for auto pay / direct pay</Text></View>
                <View className="mt-3 ml-2 flex-1 flex-row mr-1"><Text>Your chance for approval is</Text><Text className="font-bold font-themeNavyBlue ml-[4.5px]">good</Text></View>
                <TouchableOpacity
                    className=" bg-themeNavyBlue mt-4 w-[100%] h-[50px] self-center items-center"
                    onPress={() => navigation.navigate("LoadingScreen")}
                  >
                    <Text className="text-2xl my-auto items-center text-center font-medium text-[15px] text-themeWhite">
                      Take the offer
                    </Text>
                  </TouchableOpacity>
                  <Text className="my-3">See details and rates</Text>
            </View>

            {/* card 2/3 */}
            <View className="bg-themeWhite mt-2 p-4 border border-gray-400">
              <View className="flex-1 flex-row items-center self-center mt-4 mr-10">
              <Image className="h-[37px] w-[37px] mt-2 mr-5" source={Logo}/>
                <Text className="font-bold text-[17px] mr-2 mt-2">Wells Fargo</Text>
                </View>
                <View className="flex-row w-full justify-around mt-3">
                  <View>
                    <Text>12.40%</Text>
                    <Text>APR est</Text>
                  </View>
                  <View>
                    <Text>$500/mo</Text>
                    <Text>24 mo</Text>
                  </View>
                  <View>
                    <Text>$700</Text>
                    <Text>interest</Text>
                    <Text>fees est</Text>
                  </View>
                  <View>
                    <Text>$1000</Text>
                    <Text>Loan est</Text>
                  </View>
                </View>
                <View className="border-b-[1px] h-0 mt-5"><Text></Text></View>
                <View className="mt-3 ml-2"><Text>% discount for auto pay / direct pay</Text></View>
                <View className="mt-3 ml-2 flex-1 flex-row mr-1"><Text>Your chance for approval is</Text><Text className="font-bold font-themeNavyBlue ml-[4.5px]">good</Text></View>
                <TouchableOpacity
                    className=" bg-themeNavyBlue mt-4 w-[100%] h-[50px] self-center items-center"
                    onPress={() => navigation.navigate("LoadingScreen")}
                  >
                    <Text className="text-2xl my-auto items-center text-center font-medium text-[15px] text-themeWhite">
                      Take the offer
                    </Text>
                  </TouchableOpacity>
                  <Text className="my-3">See details and rates</Text>
            </View>
                  
            {/* card 3/3 */}
            <View className="bg-themeWhite mt-2 p-4 border border-gray-400">
              <View className="flex-1 flex-row items-center self-center mt-4 mr-10">
              <Image className="h-[37px] w-[37px] mt-2 mr-5" source={Logo}/>
                <Text className="font-bold text-[17px] mr-2 mt-2">Wells Fargo</Text>
                </View>
                <View className="flex-row w-full justify-around mt-3">
                  <View>
                    <Text>12.40%</Text>
                    <Text>APR est</Text>
                  </View>
                  <View>
                    <Text>$500/mo</Text>
                    <Text>24 mo</Text>
                  </View>
                  <View>
                    <Text>$700</Text>
                    <Text>interest</Text>
                    <Text>fees est</Text>
                  </View>
                  <View>
                    <Text>$1000</Text>
                    <Text>Loan est</Text>
                  </View>
                </View>
                <View className="border-b-[1px] h-0 mt-5"><Text></Text></View>
                <View className="mt-3 ml-2"><Text>% discount for auto pay / direct pay</Text></View>
                <View className="mt-3 ml-2 flex-1 flex-row mr-1"><Text>Your chance for approval is</Text><Text className="font-bold font-themeNavyBlue ml-[4.5px]">good</Text></View>
                <TouchableOpacity
                    className=" bg-themeNavyBlue mt-4 w-[100%] h-[50px] self-center items-center"
                    onPress={() => navigation.navigate("LoadingScreen")}
                  >
                    <Text className="text-2xl my-auto items-center text-center font-medium text-[15px] text-themeWhite">
                      Take the offer
                    </Text>
                  </TouchableOpacity>
                  <Text className="my-3">See details and rates</Text>
            </View>


            </View>
            
          </View>
          </View>
          </View>
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoanOffers;
