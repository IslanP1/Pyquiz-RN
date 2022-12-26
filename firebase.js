// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"


//import { Firestore } from "react-native-firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrtm1G-0RJei60IrabYdCmn_EXpu0cis",
  authDomain: "estagio-a09dc.firebaseapp.com",
  databaseURL: "https://estagio-a09dc-default-rtdb.firebaseio.com",
  projectId: "estagio-a09dc",
  storageBucket: "estagio-a09dc.appspot.com",
  messagingSenderId: "62384010815",
  appId: "1:62384010815:web:2906b2577d467e2d96ea8a",
  measurementId: "G-HLGWECQ3FJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
//export const colecao = firestore(app)

//Islan
//Gustavo
//Luiz Fernando - uma lenda enjaulada.
