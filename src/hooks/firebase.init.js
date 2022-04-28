// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwmM3P4RxfPudWqDluI3Dj-BSxZx_2O5k",
    authDomain: "warehouse-client-adf9b.firebaseapp.com",
    projectId: "warehouse-client-adf9b",
    storageBucket: "warehouse-client-adf9b.appspot.com",
    messagingSenderId: "28983065873",
    appId: "1:28983065873:web:fab62cf8a708961704a0b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;