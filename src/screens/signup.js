import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Signup = () => {
  const inputStyle = "border-b-2 border-b-red-300 p-2 rounded-md my-2";

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
        <TextInput placeholder="DOB" className={inputStyle} />
        <TextInput placeholder="Gender" className={inputStyle} />
      </View>

      <View className={"flex-none p-5"}>
        <TouchableOpacity className={"p-5 bg-red-300 rounded-md items-center"}>
          <Text className={"text-lg text-orange-800"}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
