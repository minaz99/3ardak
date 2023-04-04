import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Categories sections/Category";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoriesRequests } from "../API calls/Requests/CategoriesRequestsSlice";
const Categories = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.login);
  const { isSuccess, categoriesRequests } = useSelector(
    (store) => store.categoryRequests
  );
  const [catsReqs, setCatReqs] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    //alert(categoryRequests.length);
    dispatch(getCategoriesRequests(token));
  }, [categoriesRequests]);

  return isSuccess === true ? (
    <SafeAreaView className="h-full bg-white">
      <ScrollView horizontal={false} className="flex-grow">
        {categoriesRequests.map((cat) => {
          return (
            <Category
              categoryName={cat.category}
              requestsCount={cat.requestsCount}
              categoryDescription="Need to write this out yet!"
            />
          );
        })}
      </ScrollView>
      <View className="p-2">
        <Footer />
      </View>
    </SafeAreaView>
  ) : (
    <Text>No categories to load</Text>
  );
};

export default Categories;
