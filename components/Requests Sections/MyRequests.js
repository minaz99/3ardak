import React from "react";
import { View } from "react-native";
import MyRequest from "../Requests Wrappers/MyRequest";

const MyRequests = () => {
  return (
    <View>
      <MyRequest
        category="Home appliances"
        status="Finished"
        request="Need someone to fix my fridge, fridge model is F45GHK Casio"
      />
      <MyRequest
        category="Home appliances"
        status="Pending"
        request="Need someone to fix my fridge, fridge model is F45GHK Casio"
      />
      <MyRequest
        category="Home appliances"
        status="Expired"
        request="Need someone to fix my fridge, fridge model is F45GHK Casio"
      />
    </View>
  );
};

export default MyRequests;
