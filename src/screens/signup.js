import React, { useState } from "react";

import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";

import {
  CameraType,
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestCameraPermissionsAsync,
} from "expo-image-picker";

import { getFormattedDateFull } from "../helpers/date";

import {
  attemptToSendUsersData,
  attemptToSignup,
  attemptToUploadImage,
} from "../services/signup-service";

const Signup = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dobValue, setDobValue] = useState("");
  const [gender, setGender] = useState("Female");
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const inputStyle = "border-b-2 border-b-red-300 p-2 rounded-md my-2";

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDobValue(date.toString());
    hideDatePicker();
  };
  const onFemalePressed = () => {
    setGender("Female");
  };

  const onMalePressed = () => {
    setGender("Male");
  };

  const onSignupPressed = async () => {
    setIsLoading(true);

    let response = await attemptToUploadImage(profileImage);

    //let response = await attemptToSignup(email, password);
    //await attemptToSendUsersData(firstName, lastName, dobValue, gender, email);
    setIsLoading(false);
  };

  const onProfilePicPressed = async () => {
    try {
      const result = await launchCameraAsync({
        cameraType: CameraType.front,
      });
      if (result.canceled === false) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      alert(error.message);
      if (error.message.includes("permission")) {
        requestCameraPermissionsAsync();
      }
    }
  };

  return (
    <View className={"flex flex-1 "}>
      <View className={"flex-1 items-center justify-end"}>
        <TouchableOpacity onPress={onProfilePicPressed}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              className={"h-24 w-24 rounded-full"}
            />
          ) : (
            <Image
              source={require("../../assets/icon.png")}
              className={"h-24 w-24 rounded-full"}
            />
          )}
        </TouchableOpacity>
      </View>

      <View className={"flex-auto  px-5 "}>
        <TextInput
          placeholder="First Name"
          onChangeText={setFirstName}
          className={inputStyle}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={setLastName}
          className={inputStyle}
        />
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
        <TextInput placeholder="Confirm Password" className={inputStyle} />

        <Pressable className={inputStyle} onPress={showDatePicker}>
          <Text>
            {dobValue === "" ? "DOB" : getFormattedDateFull(dobValue)}
          </Text>
        </Pressable>

        <View className={"flex flex-row justify-between p-4"}>
          <Text>Gender: </Text>

          <TouchableOpacity
            onPress={onMalePressed}
            className={"flex flex-row items-center"}
          >
            <Ionicons
              name={gender === "Male" ? "radio-button-on" : "radio-button-off"}
              size={25}
              color={"blue"}
            />
            <Text>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onFemalePressed}
            className={"flex flex-row items-center"}
          >
            <Ionicons
              name={
                gender === "Female" ? "radio-button-on" : "radio-button-off"
              }
              size={25}
              color={"pink"}
            />
            <Text>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className={"flex-none p-5"}>
        <TouchableOpacity
          onPress={onSignupPressed}
          className={
            "flex flex-row justify-center p-5 bg-red-300 rounded-md items-center"
          }
        >
          {isLoading === true ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : null}

          <Text className={"text-lg text-orange-800"}>
            {isLoading === true ? "Wait" : "Sign up"}
          </Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date("1990")}
      />
    </View>
  );
};

export default Signup;
