import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0hcJ8wJh-171tA_XDl-xnwEk3iOB_gZw",
    authDomain: "work-mango-3ff8a.firebaseapp.com",
    databaseURL: "https://work-mango-3ff8a-default-rtdb.firebaseio.com",
    projectId: "work-mango-3ff8a",
    storageBucket: "work-mango-3ff8a.firebasestorage.app",
    messagingSenderId: "1069601834918",
    appId: "1:1069601834918:web:245d3a0b77101b3bf1b167",
    measurementId: "G-5TTQRGJWHM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider }