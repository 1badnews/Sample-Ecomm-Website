
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAmJGh0Ub6WlRMo3hoBzAoHQYcHBbAYdVQ",
  authDomain: "sample-ecomm-website1.firebaseapp.com",
  projectId: "sample-ecomm-website1",
  storageBucket: "sample-ecomm-website1.appspot.com",
  messagingSenderId: "460749979028",
  appId: "1:460749979028:web:b717adc30fb8f518a4e381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);