import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import Myrequests from "../components/Requests Sections/Myrequests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyRequests } from "../API calls/Requests/MyRequestsSlice";
import { useState } from "react";
import OffersPerRequest from "../components/Offers Sections/OffersPerRequest";

const MyRequests = () => {
  const navigation = useNavigation();
  const [showOffers, setShowOffers] = useState(false);
  const [reqID, setReqID] = useState(-1);
  //const [reqStatus,setReqStatus] = useState("");

  const offersPerRequestPressed = (id, status) => {
    setReqID(id);
    if (status === "PENDING") setShowOffers(true);
    //setReqStatus(status);
  };

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
      <View className="z-10 flex-grow ">
        <Myrequests
          requests={requests}
          offersPerRequestPressed={offersPerRequestPressed}
          requestsCount={requestsCount}
        />

        {showOffers ? (
          <View className="z-10 p-2 absolute left-0 right-0 h-full  ">
            <OffersPerRequest
              id={id}
              token={token}
              reqID={reqID}
              setShowOffers={setShowOffers}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View className="p-2">
        <Footer isActive="myRequests" />
      </View>
    </SafeAreaView>
  );
};

export default MyRequests;
