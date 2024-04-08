import { TouchableOpacity, Text, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios";

export default function FetchPractice() {
  const [users, setUsers] = useState([]);

  const tryToFetchData = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const parsedReponse = response.json();
      console.log(parsedReponse);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  const tryToFetchDataWithAXIOS = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");

      console.log(response.data);

      setUsers(response.data);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  const __renderItem = ({ item }) => (
    <View className={"p-2 my-2 bg-orange-200 mx-4 flex flex-row"}>
      <Image
        source={{ uri: item.avatar_url }}
        className={"h-32 w-32 rounded-full"}
      />
      <Text>{item.login}</Text>
    </View>
  );

  return (
    <View className={"flex flex-1"}>
      <TouchableOpacity
        onPress={tryToFetchData}
        className={
          "flex flex-row justify-center p-5 bg-red-400 rounded-md items-center mt-10  w-4/5 self-center"
        }
      >
        <Text className={"text-lg text-white uppercase"}>Fetch Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={tryToFetchDataWithAXIOS}
        className={
          "flex flex-row justify-center p-5 bg-red-400 rounded-md items-center mt-10  w-4/5 self-center"
        }
      >
        <Text className={"text-lg text-white uppercase"}>AXIOS Data</Text>
      </TouchableOpacity>

      <FlatList data={users} renderItem={__renderItem} />
    </View>
  );
}
