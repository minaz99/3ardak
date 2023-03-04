import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Categories sections/Category";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
const Categories = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView horizontal={false} className="flex-grow">
        <Category categoryName="Home" requestsCount="8" />
        <Category categoryName="House design" requestsCount="12" />
        <Category categoryName="Construction" requestsCount="3" />
        <Category categoryName="Game and Entertainment" requestsCount="1" />
        <Category categoryName="Winch services" requestsCount="0" />
        <Category categoryName="Other" requestsCount="23" />
      </ScrollView>
      <View className="p-2">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
