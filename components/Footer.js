import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArchiveBoxIcon,
  InboxIcon,
  InboxStackIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";

const Footer = (props) => {
  const navigation = useNavigation();
  const categoriesColor =
    props.isActive === "categories" ? "#0284c7" : "#94a3b8";
  const offersColor = props.isActive === "offers" ? "#0284c7" : "#94a3b8";
  const accountColor = props.isActive === "account" ? "#0284c7" : "#94a3b8";
  const myRequestsColor =
    props.isActive === "myRequests" ? "#0284c7" : "#94a3b8";
  const categoriesOnPress = () => {
    if (props.isActive !== "categories" || props.requests === true) {
      navigation.navigate("Categories");
    }
  };
  const offersOnPress = () => {
    if (props.isActive !== "offers") {
      navigation.navigate("Offers");
    }
  };
  const accountOnPress = () => {
    if (props.isActive !== "account") {
      navigation.navigate("Account");
    }
  };
  const myRequestsOnPress = () => {
    if (props.isActive !== "myRequests") {
      navigation.navigate("MyRequests");
    }
    //    setIsActive("myRequests");
  };
  return (
    <View className=" bg-white rounded-full   p-2 space-x-4 flex-row">
      <TouchableOpacity
        onPress={() => categoriesOnPress()}
        className="mx-auto items-center flex-col"
      >
        <InboxStackIcon className="h-16 w-16" fill={categoriesColor} />
        <Text
          className="text-sm  text-gray-400 "
          style={{ fontFamily: "Ultra" }}
        >
          Categories
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => offersOnPress()}
        className="mx-auto items-center flex-col"
      >
        <InboxIcon className="h-16 w-16" fill={offersColor} />
        <Text
          className="text-sm text-gray-400   border-white "
          style={{ fontFamily: "Ultra" }}
        >
          Offers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => accountOnPress()}
        className="mx-auto flex-col  items-center"
      >
        <UserIcon className="h-16 w-16" fill={accountColor} />

        <Text
          className="text-sm text-gray-400 "
          style={{ fontFamily: "Ultra" }}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => myRequestsOnPress()}
        className="mx-auto flex-col  items-center"
      >
        <ArchiveBoxIcon className="h-16 w-16" fill={myRequestsColor} />

        <Text
          className="text-sm text-gray-400 "
          style={{ fontFamily: "Ultra" }}
        >
          My Requests
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
