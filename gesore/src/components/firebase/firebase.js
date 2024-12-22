import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUrL3FpaCGdaGE2ngs1Ka_oXuVmTWsuxE",
  authDomain: "gesore-be24f.firebaseapp.com",
  projectId: "gesore-be24f",
  storageBucket: "gesore-be24f.firebasestorage.app",
  messagingSenderId: "383459407592",
  appId: "1:383459407592:web:05755c7a78ef22e94c7b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };