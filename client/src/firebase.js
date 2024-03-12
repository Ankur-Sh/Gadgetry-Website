// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvOHhfTBulm56JiUSIVJ_MYWAixIMDOH8",
    authDomain: "gadgetry.firebaseapp.com",
    projectId: "gadgetry",
    storageBucket: "gadgetry.appspot.com",
    messagingSenderId: "377269523293",
    appId: "1:377269523293:web:a4263e6bcabb17c41f0eb4",
    measurementId: "G-1EVFT40GK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialise Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
