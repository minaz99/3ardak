import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";

const Offers = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <View>
      <SafeAreaView className="h-full bg-white">
        <ScrollView horizontal={false} className="flex-grow"></ScrollView>
        <View className="p-2">
          <Footer isActive="offers" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Offers;
