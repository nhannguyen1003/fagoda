// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOkGxZUHX-cyrR9CVvkjgpVeLedqpFw-s",
  authDomain: "fagoda-hcmut.firebaseapp.com",
  projectId: "fagoda-hcmut",
  storageBucket: "fagoda-hcmut.appspot.com",
  messagingSenderId: "466469687502",
  appId: "1:466469687502:web:415f950e86fe063327009f",
  measurementId: "G-QE2Q8DY7NE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);