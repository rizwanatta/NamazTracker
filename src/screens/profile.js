import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { removeUserUid } from "../services/database-service";

const Profile = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  const onLogoutPressed = async () => {
    await removeUserUid();
    navigation.replace("Login");
  };

  return (
    <View>
      <Text>Profile</Text>

      <TouchableOpacity
        onPress={onLogoutPressed}
        className={
          "flex flex-row justify-center p-5 bg-red-400 rounded-md items-center mt-10"
        }
      >
        <Text className={"text-lg text-white"}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
