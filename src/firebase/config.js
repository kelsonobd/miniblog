// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoXg4rpCiPEmL0qhDeUybXOAbdKN_SH9Q",
  authDomain: "miniblog-8470d.firebaseapp.com",
  projectId: "miniblog-8470d",
  storageBucket: "miniblog-8470d.appspot.com",
  messagingSenderId: "348412898047",
  appId: "1:348412898047:web:1ebf1de9d140bc944e7aca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db} ;