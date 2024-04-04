import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const onProfileIconPressed = () => {
    navigation.navigate("Profile");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={"person-circle-outline"}
          size={30}
          color={"red"}
          onPress={onProfileIconPressed}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
