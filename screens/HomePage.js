import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AllRequests from "../components/Requests Sections/AllRequests";
import MyRequests from "../components/Requests Sections/Myrequests";
import Footer from "../components/Footer";
function HomePage() {
  const [currentView, setCurrentView] = useState("All Requests");
  const [fontsLoaded] = useFonts({
    Ultra: require("../assets/fonts/AbrilFatface-Regular.ttf"),
    Ultra2: require("../assets/fonts/LilitaOne-Regular.ttf"),
  });
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full p-2  bg-white">
      <View className="flex-col h-full">
        <ScrollView
          horizontal={false}
          className="flex-grow p-2 divide-y-2 divide-red-300 "
        >
          {currentView === "All Requests" ? <AllRequests /> : <MyRequests />}
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
