// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ2AcIx59muNuBunSK2Cfg11Lle--T6sU",
  authDomain: "travel-ai-b8709.firebaseapp.com",
  projectId: "travel-ai-b8709",
  storageBucket: "travel-ai-b8709.appspot.com",
  messagingSenderId: "426212366422",
  appId: "1:426212366422:web:4f74b7086bcc14bc4f83f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
