import { View, Image } from "react-native";
import React from "react";

const Splash = () => {
  //#TODO get userUID and based on that run app's flow
  // if user uid is there go to home else go to login

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
