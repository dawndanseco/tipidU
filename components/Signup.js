import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.signupStyle}>Sign up!</Text>
            <View style={styles.signUpContainer}>
            />
                <View style={signUpContainer}> </View>
                <TextInput
                    style={styles.inputField}
                    placeholder="Full Name"
                    value={fullname}
                    onChangeText={text => setFullName(text)}
                />
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
                <TextInput
                    style={styles.inputField}
                    placeholder="Re-type Password"
                    secureTextEntry={true}
                    value={repassword}
                    onChangeText={text => setRePassword(text)}
                />
                <Text> By signing up you accept the <Text style={styles.signupLink}> Terms of Service </Text> 
                    and <Text style={styles.signupLink}> Privacy Policy</Text>. </Text>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'darkblue' : '#3B4B69',
                        },
                        styles.loginButton,
                    ]}
                    onPress={() => {
                    }}
                >
                    {({ pressed }) => (
                        <Text style={styles.loginButtonText}>
                            {pressed ? 'Signing Up...' : 'Sign Up'}
                        </Text>
                    )}
                </Pressable>
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Already have an account? <Text style={styles.signupLink}>Log in</Text>
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
    signupStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    signUpContainer: {
        backgroundColor: '#B3D2DD',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
        width: '80%',
    },
    loginLabel: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    inputField: {
        height: 40,
        borderColor: '#F4F6F1',
        backgroundColor: '#F4F6F1',
        borderWidth: 1,
        borderRadius: 13,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginButton: {
        padding: 15,
        borderRadius: 13,
        alignItems: 'center',
        backgroundColor: '#3B4B69',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signupContainer: {
        marginTop: 20,
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
