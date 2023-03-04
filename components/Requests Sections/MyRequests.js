import React from "react";
import { ScrollView, View } from "react-native";
import MyRequest from "../Requests Wrappers/MyRequest";

const Myrequests = () => {
  return (
    <ScrollView className="flex-grow">
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
    </ScrollView>
  );
};

export default Myrequests;
