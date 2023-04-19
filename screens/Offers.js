import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import OffersRecieved from "../components/Offers Sections/OffersRecieved";
import OffersSent from "../components/Offers Sections/OffersSent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyOffers } from "../API calls/Offers/MyOffersSlice";

const Offers = () => {
  const navigation = useNavigation();
  /*const [activeView, setActiveView] = useState("offersReceived");
  const offerRecievedColor =
    activeView === "offersReceived" ? "#0284c7" : "#9ca3af";
  const offerSentColor = activeView === "offersSent" ? "#0284c7" : "#9ca3af";*/
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  const dispatch = useDispatch();
  const { myOffers } = useSelector((store) => store.myOffers);
  const { token, id } = useSelector((store) => store.login);
  useEffect(() => {
    dispatch(getMyOffers({ token, id }));
  }, []);
  return (
    <View>
      <SafeAreaView className="h-full bg-white">
        <View className="mx-auto pt-2 space-x-4 flex-row">
          <Text className="text-gray-400  text-xl">My offers</Text>
        </View>
        <OffersSent myOffers={myOffers} />
        <View className="p-2">
          <Footer isActive="offers" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Offers;
