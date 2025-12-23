// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBFObaNdHuPDVM3eo-1qtJ0ENQ3vf1oOc",
  authDomain: "finceponlinetuitions.firebaseapp.com",
  projectId: "finceponlinetuitions",
  storageBucket: "finceponlinetuitions.firebasestorage.app",
  messagingSenderId: "562071475466",
  appId: "1:562071475466:web:1823cb7c22b64729dd16f3",
  measurementId: "G-D8S53TJCZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
