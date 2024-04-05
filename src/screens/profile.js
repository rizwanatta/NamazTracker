import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { removeUserUid } from "../services/database-service";
import Spinner from "react-native-loading-spinner-overlay";
import { attemptToFetchUserData } from "../services/profile-services";
import { getFormattedDateFull } from "../helpers/date";

const Profile = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // navigation effect making the header for this screen only
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setIsLoading(true);
    const user = await attemptToFetchUserData();
    setUserData(user);
    setIsLoading(false);
  };

  const onLogoutPressed = async () => {
    await removeUserUid();
    navigation.replace("Login");
  };

  return (
    <View className={"flex flex-1 bg-green-300"}>
      <View className={"h-1/3"}>
        <ImageBackground
          className={"h-full w-full justify-end items-center"}
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/03/09/06/52/flowers-8622033_1280.jpg",
          }}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
            }}
            className={"h-32 w-32 rounded-full -mb-16"}
          />
        </ImageBackground>
      </View>

      <View className={"justify-center items-center h-4/6"}>
        <Text>Name</Text>
        <Text>
          {userData.firstName} {userData.lastName}
        </Text>

        <Text>Email</Text>
        <Text>{userData.email}</Text>

        <Text>Gender</Text>
        <Text>{userData.gender}</Text>

        <Text>Age</Text>
        <Text>{getFormattedDateFull(userData.dob)}</Text>
      </View>

      <TouchableOpacity
        onPress={onLogoutPressed}
        className={
          "flex flex-row justify-center p-5 bg-red-400 rounded-md items-center mt-10 absolute bottom-8 w-4/5 self-center"
        }
      >
        <Text className={"text-lg text-white"}>Logout</Text>
      </TouchableOpacity>

      <Spinner visible={isLoading} />
    </View>
  );
};

export default Profile;
