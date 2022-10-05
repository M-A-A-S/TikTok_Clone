import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPpPC_cp2J5q-DWirqCXxxxiHSHv0qP38",
    authDomain: "tik-tok-clone-d9b5b.firebaseapp.com",
    projectId: "tik-tok-clone-d9b5b",
    storageBucket: "tik-tok-clone-d9b5b.appspot.com",
    messagingSenderId: "811452154003",
    appId: "1:811452154003:web:494d258d8e34d597290d66",
    measurementId: "G-TMS5BGZ46B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };