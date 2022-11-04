import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Image, Button, Input } from '@rneui/themed';
import { useNavigation  } from '@react-navigation/native';
import { firebase } from "../config";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigation = useNavigation();

    const registerUser = async (email, password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'https://emailauth-login-register.firebaseapp.com',
          })
          .then(() => {
            alert('Verification Email Sent')
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
              firstName,
              lastName,
              email,
            })
          })
          .catch((error) => {
            alert(error.message)
          })  
        })
        .catch((error) => {
          alert(error.message)
        })
      }


    return (
        <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <Text>Register</Text>
                <View style={styles.inputContainer}>
                    <Input  
                        style={styles.inputField}
                        placeholder="First Name"
                        type="firstName"
                        value={firstName}
                        autoCorrect={false}
                        onChangeText={(firstName) => setFirstName(firstName)}
                    />
                    <Input  
                        style={styles.inputField}
                        placeholder="Last Name"
                        type="lastName"
                        value={lastName}
                        autoCorrect={false}
                        onChangeText={(lastName) => setLastName(lastName)}
                    />
                    <Input  
                        style={styles.inputField}
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={email}
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <Input  
                        style={styles.inputField}
                        placeholder="Password"
                        type="password"
                        secureTextEntry
                        value={password}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(password) => setPassword(password)}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttons}
                            title="SignUp"
                            onPress={() => registerUser(email, password, firstName, lastName)}
                        >
                            <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    inputContainer: {
        width: 275,
        height: 300,
        borderColor: 'black',
        // borderWidth: 2,
        paddingTop: 10,
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        backgroundColor: "skyblue",
        height: 30,
        width: 100, 
        textDecorationColor: 'white',
        marginTop: -10,
        padding: 5,
        borderRadius:  20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        alignContent: 'center'
    }
})