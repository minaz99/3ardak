import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import Myrequests from "../components/Requests Sections/Myrequests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyRequests } from "../API calls/Requests/MyRequestsSlice";

const MyRequests = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const dispatch = useDispatch();
  const { isSuccess, requests, requestsCount } = useSelector(
    (store) => store.myRequests
  );
  const { token, id } = useSelector((store) => store.login);
  useEffect(() => {
    dispatch(getMyRequests({ token, id }));
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <Myrequests requests={requests} requestsCount={requestsCount} />
      <View className="p-2">
        <Footer isActive="myRequests" />
      </View>
    </SafeAreaView>
  );
};

export default MyRequests;
