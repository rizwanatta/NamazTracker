import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABYYJju1iB7gPacSCqa5rxTahGRyUNY9w",
  authDomain: "group9backend-aa9f4.firebaseapp.com",
  projectId: "group9backend-aa9f4",
  storageBucket: "group9backend-aa9f4.appspot.com",
  messagingSenderId: "9747721266",
  appId: "1:9747721266:web:bf6841db9eec289971602b",
  measurementId: "G-NR6YMY9VMT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreConfig = getFirestore(app);

export { auth, firestoreConfig };
