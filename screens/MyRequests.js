import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import Myrequests from "../components/Requests Sections/Myrequests";

const MyRequests = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full p-2">
      <Myrequests />
      <Footer />
    </SafeAreaView>
  );
};

export default MyRequests;
