// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUOKY320siaAjMzp3a7NVNYxquRzYHHY",
  authDomain: "dragon-news-15da1.firebaseapp.com",
  projectId: "dragon-news-15da1",
  storageBucket: "dragon-news-15da1.firebasestorage.app",
  messagingSenderId: "36357238468",
  appId: "1:36357238468:web:c7fc11328633be41f5e391"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);