// firebase config key setup

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChfNvGWw-E57VcWEGocH6AN4XXzsKqC5M",
    authDomain: "emailauth-login-register.firebaseapp.com",
    projectId: "emailauth-login-register",
    storageBucket: "emailauth-login-register.appspot.com",
    messagingSenderId: "101216646746",
    appId: "1:101216646746:web:1c901ec8992b7455358a63"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };