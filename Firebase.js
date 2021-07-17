import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-q4HwV2kxOEsfcMRhHcmWXNdGqZjhe0A",
    authDomain: "react-tataproject.firebaseapp.com",
    projectId: "react-tataproject",
    storageBucket: "react-tataproject.appspot.com",
    messagingSenderId: "17026354083",
    appId: "1:17026354083:web:eea474319a62983ac06816"
});

var db = firebaseApp.firestore();

export { db };