// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKdTSJKzq1ORuEfxiGal8VGfwA2YVqCK8",
  authDomain: "netflix-gpt-1aa79.firebaseapp.com",
  projectId: "netflix-gpt-1aa79",
  storageBucket: "netflix-gpt-1aa79.appspot.com",
  messagingSenderId: "457598322631",
  appId: "1:457598322631:web:662ec355f2aa777315bbe2",
  measurementId: "G-00C2FKP5RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();