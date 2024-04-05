import { getDoc, doc } from "firebase/firestore";
import { firestoreConfig } from "../database/firebaseConfig";
import { getUserUid } from "./database-service";

const attemptToFetchUserData = async () => {
  try {
    const uid = await getUserUid();

    // get data from user's firestore

    const documentRef = doc(firestoreConfig, "users", uid);

    const userData = await getDoc(documentRef);

    return userData.data();
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

export { attemptToFetchUserData };
