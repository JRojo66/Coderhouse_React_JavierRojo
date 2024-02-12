import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/assets/estilos.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlCKOG9Zvwr5CYnaQFlZirjXshD89_sm0",
  authDomain: "rojozon.firebaseapp.com",
  projectId: "rojozon",
  storageBucket: "rojozon.appspot.com",
  messagingSenderId: "408691729049",
  appId: "1:408691729049:web:ce4457b4ad4cca56ed0e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />,)

