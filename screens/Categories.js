import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Categories sections/Category";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import NewCategoryDesign from "../components/Categories sections/NewCategoryDesign";
const Categories = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView horizontal={false} className="flex-grow">
        <Category
          categoryName="Home"
          requestsCount="17"
          categoryDescription="Fixing and maintaining services for home electronics"
        />
        <Category
          categoryName="House design"
          requestsCount="12"
          categoryDescription="Services for in house fixing"
        />
        <Category
          categoryName="Construction"
          requestsCount="3"
          categoryDescription="Services required during buildings construction and labor work"
        />
        <Category
          categoryName="Game and Entertainment"
          requestsCount="1"
          categoryDescription="Fixing, set up and installing games for consoles"
        />
        <Category
          categoryName="Winch services"
          requestsCount="0"
          categoryDescription="Winch services for carrying cars that need maintainance"
        />
        <Category
          categoryName="Other"
          requestsCount="23"
          categoryDescription="Other categories"
        />
      </ScrollView>
      <View className="p-2">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
