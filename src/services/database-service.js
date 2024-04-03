import * as SecureStore from "expo-secure-store";

const setUserUid = async (uid) => {
  try {
    const result = await SecureStore.setItemAsync("userUniqueId", uid);
    return result;
  } catch (error) {
    alert(error.message);
  }
};

const getUserUid = async () => {
  try {
    const result = await SecureStore.getItemAsync("userUniqueId");
    return result;
  } catch (error) {
    alert(error.message);
  }
};

const removeUserUid = async () => {
  try {
    const result = await SecureStore.setItemAsync("userUniqueId", "");
    return result;
  } catch (error) {
    alert(error.message);
  }
};

export { setUserUid, getUserUid, removeUserUid };
