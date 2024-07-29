// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5cd85.firebaseapp.com",
  projectId: "mern-blog-5cd85",
  storageBucket: "mern-blog-5cd85.appspot.com",
  messagingSenderId: "293923420941",
  appId: "1:293923420941:web:578293ff98f09e7102ce44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
