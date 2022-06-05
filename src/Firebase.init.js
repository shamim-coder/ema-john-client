// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbF_EkTIpa58mlocNNn_EbZeYdpjlov0o",
    authDomain: "ema-john-shamim.firebaseapp.com",
    projectId: "ema-john-shamim",
    storageBucket: "ema-john-shamim.appspot.com",
    messagingSenderId: "240287686819",
    appId: "1:240287686819:web:9b856a1c76641c03961f16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
