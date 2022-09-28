// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnEz2RnoyX6YTF2SxmoB89BreFtqVy1Lo",
  authDomain: "crude-app-note.firebaseapp.com",
  projectId: "crude-app-note",
  storageBucket: "crude-app-note.appspot.com",
  messagingSenderId: "532382537815",
  appId: "1:532382537815:web:9d053d3b5b397e79c6eb12"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from '../firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnEz2RnoyX6YTF2SxmoB89BreFtqVy1Lo",
  authDomain: "crude-app-note.firebaseapp.com",
  projectId: "crude-app-note",
  storageBucket: "crude-app-note.appspot.com",
  messagingSenderId: "532382537815",
  appId: "1:532382537815:web:9d053d3b5b397e79c6eb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firestore(app);