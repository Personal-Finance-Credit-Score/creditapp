import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const CreditReport = (props) => {
  const navigation = useNavigation();

  const [showAuto, setShowAuto] = useState("hidden")
  const [showCC, setShowCC] = useState("hidden")
  const [showHomeLoans, setShowHomeLoans] = useState("hidden")
  const [showStudent, setShowStudent] = useState("hidden")


  useEffect(() => {

  }, [showCC])




  return (
    <SafeAreaView className="flex-1 bg-themeLightBlue">

        {/* there should be a nav bar for this page */}
        {/* Navbar, should be outside of scroll view so it stays at top of page on scroll */}
        <View className="h-1/8 mb-1 bg-themeLightBlue">
        <View className="flex-row mt-6 mb-2 bg-themeLightBlue">
          <TouchableOpacity
            className="mt-2 ml-4"
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
            >
            
            {/* <Icon name="arrowleft" size={30} color="#000" className="" /> */}
          </TouchableOpacity>
          <Text
            className={`text-3xl  text-themeBlue font-bold mx-auto mt-2 pr-12`}>
            Hellooo
          </Text>
        </View>
        <View className="shadow shadow-black ">
          
        </View>
      </View>

      <ScrollView>

      

      {/* container for the page */}
      <View className="flex flex-1 min-w-screen min-h-screen bg-testBgGreen items-center text-center pt-30">

        <Text className="text-3xl text-themeNavyBlue">Credit Report</Text>
        <Text className="text-2xl text-themeNavyBlue">Lorem Epsum</Text>
        <Text className="text-4xl text-themeNavyBlue">754</Text>
        <Text className="text-themeNavyBlue">Calculated using VantageScore 3.9</Text>
        <Text className="text-themeNavyBlue" >Provided by TransUnion</Text>

        <Text className="mt-20 text-themeNavyBlue">Choose a date</Text>
        
        {/* will replace with maybe drop down picker 
        https://www.npmjs.com/package/@react-native-picker/picker */}
        <View className="mt-5 mb-15 w-[300px] h-[40px] border border-black"><Text>This is placeholder for now</Text></View>
        <Text className="font-bold text-xl">Personal Information</Text>

        <View className="m-10 w-[300px] border border-themeNavyBlue"></View>
        <Text className="text-themeNavyBlue">Names Reported</Text>

        {/* Might need this instead of gray text color    color: '#00000050' */}
        <Text className="text-gray-500 pt-8 pb-25">Lorem Epsum</Text>
        <Text className="pb-42 text-themeNavyBlue">Employment Info</Text>
        <Text className="pb-42 text-themeNavyBlue">Addresses Reported</Text>
        <Text className="font-bold pb-20 text-themeNavyBlue">Accounts</Text>
        <View className="m-10 w-[300px] border border-themeNavyBlue"></View>

        <View>
            {/* section 1 */}
            <TouchableOpacity 
                className="py-5 m-3 w-[400px] border border-2 border-gray-500 bg-white"
                onPress={()=> {
                  if(showAuto === "flex") {
                    setShowAuto('hidden')
                  } else {
                    setShowAuto('flex')
                    setShowCC('hidden')
                    setShowHomeLoans('hidden')
                    setShowStudent('hidden')
                  }
                  console.log("pressed!")
                }}>
                <Text className="text-center">Auto Loans</Text>
            </TouchableOpacity>
            <View className={`${showAuto} pt-20 pb-20 w-[396px] bg-gray-300`}>
                <View className="flex justify-between flex-row mx-20">
                    <Text className="text-themeNavyBlue" >Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-20 text-themeNavyBlue' style={{marginLeft: 20}}>Reported: August 14, 2023</Text>
            </View>

            {/* section 2 */}
            <TouchableOpacity className={`py-5 m-3 w-[400px] border border-2 border-gray-500 bg-white`} onPress={() => {
             if(showCC === "flex") {
              setShowCC('hidden')
            } else {
              setShowAuto('hidden')
              setShowCC('flex')
              setShowHomeLoans('hidden')
              setShowStudent('hidden')
            }
            console.log("pressed!")
            }}>
                <Text className="text-center text-themeNavyBlue">Credit Cards</Text>
            </TouchableOpacity>
            <View className={`${showCC} pt-20 pb-20 w-[396px] bg-gray-300 `}>
                <View className="flex justify-between flex-row mx-20">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-20 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>

            {/* section 3 */}
            <TouchableOpacity className="py-5 m-3 w-[400px] border border-2 border-gray-500 bg-white" onPress={() => {
              if(showHomeLoans === "flex") {
                setShowHomeLoans('hidden')
              } else {
                setShowAuto('hidden')
                setShowCC('hidden')
                setShowHomeLoans('flex')
                setShowStudent('hidden')
              }
              console.log("pressed!")
            }}>
                <Text className="text-center text-themeNavyBlue">Home Loans</Text>
            </TouchableOpacity>
            <View className={`${showHomeLoans} pt-20 pb-20 w-[396px] bg-gray-300`}>
                <View className="flex justify-between flex-row mx-20">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-20 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>

            {/* section 4 */}
            <TouchableOpacity className="py-5 m-3 w-[400px] border border-2 border-gray-500 bg-white" onPress={() => {
              if(showStudent === "flex") {
                setShowStudent('hidden')
              } else {
                setShowAuto('hidden')
                setShowCC('hidden')
                setShowHomeLoans('hidden')
                setShowStudent('flex')
              }
              console.log("pressed!")
            }}>
                <Text className="text-center text-themeNavyBlue">Student Loans</Text>
            </TouchableOpacity>
            <View className={`${showStudent} pt-20 pb-20 w-[396px] bg-gray-300`}>
                <View className="flex justify-between flex-row mx-20">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-20 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>
            
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
//     height: 1200,
//     backgroundColor: '#64B4A1',
//     alignItems: 'center',
//     textAlign: 'center',
//     paddingTop: 110,
//   },
//   creditNum: {
//     fontSize: 50,
//   },
//   loremEpsum: {
//     fontSize: 20,
//   },
//   dropDown: {
//     marginTop: 5,
//     marginBottom: 15,
//     width: 300,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#323778',
//   },
//   dateText: {
//     marginTop: 20,
//   },
//   divider: {
//     margin: 10,
//     height: 1,
//     width: 300,
//     backgroundColor: 'black',
//   },
//   debtViewer: {
//     paddingTop: 20,
//     paddingBottom: 20,
//     width: 400,
//     borderWidth: 2,
//     borderColor: "gray",
//     backgroundColor: 'white',
//   }, 
//   debtText: {
//     textAlign: 'center',
//   },
//   debtShow: {
//     display: 'flex',
//     paddingTop: 20,
//     paddingBottom: 20,
//     width: 396,
//     backgroundColor: '#D9D9D9'
//   },
//   textDebtShow: {
//     display: "flex", 
//     justifyContent: 'space-between', 
//     flexDirection: "row",
//     marginLeft: 20,
//     marginRight: 20,
//   }

// });

export default CreditReport;
