import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  InboxIcon,
  InboxStackIcon,
} from "react-native-heroicons/solid";
import AllRequests from "../components/Requests Sections/AllRequests";
import MyRequests from "../components/Requests Sections/MyRequests";
function HomePage() {
  const [currentView, setCurrentView] = useState("All Requests");
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <SafeAreaView className="h-full p-2  bg-white">
      <View className="flex-col h-full">
        <View className="flex-row bg-white p-4 rounded-lg  ">
          <TouchableOpacity
            onPress={() => setCurrentView("All Requests")}
            className="mx-auto"
          >
            {currentView === "All Requests" ? (
              <Text className="text-blue-200 text-xl font-bold">
                All Requests
              </Text>
            ) : (
              <Text className="text-black text-xl font-bold">All Requests</Text>
            )}
          </TouchableOpacity>
          <View className="border-l-2 border-blue-200"></View>
          <TouchableOpacity
            onPress={() => setCurrentView("My Requests")}
            className="mx-auto"
          >
            {currentView === "My Requests" ? (
              <Text className="text-blue-200 text-xl font-bold">
                My Requests
              </Text>
            ) : (
              <Text className="text-black text-xl font-bold">My Requests</Text>
            )}
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={false}
          className="flex-grow p-2 divide-y-2 divide-red-300 "
        >
          {currentView === "All Requests" ? <AllRequests /> : <MyRequests />}
        </ScrollView>
        <View className=" bg-white    p-2 space-x-4 flex-row">
          <TouchableOpacity className="mx-auto items-center flex-col">
            <InboxStackIcon className="h-16 w-16" fill={"#bfdbfe"} />
            <Text
              className="text-xl   text-blue-200 "
              style={{ fontFamily: "Ultra" }}
            >
              Requests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="mx-auto items-center flex-col">
            <InboxIcon className="h-16 w-16" fill={"#94a3b8"} />
            <Text
              className="text-xl text-gray-400   border-white "
              style={{ fontFamily: "Ultra" }}
            >
              Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mx-auto flex-col  items-center">
            <UserIcon className="h-16 w-16" fill={"#94a3b8"} />

            <Text
              className="text-lg text-gray-400 "
              style={{ fontFamily: "Ultra" }}
            >
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
