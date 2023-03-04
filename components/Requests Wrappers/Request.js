import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {
  UserCircleIcon,
  InboxStackIcon,
  TagIcon,
  PhoneIcon,
} from "react-native-heroicons/solid";

const Request = (props) => {
  return (
    <TouchableOpacity className="my-2 rounded-3xl ">
      <ImageBackground
        source={require("../../src/5317656.jpg")}
        resizeMode="cover"
        borderRadius={15}
        className="p-2 space-y-2"
      >
        <View className="flex-row space-x-2 items-center ">
          <UserCircleIcon className="w-16 h-16 " color={"black"} />
          <View className=""></View>
          <Text className="text-black  ">{props.name}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <TagIcon className="w-16 h-16" color={"black"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-black text-sm ">{props.category}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <PhoneIcon className="w-16 h-16" color={"black"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-black text-sm ">{props.phonenumber}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <InboxStackIcon className="w-16 h-16" color={"black"} />
          <View className="border-r-2 border-white"></View>
          <Text className="text-black text-sm flex-shrink overflow-y-scroll">
            {props.request}
          </Text>
        </View>
        <View className="">
          <TouchableOpacity className="p-2  bg-black rounded-lg text-sm ">
            <Text className="font-bold w-full text-center text-white">
              Make offer
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Request;
