import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { getUserUid } from "../services/database-service";

const Splash = ({ navigation }) => {
  //#TODO get userUID and based on that run app's flow

  // asa effect jo empty bracket k sath h wo one time on screen load chalta h!
  useEffect(() => {
    handleUserIdFLow();
  }, []);

  const handleUserIdFLow = async () => {
    const id = await getUserUid();

    setTimeout(() => {
      if (id === "" || id === null) {
        navigation.replace("Login");
      } else {
        navigation.replace("Home");
      }
    }, 3000);
  };

  return (
    <View className={"flex flex-1 bg-red-200 justify-center items-center"}>
      <Image
        source={require("../../assets/icon.png")}
        className={"h-24 w-24 rounded-full"}
      />
    </View>
  );
};

export default Splash;
