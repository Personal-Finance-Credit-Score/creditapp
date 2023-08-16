import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const CreditReport = (props) => {
  const navigation = useNavigation();

  const [showAuto, setShowAuto] = useState("display: none")
  const [showCC, setShowCC] = useState("display: none")
  const [showHomeLoans, setShowHomeLoans] = useState("none")
  const [showStudent, setShowStudent] = useState("none")


  useEffect(() => {

  }, [showCC])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        {/* there should be a nav bar for this page */}

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
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Personal Information</Text>
        <View style={styles.divider}></View>
        <Text>Names Reported</Text>
        <Text style={{ color: '#00000050', paddingTop: 8, paddingBottom: 25}}>Lorem Epsum</Text>
        <Text style={{ paddingBottom: 80 }}>Employment Info</Text>
        <Text style={{ paddingBottom: 80 }}>Addresses Reported</Text>
        <Text style={{ fontWeight: 'bold', paddingBottom: 20}}>Accounts</Text>

        <View>
            {/* section 1 */}
            <TouchableOpacity 
                style={styles.debtViewer}
                onPress={()=> {
                    setShowAuto()
                }}>
                <Text style={styles.debtText}>Auto Loans</Text>
            </TouchableOpacity>
            <View style={styles.debtShow}>
                <View style={styles.textDebtShow}>
                    <Text>Tesla Motors Credit</Text>
                    <Text>$3,000.00</Text>    
                </View>
                <Text style={{marginLeft: 20}}>Reported: August 14, 2023</Text>
            </View>

            {/* section 2 */}
            <TouchableOpacity style={styles.debtViewer} onPress={() => {
                setShowAuto('display: flex')
                console.log('presseddd')
            }}>
                <Text style={styles.debtText}>Credit Cards</Text>
            </TouchableOpacity>
            <View style={styles.debtShow}>
                <View style={styles.textDebtShow}>
                    <Text>Tesla Motors Credit</Text>
                    <Text>$3,000.00</Text>    
                </View>
                <Text style={{marginLeft: 20}}>Reported: August 14, 2023</Text>
            </View>

            {/* section 3 */}
            <TouchableOpacity style={styles.debtViewer}>
                <Text style={styles.debtText}>Home Loans</Text>
            </TouchableOpacity>
            <View style={styles.debtShow}>
                <View style={styles.textDebtShow}>
                    <Text>Tesla Motors Credit</Text>
                    <Text>$3,000.00</Text>    
                </View>
                <Text style={{marginLeft: 20}}>Reported: August 14, 2023</Text>
            </View>

            {/* section 4 */}
            <TouchableOpacity style={styles.debtViewer}>
                <Text style={styles.debtText}>Student Loans</Text>
            </TouchableOpacity>
            <View style={styles.debtShow}>
                <View style={styles.textDebtShow}>
                    <Text>Tesla Motors Credit</Text>
                    <Text>$3,000.00</Text>    
                </View>
                <Text style={{marginLeft: 20}}>Reported: August 14, 2023</Text>
            </View>
            
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: 1200,
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
  },
  divider: {
    margin: 10,
    height: 1,
    width: 300,
    backgroundColor: 'black',
  },
  debtViewer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: 'white',
  }, 
  debtText: {
    textAlign: 'center',
  },
  debtShow: {
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 20,
    width: 396,
    backgroundColor: '#D9D9D9'
  },
  textDebtShow: {
    display: "flex", 
    justifyContent: 'space-between', 
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  }

});

export default CreditReport;
