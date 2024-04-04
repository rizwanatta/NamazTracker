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
    <View className={"flex flex-1 bg-green-300"}>
      <Text>Profile</Text>

      <TouchableOpacity
        onPress={onLogoutPressed}
        className={
          "flex flex-row justify-center p-5 bg-red-400 rounded-md items-center mt-10 absolute bottom-8 w-4/5 self-center"
        }
      >
        <Text className={"text-lg text-white"}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
