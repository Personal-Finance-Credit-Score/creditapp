import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Auth from './Auth';
import utils from '../../api/users/index';

const Homescreen = (props) => {
  const [user, setUser] = useState({})
  const navigation = useNavigation(null);
  useEffect(() => {

    (async function () {
      const userData = await utils.GetUser()
      if (userData) { setUser(userData) }
    })()
  }, [])
  return (
    <SafeAreaView className="flex-1 bg-themeLightBlue">
      <ScrollView>
        <View>
          {
            user === null ?
              <Auth />
              :
              <View>
                <View></View>
                <View>
                  <Text className="text-4xl font-bold text-themeNavyBlue mt-24 mb-3 ml-5">Your Credit Score</Text>
                </View>

                {/* container for credit bureaus */}
                <View className='flex-1 flex-row justify-around'>
                  <View>
                    <TouchableOpacity className="flex align-middle border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                      onPress={() => navigation.navigate('LoadingScreen')}>
                        <Text className="text-2xl text-center font-medium my-auto">754</Text></TouchableOpacity>
                        <Text className="text-center text-lg">Transunion</Text>
                  </View>

                  <View>
                    <TouchableOpacity className="bg-themeLightBlue border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                      onPress={() => navigation.navigate('LoadingScreen')}>
                        <Text className="text-2xl text-center font-medium my-auto">734</Text></TouchableOpacity>
                        <Text className="text-center text-lg">Equifax</Text>
                  </View>

                  <View>
                    <TouchableOpacity className=" border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                      onPress={() => navigation.navigate('LoadingScreen')}>
                        <Text className="text-2xl text-center font-medium my-auto">782</Text></TouchableOpacity>
                      <Text className="text-center text-lg">Experian</Text>
                  </View>
                  <View className="bg-themeLightBlue">
                  </View>
                </View>
                <Text></Text>
                <View className="">
                  <Text className="text-xl text-center my-auto mt-1 mb-3">Next check tomorrow</Text></View>
                
                <View className="rounded-t-xl ml-5 mr-5 flex-row justify-between bg-themeGreen h-8">
                  <View><Text className="text-xl ml-2 p-2 ">Total Debt: </Text></View>
                  <View><Text className="text-xl mr-2 p-2">Credit Usage: </Text></View>
                </View>

                <View className="rounded-b-xl ml-5 mr-5 flex-row bg-themeGreen justify-between p-4">  
                  <View><Text className="text-xl p-2 font-bold">$5,000 </Text></View>
                  <View><Text className="text-xl p-2 font-bold">21% </Text></View>
                </View>
                <View>
                  <Text className="text-themeNavyBlue text-3xl font-bold ml-5 mt-3">Score History</Text>
                </View>

                <View className="rounded-xl h-1/4 border-2 border-solid flex-row p-3 justify-around ml-5 mr-5 items-center bg-themeWhite"><Text>graph img</Text></View>
                <View><Text></Text></View>
                <View>
                  <Text className="text-themeNavyBlue text-3xl ml-5 mt-3 mb-2">Credit Factors</Text>
                </View>
                <View >
                  <View className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"><Text className="text-themeWhite">Payment History</Text>
                  <Text className="text-themeWhite">98%</Text></View>
                  <View className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"><Text className="text-themeWhite">Credit Card Use</Text>
                  <Text className="text-themeWhite">20%</Text></View>
                  </View>
                <View className="flex-1 justify-center bg-themeLightBlue"> 
                  <View className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"><Text className="text-themeWhite">Derogatory Marks</Text>
                  <Text className="text-themeWhite">0%</Text></View>
                  <View className="rounded-xl flex-1 flex-col p-3 justify-around ml-5 mr-5 mb-2 items-center w-1/3 bg-themeWhite"><Text className="text-themeGreen">Credit Age</Text>
                  <Text className="text-themeGreen">5 yrs, 4 mos</Text></View>
                  <View className="rounded-xl flex-1 flex-col p-3 justify-around ml-5 mr-5 mb-2 items-center w-1/3 bg-themeWhite"><Text className="text-themeGreen">Total Accounts</Text>
                  <Text className="text-themeGreen">5</Text></View>
                </View> 
                <View >
                  <TouchableOpacity className="bg-themeNavyBlue rounded-xl justify-around align-center h-12 mr-12 ml-10 mt-3"
                    onPress={() => navigation.navigate('LoadingScreen')}
                  ><Text className="text-themeWhite text-center">View Full Credit Report</Text></TouchableOpacity>
                </View>
              </View>
          }



        </View>
      </ScrollView>
    </SafeAreaView>



  );
};

// const styles = StyleSheet.create({
//   safeareaview: {
//     width: "100vw",
//     height: '100%',
//     backgroundColor: '#64B4A1',
//     paddingTop: "100%"
//   },
//   mainview: {
//     flex: 1,
//     width: "100vw",
//     height: '50%',
//     backgroundColor: 'FFFFFF',
//     fontSize: '40px',
//   },
//   container: {
//     display: 'flex',
//     width: "100vw",
//     height: '100vh',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: '50px',
//   },
//   textStyle: {
//     backgroundColor: 'red',
//     color: 'red',
//     backgroundColor: '#fff',
//   },
//   heading: {
//     padding: 10,
//     width: '100%',
//     height: 60,
//     alignItems: 'center',
//     alignSelf: 'center',
//     fontSize: 50,
//     backgroundColor: '#323778',
//   },
//   carousel: { //cycle through reports?
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   report: { //Individual credit reports - (Transunion, etc)
//     display: 'flex',
//     borderWidth: 2,
//     borderRadius: 25,
//     padding: 20,
//     margin: 15,
//     backgroundColor: '#CCCCCC',
//   },
//   row: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#B8B8B8',
//     height: 40,
//   },
//   history: {
//     padding: 10,
//   },
//   historyGraph: {
//     height: 200,
//     backgroundColor: '#B8B8B8'
//   },

// });

export default Homescreen;