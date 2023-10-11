import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; 
import React from 'react';

export default function App() {
  return (
    /* WELCOME PAGE of tipidU */

    <View style={styles.container}>
      <Text style={styles.textStyle}>tipidU
      <Image
        source={require('./assets/baboy.png')}
        style={styles.imageStyle}/>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#3B4B69',
    fontSize: 60,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  }
});
