import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import {
  auth,
  firestoreConfig,
  storageConfig,
} from "../database/firebaseConfig";
import { imgToBlob, randomNameGenerator } from "../utils/help";

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

async function attemptToUploadImage(profileImage) {
  try {
    const imgRandomName = randomNameGenerator();

    const storageRef = ref(storageConfig, `profile_pics/${imgRandomName}`);

    const blob = await imgToBlob(profileImage);

    let response = await uploadBytes(storageRef, blob);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export { attemptToSignup, attemptToSendUsersData, attemptToUploadImage };
