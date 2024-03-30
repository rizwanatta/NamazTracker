import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, firestoreConfig } from "../database/firebaseConfig";

async function attemptToSignup(email, password) {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    let message = "";
    if (error.message.includes("email-already-in-use")) {
      message = "yara ap na ya email already use kra h";
    }
    alert(message);
  }
}

async function attemptToSendUsersData(firstName, lastName, dob, gender, email) {
  try {
    const collectionRef = collection(firestoreConfig, "users");

    const data = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      email: email,
    };

    const response = await addDoc(collectionRef, data);
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export { attemptToSignup, attemptToSendUsersData };
