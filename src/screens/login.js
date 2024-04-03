import React, { useState } from "react";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { attemptToLogin } from "../services/login-service";
import { getUserUid, setUserUid } from "../services/database-service";

const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputStyle = "border-b-2 border-b-red-300 p-2 rounded-md my-2";

  const onLoginPressed = async () => {
    setIsLoading(true);

    const response = await attemptToLogin(email, password);

    await setUserUid(response.user.uid);

    console.log(response.user.uid);

    setIsLoading(false);
    navigation.replace("Home");
  };

  return (
    <View className={"flex flex-1 "}>
      <View className={"flex-auto  px-5 justify-center "}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          className={inputStyle}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          className={inputStyle}
        />

        <TouchableOpacity
          onPress={onLoginPressed}
          className={
            "flex flex-row justify-center p-5 bg-red-300 rounded-md items-center mt-10"
          }
        >
          {isLoading === true ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : null}

          <Text className={"text-lg text-orange-800"}>
            {isLoading === true ? "Wait" : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
