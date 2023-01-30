// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASd4IHR9PYQH2V7dCYjWic40vXDG4_Ywc",
  authDomain: "react-app-template-eca86.firebaseapp.com",
  projectId: "react-app-template-eca86",
  storageBucket: "react-app-template-eca86.appspot.com",
  messagingSenderId: "530191019947",
  appId: "1:530191019947:web:c6c201f3d2d97e86d12cee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
