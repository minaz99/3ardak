import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Category from "../components/Categories sections/Category";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoriesRequests } from "../API calls/Requests/CategoriesRequestsSlice";
import CreateRequest from "../components/Requests Sections/CreateRequest";
const Categories = () => {
  const navigation = useNavigation();
  const [clickedCategory, setClickedCategory] = useState(false);
  const dispatch = useDispatch();
  const { token, id } = useSelector((store) => store.login);
  const { isSuccess, categoriesRequests } = useSelector(
    (store) => store.categoryRequests
  );
  const [catsReqs, setCatReqs] = useState([]);
  const [makeRequest, setMakeRequest] = useState(false);
  const [request, setRequestType] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    //alert(categoryRequests.length);
    dispatch(getCategoriesRequests(token));
  }, [clickedCategory, makeRequest]);

  return isSuccess === true ? (
    <SafeAreaView className="h-full   bg-white">
      <View className="flex-grow ">
        {makeRequest ? (
          <View className="p-4 self-center absolute  z-10 ">
            <CreateRequest
              token={token}
              id={id}
              category={request}
              setMakeRequest={setMakeRequest}
            />
          </View>
        ) : (
          <View></View>
        )}
        <ScrollView horizontal={false} className="z-0 flex-grow">
          {categoriesRequests.map((cat) => {
            return (
              <Category
                setClickedCategory={setClickedCategory}
                clickedCategory={clickedCategory}
                categoryName={cat.category}
                requestsCount={cat.requestsCount}
                categoriesRequests={cat.requests}
                categoryDescription={cat.description}
                setMakeRequest={setMakeRequest}
                setRequestType={setRequestType}
              />
            );
          })}
        </ScrollView>
      </View>
      <View className="p-2">
        <Footer isActive="categories" />
      </View>
    </SafeAreaView>
  ) : (
    <Text>No categories to load</Text>
  );
};

export default Categories;
