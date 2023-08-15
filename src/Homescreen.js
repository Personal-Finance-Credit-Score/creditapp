import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const Homescreen = (props) => {

  const navigation = useNavigation();

  return (
      <View>
      <SafeAreaView style={styles.safeareaview}>
          <Text>safeareaview</Text>
      
        <View style={styles.mainview}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Nextscreen')}
            ><Text>Click here to go to Credit Cards</Text></TouchableOpacity> 
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
    backgroundColor: 'red',
    paddingTop: "100%"
  },
  mainview: {
    flex: 1,
    width: "100vw",
    height: '50%',
    backgroundColor: 'green',
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