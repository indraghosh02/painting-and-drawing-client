// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV8UsLas1PlyM-gLLI6-AiPyE2idBS3TQ",
  authDomain: "painting-and-drawing-5bbe7.firebaseapp.com",
  projectId: "painting-and-drawing-5bbe7",
  storageBucket: "painting-and-drawing-5bbe7.appspot.com",
  messagingSenderId: "652714286945",
  appId: "1:652714286945:web:f3c3b0c7b2001a31a76f20"




  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;