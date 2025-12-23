// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6gaEIKoeZmSRwVVJOrkQtk7SW_iiqz04",
  authDomain: "secondary-school-center.firebaseapp.com",
  projectId: "secondary-school-center",
  storageBucket: "secondary-school-center.firebasestorage.app",
  messagingSenderId: "156434969933",
  appId: "1:156434969933:web:796b926798647d1ada3304",
  measurementId: "G-G70CP4W5F8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
