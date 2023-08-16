import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const CreditReport = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* container for the page */}
      <View style={styles.container}>

        <Text style={styles.loremEpsum}>Lorem Epsum</Text>
        <Text style={styles.creditNum}>754</Text>
        <Text>Calculated using VantageScore 3.9</Text>
        <Text>Provided by TransUnion</Text>

        <Text style={styles.dateText}>Choose a date</Text>
        
        {/* will replace with maybe drop down picker 
        https://www.npmjs.com/package/@react-native-picker/picker */}
        <View style={styles.dropDown}><Text>This is placeholder for now</Text></View>
        <Text>Personal Information</Text>
        <View></View>




      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#64B4A1',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 110,
  },
  creditNum: {
    fontSize: 50,
  },
  loremEpsum: {
    fontSize: 20,
  },
  dropDown: {
    marginTop: 5,
    marginBottom: 15,
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#323778',
  },
  dateText: {
    marginTop: 20,
  }

});

export default CreditReport;
