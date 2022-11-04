import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Image, Button, Input} from '@rneui/themed';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch (error){
            alert(error.message)
        }
    }
    return (
        <KeyboardAvoidingView enabled  behavior='padding' style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                {/* <Text style={{fontWeight: 'bold', fontSize:26}}>
                    This is the Login Screen
                </Text> */}
                <Text style={styles.welcome}>
                    WHERE SOPHIA
                    {"\n"} 
                    DOES CODE
                </Text>
                <View style={styles.inputContainer}>
                    <Input 
                        style={styles.inputField}
                        placeholder="Email"
                        type="email"
                        value={email}
                        autoCorrect={false}
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize="none"
                    />
                    <Input 
                        style={styles.inputField}
                        placeholder="Password"
                        type="password"
                        secureTextEntry
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttons}
                            title="Go to Login"
                            onPress={() => loginUser(email, password)}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}
                            title="Go to SingUp"
                            onPress={() => navigation.navigate('Registration')}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 195
    },
    text: {
        textAlign: 'center',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 40,
    },
    inputContainer: {
        width: 275,
        height: 175,
        borderColor: 'black',
        // borderWidth: 2,
        paddingTop: 30,
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    buttons: {
        backgroundColor: "gold",
        height: 30,
        width: 90,
        textDecorationColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        padding: 5,
        margin: 8,
        marginTop: 0
    },
    buttonText: {
        color: 'white',
        alignContent: 'center'
    }
})