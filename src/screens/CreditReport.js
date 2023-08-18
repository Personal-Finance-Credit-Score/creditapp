import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Avatar from '../../assets/Avatar.png';
import ArrowLeft from '../../assets/arrowleft.png';
import DownArrow from '../../assets/downarrow.png';
import DropDownPicker from 'react-native-dropdown-picker';


const CreditReport = (props) => {
  const navigation = useNavigation();

  // To hide/show elements in the Accounts Section
  // To hide/show elements in the Accounts Section
  const [showAuto, setShowAuto] = useState("hidden")
  const [showCC, setShowCC] = useState("hidden")
  const [showHomeLoans, setShowHomeLoans] = useState("hidden")
  const [showStudent, setShowStudent] = useState("hidden")

  // For Dropdown Picker
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
  {
    label: 'August 14, 2023',
    value: 'August 14, 2023'
  },
  {
    label: 'July 14, 2023',
    value: 'July 14, 2023'
  },
  {
    label: 'June 14, 2023',
    value: 'June 14, 2023'
  },
  {
    label: 'September 14, 2022',
    value: 'September 14, 2022'
  },
  {
    label: 'March 14, 2022',
    value: 'March 14, 2022'
  },
  {
    label: 'November 14, 2021',
    value: 'November 14, 2021'
  },
  {
    label: 'January 14, 2021',
    value: 'January 14, 2021'
  },
  {
    label: 'July 14, 2019',
    value: 'July 14, 2019'
  },
  {
    label: 'February 14, 2018',
    value: 'February 14, 2018'
  },
]);



  return (
    <SafeAreaView className="flex-1 bg-themeLightBlue">

        {/* Navbar, should be outside of scroll view so it stays at top of page on scroll */}
        <View className="h-1/8 pt-10 mb-1">
        <View className="flex-row mt-6 mb-5 justify-between ml-4 ">
          <TouchableOpacity
            className="mt-2"
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
            >
            <Image className="" source={ArrowLeft}/>
            {/* <Icon name="arrowleft" size={30} color="#000" className="" /> */}
          </TouchableOpacity>
          <Image className="mr-4" source={Avatar}/>
        </View>
        <View className="shadow shadow-black ">
          
        </View>
      </View>

      <ScrollView>

      

      {/* container for the page */}
      <View className="flex flex-1 mb-16 min-w-screen min-h-screen bg-testBgGreen items-center text-center pt-30">

        <Text className="text-3xl font-bold text-themeNavyBlue">Credit Report</Text>
        <Text className="text-2xl text-themeNavyBlue">Ryan Le</Text>
        <Text className="text-5xl font-medium pt-2 text-themeNavyBlue">754</Text>
        <Text className="text-themeNavyBlue">Calculated using VantageScore 3.9</Text>
        <Text className="text-themeNavyBlue" >Provided by TransUnion</Text>

        <Text className="mt-5 text-themeNavyBlue">Choose a date</Text>
        <View className="mt-2 mx-7 z-10 left-0 p-2">
          <DropDownPicker
            items={items}
            value={value}
            open={open}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownDirection="BOTTOM"
            listMode="SCROLLVIEW"
            placeholder="Select a date"
          />
        </View>
        
        {/* drop down picker https://www.npmjs.com/package/react-native-dropdown-picker */}
        {/* Personal Information Section */}
        
        <Text className="text-themeBlue font-bold mt-5">Personal Information</Text>

        <View className="m-3 w-[300px] border border-themeBlue bg-themeBlue"></View>
        <View className="pb-10">
        <Text className="text-center text-themeBlue">Names Reported</Text>

        {/* Might need this instead of gray text color    color: '#00000050' */}
        <Text className="text-center text-gray-500 pt-2 pb-5">Ryan Le</Text>
        </View>
        <View className="pb-10">
        <Text className="text-center text-themeNavyBlue">Employment Info</Text>
        <Text className="text-gray-500 pt-2 pb-5">Lime Apple LLC</Text>
        </View>
        <View className="pb-10">
        <Text className="text-center text-themeNavyBlue">Addresses Reported</Text>
        <Text className="text-gray-500 pt-2 pb-5">10971 Franklin Lakes New Ryanborough, MS 32366</Text>
        </View>
        <Text className="font-bold text-themeNavyBlue">Accounts</Text>
        <View className="m-3 w-[300px] border border-themeNavyBlue bg-themeNavyBlue"></View>

        {/* Accounts Section */}
        {/* Accounts Section */}
        <View className="items-center">
            {/* section 1 */}
            <TouchableOpacity 
                className="py-5 m-1 w-[350px] rounded px-5 flex-row bg-white justify-between"
                onPress={()=> {
                  if(showAuto === "flex") {
                    setShowAuto('hidden')
                  } else {
                    setShowAuto('flex')
                    setShowCC('hidden')
                    setShowHomeLoans('hidden')
                    setShowStudent('hidden')
                  }
                }}>
                <Text className="">Auto Loans</Text>
                <Image source={DownArrow}/>
            </TouchableOpacity>
            <View className={`${showAuto} py-8 w-[346px]`}>
                <View className="flex justify-between flex-row mx-7">
                    <Text className="text-themeNavyBlue" >Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-7 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>

            {/* section 2 */}
            <TouchableOpacity className="py-5 m-1 w-[350px] px-5 flex-row rounded bg-white justify-between" onPress={() => {
             if(showCC === "flex") {
              setShowCC('hidden')
            } else {
              setShowAuto('hidden')
              setShowCC('flex')
              setShowHomeLoans('hidden')
              setShowStudent('hidden')
            }
            }}>
                <Text className="text-themeNavyBlue">Credit Cards</Text>
                <Image source={DownArrow}/>
            </TouchableOpacity>
            <View className={`${showCC} py-8 w-[346px]`}>
                <View className="flex justify-between flex-row mx-7">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-7 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>

            {/* section 3 */}
            <TouchableOpacity className="py-5 m-1 w-[350px] px-5 flex-row justify-between rounded bg-white" onPress={() => {
              if(showHomeLoans === "flex") {
                setShowHomeLoans('hidden')
              } else {
                setShowAuto('hidden')
                setShowCC('hidden')
                setShowHomeLoans('flex')
                setShowStudent('hidden')
              }
            }}>
                <Text className="text-themeNavyBlue">Home Loans</Text>
                <Image source={DownArrow}/>
            </TouchableOpacity>
            <View className={`${showHomeLoans} py-8 w-[346px]`}>
                <View className="flex justify-between flex-row mx-7">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-7 text-themeNavyBlue'>Reported: August 14, 2023</Text>
            </View>

            {/* section 4 */}
            <TouchableOpacity className="py-5 m-1 w-[350px] px-5 flex-row justify-between rounded bg-white" onPress={() => {
              if(showStudent === "flex") {
                setShowStudent('hidden')
              } else {
                setShowAuto('hidden')
                setShowCC('hidden')
                setShowHomeLoans('hidden')
                setShowStudent('flex')
              }
            }}>
                <Text className="text-themeNavyBlue">Student Loans</Text>
                <Image source={DownArrow}/>
            </TouchableOpacity>
            <View className={`${showStudent} py-8 w-[346px]`}>
                <View className="flex justify-between flex-row mx-7">
                    <Text className="text-themeNavyBlue">Tesla Motors Credit</Text>
                    <Text className="text-themeNavyBlue">$3,000.00</Text>    
                </View>
                <Text className='ml-7 text-themeNavyBlue'>Reported: August 14, 2023</Text>
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
