// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChgelMCVaW6UH3uOZtkv-yjZdrKcI_2uU",
  authDomain: "ionic-t-estrada-app.firebaseapp.com",
  projectId: "ionic-t-estrada-app",
  storageBucket: "ionic-t-estrada-app.appspot.com",
  messagingSenderId: "372237389535",
  appId: "1:372237389535:web:42e835b1de67a5f1d1a36a",
  measurementId: "G-8SQJ9ZGKX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(); // Initialize Firestore

export { db }; // Export Firestore instance for use in other modules