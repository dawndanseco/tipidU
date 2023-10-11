import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // Import the Image component
import React from 'react';

const Welcome = () =>  {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>tipidU
                <Image
                    source={require('./assets/baboy.png')}
                    style={styles.imageStyle} />
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Welcome;