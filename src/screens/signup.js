import React, { useState } from "react";

import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Signup = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dobValue, setDobValue] = useState("");

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

  return (
    <View className={"flex flex-1 "}>
      <View className={"flex-1 items-center justify-end"}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            className={"h-24 w-24 rounded-full"}
          />
        </TouchableOpacity>
      </View>

      <View className={"flex-auto  px-5 "}>
        <TextInput placeholder="First Name" className={inputStyle} />
        <TextInput placeholder="Last Name" className={inputStyle} />
        <TextInput placeholder="Email" className={inputStyle} />
        <TextInput placeholder="Password" className={inputStyle} />
        <TextInput placeholder="Confirm Password" className={inputStyle} />

        <Pressable className={inputStyle} onPress={showDatePicker}>
          <Text>{dobValue === "" ? "DOB" : dobValue}</Text>
        </Pressable>

        <TextInput placeholder="Gender" className={inputStyle} />
      </View>

      <View className={"flex-none p-5"}>
        <TouchableOpacity className={"p-5 bg-red-300 rounded-md items-center"}>
          <Text className={"text-lg text-orange-800"}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Signup;
