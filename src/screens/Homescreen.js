import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Auth from './Auth';
import utils from '../../api/users/index';

const Homescreen = (props) => {
  const [user,setUser]=useState({})
  const navigation = useNavigation(null);
useEffect(()=>{

  (async function(){
    const userData = await utils.GetUser() 
    if(userData){setUser(userData)}
  })()
},[])
  return (
      <View className="bg-green-500 min-h-screen">
      <SafeAreaView>
        {
          user===null?
          <Auth/>
          :
          <View>
            <View ><Text className="text-blue-500">Your Credit Score</Text></View>
          <TouchableOpacity 
                onPress={() => navigation.navigate('LoadingScreen')}
                // Logo link to where?
            ><Text>Clickable Logo img{'\n'}</Text></TouchableOpacity> 
          <View className ="">
            <View ><Text>Equifax{'\n'}</Text></View>
            <View ><Text>Transunion{'\n'}</Text></View>
            <View ><Text>some third {'\n'}</Text></View>
          </View>  
          <Text>{'\n'}</Text>
            <View><Text>Next check in x days{'\n'}</Text></View>
          <View >
            <View><Text>Your Debt:</Text></View>
            <View><Text>Credit Utilization:</Text></View>
          </View>
        <View ><Text>Score History</Text></View>  
        <View ><Text>SCORE GRAPH</Text></View>  
        <View><Text>NAV WITH ICONS</Text></View>
        {/* Need help adding icons */}
        <View >
          <View ><Text>Payment History</Text></View>
          <View ><Text>Credit Utilization</Text></View>
          <View ><Text>Derogatory Marks</Text></View>   
        </View>
        <View >
            <TouchableOpacity 
                onPress={() => navigation.navigate('LoadingScreen')}
            ><Text>Click here for your offers and to loading pg</Text></TouchableOpacity> 
        </View>
        </View>
        }

    
      
      </SafeAreaView>
      
      </View>
   

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