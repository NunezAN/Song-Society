// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwKP1xh8jLZfqHIDqsKtHalMfh100-wQ0",
  authDomain: "song-society.firebaseapp.com",
  projectId: "song-society",
  storageBucket: "song-society.appspot.com",
  messagingSenderId: "294018115077",
  appId: "1:294018115077:web:de42d7eab66729f74f5e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };