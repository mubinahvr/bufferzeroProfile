// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
    apiKey: "AIzaSyAPJHCX8a46dBGwG4tGKVkqVK66QnxVKOk",
    authDomain: "testauth-48e9b.firebaseapp.com",
    projectId: "testauth-48e9b",
    storageBucket: "testauth-48e9b.appspot.com",
    messagingSenderId: "117792629364",
    appId: "1:117792629364:web:4e73c76e8b3072a338e721"
});

// Initialize Firebase
export const auth = getAuth(app);

export default app;
