import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.cardContainer}> 

    <View style={styles.titles}>
    <Text style={styles.title} >Model S</Text> 
    <Text style={styles.subtitle}>Starting at $83,190</Text>

    </View>



   </View>

 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    height: '100%',

  },

  titles:{
    marginTop:'30%',
    width:'100%',
    alignItems: 'center',

  },
  title:{

  },
  subtitle:{

  },
})