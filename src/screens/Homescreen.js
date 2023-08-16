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
      <View>
      <SafeAreaView style={styles.safeareaview}>
        {
          user===null?
          <Auth/>
          :
          <View>
            <Text>Your Credit Score</Text>
          <View><Text>Credit Scords From Different Locations</Text></View>
          <View><Text>Graph</Text></View>
      
        <View style={styles.mainview}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Nextscreen')}
            ><Text>Click here to go to Credit Cards</Text></TouchableOpacity> 
        </View>
          </View>
        }

    {/* <Text style={styles.textStyle}>Homescreen yay!</Text> */}
    
      
      </SafeAreaView>
      
      </View>
   

  );
};

const styles = StyleSheet.create({
  safeareaview: {
    width: "100vw",
    height: '100%',
    backgroundColor: '#64B4A1',
    paddingTop: "100%"
  },
  mainview: {
    flex: 1,
    width: "100vw",
    height: '50%',
    backgroundColor: 'FFFFFF',
  },
  container: {
    display: 'flex',
    width: "100vw",
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px',
    backgroundColor: 'blue'

  },
  textStyle: {
    backgroundColor: 'red',
    color: 'red',
    backgroundColor: '#fff',
  },
});

export default Homescreen;