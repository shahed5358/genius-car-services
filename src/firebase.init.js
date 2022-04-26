// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHKS1OwS2lTL-mNh2YksV2Ut_qqUt-p8E",
  authDomain: "genius-car-services-7313f.firebaseapp.com",
  projectId: "genius-car-services-7313f",
  storageBucket: "genius-car-services-7313f.appspot.com",
  messagingSenderId: "30953303336",
  appId: "1:30953303336:web:80d3c4f7101f25ab28741d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;