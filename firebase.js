// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkDLqngjqs4nNP3QJ6sZI2oAx_ODCqL1A",
  authDomain: "crud-firebase-expo-2c3c2.firebaseapp.com",
  databaseURL: "https://crud-firebase-expo-2c3c2-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-expo-2c3c2",
  storageBucket: "crud-firebase-expo-2c3c2.appspot.com",
  messagingSenderId: "634083601656",
  appId: "1:634083601656:web:be94e75fcd080839331f0d",
  measurementId: "G-7VK6BMYRZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
Luiz Fernando -  uma lenda enjaulada.
