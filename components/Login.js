import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'; // Use Pressable instead of TouchableOpacity
import React, { useState } from 'react';

export default function App() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeStyle}>Welcome!</Text>
            <Text style={styles.textStyle}>
                tipidU
                <Image
                    source={require('../assets/Logo.png')}
                    style={styles.imageStyle}
                />
            </Text>
            <View style={styles.loginContainer}>
                <Text style={styles.loginLabel}>Login to your account</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'darkblue' : '#3B4B69', // Change the background color when pressed
                        },
                        styles.loginButton,
                    ]}
                    onPress={() => {
                    }}
                >
                    {({ pressed }) => (
                        <Text style={styles.loginButtonText}>
                            {pressed ? 'Logging In...' : 'Log In'}
                        </Text>
                    )}
                </Pressable>
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
                </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F1',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    welcomeStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
        marginLeft: 10,
    },
    loginContainer: {
        backgroundColor: '#B3D2DD',
        padding: 30,
        borderRadius: 10,
        marginTop: 200,
        alignContent: 'center',
    },
    loginLabel: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    inputField: {
        height: 40,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginButton: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signupContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupLink: {
        color: '#3B4B69',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});
