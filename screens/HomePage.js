import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomePage() {
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <SafeAreaView className="h-full p-2  bg-blue-200">
      <View className="flex-col h-full">
        <View className="flex-grow"></View>
        <View className="rounded-lg  bg-white   p-2 space-x-4 flex-row">
          <TouchableOpacity className="mx-auto">
            <Text
              className="text-xl   text-blue-200 "
              style={{ fontFamily: "Ultra" }}
            >
              Requests
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mx-auto">
            <Text
              className="text-xl   border-white "
              style={{ fontFamily: "Ultra" }}
            >
              Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mx-auto">
            <Text className="text-xl " style={{ fontFamily: "Ultra" }}>
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
