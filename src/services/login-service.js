import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

const attemptToLogin = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

export { attemptToLogin };
