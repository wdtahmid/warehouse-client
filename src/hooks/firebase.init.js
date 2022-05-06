// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    //Note:: Not working with .env.local file.
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    /*     apiKey: "AIzaSyCwmM3P4RxfPudWqDluI3Dj-BSxZx_2O5k",
        authDomain: "warehouse-client-adf9b.firebaseapp.com",
        projectId: "warehouse-client-adf9b",
        storageBucket: "warehouse-client-adf9b.appspot.com",
        messagingSenderId: "28983065873",
        appId: "1:28983065873:web:fab62cf8a708961704a0b0" */

    /*   https://stackoverflow.com/questions/60909910/environment-variable-not-working-in-react-firebase-config-file/72146782#72146782 */

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;