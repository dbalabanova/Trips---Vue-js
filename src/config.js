import firebase from 'firebase'
import 'firebase/firestore'


 const config= {
    apiKey: "AIzaSyAnYE27q-S8CkE-y5aL7h9RjtT12C43_74",
    authDomain: "trips-d41d1.firebaseapp.com",
    databaseURL: "https://trips-d41d1.firebaseio.com",
    projectId: "trips-d41d1",
    storageBucket: "trips-d41d1.appspot.com",
    messagingSenderId: "1007606651333",
    appId: "1:1007606651333:web:ac617da1087668eefb53ac"
  } 


 firebase.initializeApp(config);
export const firestore = firebase.firestore();
