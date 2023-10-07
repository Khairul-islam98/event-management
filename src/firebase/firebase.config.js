// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWCfh0VokJOsRB55aQSYkcP_vPV1vWrw",
  authDomain: "event-management-auth-2ff1b.firebaseapp.com",
  projectId: "event-management-auth-2ff1b",
  storageBucket: "event-management-auth-2ff1b.appspot.com",
  messagingSenderId: "657383543605",
  appId: "1:657383543605:web:4b7dcb1700e7e4d981327c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;