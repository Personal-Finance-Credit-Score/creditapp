import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const Homescreen = (props) => {

  const navigation = useNavigation();

  return (
      <View>
      <SafeAreaView style={styles.safeareaview}>
          <View style={styles.heading}><Text>Your Credit Score</Text></View>
          <TouchableOpacity 
                onPress={() => navigation.navigate('LoadingScreen')}
                // Logo link to where?
            ><Text>Clickable Logo img{'\n'}</Text></TouchableOpacity> 
          <View style={styles.carousel}>
            <View style={styles.report}><Text>Equifax{'\n'}</Text></View>
            <View style={styles.report}><Text>Transunion{'\n'}</Text></View>
            <View style={styles.report}><Text>some third {'\n'}</Text></View>
          </View>  
          <Text>{'\n'}</Text>
            <View><Text>Next check in x days{'\n'}</Text></View>
          <View style={styles.row}>
            <View><Text>Your Debt:</Text></View>
            <View><Text>Credit Utilization:</Text></View>
          </View>
        <View style={styles.history}><Text>Score History</Text></View>  
        <View style={styles.historyGraph}><Text>SCORE GRAPH</Text></View>  

        <View style={styles.mainview}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('LoadingScreen')}
            ><Text>Click here for your offers and to loading pg</Text></TouchableOpacity> 
        </View>

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
    fontSize: '40px',
  },
  container: {
    display: 'flex',
    width: "100vw",
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px',
  },
  textStyle: {
    backgroundColor: 'red',
    color: 'red',
    backgroundColor: '#fff',
  },
  heading: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  carousel: { //cycle through reports?
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  report: { //Individual credit reports - (Transunion, etc)
    display: 'flex',
    borderWidth: 2,
    borderRadius: 25,
    padding: 20,
    margin: 15,
    backgroundColor: '#CCCCCC',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#B8B8B8',
    height: 40,
    borderWidth: 4,
    borderColor: '#323778',
  },
  history: {
    padding: 10,
  },
  historyGraph: {
    borderWidth: 5,
    height: 200,
  },

});


export default Homescreen;