// firebase config key setup

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZGvVOPyrEadyMinpocZJKJQlQ4RuNJqQ",
    authDomain: "react-native-email-auth.firebaseapp.com",
    projectId: "react-native-email-auth",
    storageBucket: "react-native-email-auth.appspot.com",
    messagingSenderId: "727757775240",
    appId: "1:727757775240:web:02db8fa1a8a7ab93b75a3d"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };