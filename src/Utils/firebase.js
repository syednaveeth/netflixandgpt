// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCica8p5SImILURlxpesXa7axQkg7GYL9E",
  authDomain: "netflixandgpt-5d0aa.firebaseapp.com",
  projectId: "netflixandgpt-5d0aa",
  storageBucket: "netflixandgpt-5d0aa.appspot.com", // ✅ must end with .appspot.com
  messagingSenderId: "590243708906",
  appId: "1:590243708906:web:2f5fddfbf05ba0df9fbc93",
  measurementId: "G-BY57HSKP4Y",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
