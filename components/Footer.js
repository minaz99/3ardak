import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArchiveBoxIcon,
  InboxIcon,
  InboxStackIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View className=" bg-white rounded-full   p-2 space-x-4 flex-row">
      <TouchableOpacity
        onPress={() => navigation.navigate("Categories")}
        className="mx-auto items-center flex-col"
      >
        <InboxStackIcon className="h-16 w-16" fill={"#0284c7"} />
        <Text
          className="text-sm  text-sky-600 "
          style={{ fontFamily: "Ultra" }}
        >
          Categories
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Offers")}
        className="mx-auto items-center flex-col"
      >
        <InboxIcon className="h-16 w-16" fill={"#94a3b8"} />
        <Text
          className="text-sm text-gray-400   border-white "
          style={{ fontFamily: "Ultra" }}
        >
          Offers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mx-auto flex-col  items-center">
        <UserIcon className="h-16 w-16" fill={"#94a3b8"} />

        <Text
          className="text-sm text-gray-400 "
          style={{ fontFamily: "Ultra" }}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyRequests")}
        className="mx-auto flex-col  items-center"
      >
        <ArchiveBoxIcon className="h-16 w-16" fill={"#94a3b8"} />

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
