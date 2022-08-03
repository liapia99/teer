// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjuu_6QW9Onfx4MjpqcNgJAqhUSCdnP34",
  authDomain: "t-volunteer-project.firebaseapp.com",
  projectId: "t-volunteer-project",
  storageBucket: "t-volunteer-project.appspot.com",
  messagingSenderId: "344805009985",
  appId: "1:344805009985:web:b8cb8ce187381e80c674c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
